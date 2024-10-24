import { Header } from "@/components/Header";
import { IncomeExpence } from "@/components/Dashboard/IncomeExpence";
import { LastRecords } from "@/components/Dashboard/LastRecords";

export const Dashboard = () => {
  return (
    <main className=" ">
      <div className="w-screen flex flex-col justify-center items-center ">
        <Header />
      </div>
      <div className="w-screen flex flex-col  items-center h-screen bg-[#F3F4F6] pt-[32px] gap-6">
        <IncomeExpence />
        <LastRecords />
      </div>
    </main>
  );
};
