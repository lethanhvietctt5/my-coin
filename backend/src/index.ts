import { ec } from "elliptic";
import { genesisPrivateKey } from "./initKeys";
import BlockChain from "./models/blockchain";
import Transaction from "./models/transaction";
import connectDB from "./utils/db";
import BlockModel from "./schemas/block";
import Express, { Request, Response } from "express";

const blockchain = new BlockChain();
const EC = new ec("secp256k1");

const key = EC.keyFromPrivate(genesisPrivateKey);

const tx = new Transaction(key.getPublic("hex"), "wallet1", 200);
tx.signTransaction(key);

blockchain.addTxToChain(tx);

blockchain.minePendingTxs(key.getPublic("hex"));

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/generate", (req: Request, res: Response) => {
  const key = EC.genKeyPair();

  return res.status(200).json({
    privateKey: key.getPrivate("hex"),
    publicKey: key.getPublic("hex"),
  });
});

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:5000`);
});



