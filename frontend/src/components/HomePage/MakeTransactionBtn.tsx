import React from "react";
import { Link } from "react-router-dom";
import IcMakeTransaction from "./IcMakeTransaction";

function MakeTransactionBtn() {
  return (
    <Link to="/make-transaction" className="w-1/2">
      <div className="flex border-2 rounded-md group hover:bg-emerald-400 hover:text-white hover:cursor-pointer">
        <div className="hidden lg:flex items-center justify-center w-1/2 text-6xl xl:text-7xl text-emerald-400 group-hover:text-white">
          <IcMakeTransaction />
        </div>
        <div className="py-5 pr-6 space-y-2 ml-8 lg:ml-0">
          <div className="text-xl xl:text-2xl font-bold">Make a transaction</div>
          <div className="text-justify text-sm">
            {" "}
            Generate your own unique Ethereum wallet. Receive a public address
            (0x...) and choose a method for access and recovery.{" "}
          </div>
          <div className="flex items-center pt-6 space-x-3">
            <div className="font-medium text-sm md:text-base xl:text-lg">Create a transaction</div>
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

export default MakeTransactionBtn;
