import { BtnProps } from "@/app/types/btn-types"
import classNames from "classnames";

const Button:React.FC<BtnProps> = ({ onClick, children, pill = false }) => {

  return (
    <button onClick={onClick} 
    className={classNames("text-white border px-8 py-2 cursor-pointer hover:bg-white hover:text-black active:bg-gray", {'rounded-[15px]': pill === false, 'rounded-[25px]': pill === true}, "transition-all duration-300 ease-in-out")}>
      {children}
    </button>
  );
}

export default Button;