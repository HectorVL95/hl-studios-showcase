import { BtnProps } from "@/app/types/btn-types"
import classNames from "classnames";


const Button:React.FC<BtnProps> = ({ onClick, children }) => {

  return (
    <button onClick={onClick} className="text-white border rounded-[15px] px-8 py-2 cursor-pointer active:bg-white active:text-black">
      {children}
    </button>
  );
}

export default Button;