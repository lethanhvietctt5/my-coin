/* eslint-disable jsx-a11y/anchor-is-valid */
import api from "api";
import { useRef, useState } from "react";
import icCopy from "assets/svgs/ic_copy.svg";

function CreateWallet() {
  const privateKeyRef = useRef<HTMLDivElement>(null);
  const publicKeyRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const [downloadable, setDownloadable] = useState(false);

  async function generateWallet() {
    const response = await api.post("/generate");
    const str = JSON.stringify(response.data);
    const bytes = new TextEncoder().encode(str);
    const blob = new Blob([bytes], { type: "" });

    const href = window.URL.createObjectURL(blob);
    const a = downloadRef.current;
    if (a !== null) {
      a.download = "Keys";
      a.href = href;
      setDownloadable(true);
    }
    if (privateKeyRef.current && publicKeyRef.current) {
      privateKeyRef.current.innerText = response.data.privateKey;
      publicKeyRef.current.innerText = response.data.publicKey;
    }
  }

  function coypyKey(key: string) {
    navigator.clipboard.writeText(key);
  }

  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-1/2">
        <div className="text-2xl font-bold text-center">
          Create a New Wallet
        </div>
        <div className="mt-5 text-center">
          <span>Already have a wallet? </span>
          <span className="text-emerald-400">Access My Wallet</span>
        </div>

        {/* Public Key */}
        <div className="w-full flex justify-between items-center border border-gray-400 hover:border-emerald-400 rounded-md px-4 py-4 mt-10">
          <div
            className="text-gray-400 italic whitespace-nowrap overflow-hidden overflow-ellipsis"
            ref={publicKeyRef}
          >
            <span>Your Public Key</span>
          </div>
          <div
            className="w-[24px] min-w-[24px] text-gray-400 hover:text-emerald-400 cursor-pointer ml-2"
            onClick={() => coypyKey(publicKeyRef.current!.innerText)}
            title="Copy"
          >
            <img src={icCopy} alt="Copy" />
          </div>
        </div>

        {/* Private Key */}
        <div className="w-full flex justify-between items-center border border-gray-400 hover:border-emerald-400 rounded-md px-4 py-4 mt-10">
          <div
            className="text-gray-400 italic whitespace-nowrap overflow-hidden overflow-ellipsis"
            ref={privateKeyRef}
          >
            Your Private Key
          </div>
          <div
            className="w-[24px] min-w-[24px] text-gray-400 hover:text-emerald-400 cursor-pointer ml-2"
            title="Copy"
            onClick={() => coypyKey(privateKeyRef.current!.innerText)}
          >
            <img src={icCopy} alt="Copy" />
          </div>
        </div>

        <div className="w-full flex space-x-3 justify-between">
          {/* Button Generate Wallet */}
          <div
            className="flex w-1/2 justify-center items-center px-4 py-4 rounded-md border-2 border-emerald-600 text-white hover:text-emerald-600 bg-emerald-600 hover:bg-white mt-10 cursor-pointer transition-colors ease-in-out delay-150"
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
            <div className="text-lg">Generate Wallet</div>
            <div className="ml-3 text-3xl"></div>
          </div>

          {/* Button Download Keys */}
          <div className="w-1/2">
            <a
              href="#"
              ref={downloadRef}
              className={`${!downloadable ? `hidden` : `visible`}`}
            >
              <button className="w-full flex justify-center items-center px-4 py-4 rounded-md border-2 border-emerald-600 text-white hover:text-emerald-600 bg-emerald-600 hover:bg-white mt-10 cursor-pointer transition-colors ease-in-out delay-150">
                <div className="text-xl mr-2">
                  <svg width="1em" height="1em" viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M17 26.17V14h-2v12.17l-2.59-2.58L11 25l5 5l5-5l-1.41-1.41L17 26.17z"
                    ></path>
                  </svg>
                </div>
                <div className="text-lg">Download Keys</div>
                <div className="ml-3 text-3xl"></div>
              </button>
            </a>

            <button
              type="button"
              className={`w-full flex justify-center items-center px-4 py-4 mt-10 rounded-md border-2 bg-gray-200 text-gray-400 ${
                downloadable ? `hidden` : `visible`
              }`}
              disabled
            >
              <div className="text-xl mr-2">
                <svg width="1em" height="1em" viewBox="0 0 32 32">
                  <path
                    fill="currentColor"
                    d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M17 26.17V14h-2v12.17l-2.59-2.58L11 25l5 5l5-5l-1.41-1.41L17 26.17z"
                  ></path>
                </svg>
              </div>
              <div className="text-lg">Download Keys</div>
              <div className="ml-3 text-3xl"></div>
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <span className="text-red-500">DO NOT FORGET</span> to save your
          <span className="text-emerald-400"> PRIVATE KEY</span> and{" "}
          <span className="text-emerald-400">PUBLIC KEY</span>
        </div>
      </div>
    </div>
  );
}

export default CreateWallet;
