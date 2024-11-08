import { ArrowDown } from "@/svg/ArrowDown";
import { Cancel } from "@/svg/Cancel";
import { HomeIcon } from "@/svg/HomeIcon";

export const AddCategory = () => {
  return (
    <div className="absolute z-[1] w-[494px] h-[236px] bg-white rounded-3xl border-2 left-80 top-90">
      <div className="font-bold text-lg h-[68px] flex items-center justify-between py-5 px-6 w-full border-b-2 border-slate-200">
        <p>Add Category</p>
        <Cancel />
      </div>
      <div className="h-[168px] p-6 flex flex-col gap-[32px]">
        <div className="flex justify-between">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn border-2 border-gray-100"
            >
              <HomeIcon />
              <ArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs border-2 border-gray-100 bg-gray-100"
          />
        </div>

        <button className=" w-[446px] h-[40px] bg-green-600 text-white font-bold rounded-3xl">
          Add
        </button>
      </div>
    </div>
  );
};
