import api from "api";
import DashboardLayout from "components/Layout/DashboardLayout";
import React, { useContext, useEffect, useState } from "react";
import { IPendingTransaction } from "types/transaction";
import socket from "socket";
import WalletContext from "context/WalletContext";

const MiningTransactions = () => {
  const [transactions, setTransactions] = useState<IPendingTransaction[]>([]);
  const walletCtx = useContext(WalletContext);

  useEffect(() => {
    const fetchBlocks = async () => {
      const response = await api.get("/transactions/pending-transactions");
      if (response.status === 200) {
        setTransactions(response.data);
      }
    };

    fetchBlocks();
  }, [walletCtx.wallet]);

  function mining() {
    socket.emit("mining", walletCtx.wallet.publicKey);
  }

  return (
    <DashboardLayout>
      <div className="text-3xl font-medium">Mining</div>
      <div
        className="flex justify-end text-white cursor-pointer"
        onClick={mining}
      >
        <div className="bg-[#071e40] rounded-md px-3 py-3">Start mining</div>
      </div>
      <table className="w-full text-sm mt-4">
        <thead>
          <tr>
            <th className="border-b font-bold bg-white text-center">Index</th>
            <th className="border-b p-4 py-3 font-bold bg-white text-left">
              From
            </th>
            <th className="border-b p-4 pr-8 py-3 font-bold bg-white text-center">
              To
            </th>
            <th className="border-b p-4 pr-8 py-3 font-bold bg-white text-center">
              Value
            </th>
            <th className="border-b p-4 pr-8 py-3 font-bold bg-white text-center">
              Timestamp
            </th>
            <th className="border-b p-4 pr-8 py-3 font-bold bg-white text-center">
              Reward
            </th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          {transactions.map((tx, index) => {
            return (
              <tr key={index}>
                <td className="border-b border-slate-100 text-slate-500 text-center">
                  {index}
                </td>
                <td className="max-w-md border-b border-slate-100 p-4 text-slate-500 truncate">
                  {tx.from}
                </td>
                <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 text-center">
                  {tx.to}
                </td>
                <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 text-center">
                  {tx.amount} MC
                </td>
                <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 text-center">
                  {tx.timestamp}
                </td>
                <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 text-center">
                  {tx.reward} MC
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {transactions.length === 0 ? (
        <div className="bg-white text-center py-10">
          The is no any pending transaction
        </div>
      ) : null}
    </DashboardLayout>
  );
};

export default MiningTransactions;
