import { BtnProps } from "@/app/types/btn-types"
import classNames from "classnames";

const Button:React.FC<BtnProps> = ({ onClick, children, pill = false }) => {

  return (
    <button onClick={onClick} 
    className={classNames("text-white border  px-8 py-2 cursor-pointer active:bg-white active:text-black", 
    {'rounded-[15px]': pill === false, 'rounded-[25px]': pill === true})}>
      {children}
    </button>
  );
}

export default Button;