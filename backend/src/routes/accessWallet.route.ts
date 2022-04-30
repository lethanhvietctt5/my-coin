import express, { Request, Response } from "express";
import { ec } from "elliptic";
import blockchain from "../blockchain";

const router = express.Router();
const EC = new ec("secp256k1");

router.post("/", (req: Request, res: Response) => {
  const { privateKey } = req.body;
  console.log(privateKey);

  try {
    const key = EC.keyFromPrivate(privateKey);
    const publicKey = key.getPublic("hex");

    const balance = blockchain.getBalance(publicKey);

    return res.status(200).json({
      publicKey,
      balance,
      privateKey,
    });
  } catch (e) {
    return res.status(400).json({
      error: "Invalid private key",
    });
  }
});

export default router;
