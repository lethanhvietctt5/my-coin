import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import WalletContext from "context/WalletContext";
import IWallet from "types/wallet";
import HomePage from "pages/HomePage";
import CreateWallet from "pages/CreateWallet";
import AccessWallet from "pages/AccessWallet";
import WalletInfo from "pages/WalletInfo";
import MakeTransaction from "pages/MakeTransaction";
import socket from "socket";
import MiningTransactions from "pages/MiningTransactions";
import ITransaction from "types/transaction";

function App() {
  const [wallet, setWallet] = useState<IWallet>({
    publicKey: "",
    privateKey: "",
    balance: 0,
  });

  socket.on("receive", (tx: ITransaction) => {
    console.log(tx);
    if (wallet.publicKey === tx.from) {
      setWallet({
        ...wallet,
        balance: wallet.balance - tx.amount,
      });
    }

    if (wallet.publicKey === tx.to) {
      setWallet({
        ...wallet,
        balance: wallet.balance + tx.amount,
      });
    }
  });

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-wallet" element={<CreateWallet />} />
          <Route path="/access-wallet" element={<AccessWallet />} />
          <Route path="/wallet" element={<WalletInfo />} />
          <Route path="/make-transaction" element={<MakeTransaction />} />
          <Route path="/mining-transactions" element={<MiningTransactions />} />
        </Routes>
      </div>
    </WalletContext.Provider>
  );
}

export default App;
