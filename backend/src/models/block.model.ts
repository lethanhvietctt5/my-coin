import crypto from "crypto";
import IBlock from "../types/block.type";
import Transaction from "./transaction.model";

export default class Block implements IBlock {
  public hash: string;
  public prevHash: string;
  public transactions: Transaction[];
  public nonce: number;
  public timestamp: number;

  constructor(
    prevHash: string,
    transactions: Transaction[],
    timestamp: number
  ) {
    this.prevHash = prevHash;
    this.transactions = transactions;
    this.timestamp = timestamp;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(
        this.prevHash +
          JSON.stringify(this.transactions) +
          this.timestamp +
          this.nonce
      )
      .digest("hex");
  }

  mine(difficulty: number) {
    while (!this.hash.startsWith("0".repeat(difficulty))) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}
