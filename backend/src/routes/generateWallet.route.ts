import express, { Request, Response } from "express";
import { ec } from "elliptic";

const router = express.Router();
const EC = new ec("secp256k1");

router.post("/", (req: Request, res: Response) => {
  const key = EC.genKeyPair();

  return res.status(200).json({
    privateKey: key.getPrivate("hex"),
    publicKey: key.getPublic("hex"),
  });
});

export default router;
