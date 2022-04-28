import { ec } from "elliptic";
import { genesisPrivateKey } from "./initKeys";
import BlockChain from "./models/blockchain";
import Transaction from "./models/transaction";
import connectDB from "./utils/db";
import BlockModel from "./schemas/block";

const blockchain = new BlockChain();
const EC = new ec("secp256k1");

const key = EC.keyFromPrivate(genesisPrivateKey);

const tx = new Transaction(key.getPublic("hex"), "wallet1", 200);
tx.signTransaction(key);

blockchain.addTxToChain(tx);

blockchain.minePendingTxs(key.getPublic("hex"));

connectDB();

const bl = new BlockModel({
  hash: blockchain.chain[0].hash,
  prevHash: blockchain.chain[0].prevHash,
  transactions: blockchain.chain[0].transactions,
  timestamp: blockchain.chain[0].timestamp,
  nonce: blockchain.chain[0].nonce,
});

bl.save();
