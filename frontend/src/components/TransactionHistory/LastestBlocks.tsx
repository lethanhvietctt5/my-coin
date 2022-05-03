import React, { useEffect, useState } from "react";
import IBlock from "types/block";

type Props = {
  blocks: IBlock[];
};

const LastestBlocks: React.FC<Props> = ({ blocks }) => {
  const [index, setIndex] = useState(0);
  const [showBk, setShowBk] = useState<IBlock[]>([]);

  useEffect(() => {
    setShowBk(blocks.slice(index * 8, index + 8));
  }, [index, blocks]);

  function changeIndex(idx: number) {
    setIndex(idx);
  }

  return (
    <div className="w-1/2 h-max bg-white rounded-lg px-4 pt-4 divide-y divide-slate-200">
      <div className=" pb-3">Lastest Blocks</div>
      {showBk.map((block, index) => (
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-2">
            <div className="p-3 bg-slate-400 rounded-md">BK</div>
            <div className="text-sm">
              <div className="hover:text-blue-700 hover:underline cursor-pointer underline-offset-1">
                Block {index}
              </div>
              <div>{block.timestamp}</div>
            </div>
          </div>
          <div className="w-1/2 text-sm">
            <div className="truncate">
              <span className="text-blue-700">Miner : </span>
              {block.transactions.length > 0
                ? block.transactions[block.transactions.length - 1].to
                : null}
            </div>
            <div>{block.transactions.length} Txs</div>
          </div>

          <div className="w-[100px] text-sm" title="Mining Reward">
            {block.transactions[block.transactions.length - 1].amount} MC
          </div>
        </div>
      ))}
      <div className="flex justify-between text-white py-4">
        <div
          className={`px-4 py-2 rounded-md bg-[#071e40] cursor-pointer ${
            index <= 0 ? "opacity-30" : ""
          }`}
          onClick={() => {
            if (index > 0) {
              changeIndex(index - 1);
            }
          }}
        >
          Prev
        </div>

        <div
          className={`px-4 py-2 rounded-md bg-[#071e40] cursor-pointer ${
            index >= Math.floor(blocks.length / 8) ? "opacity-30" : ""
          }`}
          onClick={() => {
            if (index < Math.floor(blocks.length / 8)) {
              changeIndex(index + 1);
            }
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default LastestBlocks;
