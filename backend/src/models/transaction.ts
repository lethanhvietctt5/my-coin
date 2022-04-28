import crypto from "crypto";
import { ec } from "elliptic";

const EC = new ec("secp256k1");

export default class Transaction {
  public from: string;
  public to: string;
  public amount: number;
  private timestamp: number;
  private signature?: string;

  constructor(from: string, to: string, amount: number) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.timestamp = new Date().getTime();
  }

  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(this.from + this.to + this.amount + this.timestamp)
      .digest("hex");
  }

  signTransaction(signKey: ec.KeyPair) {
    if (signKey.getPublic("hex") !== this.from) {
      throw new Error("You cannot sign transactions for other wallets!");
    }

    const hash = this.calculateHash();
    const sign = signKey.sign(hash, "base64");
    this.signature = sign.toDER("hex");
  }

  isValid() {
    if (this.from === null) return true;

    if (!this.signature || this.signature.length === 0) {
      throw new Error("No signature in this transaction");
    }

    const publicKey = EC.keyFromPublic(this.from, "hex");
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}
