import { Eye } from "../svg/Eye";
import { EyeC } from "../svg/EyeC";
import { Geld } from "../svg/Geld";
import { Left } from "../svg/Left";
import { Right } from "../svg/Right";

export const Record = () => {
  return (
    <main className="w-screen h-screen m-auto bg-slate-100  max-w-screen-xl">
      <div className="h-[72px] flex justify-between items-center px-28 bg-white ">
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
        <div className="px-3 pt-10 ">
          <div className="w-[282px] h-[912px] border-2 border-slate-300 rounded-xl flex flex-col gap-4 p-3">
            <p className="font-bold text-2xl">Records</p>
            <div className="btn bg-blue-500 text-white w-[200px] rounded-3xl">
              + Add
            </div>
            <label className="input input-bordered flex items-center gap-2 h-8 bg-slate-100">
              <input type="text" className="grow" placeholder="Search" />
            </label>
            <div>
              <p className="font-bold text-lg">Types</p>
              <div className="">
                <label className="input bg-slate-100  items-center flex gap-2 h-[30px]">
                  <input type="radio" name="type" value="all" />
                  <span>All</span>
                </label>

                <label className="input bg-slate-100  items-center flex gap-2 h-[30px]">
                  <input type="radio" name="type" value="all" />
                  <span>Income</span>
                </label>

                <label className="input bg-slate-100  items-center flex gap-2 h-[30px]">
                  <input type="radio" name="type" value="all" />
                  <span>Expence</span>
                </label>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg ">Category</p>
                <div className="btn shadow-none text-lg bg-slate-100 text-gray-400 border-0 ">
                  Clear
                </div>
              </div>

              <label className="swap swap-flip text-9xl">
                <input type="checkbox" />

                <div className="swap-on">
                  <Eye />
                </div>
                <div className="swap-off">
                  <EyeC />
                </div>
                <p className="text-sm pl-5">Houing & Renting</p>
              </label>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-2 bg-red-500 w-full pt-10 px-3 
        "
        >
          <div className="flex justify-between bg-slate-700 w-full h-[50px] ">
            <div className="flex gap-2">
              <Left />
              <p className="0">Last 30 Days</p>
              <Right />
            </div>

            <div>
              <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <a>Newest First</a>
                  </li>
                  <li>
                    <a>Latest First</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>

          <div className="bg-white flex justify-between items-center rounded-xl pl-2">
            <div>
              <p className=" text-lg">Home & Renting</p>
              <p className="text-slate-400">time 14:00</p>
            </div>
            <p className="text-green-400">+ 1000$</p>
          </div>
        </div>
      </div>
    </main>
  );
};
