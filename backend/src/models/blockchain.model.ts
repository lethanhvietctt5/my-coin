import Block from "./block.model";
import Transaction from "./transaction.model";
import { genesisPublicKey } from "../initKeys";
import BlockModel from "../schemas/block.schema";
import TransactionModel from "../schemas/transaction.schema";

export default class BlockChain {
  public chain: Block[];
  public pendingTransactions: Transaction[];
  private difficulty: number;
  private reward: number;

  constructor() {
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.reward = 10;
    this.chain = [];
  }

  async createGenesisBlock() {
    const initTransaction = new Transaction("", genesisPublicKey, 1_000_000);
    const genesisBlock = new Block(
      "0",
      [initTransaction],
      new Date().getTime()
    );

    genesisBlock.mine(this.difficulty);

    const dbBlocks = await BlockModel.find({});

    if (dbBlocks.length === 0) {
      await BlockModel.create(genesisBlock);
    }

    await this.updateChain();
  }

  async getPendingTransactions() {
    if (this.pendingTransactions.length === 0) {
      const pendingTxs = await TransactionModel.find({});

      for (let tx of pendingTxs) {
        let pTx = new Transaction(tx.from, tx.to, tx.amount);
        pTx.timestamp = tx.timestamp;
        this.pendingTransactions.push(pTx);
      }
    }
  }

  async updateChain() {
    this.chain = [];
    const dbBlocks = await BlockModel.find({});
    let blocks: Block[] = [];
    for (let block of dbBlocks) {
      let newBlock: Block;
      if (block.transactions.length === 0) {
        newBlock = new Block(block.prevHash, [], block.timestamp);
        newBlock.hash = block.hash;
      } else {
        let Txs = [];
        for (let tx of block.transactions) {
          let newTx = new Transaction(tx.from, tx.to, tx.amount);
          newTx.timestamp = tx.timestamp;
          Txs.push(newTx);
        }
        newBlock = new Block(block.prevHash, Txs, block.timestamp);
        newBlock.hash = block.hash;
      }
      blocks.push(newBlock);
    }

    this.chain = blocks;
  }

  getBalance(address: string) {
    let balance = 0;
    for (let block of this.chain) {
      for (let tx of block.transactions) {
        if (tx.from === address) {
          balance -= tx.amount;
        } else if (tx.to === address) {
          balance += tx.amount;
        }
      }
    }

    return balance;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  async addTxToPending(tx: Transaction) {
    if (tx.amount <= 0) {
      throw new Error("Can not send negative amount of coins");
    }

    if (!tx.from || !tx.to) {
      throw new Error("Transaction must have from and to");
    }

    if (!tx.isValid()) throw new Error("This is invalid transaction");

    const balance = this.getBalance(tx.from);

    if (balance < tx.amount) {
      throw new Error("Not enough coins");
    }

    const pendingAmount = this.pendingTransactions
      .filter((trans) => trans.from === tx.from)
      .map((trans) => trans.amount)
      .reduce((prev: number, current: number) => prev + current, 0);

    if (balance < tx.amount + pendingAmount) {
      throw new Error("Not enough coins");
    }

    await TransactionModel.create(tx);

    this.pendingTransactions.push(tx);
  }

  async minePendingTxs(minnerAddress: string) {
    for (let tx of this.pendingTransactions) {
      await TransactionModel.deleteOne({
        from: tx.from,
        to: tx.to,
        amount: tx.amount,
        timestamp: tx.timestamp,
      });
    }

    const txForReward = new Transaction("", minnerAddress, this.reward);
    this.pendingTransactions.push(txForReward);

    const newBlock = new Block(
      this.getLatestBlock().hash,
      this.pendingTransactions,
      new Date().getTime()
    );

    newBlock.mine(this.difficulty);
    await BlockModel.create(newBlock);
    await this.updateChain();
    this.pendingTransactions = [];
    return newBlock;
  }
}
