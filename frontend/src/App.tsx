import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WalletContext from "context/WalletContext";
import IWallet from "types/wallet";
import HomePage from "pages/HomePage";
import CreateWallet from "pages/CreateWallet";
import AccessWallet from "pages/AccessWallet";

function App() {
  const [wallet, setWallet] = useState<IWallet>({
    publicKey: "",
    privateKey: "",
    balance: 0,
  });

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-wallet" element={<CreateWallet />} />
          <Route path="/access-wallet" element={<AccessWallet />} />
        </Routes>
      </div>
    </WalletContext.Provider>
  );
}

export default App;
