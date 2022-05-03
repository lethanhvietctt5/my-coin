import api from "api";
import DashboardLayout from "components/Layout/DashboardLayout";
import React, { useContext, useEffect, useState } from "react";
import { IPendingTransaction } from "types/transaction";
import socket from "socket";
import WalletContext from "context/WalletContext";
import { ToastContainer, toast } from "react-toastify";

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
    if (transactions.length === 0) {
      toast.error("There is no transactions to mine", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }
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
      <table className="w-full mt-4 text-sm">
        <thead>
          <tr>
            <th className="font-bold text-center bg-white border-b">Index</th>
            <th className="p-4 py-3 font-bold text-left bg-white border-b">
              From
            </th>
            <th className="p-4 py-3 pr-8 font-bold text-center bg-white border-b">
              To
            </th>
            <th className="p-4 py-3 pr-8 font-bold text-center bg-white border-b">
              Value
            </th>
            <th className="p-4 py-3 pr-8 font-bold text-center bg-white border-b">
              Timestamp
            </th>
            <th className="p-4 py-3 pr-8 font-bold text-center bg-white border-b">
              Reward
            </th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          {transactions.map((tx, index) => {
            return (
              <tr key={index}>
                <td className="text-center border-b border-slate-100 text-slate-500">
                  {index}
                </td>
                <td className="max-w-md p-4 truncate border-b border-slate-100 text-slate-500">
                  {tx.from}
                </td>
                <td className="p-4 pr-8 text-center border-b border-slate-100 text-slate-500">
                  {tx.to}
                </td>
                <td className="p-4 pr-8 text-center text-blue-500 border-b border-slate-100">
                  {tx.amount} MC
                </td>
                <td className="p-4 pr-8 text-center border-b border-slate-100 text-slate-500">
                  {tx.timestamp}
                </td>
                <td className="p-4 pr-8 text-center text-blue-500 border-b border-slate-100">
                  {tx.reward} MC
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {transactions.length === 0 ? (
        <div className="py-10 text-center bg-white">
          The is no any pending transaction
        </div>
      ) : null}
      <ToastContainer />
    </DashboardLayout>
  );
};

export default MiningTransactions;
