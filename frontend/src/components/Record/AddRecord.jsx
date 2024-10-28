import { useState } from "react";

export const AddRecord = () => {
  const [color, setColor] = useState(true);

  const ChangeBgColor = () => {
    setColor(!color);
  };
  const ChangeButtonColor = () => {
    setColor(!color);
  };
  return (
    <div className="w-[792px] flex bg-white rounded-3xl h-[512px] z-[1] absolute left-80 top-20 border-2 flex-col">
      <div className="font-bold text-lg h-[68px] flex items-center py-5 px-6 w-full border-b-2 border-slate-200">
        <p>Add Record</p>
      </div>
      <div className="flex ">
        <div className="py-5 px-6 flex flex-col gap-5">
          <div className=" w-[350px] rounded-3xl flex  bg-slate-100 h-40px gap-[5px]">
            <button
              onClick={ChangeBgColor}
              className={`w-[172px] h-[40px]  text-white font-bold rounded-3xl ${
                color ? "bg-blue-500 text-white" : "bg-slate-100 text-black"
              }  w-[172px] h-[40px] rounded-3xl text-lg border-none0`}
            >
              Expence
            </button>
            <button
              onClick={ChangeBgColor}
              className={`w-[172px] h-[40px]  text-white font-bold rounded-3xl ${
                color ? "bg-slate-100 text-black" : "bg-green-500 text-white"
              } w-[172px] h-[40px] rounded-3xl text-lg border-none `}
            >
              Income
            </button>
          </div>
          <div className=" w-[349px]  h-[76px] bg-slate-100 px-3 py-4 rounded-xl border-slate-200 border-2">
            <p>Amount</p>
            <input type="number" className=" bg-slate-100" />
          </div>
          <div className="pt-1">
            <p>Category</p>
            <label
              className="w-[348px] h-[48px] bg-slate-100  rounded-lg border-slate-200 border-2 flex  items-center px-3 py-4 "
              htmlFor="category"
            >
              <select className="bg-slate-100 w-[292px]">
                <option value="volvo">Food</option>
                <option value="saab">Home</option>
                <option value="opel">Gift</option>
                <option value="audi">Drink</option>
                <option value="volvo">Shopping</option>
                <option value="saab">Taxi</option>
                <option value="opel">Rent</option>
                <option value="audi">Health</option>
              </select>
            </label>
          </div>

          <div className="flex gap-3">
            <div>
              <p>Date</p>
              <div className="w-[168px] h-[48px] bg-slate-100 border-slate-200 border-2 rounded-xl flex items-center px-2">
                <input type="date" className="bg-slate-100" />
              </div>
            </div>

            <div>
              <p>Time</p>
              <div className="w-[168px] h-[48px] bg-slate-100 border-slate-200 border-2 rounded-xl flex items-center px-2">
                <input type="time" className="bg-slate-100" />
              </div>
            </div>
          </div>

          <button
            onClick={ChangeButtonColor}
            className={`w-[348px] h-[40px] ${
              color ? "bg-blue-500 text-white" : "bg-green-500 text-white"
            }  font-bold rounded-3xl`}
          >
            Add Record
          </button>
        </div>
        {/* end of LEFT SIDE */}
        <div className="w-[396px] py-5 px-6 flex flex-col gap-4">
          <div>
            <p>Payee</p>
            <input
              placeholder="Write here"
              type="text"
              className="w-[348px] h-[48px] bg-slate-100  rounded-lg border-slate-200 border-2 px-3 py-4 "
            />
          </div>

          <div>
            <p>Note</p>
            <textarea
              placeholder="Write here"
              type="text"
              className="w-[348px] h-[248px] bg-slate-100  rounded-lg border-slate-200 border-2 px-3 py-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
