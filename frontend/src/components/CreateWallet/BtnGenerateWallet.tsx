import React from "react";

type Props = {
  generateWallet: () => Promise<void>;
};

const BtnGenerateWallet: React.FC<Props> = ({ generateWallet }) => {
  return (
    <div
      className="flex w-full sm:w-1/2 justify-center items-center px-4 py-4 rounded-md border-2 border-emerald-600 text-white hover:text-emerald-600 bg-emerald-600 hover:bg-white mt-10 cursor-pointer transition-colors ease-in-out delay-150"
      onClick={generateWallet}
    >
      <div className="text-xl mr-2">
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3 0v3H0v2h3v3h2V5h3V3H5V0H3m7 3v2h9v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5v-9H3v9a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72V5c0-1.1-.9-2-2-2h-9m3 6h7v6h-7V9m3 1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5Z"
          ></path>
        </svg>
      </div>
      <div className="text-sm md:text-base lg:text-lg">Generate Wallet</div>
      <div className="ml-3 text-3xl"></div>
    </div>
  );
};

export default BtnGenerateWallet;
