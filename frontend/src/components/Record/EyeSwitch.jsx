import { Eye } from "@/svg/Eye";
import { EyeC } from "@/svg/EyeC";

export const EyeSwitch = () => {
  return (
    <div>
      <label className="swap">
        <input type="checkbox" />
        <div className="swap-on">
          <EyeC />
        </div>
        <div className="swap-off">
          <Eye />
        </div>
      </label>
    </div>
  );
};
