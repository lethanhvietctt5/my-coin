import SideBar from "components/Dashboard/SideBar";
import WalletInfo from "components/Dashboard/WalletInfo";
import React from "react";

function Dashboard() {
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      <div className="bg-slate-200 w-full">
        <WalletInfo />
      </div>
    </div>
  );
}

export default Dashboard;
