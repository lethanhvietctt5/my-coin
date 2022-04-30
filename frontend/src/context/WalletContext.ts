import React from "react";
import IWalletContext from "types/walletContext";

const WalletContext = React.createContext<IWalletContext>({
  wallet: {
    publicKey: "",
    privateKey: "",
    balance: 0,
  },
});

export default WalletContext;
