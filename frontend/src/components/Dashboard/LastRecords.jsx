import { House } from "@/svg/House";

export const LastRecords = () => {
  return (
    <div className=" w-[1200px] h-[456px] bg-white rounded-3xl ">
      <p className="font-bold text-lg border-b-2 border-slate-200 h-[56px] flex items-center pl-6">
        Last Records
      </p>

      <div className=" h-[80px] border-b-2 border-slate-200 flex items-center pl-6 gap-[903px]">
        <div className="flex gap-4">
          <House />
          <div>
            <p>Lending & Renting</p>
            <p className="text-gray-500 text-sm"> 3 hours ago</p>
          </div>
        </div>
        <p className="text-lime-500 font-bold">- 1000$</p>
      </div>

      <div className=" h-[80px] border-b-2 border-slate-200 flex items-center pl-6 gap-[903px]">
        <div className="flex gap-4">
          <House />
          <div>
            <p>Lending & Renting</p>
            <p className="text-gray-500 text-sm"> 3 hours ago</p>
          </div>
        </div>
        <p className="text-lime-500 font-bold">- 1000$</p>
      </div>

      <div className=" h-[80px] border-b-2 border-slate-200 flex items-center pl-6 gap-[903px]">
        <div className="flex gap-4">
          <House />
          <div>
            <p>Lending & Renting</p>
            <p className="text-gray-500 text-sm"> 3 hours ago</p>
          </div>
        </div>
        <p className="text-lime-500 font-bold">- 1000$</p>
      </div>

      <div className=" h-[80px] border-b-2 border-slate-200 flex items-center pl-6 gap-[903px]">
        <div className="flex gap-4">
          <House />
          <div>
            <p>Lending & Renting</p>
            <p className="text-gray-500 text-sm"> 3 hours ago</p>
          </div>
        </div>
        <p className="text-lime-500 font-bold">- 1000$</p>
      </div>

      <div className=" h-[80px] flex items-center pl-6 gap-[903px]">
        <div className="flex gap-4">
          <House />
          <div>
            <p>Lending & Renting</p>
            <p className="text-gray-500 text-sm"> 3 hours ago</p>
          </div>
        </div>
        <p className="text-lime-500 font-bold">- 1000$</p>
      </div>
    </div>
  );
};
