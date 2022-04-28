import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <div className="w-full flex justify-between items-center py-5">
      <img src={logo} alt="" className="h-14" />
      <div className="flex space-x-4 text-sm">
        <Link to={"/create-wallet"}>
          <div className="flex items-center space-x-2 border-2 py-2 px-4 rounded-md border-emerald-600 text-emerald-600">
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 0v3H0v2h3v3h2V5h3V3H5V0H3m7 3v2h9v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5v-9H3v9a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72V5c0-1.1-.9-2-2-2h-9m3 6h7v6h-7V9m3 1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5Z"
              ></path>
            </svg>
            <div>Create a wallet</div>
          </div>
        </Link>

        <div className="flex items-center space-x-2 bg-emerald-600 py-2 px-4 rounded-md text-white">
          <svg width="1em" height="1em" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104Zm320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64ZM368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
            ></path>
            <path
              fill="currentColor"
              d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z"
            ></path>
          </svg>
          <div>Access your wallet</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
