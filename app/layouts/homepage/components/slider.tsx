import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import Button from "@/app/components/button";
import SectionLayout from "../../section-layout";

const GallerySlider = () => {

  const router = useRouter()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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

  return (
    <SectionLayout>
      <div className="flex flex-col gap-12">
        <Slider {...settings}>
          <div className="cursor-pointer">
            <Image 
              src='/images/gallery-slider-couple.png' 
              width={350} 
              height={300} 
              alt="gallery slider image"
            />
          </div>

          <div className="cursor-pointer">
            <Image 
              src='/images/gallery-slider-couple2.png' 
              width={350} 
              height={300} 
              alt="gallery slider image"         
            />
          </div>

          <div className="cursor-pointer">
            <Image 
              src='/images/gallery-slider-girl.png' 
              width={350} 
              height={300} 
              alt="gallery slider image"   
            />
          </div>

          <div className="cursor-pointer">
            <Image 
              src='/images/gallery-slider-girl2.png' 
              width={350} 
              height={300} 
              alt="gallery slider image"
            />
          </div>

          <div className="cursor-pointer">
            <Image 
              src='/images/gallery-slider-pregnant.png' 
              width={350} 
              height={300} 
              alt="gallery slider image"
            />
          </div>

          <div className="cursor-pointer">
            <Image 
              src='/images/gallery-slider-pregnant.png' 
              width={350} 
              height={300} 
              alt="gallery slider image"
            />
          </div>
        </Slider>
        <div className="flex justify-end">
          <div>
            <Button onClick={() => { router.push('/portfolio')}}>View More</Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default GallerySlider;