import { Geld } from "@/svg/Geld";
import Link from "next/link";

export const Header = () => {
  return (
    <main className="w-[1200px]">
      <div className="h-[72px] flex justify-between items-center bg-white">
        <div className="flex gap-4">
          <Geld />
          <Link href="/dashboard">
            <button className="border-none bg-white">Dashboard</button>
          </Link>

          <Link href="/record">
            <button className="border-none bg-white">Records</button>
          </Link>
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
    </main>
  );
};