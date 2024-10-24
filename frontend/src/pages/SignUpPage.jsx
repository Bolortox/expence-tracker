import Link from "next/link";
import { Geld } from "../svg/Geld";

export const SignUpPage = () => {
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
              <p className="font-bold text-2xl">Create Geld account</p>
              <p>Sign up below to create your Wallet account</p>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Name" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Email" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Password" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Re-password" />
              </label>

              <div className="btn bg-blue-500 text-white">Sign up</div>
            </div>

            <div className="flex gap-2 justify-center mt-5">
              <p>Don't have account?</p>
              <Link href="/log-in">
                <div className="text-blue-500">Log in</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-blue-500"></div>
      </div>
    </main>
  );
};
