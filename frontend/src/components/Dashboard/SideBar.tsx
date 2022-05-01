import React from "react";
import bgCard from "assets/images/bg-card.png";
import icWallet from "assets/svgs/ic_wallet.svg";
import icMoney from "assets/svgs/ic_money.svg";
import icMining from "assets/svgs/ic_mining.svg";
import icHistory from "assets/svgs/ic_history.svg";
import icLogout from "assets/svgs/ic_logout.svg";

const SideBar = () => {
  const publicKey =
    "045d4a7d2fc706b65a5fdcb1f1b8bfe6d06bf6c239290bb53ca5f05ced84511881f08665c865f5dfa51e6eae637a143896252a0bf8825d6b75cb2f402adc419b87";

  return (
    <div className="w-1/6 h-full bg-[#071e40] text-white">
      <div className="w-full px-5">
        <div className="flex justify-center items-center text-7xl py-6">
          <div className="flex justify-center items-center">
            <svg width="1em" height="1em" viewBox="0 0 48 48">
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path d="M11 34.688L24 42l8-4.5l5-2.813M40 30V15L27.5 7.969m-7 0L8 15v15m13-11.25l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17l-3 1.75ZM24 17v-7m6 17l7 4m-19-4l-7 4"></path>
                <circle cx="24" cy="7" r="3"></circle>
                <circle cx="8" cy="33" r="3"></circle>
                <circle cx="40" cy="33" r="3"></circle>
              </g>
            </svg>
            <div className="text-3xl">MCoin</div>
          </div>
        </div>

        <div className="relative w-full mb-10">
          <div className="w-full">
            <img src={bgCard} className="w-full rounded-xl" alt="" />
          </div>
          <div className="absolute h-full top-0 w-full py-5 px-4">
            <div className="flex h-full flex-col justify-between">
              <div className="font-semibold">My Wallet</div>
              <div className="text-6xl font-bold text-center">$0</div>
              <div className="flex justify-center items-center ">
                <div className="truncate text-sm">{publicKey}</div>
                <div className="ml-2">
                  <svg width="1em" height="1em" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="M6.644 2.983a.252.252 0 0 0-.253.252c0 .139.113.251.253.251h3.713c.14 0 .253-.112.253-.251a.252.252 0 0 0-.253-.252H6.644Zm3.713-1.342c.734 0 1.353.49 1.544 1.16l2.175.001c.621.004 1.122.205 1.432.638c.266.372.372.85.345 1.387L15.85 17.84c.042.552-.062 1.04-.328 1.445c-.312.473-.821.71-1.452.716H3.14c-.76-.03-1.323-.209-1.675-.609c-.327-.371-.47-.88-.464-1.5V4.84c-.013-.6.154-1.106.518-1.48c.376-.384.932-.554 1.647-.559h1.935c.19-.67.809-1.16 1.543-1.16h3.713Zm0 3.187H6.644c-.546 0-1.027-.27-1.317-.684H3.17c-.383.002-.602.07-.682.152c-.091.093-.144.252-.138.531v13.07c-.003.325.052.522.13.61c.054.061.286.135.685.151h10.9c.2-.002.28-.04.326-.109c.091-.138.133-.334.11-.658l.001-13.096c.014-.293-.027-.482-.096-.578c-.026-.035-.116-.072-.336-.073h-2.397c-.29.414-.771.684-1.317.684ZM17.2 0c.994 0 1.8.801 1.8 1.79v14.082c0 .988-.806 1.79-1.8 1.79h-1.958v-1.343h1.957c.249 0 .45-.2.45-.447V1.789a.449.449 0 0 0-.45-.447H9.643c-.248 0-.45.2-.45.447v.157h-1.35v-.157C7.843.801 8.649 0 9.643 0H17.2ZM8.196 11.751c.373 0 .675.3.675.671c0 .37-.302.671-.675.671H4.145a.673.673 0 0 1-.676-.67c0-.371.303-.672.676-.672h4.051Zm4.052-2.684c.372 0 .675.3.675.671c0 .37-.303.671-.675.671H4.145a.673.673 0 0 1-.676-.67c0-.371.303-.672.676-.672h8.103Zm0-2.684c.372 0 .675.3.675.671a.673.673 0 0 1-.675.671H4.145a.673.673 0 0 1-.676-.67c0-.371.303-.672.676-.672h8.103Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 px-2">
        <SideBarButton
          path="/wallet-info"
          label="Wallet infomation"
          icon={icWallet}
        />

        <SideBarButton
          path="/wallet-info"
          label="Make a transaction"
          icon={icMoney}
        />

        <SideBarButton
          path="/wallet-info"
          label="Mining pending transactions"
          icon={icMining}
        />

        <SideBarButton
          path="/wallet-info"
          label="Transaction history"
          icon={icHistory}
        />

        <SideBarButton path="/wallet-info" label="Logout" icon={icLogout} />
      </div>
    </div>
  );
};

type SideBarButtonProps = {
  path: string;
  label: string;
  icon: string;
};

const SideBarButton: React.FC<SideBarButtonProps> = ({ path, label, icon }) => {
  return (
    <div className="flex items-center rounded-lg py-2 px-4 cursor-pointer">
      <div className="pr-2">
        <img src={icon} alt="" />
      </div>
      <div>{label}</div>
    </div>
  );
};

export default SideBar;
