interface ITransaction {
  from: string;
  to: string;
  amount: number;
  timestamp: number;
  signature?: string;
  hash?: string;
}

export interface IPendingTransaction extends ITransaction {
  reward: number;
}

export default ITransaction;
