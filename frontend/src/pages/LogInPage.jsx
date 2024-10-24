"use client";

import Link from "next/link";
import { Geld } from "../svg/Geld";

export const LogInPage = () => {
  return (
    <main>
      <div className=" w-screen h-screen flex">
        <div className="w-[50%] bg-white flex items-center justify-center">
          <div className="flex flex-col w-[390px] h-[420px] ">
            <div className="flex justify-center items-center gap-2">
              <Geld />
              <p className="font-bold text-2xl">Geld</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-7 gap-3">
              <p className="font-bold text-2xl">Welcome Back</p>
              <p>Welcome back, Please enter your details</p>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Email" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Password" />
              </label>

              <div className="btn bg-blue-500 text-white">Log in</div>
            </div>

            <div className="flex gap-2 justify-center mt-5">
              <p>Don't have account?</p>
              <Link href="/sign-up">
                <div className="text-blue-500">Sign up</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-blue-500"></div>
      </div>
    </main>
  );
};
