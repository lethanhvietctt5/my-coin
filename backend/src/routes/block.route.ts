import express, { Request, Response } from "express";
import { ec } from "elliptic";
import Transaction from "../models/transaction.model";
import blockchain from "../blockchain";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json(blockchain.chain);
});

router.get("/:index", (req: Request, res: Response) => {
  const { index } = req.params;

  try {
    const idx = parseInt(index);
    const block = blockchain.chain[idx];
    return res.status(200).json(block);
  } catch (e) {
    return res.status(400).json({ error: "Invalid index" });
  }
});

export default router;
