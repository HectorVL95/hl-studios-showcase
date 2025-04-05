import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import Button from "@/app/components/button";
import SectionLayout from "../../section-layout";
import GallerySliderPictures from "@/app/data/gallery-slider-pictures";
import { motion } from "motion/react";
import { useResponsive } from "@/app/hooks/useResponsive";

type GallerySliderProps  = {
  set_show_slider_big_pic: React.Dispatch<React.SetStateAction<boolean>>
  set_selected_image_index: React.Dispatch <React.SetStateAction<null | number>>
}

const GallerySlider: React.FC<GallerySliderProps> = ({ set_show_slider_big_pic, set_selected_image_index }) => {
  const router = useRouter()
  const { is_mobile } = useResponsive();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handle_show_slider_big_pic = () => {
    if (is_mobile) return;
    set_show_slider_big_pic(true)
  }

  return (
    <SectionLayout>
      <div className="flex flex-col gap-12">
        <Slider {...settings}>   
          {
            GallerySliderPictures.map(el => 
              <Image 
                src={el.src} 
                width={350} 
                height={300} 
                alt="gallery slider image"
                className="cursor-pointer py-4 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" 
                onClick={() => {handle_show_slider_big_pic(); set_selected_image_index(el.id);}}
              />
          )}
        </Slider>
        <div className="flex justify-center lg:justify-end">
          <Button onClick={() => { router.push('/portfolio')}}>View More</Button>
        </div>
      </div>
    </SectionLayout>
  );
}

export default GallerySlider;