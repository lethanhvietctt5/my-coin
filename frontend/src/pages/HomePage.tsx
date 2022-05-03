import Banner from "components/HomePage/Banner";
import MakeTransactionBtn from "components/HomePage/MakeTransactionBtn";
import TransactionHistoryBtn from "components/HomePage/TransactionHistoryBtn";
import MainLayout from "components/Layout/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <Banner />
      <div className="w-full sm:flex space-x-4 mt-10">
        <MakeTransactionBtn />
        <TransactionHistoryBtn />
      </div>
    </MainLayout>
  );
}

export default HomePage;
