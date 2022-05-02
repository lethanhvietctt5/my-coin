import ITransaction from "./transaction";

interface IBlock {
  prevHash: string;
  timestamp: number;
  nonce: number;
  hash: string;
  transactions: ITransaction[];
}

export default IBlock;
