import { model, Schema } from "mongoose";
import IBlock from "../types/block.type";
import { TransactionSchema } from "./transaction.schema";

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
