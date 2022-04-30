import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import React from "react";

type Props = { children: React.ReactNode };

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-4/5 max-w-screen-lg">
          <Header />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
