export default interface ITransaction {
  from: string;
  to: string;
  amount: number;
  timestamp: number;
  signature?: string;
}
