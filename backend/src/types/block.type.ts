import ITransaction from "./transaction.type";

export default interface IBlock {
  hash: string;
  prevHash: string;
  transactions: ITransaction[];
  nonce: number;
  timestamp: number;
}
