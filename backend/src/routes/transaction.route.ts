import express, { Request, Response } from "express";
import { ec } from "elliptic";
import Transaction from "../models/transaction.model";
import blockchain from "../blockchain";

const router = express.Router();
const EC = new ec("secp256k1");

router.post("/send", (req: Request, res: Response) => {
  const { privateKey, address, amount } = req.body;

  if (
    typeof privateKey === "string" &&
    typeof address === "string" &&
    parseInt(amount) > 0
  ) {
    const key = EC.keyFromPrivate(privateKey);
    const publicKey = key.getPublic("hex");
    const transaction = new Transaction(publicKey, address, amount);

    transaction.signTransaction(key);

    blockchain.addTxToPending(transaction);

    return res.status(200).json(transaction);
  }

  return res.status(400).json({ error: "Error when make transaction" });
});

router.get("/pending-transactions", (req: Request, res: Response) => {
  let resPendingTxs = blockchain.pendingTransactions.map((tx) => ({
    ...tx,
    reward: blockchain.reward,
  }));
  return res.json(resPendingTxs);
});

export default router;
