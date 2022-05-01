import { model, Schema } from "mongoose";
import ITransaction from "../types/transaction.type";

export const TransactionSchema = new Schema<ITransaction>({
  from: {
    type: String,
  },
  to: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  signature: String,
});

export default model<ITransaction>("Transaction", TransactionSchema);
