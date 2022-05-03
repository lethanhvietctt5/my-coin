import React, { useEffect, useState } from "react";
import ITransaction from "types/transaction";

type Props = {
  transactions: ITransaction[];
};

const LastestTransactions: React.FC<Props> = ({ transactions }) => {
  const [index, setIndex] = useState(0);
  const [showTxs, setShowTxs] = useState<ITransaction[]>([]);

  useEffect(() => {
    setShowTxs(transactions.slice(index * 8, (index + 1) * 8));
  }, [index, transactions]);

  function changeIndex(idx: number) {
    setIndex(idx);
  }

  return (
    <div className="w-1/2 h-max bg-white rounded-lg px-4 pt-4 divide-y divide-slate-200">
      <div className=" pb-3">Lastest Transactions</div>
      {showTxs.map((tx, index) => (
        <div key={index} className="flex justify-between items-center py-2">
          <div className="flex space-x-2">
            <div className="p-3 bg-slate-400 rounded-md">Tx</div>
            <div className="max-w-[100px] text-sm">
              <div className="hover:text-blue-700 hover:underline cursor-pointer underline-offset-1 truncate">
                {tx.hash}
              </div>
              <div>{tx.timestamp}</div>
            </div>
          </div>
          <div className="w-1/2 text-sm">
            <div className="truncate">
              <span className="text-blue-700">From : </span>
              {tx.from.length > 0 ? tx.from : "MC"}
            </div>
            <div className="truncate">
              <span className="text-blue-700">To : </span>
              {tx.to}
            </div>
          </div>

          <div className="w-[100px] text-sm" title="Mining Reward">
            {tx.amount} MC
          </div>
        </div>
      ))}
      <div className="flex justify-between text-white py-4">
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
