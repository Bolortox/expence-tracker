import { Header } from "@/components/Header";
import { RecordsAdd } from "@/components/Record/RecordsAdd";

export default function Record() {
  return (
    <main>
      <div className="w-screen flex  justify-center items-center ">
        <Header />
      </div>
      <div className="w-screen flex justify-center items-center pt-9 pb-36 bg-[#F3F4F6] ">
        <RecordsAdd />
      </div>
    </main>
  );
}
