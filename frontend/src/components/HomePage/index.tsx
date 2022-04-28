import Banner from "./Banner";

function HomePage() {
  return (
    <div>
      <Banner />
      <div className="w-full flex space-x-4 mt-10">
        <div className="group w-1/2 flex border-2 rounded-md hover:bg-emerald-400 hover:text-white hover:cursor-pointer">
          <div className="w-1/2 text-7xl flex justify-center items-center text-emerald-400 group-hover:text-white">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
              className="group-hover:animate-bounce"
            >
              <circle
                cx="24"
                cy="24"
                r="21.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.946 13.385c2.534-2.88 5.76-4.684 11.054-4.684s8.093 1.664 10.755 4.53l-3.916 3.763c-2.4-2.15-4.339-3.11-6.839-3.11s-7.125 1.037-7.125 5.158c0 4.057 3.968 4.53 7.125 4.659s7.125.602 7.125 4.659c0 4.12-4.625 5.158-7.125 5.158s-4.439-.96-6.839-3.11l-3.916 3.762c2.662 2.867 5.46 4.53 10.755 4.53s8.52-1.804 11.054-4.683"
              ></path>
            </svg>
          </div>
          <div className="space-y-2 py-5 pr-6">
            <div className="text-2xl font-bold">Make a transaction</div>
            <div className="text-justify">
              {" "}
              Generate your own unique Ethereum wallet. Receive a public address
              (0x...) and choose a method for access and recovery.{" "}
            </div>
            <div className="flex items-center space-x-3 pt-6">
              <div className="text-lg font-medium">Create a transaction</div>
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

        <div className="group w-1/2 flex border-2 rounded-md hover:bg-emerald-400 hover:text-white hover:cursor-pointer">
          <div className="w-1/2 text-7xl flex justify-center items-center">
            <svg width="1em" height="1em" viewBox="0 0 48 48" className="text-emerald-400 group-hover:text-white group-hover:animate-bounce">
              <circle
                cx="10.77"
                cy="11.41"
                r="1.21"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="22.09"
                cy="6.92"
                r="1.21"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="39.25"
                cy="14.7"
                r="2.08"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="37.76"
                cy="25.52"
                r="2.13"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="39.34"
                cy="34.82"
                r="1.21"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="29.19"
                cy="36.8"
                r="1.11"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="19.09"
                cy="40.62"
                r="2.09"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="28.08"
                cy="26.11"
                r="1.1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="21.64"
                cy="15.44"
                r="1.95"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <circle
                cx="10.7"
                cy="26.08"
                r="3.67"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23.47 7.55L37 13.7m1.92 3.35l-.84 6.1m.1 4.85l.94 5.51m-1.21 1.59l-7.28 1.42m-2.72.77l-6.54 2.47M29 35.32l-.8-7.72M17.85 38.48l-5.16-8.95m1.42-1.47l13.85 8m-13.29-9.97h12m-3.88-8.75l4.55 7.55m-13.82-1.55l6.42-6.24m-9.18-4.23v9.31m1.35-11.3l8.62-3.42M22 8.3l-.26 4.82m2.14 2.23l13.18-.56m-1.74 10.88l-5.86.33"
              ></path>
            </svg>
          </div>
          <div className="space-y-2 py-5 pr-6">
            <div className="text-2xl font-bold">Transaction History</div>
            <div className="text-justify">
              {" "}
              Generate your own unique Ethereum wallet. Receive a public address
              (0x...) and choose a method for access and recovery.{" "}
            </div>
            <div className="flex items-center space-x-3 pt-6">
              <div className="text-lg font-medium">View History</div>
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
      </div>
    </div>
  );
}

export default HomePage;
