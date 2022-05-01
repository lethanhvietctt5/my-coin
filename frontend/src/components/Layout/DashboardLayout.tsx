import SideBar from "components/Layout/SideBar";
import React from "react";

type Props = { children: React.ReactNode };

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      <div className="bg-slate-200 w-full">
        <div className="px-8 my-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
