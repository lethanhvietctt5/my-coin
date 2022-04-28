import ITransaction from "./transaction";

export default interface IBlock {
  hash: string;
  prevHash: string;
  transactions: ITransaction[];
  nonce: number;
  timestamp: number;
}
