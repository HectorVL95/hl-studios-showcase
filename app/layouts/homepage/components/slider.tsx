import React from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import Button from "@/app/components/button";
import SectionLayout from "../../section-layout";
import { useResponsive } from "@/app/hooks/useResponsive";
import GallerySliderPictures from "@/app/data/gallery-slider-pictures";
import portfolioPictures from "@/app/data/portfolio-pictures";

type GallerySliderProps  = {
  set_show_slider_big_pic: React.Dispatch<React.SetStateAction<boolean>>
  set_selected_image_index: React.Dispatch <React.SetStateAction<null | number>>
}

const GallerySlider: React.FC<GallerySliderProps> = ({ set_show_slider_big_pic, set_selected_image_index }) => {
  const router = useRouter()
  const { is_mobile } = useResponsive();

    const home_page_slider = portfolioPictures.filter(el => el.id === 1 || el.id === 6 || el.id === 46 || el.id === 48 || el.id === 60)

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
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
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

  const handle_show_slider_big_pic = (id: number) => {
    if (is_mobile) return;
    set_show_slider_big_pic(true);
    set_selected_image_index(id);
  }

  return (
    <SectionLayout>
      <div className={`flex flex-col gap-12 ${is_mobile && 'px-4'}home-slider`}>
        <Slider {...settings}>
        {home_page_slider.map(el => (
          <div key={el.id} className="cursor-pointer hover:scale-[1.1] active:scale-[0.9] ease-in-out duration-300 px-8">
            <div
              className="h-[300px] w-full sm:w-[250px] md:w-[300px] lg:w-[350px] bg-cover bg-center rounded-3xl "
              style={{ backgroundImage: `url(${el.src})` }}
              onClick={() => handle_show_slider_big_pic(el.id)}
            />
          </div>
        ))}
      </Slider>
        <div className="flex justify-center lg:justify-end">
          <Button onClick={() => { router.push('/portfolio')}}>View More</Button>
        </div>
      </div>
    </SectionLayout>
  );
}

export default GallerySlider;