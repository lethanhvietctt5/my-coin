import api from "api";
import DashboardLayout from "components/Layout/DashboardLayout";
import WalletContext from "context/WalletContext";
import React, { useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

const MakeTransaction = () => {
  const addressRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const walletCtx = useContext(WalletContext);

  async function sendCoin() {
    if (addressRef.current && amountRef.current) {
      if (
        addressRef.current.value.length === 0 ||
        amountRef.current.value.length === 0
      ) {
        toastError("Please enter an address and amount");
        return;
      }

      if (!parseInt(amountRef.current.value)) {
        toastError("Please enter a valid amount");
        return;
      }

      if (parseInt(amountRef.current.value) <= 0) {
        toastError("Amount must be greater than 0");
        return;
      }

      if (parseInt(amountRef.current.value) > walletCtx.wallet.balance) {
        toastError("Amount must be less than your balance");
        return;
      }

      console.log(amountRef.current.value);
      const response = await api.post("/transactions/send", {
        privateKey: walletCtx.wallet.privateKey,
        address: addressRef.current.value,
        amount: parseInt(amountRef.current.value),
      });

      if (response.status === 200) {
        toast.success("Transaction is pending now", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        amountRef.current.value = "";
      }
    }
  }

  return (
    <DashboardLayout>
      <div className="text-3xl font-medium">Make a transaction</div>
      <div className="w-1/2 bg-white rounded-lg mt-10 py-5 px-5">
        <div className="text text-lg font-bold">Information of Transaction</div>
        <div className="flex mt-6">
          <div className="flex flex-col justify-evenly space-y-2 mr-3">
            <div>Receiver address : </div>
            <div>Amount : </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div>
              <input
                type="text"
                ref={addressRef}
                placeholder="Enter receiver address"
                className="border-2 rounded-md px-3 py-2 border-sky-700 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                ref={amountRef}
                placeholder="Enter amount"
                className="border-2 rounded-md px-3 py-2 border-sky-700 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex pl-36 mt-10">
          <div
            className="rounded-lg px-5 py-3 text-white bg-[#071e40] cursor-pointer"
            onClick={sendCoin}
          >
            Send
          </div>
        </div>
      </div>
      <ToastContainer />
    </DashboardLayout>
  );
};

function toastError(mss: string) {
  toast.error(mss, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default MakeTransaction;
