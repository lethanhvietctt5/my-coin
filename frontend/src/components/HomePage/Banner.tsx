import banner from "assets/images/banner.png";

function Banner() {
  return (
    <div className="w-full sm:flex items-center mt-10">
      <div className="sm:w-1/2">
        <div className="text-4xl font-bold mb-10">MyCoin's Original Wallet</div>
        <div className="text-justify">
          MyCoin (our friends call us MC) is a free, client-side interface
          helping you interact with the Ethereum blockchain. Our easy-to-use,
          open-source platform allows you to generate wallets, interact with
          smart contracts, and so much more.
        </div>
      </div>
      <div className="sm:w-1/2 my-6 sm:my-0">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default Banner;
