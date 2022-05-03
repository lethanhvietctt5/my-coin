import { Tab } from "@headlessui/react";
import MainLayout from "components/Layout/MainLayout";
import { useState } from "react";
import AccessWithKeys from "components/AccessWallet/AccessWithKeys";
import AccessWithFile from "components/AccessWallet/AccessWithFile";

function AccessWallet() {
  const [accessViaFile, setAccessViaFile] = useState(false);
  return (
    <MainLayout>
      <div className="flex justify-center items-center mt-10">
        <div className="w-full sm:w-5/6 md:w-3/4">
          <Tab.Group selectedIndex={+accessViaFile}>
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
    </MainLayout>
  );
}

export default AccessWallet;
