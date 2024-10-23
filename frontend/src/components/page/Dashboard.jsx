import { Geld } from "../svg/Geld";
import { Up } from "../svg/Up";

export const Dashboard = () => {
  return (
    <main className="w-screen h-screen m-auto bg-slate-100 max-w-screen-xl">
      <div className="h-[72px] flex justify-between items-center px-28 bg-white">
        <div className="flex gap-4">
          <Geld />
          <p>Dashboard</p>
          <p>Records</p>
        </div>

        <div className="flex justify-center items-center gap-5 rounded-3xl">
          <div className="btn  bg-blue-500 text-white">+Record</div>
          <div className="avatar">
            <div className="w-[40px] rounded">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="px-28 pt-10">
          <div className=" bg-white w-[390px] h-[216px] rounded-2xl ">
            <div className=" h-[56px] flex justify-start items-center border-b-2 border-b-slate-200 pl-5 gap-2">
              <div className="w-2 h-2 rounded-full bg-lime-500"></div>
              <p className="font-bold text-lg">Your Income</p>
            </div>
            <div className="pl-5">
              <div className="pt-4">
                <p className="font-bold text-4xl">1200247$</p>
                <p className="text-gray-600">Your Income Amount</p>
              </div>

              <div className="flex pt-5">
                <Up />
                <p>32% from last month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-28 pt-10">
          <div className=" bg-white w-[390px] h-[216px] rounded-2xl ">
            <div className=" h-[56px] flex justify-start items-center border-b-2 border-b-slate-200 pl-5 gap-2">
              <div className="w-2 h-2 rounded-full bg-lime-500"></div>
              <p className="font-bold text-lg">Your Income</p>
            </div>
            <div className="pl-5">
              <div className="pt-4">
                <p className="font-bold text-4xl">1200247$</p>
                <p className="text-gray-600">Your Income Amount</p>
              </div>

              <div className="flex pt-5">
                <Up />
                <p>32% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-28 pt-10">
        <div className="max-w-screen-xl bg-white rounded-2xl">
          <div className="font-bold text-lg h-[56px] pl-[24px]  flex items-center border-b-2 border-b-slate-300">
            Last Records
          </div>
          <div>
            <div className="flex gap-3">
              <p>Home</p>
              <div>
                <p className="font-bold">Lending & Renting</p>
                <p className="text-slate-400">3 hours ago</p>
              </div>
            </div>
            <div>
              <p className="text-lime-500">- 1000$</p>
              <div>DELETE</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
