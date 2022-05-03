interface ITransaction {
  from: string;
  to: string;
  amount: number;
  timestamp: number;
}

export interface IPendingTransaction extends ITransaction {
  reward: number;
}

export default ITransaction;
