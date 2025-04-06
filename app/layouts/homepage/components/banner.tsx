import { BannerProps } from "@/app/types/children-props-types";
import ReactPlayer from "react-player/vimeo"

const Banner: React.FC<BannerProps> = ({ text, img, video, animated }) => {

  return (
    <div className="h-[480px] lg:h-[900px]">
    { video ? 
        <ReactPlayer 
          url="https://vimeo.com/1071685253"
          loop={true}
          playing={true}
          width="100%"
          height="100%"
          muted={true}
        />
        :
        <div
          className={`z-10 bg-cover bg-center bg-no-repeat w-full h-full flex justify-center items-center transition-all duration-1000 ease-in-out ${animated ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url('/images/${img}')` }}
        >
          {text && <p className="uppercase text-7xl sm:2xl md:text-4xl">{text}</p>}
        </div>}
    </div>
  );
};

export default Banner;
