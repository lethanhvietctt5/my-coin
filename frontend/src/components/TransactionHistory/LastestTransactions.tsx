import React, { useEffect, useState } from "react";
import ITransaction from "types/transaction";

type Props = {
  transactions: ITransaction[];
  selectTransaction: React.Dispatch<React.SetStateAction<number | null>>;
};

const LastestTransactions: React.FC<Props> = ({
  transactions,
  selectTransaction,
}) => {
  const [index, setIndex] = useState(0);
  const [showTxs, setShowTxs] = useState<ITransaction[]>([]);

  useEffect(() => {
    setShowTxs(transactions.slice(index * 8, (index + 1) * 8));
  }, [index, transactions]);

  function changeIndex(idx: number) {
    setIndex(idx);
  }

  return (
    <div className="w-1/2 px-4 pt-4 bg-white divide-y rounded-lg h-max divide-slate-200">
      <div className="pb-3 ">Lastest Transactions</div>
      {showTxs.map((tx, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between py-2 space-x-6"
        >
          <div className="flex space-x-2">
            <div className="p-3 rounded-md bg-slate-400">Tx</div>
            <div className="max-w-[100px] text-sm">
              <div
                className="truncate cursor-pointer hover:text-blue-700 hover:underline underline-offset-1"
                onClick={() => selectTransaction(index * 8 + idx)}
              >
                {tx.hash}
              </div>
              <div>{tx.timestamp}</div>
            </div>
          </div>
          <div className="w-1/3 2xl:w-1/2 text-sm">
            <div className="truncate">
              <span className="text-blue-700">From : </span>
              {tx.from.length > 0 ? tx.from : "MC"}
            </div>
            <div className="truncate">
              <span className="text-blue-700">To : </span>
              {tx.to}
            </div>
          </div>

          <div
            className="w-[100px] text-sm text-blue-500"
            title="Mining Reward"
          >
            {tx.amount} MC
          </div>
        </div>
      ))}
      <div className="flex justify-between py-4 text-white">
        <div
          className={`px-4 py-2 rounded-md bg-[#071e40] cursor-pointer ${
            index <= 0 ? "opacity-30" : ""
          }`}
          onClick={() => {
            if (index > 0) {
              changeIndex(index - 1);
            }
          }}
        >
          Prev
        </div>

        <div
          className={`px-4 py-2 rounded-md bg-[#071e40] cursor-pointer ${
            transactions.length - (index + 1) * 8 <= 0 ? "opacity-30" : ""
          }`}
          onClick={() => {
            if (transactions.length - (index + 1) * 8 > 0) {
              changeIndex(index + 1);
            }
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default LastestTransactions;
