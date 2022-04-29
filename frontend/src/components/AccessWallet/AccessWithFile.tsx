import React from "react";

function AccessWithFile() {
  function readKeysFromFile(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e?.target?.result;
      console.log(text);
      alert(text);
    };
    if (event.target.files) {
      reader.readAsText(event.target.files[0]);
    }
  }

  return (
    <div className="w-full">
      <div className="text-center text-3xl font-medium my-8">
        Access your Wallet
      </div>

      <div className="mb-3 text-lg ml-4 after:content-['*'] after:ml-0.5 after:text-red-500">
        Choose your keys file
      </div>

      <form className="flex items-center space-x-6 border py-8 rounded-lg">
        <div className="shrink-0"></div>
        <label className="block">
          <span className="sr-only">Choose keys file</span>
          <input
            type="file"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-emerald-400 hover:file:bg-violet-100"
            onChange={readKeysFromFile}
          />
        </label>
      </form>

      <div className="flex justify-center mt-10">
        <div className="w-1/3 py-2 border border-emerald-700 hover:bg-emerald-700 rounded-lg text-emerald-700 hover:text-white text-center text-lg cursor-pointer transition-colors ease-in-out delay-150">
          Access Wallet
        </div>
      </div>
    </div>
  );
}

export default AccessWithFile;