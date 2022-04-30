import { ec } from "elliptic";
import Express, { Request, Response } from "express";
import connectDB from "./utils/db";
import accessWalletRoute from "./routes/accessWallet.route";

const EC = new ec("secp256k1");

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

connectDB();

app.post("/generate", (req: Request, res: Response) => {
  const key = EC.genKeyPair();

  return res.status(200).json({
    privateKey: key.getPrivate("hex"),
    publicKey: key.getPublic("hex"),
  });
});

app.use("/access-wallet", accessWalletRoute);

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:5000`);
});
