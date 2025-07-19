import { BannerProps } from "@/app/types/children-props-types";
import { useState, useEffect } from "react";

interface NewBannerProps extends BannerProps {
  images?: string[];
  current_image_index?: number;
}

const Banner: React.FC<NewBannerProps> = ({ text, text_bigger, img, video, images, current_image_index }) => {
  const [prev_image_index, set_prev_image_index] = useState<number | null>(null);
  const [active_image_index, set_active_image_index] = useState<number | null>(null);

  useEffect(() => {
    if (images && current_image_index !== undefined) {
      set_active_image_index(current_image_index);

      if (prev_image_index !== null && prev_image_index !== current_image_index) {
        const timer = setTimeout(() => {
          set_prev_image_index(null);
        }, 1000);
        return () => clearTimeout(timer);
      }
      set_prev_image_index(current_image_index);
    } else {
      set_active_image_index(null);
      set_prev_image_index(null);
    }
  }, [current_image_index, images]);

  if (img && !images) {
    return (
      <section className="h-[320px] sm:h-[480px] md:h-[600px] lg:h-[800px] xl:h-[900px] w-full">
        <div
          className={`bg-cover bg-center bg-no-repeat w-full h-full flex justify-center items-center`}
          style={{ backgroundImage: `url('/images/${img}')` }}
        >
          {text && <p className="uppercase text-7xl sm:2xl md:text-4xl">{text}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="h-[320px] sm:h-[480px] md:h-[600px] lg:h-[800px] xl:h-[900px] w-full relative overflow-hidden">
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
        <div className="relative w-full h-full">
          {images && images.map((image_path, index) => (
            <div
              key={image_path}
              className={`
                absolute inset-0 bg-cover bg-center bg-no-repeat
                transition-opacity duration-1000 ease-in-out
                ${index === active_image_index ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                backgroundImage: `url('/images/${image_path}')`,
                zIndex: index === active_image_index ? 2 : (index === prev_image_index ? 1 : 0),
              }}
            />
          ))}
          {text && <p className="uppercase text-7xl sm:2xl md:text-4xl absolute inset-0 flex justify-center items-center z-30">{text}</p>}
        </div>
      }
    </section>
  );
};

export default Banner;