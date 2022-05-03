import api from "api";
import DashboardLayout from "components/Layout/DashboardLayout";
import LastestBlocks from "components/TransactionHistory/LastestBlocks";
import LastestTransactions from "components/TransactionHistory/LastestTransactions";
import React, { useEffect, useState } from "react";
import IBlock from "types/block";
import ITransaction from "types/transaction";

const TransactionHistory = () => {
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      const res = await api.get("/blocks");
      if (res.status === 200) {
        setBlocks(res.data);
      }
    };

    const fetchTxs = async () => {
      const res = await api.get("/transactions");
      if (res.status === 200) {
        setTransactions(res.data);
      }
    };

    fetchBlocks();
    fetchTxs();
  }, []);

  return (
    <DashboardLayout>
      <div className="text-3xl font-medium mb-10">History</div>
      <div className="w-full flex space-x-3">
        <LastestBlocks blocks={blocks} />
        <LastestTransactions transactions={transactions} />
      </div>
    </DashboardLayout>
  );
};

export default TransactionHistory;
