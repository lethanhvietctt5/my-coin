import DashboardLayout from "components/Layout/DashboardLayout";
import React from "react";

const MakeTransaction = () => {
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
                placeholder="Enter receiver address"
                className="border-2 rounded-md px-3 py-2 border-sky-700 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter amount"
                className="border-2 rounded-md px-3 py-2 border-sky-700 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex pl-36 mt-10">
          <div className="rounded-lg px-5 py-3 text-white bg-[#071e40]">Send</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MakeTransaction;
