import { Dispatch, SetStateAction } from "react";
import IWallet from "./wallet";

interface IWalletContext {
  wallet: IWallet;
  setWallet?: Dispatch<SetStateAction<IWallet>>;
}

export default IWalletContext;
