import formatDate from "helpers/formatDate";
import React from "react";
import ITransaction from "types/transaction";

type Props = {
  transaction: ITransaction;
  selectTransaction: React.Dispatch<React.SetStateAction<number | null>>;
};

const TransactionDetail: React.FC<Props> = ({
  transaction,
  selectTransaction,
}) => {
  return (
    <div>
      <div className="flex items-center mb-10">
        <div
          className="bg-[#071E40] text-white p-4 rounded-lg mr-4 cursor-pointer"
          onClick={() => selectTransaction(null)}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
            ></path>
          </svg>
        </div>
        <div className="text-3xl font-medium">Transaction Detail</div>
      </div>

      <div className="w-1/2 px-4 pt-4 bg-white divide-y rounded-lg h-max divide-slate-200">
        <div className="pb-3 text-xl">Transaction detail </div>
        <TxInfoRow
          title={"Transaction hash"}
          value={transaction.hash ? transaction.hash : ""}
        />
        <div className="flex items-center justify-between py-3 space-x-8">
          <div className="flex items-center min-w-fit">
            <div className="mr-2 text-slate-500">
              <svg width="1em" height="1em" viewBox="0 0 21 21">
                <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.5 9.5v-1l1.414-1.414a2 2 0 0 0 .586-1.414V5.5c0-.613-.346-1.173-.894-1.447l-.212-.106a2 2 0 0 0-1.788 0L7.5 4c-.613.306-1 .933-1 1.618V6.5"
                  ></path>
                  <circle cx="8.5" cy="12.5" r="1" fill="currentColor"></circle>
                </g>
              </svg>
            </div>
            <div className="text-sm">Status: </div>
          </div>
          <div className="text-sm truncate">
            {transaction.from.length > 0 &&
            transaction.signature === undefined ? (
              <div className="flex items-center space-x-1 bg-orange-100 text-orange-400 px-1 py-1 rounded-md">
                <div>
                  <svg width="1em" height="1em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.5 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3ZM3 11.75c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v4.75a4.5 4.5 0 1 1-9 0v-4.75Zm1.75-.25a.25.25 0 0 0-.25.25v4.75a3 3 0 1 0 6 0v-4.75a.25.25 0 0 0-.25-.25h-5.5Zm5.777-2.886a3 3 0 1 0 0-5.229c.327.378.584.818.752 1.3a1.5 1.5 0 1 1 0 2.631a3.995 3.995 0 0 1-.752 1.298Zm.333 12.24A4.5 4.5 0 0 0 16.5 16.5v-4.75A1.75 1.75 0 0 0 14.75 10h-2.38c.343.415.566.933.618 1.5h1.76a.25.25 0 0 1 .25.25v4.75a3 3 0 0 1-2.887 2.998c-.339.52-.762.978-1.252 1.356Zm4.167-12.24a3 3 0 1 0 0-5.229c.327.378.584.818.752 1.3a1.5 1.5 0 1 1 0 2.631a3.995 3.995 0 0 1-.752 1.298Zm.333 12.24A4.5 4.5 0 0 0 21 16.5v-4.75A1.75 1.75 0 0 0 19.25 10h-2.38c.343.415.567.933.618 1.5h1.76a.25.25 0 0 1 .25.25v4.75a3 3 0 0 1-2.887 2.998c-.339.52-.762.978-1.252 1.356Z"
                    ></path>
                  </svg>
                </div>
                <div>Pending</div>
              </div>
            ) : (
              <div className="flex items-center space-x-1 bg-green-200 text-green-600 px-1 py-1 rounded-md">
                <div>
                  <svg width="1em" height="1em" viewBox="0 0 48 48">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <path d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012L24 4Z"></path>
                      <path d="m17 24l5 5l10-10"></path>
                    </g>
                  </svg>
                </div>
                <div>Success</div>
              </div>
            )}
          </div>
        </div>
        <TxInfoRow
          title={"Timestamp"}
          value={formatDate(transaction.timestamp)}
        />
        <TxInfoRow title={"From"} value={transaction.from} />
        <TxInfoRow title={"To"} value={transaction.to} />
        <TxInfoRow title={"Value"} value={transaction.amount} />
      </div>
    </div>
  );
};

type TxInfoProps = {
  title: string;
  value: string | number;
};

const TxInfoRow: React.FC<TxInfoProps> = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between py-3 space-x-8">
      <div className="flex items-center min-w-fit">
        <div className="mr-2 text-slate-500">
          <svg width="1em" height="1em" viewBox="0 0 21 21">
            <g fill="none" fillRule="evenodd" transform="translate(2 2)">
              <circle
                cx="8.5"
                cy="8.5"
                r="8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5 9.5v-1l1.414-1.414a2 2 0 0 0 .586-1.414V5.5c0-.613-.346-1.173-.894-1.447l-.212-.106a2 2 0 0 0-1.788 0L7.5 4c-.613.306-1 .933-1 1.618V6.5"
              ></path>
              <circle cx="8.5" cy="12.5" r="1" fill="currentColor"></circle>
            </g>
          </svg>
        </div>
        <div className="text-sm">{title}: </div>
      </div>
      <div className="text-sm truncate">
        {typeof value === "number"
          ? value.toLocaleString()
          : value.length > 0
          ? value
          : "MC"}
      </div>
    </div>
  );
};

export default TransactionDetail;
