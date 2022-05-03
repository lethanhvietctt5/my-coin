import WalletContext from "context/WalletContext";
import React, { useContext } from "react";
import icMoney from "assets/svgs/ic_money.svg";
import DashboardLayout from "components/Layout/DashboardLayout";
import { Link } from "react-router-dom";

function WalletInfo() {
  const walletCtx = useContext(WalletContext);

  return (
    <DashboardLayout>
      <div className="text-3xl font-medium">Wallet Infomation</div>
      <div className="w-full bg-white rounded-lg text-sm mt-10 py-5 px-5">
        <div className="text text-lg font-bold">My Personal Wallet</div>
        <div className="flex mt-4">
          <div className="font-semibold mr-2">Wallet Address : </div>
          <div className="truncate">{walletCtx.wallet.publicKey}</div>
        </div>

        <div className="flex items-center mt-4">
          <div className="font-semibold mr-2">Your Balance : </div>
          <div className="text-red-700 text-lg">{walletCtx.wallet.balance.toLocaleString()} MC</div>
        </div>

        <div className="flex justify-between text-white mt-8">
          <Link to="/">
            <div className="flex items-center rounded-lg px-4 py-2 bg-[#071e40]">
              <div className="mr-2">
                <svg width="1em" height="1em" viewBox="0 0 15 15">
                  <path
                    fill="currentColor"
                    d="m7.5.5l.325-.38a.5.5 0 0 0-.65 0L7.5.5Zm-7 6l-.325-.38L0 6.27v.23h.5Zm5 8v.5a.5.5 0 0 0 .5-.5h-.5Zm4 0H9a.5.5 0 0 0 .5.5v-.5Zm5-8h.5v-.23l-.175-.15l-.325.38ZM1.5 15h4v-1h-4v1Zm13.325-8.88l-7-6l-.65.76l7 6l.65-.76Zm-7.65-6l-7 6l.65.76l7-6l-.65-.76ZM6 14.5v-3H5v3h1Zm3-3v3h1v-3H9Zm.5 3.5h4v-1h-4v1Zm5.5-1.5v-7h-1v7h1Zm-15-7v7h1v-7H0ZM7.5 10A1.5 1.5 0 0 1 9 11.5h1A2.5 2.5 0 0 0 7.5 9v1Zm0-1A2.5 2.5 0 0 0 5 11.5h1A1.5 1.5 0 0 1 7.5 10V9Zm6 6a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1Zm-12-1a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 15v-1Z"
                  ></path>
                </svg>
              </div>
              <div>Go to HomePage</div>
            </div>
          </Link>

          <Link to="/make-transaction">
            <div className="flex items-center text-sm rounded-lg px-4 py-2 bg-[#071e40]">
              <div className="mr-2">
                <img className="w-[90%]" src={icMoney} alt="" />
              </div>
              <div>Make a transaction</div>
            </div>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default WalletInfo;
