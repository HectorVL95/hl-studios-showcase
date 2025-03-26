import Slider from "react-slick";
import Image from "next/image";
import Button from "@/app/components/button";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import React from "react";

type SliderBigPicProps = {
  set_show_slider_big_pic: React.Dispatch<React.SetStateAction<boolean>>
}

//Pending

const SliderBigPic: React.FC<SliderBigPicProps> = ({ set_show_slider_big_pic }) => {
  const path = useRouter();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 absolute w-full h-full z-11 bg-[#282828]">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <IoMdClose className="cursor-pointer" onClick={() => set_show_slider_big_pic(false)}/>
        </div>
        <div>
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
          <div>
            <Button onClick={() => {path.push('/portfolio')}}>View More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderBigPic;