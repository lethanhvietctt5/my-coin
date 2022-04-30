/* eslint-disable jsx-a11y/anchor-is-valid */
import api from "api";
import { useRef, useState } from "react";
import MainLayout from "components/Layout/MainLayout";
import KeyBtn from "components/CreateWallet/KeyBtn";
import BtnGenerateWallet from "components/CreateWallet/BtnGenerateWallet";
import BtnDownloadKeys from "components/CreateWallet/BtnDownloadKeys";

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

  function copyKey(key: string) {
    navigator.clipboard.writeText(key);
  }

  return (
    <MainLayout>
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
          <KeyBtn
            copyKey={copyKey}
            refValue={publicKeyRef}
            content={"Your Public Key"}
          />

          {/* Private Key */}
          <KeyBtn
            copyKey={copyKey}
            refValue={privateKeyRef}
            content={"Your Private Key"}
          />

          <div className="w-full flex space-x-3 justify-between">
            {/* Button Generate Wallet */}
            <BtnGenerateWallet generateWallet={generateWallet} />

            {/* Button Download Keys */}
            <BtnDownloadKeys downloadable={downloadable} refVal={downloadRef} />
          </div>

          <div className="text-center mt-10">
            <span className="text-red-500">DO NOT FORGET</span> to save your
            <span className="text-emerald-400"> PRIVATE KEY</span> and{" "}
            <span className="text-emerald-400">PUBLIC KEY</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CreateWallet;
