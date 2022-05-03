import React from "react";
import { Link } from "react-router-dom";
import IcTransactionHistory from "./IcTransactionHistory";

function TransactionHistoryBtn() {
  return (
    <Link to="/transaction-history" className="w-1/2">
      <div className="group flex border-2 rounded-md hover:bg-emerald-400 hover:text-white hover:cursor-pointer">
        <div className="w-1/2 text-7xl flex justify-center items-center">
          <IcTransactionHistory />
        </div>
        <div className="space-y-2 py-5 pr-6">
          <div className="text-2xl font-bold">Transaction History</div>
          <div className="text-justify">
            {" "}
            Generate your own unique Ethereum wallet. Receive a public address
            (0x...) and choose a method for access and recovery.{" "}
          </div>
          <div className="flex items-center space-x-3 pt-6">
            <div className="text-lg font-medium">View History</div>
            <div className="text-xl">
              <svg width="1em" height="1em" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="m218.8 130.8l-72 72a3.9 3.9 0 0 1-5.6 0a3.9 3.9 0 0 1 0-5.6l65.1-65.2H40a4 4 0 0 1 0-8h166.3l-65.1-65.2a4 4 0 0 1 5.6-5.6l72 72a3.9 3.9 0 0 1 0 5.6Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TransactionHistoryBtn;
