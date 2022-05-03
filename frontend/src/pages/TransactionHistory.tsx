import api from "api";
import DashboardLayout from "components/Layout/DashboardLayout";
import BlockDetail from "components/TransactionHistory/BlockDetail";
import LastestBlocks from "components/TransactionHistory/LastestBlocks";
import LastestTransactions from "components/TransactionHistory/LastestTransactions";
import TransactionDetail from "components/TransactionHistory/TransactionDetail";
import React, { useEffect, useState } from "react";
import IBlock from "types/block";
import ITransaction from "types/transaction";

const TransactionHistory = () => {
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(
    null
  );

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
      {selectedBlock == null && selectedTransaction == null ? (
        <div>
          {" "}
          <div className="mb-10 text-3xl font-medium">History</div>
          <div className="flex w-full space-x-3">
            <LastestBlocks blocks={blocks} selectBlock={setSelectedBlock} />
            <LastestTransactions
              transactions={transactions}
              selectTransaction={setSelectedTransaction}
            />
          </div>
        </div>
      ) : null}
      {selectedBlock != null ? (
        <BlockDetail
          block={blocks[selectedBlock]}
          index={selectedBlock}
          selectBlock={setSelectedBlock}
        />
      ) : null}
      {selectedTransaction != null ? (
        <TransactionDetail
          transaction={transactions[selectedTransaction]}
          selectTransaction={setSelectedTransaction}
        />
      ) : null}
    </DashboardLayout>
  );
};

export default TransactionHistory;
