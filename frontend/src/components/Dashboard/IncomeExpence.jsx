import { CardLogo } from "@/svg/CardLogo";
import { Down } from "@/svg/Down";
import { Up } from "@/svg/Up";
import { WhiteGeld } from "@/svg/WhiteGeld";

export const IncomeExpence = () => {
  return (
    <main className="w-[1200px] flex gap-[23px]">
      <div
        className=" w-[384px] h-[219px] bg-[#0166FF] rounded-[18px] flex flex-col gap-[66px] pt-[32px] pl-[32px]  "
        style={{
          backgroundImage: `url(Noise.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex gap-2 items-center">
          <WhiteGeld />
          <p className="font-bold text-xl text-white ">Geld</p>
        </div>

        <div className="flex gap-[172px]">
          <div className="flex flex-col">
            <p className="text-slate-100">Cash</p>
            <p className="text-white font-bold text-xl">10,000,000</p>
          </div>
          <CardLogo />
        </div>
      </div>

      <div className="w-[384px] h-[216px] rounded-3xl  bg-white">
        <div className="h-[56px] border-b-2 border-slate-200 flex items-center pl-6 gap-2">
          <div className="w-[8px] h-[8px] rounded-3xl bg-lime-500 "></div>
          <p className="font-bold text-lg">Your Income</p>
        </div>

        <div className="flex flex-col gap-[16px] p-[24px]">
          <div className="">
            <p className="font-bold text-3xl">1,200,000$</p>
            <p className="text-slate-500">Your Income Amount</p>
          </div>
          <div className="flex  gap-[10px]">
            <Up />
            <p>32% form last month</p>
          </div>
        </div>
      </div>

      <div className="w-[384px] h-[216px] rounded-3xl  bg-white">
        <div className="h-[56px] border-b-2 border-slate-200 flex items-center pl-6 gap-2">
          <div className="w-[8px] h-[8px] rounded-3xl bg-[#0166FF] "></div>
          <p className="font-bold text-lg">Your Income</p>
        </div>

        <div className="flex flex-col gap-[16px] p-[24px]">
          <div className="">
            <p className="font-bold text-3xl">1,200,000$</p>
            <p className="text-slate-500">Your Income Amount</p>
          </div>
          <div className="flex gap-[10px]">
            <Down />
            <p>32% form last month</p>
          </div>
        </div>
      </div>
    </main>
  );
};
