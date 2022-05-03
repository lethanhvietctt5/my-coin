/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

type Props = {
  refVal: React.RefObject<HTMLAnchorElement>;
  downloadable: boolean;
};

const BtnDownloadKeys: React.FC<Props> = ({ refVal, downloadable }) => {
  return (
    <div className="w-full sm:w-1/2">
      <a
        href="#"
        ref={refVal}
        className={`${!downloadable ? `hidden` : `visible`}`}
      >
        <button className="w-full flex justify-center items-center px-4 py-4 rounded-md border-2 border-emerald-600 text-white hover:text-emerald-600 bg-emerald-600 hover:bg-white mt-5 sm:mt-10 cursor-pointer transition-colors ease-in-out delay-150">
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
          <div className="text-sm md:text-base lg:text-lg">Download Keys</div>
          <div className="ml-3 text-3xl"></div>
        </button>
      </a>

      <button
        type="button"
        className={`w-full flex justify-center items-center px-4 py-4 mt-5 sm:mt-10 rounded-md border-2 bg-gray-200 text-gray-400 ${
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
        <div className="text-sm md:text-base lg:text-lg">Download Keys</div>
        <div className="ml-3 text-3xl"></div>
      </button>
    </div>
  );
};

export default BtnDownloadKeys;
