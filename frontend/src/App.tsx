import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import HomePage from "components/HomePage";
import CreateWallet from "components/CreateWallet";
import AccessWallet from "components/AccessWallet";
import WalletContext from "context/WalletContext";
import IWallet from "types/wallet";

function App() {
  const [wallet, setWallet] = useState<IWallet>({
    publicKey: "",
    privateKey: "",
    balance: 0,
  });

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      <div className="App">
        <div className="flex justify-center">
          <div className="w-4/5 max-w-screen-lg">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create-wallet" element={<CreateWallet />} />
              <Route path="/access-wallet" element={<AccessWallet />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </WalletContext.Provider>
  );
}

export default App;
