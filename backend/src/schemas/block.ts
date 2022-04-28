import { model, Schema } from "mongoose";
import IBlock from "../types/block";
import ITransaction from "../types/transaction";

const TransactionSchema = new Schema<ITransaction>({
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

const BlockSchema = new Schema<IBlock>({
  hash: {
    type: String,
    required: true,
  },
  prevHash: {
    type: String,
    required: true,
  },
  transactions: [TransactionSchema],
  timestamp: {
    type: Number,
    required: true,
  },
  nonce: {
    type: Number,
    required: true,
  },
});

export default model<IBlock>("Block", BlockSchema);
