import { Tab } from "@headlessui/react";
import { useState } from "react";
import AccessWithFile from "./AccessWithFile";
import AccessWithKeys from "./AccessWithKeys";

function AccessWallet() {
  const [accessViaFile, setAccessViaFile] = useState(false);
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-3/4">
        <Tab.Group>
          <Tab.List className="w-full flex justify-between border rounded-xl">
            <Tab
              onClick={() => setAccessViaFile(false)}
              className={`flex flex-1 justify-center  py-4 ${
                !accessViaFile ? `bg-gray-500 rounded-xl text-white` : ``
              }`}
            >
              Public and Private Key
            </Tab>
            <Tab
              onClick={() => setAccessViaFile(true)}
              className={`flex flex-1 justify-center  py-4 ${
                accessViaFile ? `bg-gray-500 rounded-xl text-white` : ``
              }`}
            >
              File Keys
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <AccessWithKeys />
            </Tab.Panel>
            <Tab.Panel>
              <AccessWithFile />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default AccessWallet;
