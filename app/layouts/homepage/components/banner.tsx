import { BannerProps } from "@/app/types/children-props-types";
import classNames from "classnames";

const Banner: React.FC<BannerProps> = ({text, img}) => {


  return (
    <div className="bg-[url('/images/${img}')] bg-cover bg-center bg-no-repeat w-full h-[900px] flex justify-center items-center" style={{backgroundImage: `url('/images/${img}')`}}>
     {text && <p className="font-bold text-lg sm:2xl md:text-4xl">{text}</p>}
    </div>
  );
}

export default Banner;