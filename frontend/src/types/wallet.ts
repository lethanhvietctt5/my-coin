import IKeyPair from "./keys";

interface IWallet extends IKeyPair {
  balance: number;
}

export default IWallet;
