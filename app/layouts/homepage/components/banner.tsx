import { BannerProps } from "@/app/types/children-props-types";

const Banner: React.FC<BannerProps> = ({ text, text_bigger, img, video, animated }) => {
  return (
    <section className="h-[320px] sm:h-[480px] md:h-[600px] lg:h-[800px] xl:h-[900px] w-full">
    { video ?
        <div className="relative w-full h-full">
          <video autoPlay loop playsInline muted src="videos/bridal-dress_video_1080p_original.mp4" className="w-full h-full object-cover relative" />
          {text && 
          <div className="flex flex-col absolute inset-0 items-center justify-center ">
            <p className="uppercase text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center">{text}</p>
            {text_bigger && <p className="uppercase text text-center text-[28px] sm:text-[51px] md:text-[86px] lg:text-[103px] xl:text-[137px] mr-[6px]">{text_bigger}</p>}
          </div>
            }
        </div>
        :
        <div
          className={`bg-cover bg-center bg-no-repeat w-full h-full flex justify-center items-center transition-all duration-1000 ease-in-out ${animated ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url('/images/${img}')` }}
        >
        {text && <p className="uppercase text-7xl sm:2xl md:text-4xl">{text}</p>}
        </div>}
    </section>
  );
};

export default Banner;