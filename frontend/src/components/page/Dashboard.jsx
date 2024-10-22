import { Geld } from "../svg/Geld";
import { Up } from "../svg/Up";

export const Dashboard = () => {
  return (
    <main className="w-screen h-screen m-auto bg-slate-200">
      <div className="h-[72px] flex justify-between items-center px-28 bg-white">
        <div className="flex gap-4">
          <Geld />
          <p>Dashboard</p>
          <p>Records</p>
        </div>

        <div>
          <div className="btn  bg-blue-500 text-white">+Record</div>
        </div>
      </div>
      <div className="px-28 pt-10">
        <div className=" bg-white w-[390px] h-[216px] rounded-2xl ">
          <div className=" h-[56px] flex justify-start items-center border-b-2 border-b-slate-200 pl-5">
            <p className="font-bold text-lg">Your Income</p>
          </div>
          <div>
            <p className="text-gray-400">Your Income Amount</p>
            <div>
              <Up />
              <p>percentage</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
