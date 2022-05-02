import { ec } from "elliptic";
import express from "express";
import * as http from "http";
import * as Socket from "socket.io";

// Router
import accessWalletRoute from "./routes/accessWallet.route";
import generateWalletRoute from "./routes/generateWallet.route";
import transactionRoute from "./routes/transaction.route";
import blockRoute from "./routes/block.route";

// DB and blockchain
import connectDB from "./utils/db";
import blockchain from "./blockchain";

const EC = new ec("secp256k1");

const app = express();
const server = http.createServer(app);
const io = new Socket.Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connectDB();
io.on("connection", (socket) => {
  socket.on("mining", async (minerAddress: string) => {
    if (blockchain.pendingTransactions.length > 0) {
      const newBlock = await blockchain.minePendingTxs(minerAddress);
      for (let tx of newBlock.transactions) {
        io.emit("receive", tx);
      }
    }
  });
});

app.use("/generate", generateWalletRoute);
app.use("/access-wallet", accessWalletRoute);
app.use("/transactions", transactionRoute);
app.use("/blocks", blockRoute);

server.listen(5000, () => {
  console.log(`Server is running at http://localhost:5000`);
});
