function AccessWithKeys() {
  return (
    <div className="w-full">
      <div className="text-center text-3xl font-medium my-8">
        Access your Wallet
      </div>
      {/* Public key */}
      <div className="w-full flex justify-center">
        <div className="w-3/4">
          <div className="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
            Public key
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your public key"
              className="w-full border-2 rounded-md px-3 py-3 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>
      </div>

      {/* Private key */}
      <div className="w-full flex justify-center mt-6">
        <div className="w-3/4">
          <div className="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
            Private key
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your private key"
              className="w-full border-2 rounded-md px-3 py-3 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-1/3 py-2 border border-emerald-700 hover:bg-emerald-700 rounded-lg text-emerald-700 hover:text-white text-center text-lg cursor-pointer transition-colors ease-in-out delay-150">
          Access Wallet
        </div>
      </div>
    </div>
  );
}

export default AccessWithKeys;
