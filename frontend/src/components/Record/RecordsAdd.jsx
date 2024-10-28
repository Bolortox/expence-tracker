"use client";

import { Left } from "@/svg/Left";
import { EyeSwitch } from "./EyeSwitch";
import { Right } from "@/svg/Right";
import { House } from "@/svg/House";
import { useState } from "react";
import { AddRecord } from "./AddRecord";

export const RecordsAdd = () => {
  const [showAddRecord, setShowAddRecord] = useState(false);

  const toggleAddRecord = () => {
    setShowAddRecord((prev) => !prev);
  };

  return (
    <div className="w-[1200px] flex gap-6 relative">
      <div className="w-[282px]  h-[912px] px-[16px] py-[24px]  flex flex-col gap-6 border border-gray-200 rounded-2xl bg-white">
        <div className="flex flex-col gap-[24px]">
          <p className="font-bold text-2xl">Records</p>
          <button
            onClick={toggleAddRecord}
            className="btn bg-blue-500 text-white w-[250px] h-[28px] rounded-3xl text-lg border-none hover:bg-blue-400"
          >
            + Add
          </button>
          {showAddRecord && <AddRecord />}
          <label className="input input-bordered flex items-center gap-2 h-[32px] bg-slate-100">
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </div>

        <div className="">
          <p className="font-bold text-lg">Types</p>
          <div className="pl-2 flex flex-col gap-2 pt-3">
            <label className="flex gap-2">
              <input type="radio" />
              <p>All</p>
            </label>

            <label className="flex gap-2">
              <input type="radio" />
              <p>Income</p>
            </label>

            <label className="flex gap-2">
              <input type="radio" />
              <p>Expence</p>
            </label>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="font-bold text-lg">Category</p>
            <button className="bg-white border-none text-slate-200 hover:text-slate-400">
              Clear
            </button>
          </div>
          <div className="flex flex-col pl-2 gap-2 pt-3">
            <div className="flex gap-1  items-center">
              <EyeSwitch />
              <p className="">Food & Drinks</p>
            </div>

            <div className="flex gap-1  items-center">
              <EyeSwitch />
              <p className="">Shopping</p>
            </div>

            <div className="flex gap-1  items-center">
              <EyeSwitch />
              <p className="">Housing</p>
            </div>

            <div className="flex gap-1  items-center">
              <EyeSwitch />
              <p className="">Transportation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full ">
          <div className="flex gap-[16px] justify-center ">
            <Left />
            <p>Last 30 days</p>
            <Right />
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Timing
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a> Newest First</a>
              </li>
              <li>
                <a>Oldest First</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">Today</p>
          <div className="flex flex-col gap-3">
            <div className="w-[894px] h-[64px] bg-white flex justify-between items-center px-6 rounded-3xl  border border-gray-200 ">
              <div className="flex gap-2 justify-center items-center">
                <House />
                <div className="flex flex-col ">
                  <p className="font-medium">Lending & Renting</p>
                  <p>14:00</p>
                </div>
              </div>
              <p className="font-bold text-green-500">+1000$</p>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold text-lg pt-5 ">Yesterday</p>
          <div className="flex flex-col gap-3">
            <div className="w-[894px] h-[64px] bg-white flex justify-between items-center px-6 rounded-3xl  border border-gray-200 ">
              <div className="flex gap-2 justify-center items-center">
                <House />
                <div className="flex flex-col ">
                  <p className="font-medium">Lending & Renting</p>
                  <p>14:00</p>
                </div>
              </div>
              <p className="font-bold text-green-500">+2000$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
