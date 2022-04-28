import Block from "./block";
import Transaction from "./transaction";
import { genesisPublicKey } from "../initKeys";

class BlockChain {
  public chain: Block[];
  public pendingTransactions: Transaction[];
  private difficulty: number;
  private reward: number;

  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
    this.difficulty = 2;
    this.reward = 100;
  }

  createGenesisBlock() {
    const initTransaction = new Transaction("", genesisPublicKey, 1_000_000);
    return new Block("0", [initTransaction], new Date().getTime());
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

  addTxToChain(tx: Transaction) {
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
      .reduce((prev: number, current: number) => prev + current);

    if (balance < tx.amount + pendingAmount) {
      throw new Error("Not enough coins");
    }

    this.pendingTransactions.push(tx);
  }

  minePendingTxs(minnerAddress: string) {
    const txForReward = new Transaction("", minnerAddress, this.reward);

    this.pendingTransactions.push(txForReward);

    const newBlock = new Block(
      this.getLatestBlock().hash,
      this.pendingTransactions,
      new Date().getTime()
    );

    newBlock.mine(this.difficulty);

    this.chain.push(newBlock);
    this.pendingTransactions = [];
  }
}
