import { BtnProps } from "@/app/types/btn-types";


const Button:React.FC<BtnProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="text-white border rounded-[15px] px-8 py-2">
      {children}
    </button>
  );
}

export default Button;