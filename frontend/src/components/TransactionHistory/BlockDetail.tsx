import React from "react";
import IBlock from "types/block";

type Props = {
  block: IBlock;
  index: number;
  selectBlock: React.Dispatch<React.SetStateAction<number | null>>;
};

const BlockDetail: React.FC<Props> = ({ block, index, selectBlock }) => {
  return (
    <div>
      <div className="flex items-center mb-10">
        <div
          className="bg-[#071E40] text-white p-4 rounded-lg mr-4 cursor-pointer"
          onClick={() => selectBlock(null)}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
            ></path>
          </svg>
        </div>
        <div className="text-3xl font-medium">Block Detail</div>
      </div>

      <div className="w-1/2 px-4 pt-4 bg-white divide-y rounded-lg h-max divide-slate-200">
        <div className="pb-3 text-xl">Block #{index}</div>
        <BlockInfoRow title={"Block height"} value={index} />
        <BlockInfoRow title={"Timestamp"} value={block.timestamp} />
        <BlockInfoRow
          title={"Transactions"}
          value={`${block.transactions.length} transactions`}
        />
        <BlockInfoRow
          title={"Mined by"}
          value={block.transactions[block.transactions.length - 1].to}
        />
        <BlockInfoRow
          title={"Block reward"}
          value={block.transactions[block.transactions.length - 1].amount}
        />
        <BlockInfoRow title={"Hash"} value={block.hash} />
        <BlockInfoRow title={"Previous Hash"} value={block.prevHash} />
        <BlockInfoRow title={"Nonce"} value={block.nonce} />
      </div>
    </div>
  );
};

type BlockInfoProps = {
  title: string;
  value: string | number;
};

const BlockInfoRow: React.FC<BlockInfoProps> = ({ title, value }) => {
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
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
    </div>
  );
};

export default BlockDetail;
