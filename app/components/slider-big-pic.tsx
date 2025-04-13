import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import Button from "@/app/components/button";
import { usePathname, useRouter } from "next/navigation";
import portfolioPictures from "../data/portfolio-pictures";
import GallerySliderPictures from "@/app/data/gallery-slider-pictures";

type SliderBigPicProps = {
  set_show_slider_big_pic: React.Dispatch<React.SetStateAction<boolean>>;
  selected_image_index: null | number;
  set_selected_image_index: React.Dispatch<React.SetStateAction<null | number>>;
};

const SliderBigPic: React.FC<SliderBigPicProps> = ({
  set_show_slider_big_pic,
  selected_image_index,
  set_selected_image_index,
}) => {
  const path = usePathname();
  const route = useRouter();

  const image_to_show = path === "/" ? GallerySliderPictures : portfolioPictures;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selected_image_index !== null ? selected_image_index : 0,
    adaptiveHeight: true,
    arrows: true,
    className: "custom-slider",
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex justify-center items-center p-4"
      style={{ backgroundColor: "rgba(40, 40, 40, .90)" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative w-full max-w-4xl h-fit max-h-[90vh] flex flex-col gap-4">
        <div className="flex justify-end">
          <IoMdClose
            className="cursor-pointer w-8 h-8 text-white"
            onClick={() => {
              set_show_slider_big_pic(false);
              set_selected_image_index(null);
            }}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Slider {...settings} className="w-full relative">
            {image_to_show.map((el) => (
              <div key={el.id} className="w-full h-[70vh] flex justify-center items-center">
                <div className="relative w-full h-full max-h-[760px]">
                  <Image
                    src={el.src}
                    alt="gallery slider image"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 768px"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {path !== "/portfolio" && (
          <div className="flex justify-center items-center mt-4">
            <Button onClick={() => route.push("/portfolio")}>View More</Button>
          </div>
        )}
      </div>
      <style jsx global>{`
        .custom-slider .slick-prev,
        .custom-slider .slick-next {
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        .custom-slider .slick-prev {
          left: -35px;
        }
        .custom-slider .slick-next {
          right: -35px;
        }
        .slick-prev:before,
        .slick-next:before {
          color: white;
          font-size: 28px;
        }
      `}</style>
    </motion.div>
  );
};

export default SliderBigPic;
