import footer from "assets/images/footer.png";
import blockchain from "assets/gifs/blockchain.gif";

function Footer() {
  return (
    <div className="w-full">
      <div></div>
      <img src={footer} alt="" className="w-full" />
      <div className="bg-emerald-800 2xl:mt-[-70px] text-white flex justify-center">
        <div className="w-4/5 max-w-screen-lg">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <div className="mb-8 text-3xl font-bold">About MC</div>
              <div className="text-justify">
                MyCoin - please, call us MC - puts the Ethereum blockchain at
                your fingertips. We are a team of crypto-enthusiasts dedicated
                to bring you the most secure, most intuitive, and dare we say
                prettiest way to manage your ETH and ERC20 tokens. We're always
                here to help, and we're never giving away ETH. Cheers!
              </div>
            </div>
            <div className="md:pl-7 flex justify-center">
              <div className="w-1/2 md:w-auto">
                <img src={blockchain} alt="description" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-8 text-gray-300">
            <div className="flex items-center">
              <div className="px-2 border-r-2 border-gray-300">Feedback</div>
              <div className="px-2 border-r-2 border-gray-300">Privacy</div>
              <div className="px-2">Terms</div>
            </div>

            <div className="flex space-x-5 text-xl">
              <div>
                <svg width="0.49em" height="1em" viewBox="0 0 486.037 1000">
                  <path
                    fill="currentColor"
                    d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074"
                  ></path>
                </svg>
              </div>
              <div>
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg width="1em" height="1em" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
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

export default Footer;
