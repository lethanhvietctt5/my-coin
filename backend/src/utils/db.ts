import mongoose from "mongoose";
import blockchain from "../blockchain";

const uri =
  "mongodb+srv://lethanhviet:22102000@cluster0.wwi57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export default function connectDB() {
  mongoose.connect(uri).then(async () => {
    console.log("db connected");
    await blockchain.createGenesisBlock();
    await blockchain.getPendingTransactions();
    console.log(blockchain);
  });
}
