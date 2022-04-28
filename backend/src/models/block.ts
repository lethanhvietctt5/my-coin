import crypto from "crypto";
import Transaction from "./transaction";

export default class Block {
  public hash: string;
  public prevHash: string;
  public transactions: Transaction[];
  private nonce: number;
  private timestamp: number;

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
