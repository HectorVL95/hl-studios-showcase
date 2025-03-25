import { BannerProps } from "@/app/types/children-props-types";
import YouTube, { YouTubeProps } from "react-youtube";

const Banner: React.FC<BannerProps> = ({ text, img, video, animated }) => {

  const video_options: YouTubeProps['opts'] = {
    height: '900px',
    width: '100%',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: video,
      controls: 0,
      disablekb: 1, 
      modestbranding: 1,
      rel: 0,
      fs: 0, 
      cc_load_policy: 0,
      iv_load_policy: 3,
    }
  }

  return (
    <div className="w-full h-[480px] lg:h-[900px] flex justify-center items-center relative">
    { video ? 
        <div className="flex w-full h-full"
        >
          <div className="relative w-full h-full">
            <YouTube videoId={video} opts={video_options}/>
            {text && <p className="absolute inset-0 flex justify-center items-center uppercase text-2xl md:text-4xl text-white">{text}</p>}
          </div>
        </div>
        :  
        <div
          className={`bg-cover bg-center bg-no-repeat w-full h-full flex justify-center items-center transition-all duration-1000 ease-in-out ${animated ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url('/images/${img}')` }}
        >
          {text && <p className="uppercase text-7xl sm:2xl md:text-4xl">{text}</p>}
        </div>}
    </div>
  );
};

export default Banner;
