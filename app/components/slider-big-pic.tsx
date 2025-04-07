import Slider from "react-slick";
import Image from "next/image";
import Button from "@/app/components/button";
import { IoMdClose } from "react-icons/io";
import React from "react";
import GallerySliderPictures from "@/app/data/gallery-slider-pictures";
import { motion } from "motion/react"
import { usePathname } from "next/navigation";
import portfolioPictures from "../data/portfolio-pictures";
import Portfolio from "../layouts/portfolio/portfolio";


type SliderBigPicProps = {
  set_show_slider_big_pic: React.Dispatch<React.SetStateAction<boolean>>
  selected_image_index: null | number
  set_selected_image_index: React.Dispatch<React.SetStateAction<null | number>>
}

//Pending

const SliderBigPic: React.FC<SliderBigPicProps> = ({ set_show_slider_big_pic, selected_image_index, set_selected_image_index }) => {
  const path = usePathname();
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:   1,
    slidesToScroll: 1,
    initialSlide: selected_image_index | 0,
  };

  const image_to_show = path === '/' ? GallerySliderPictures : portfolioPictures

  return (
    <motion.div 
      className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 absolute w-full h-full z-11"
      style={{ backgroundColor: "rgba(40, 40, 40, .90)" }} 
      initial={{opacity: 0, scale: 0.8}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale:0.8}}
      transition={{duration: 0.3, ease: 'easeInOut'}}
    >
      <div className={`flex justify-center flex-col gap-8 max-w-[768px]`}>
        <div className="flex justify-end">
          <IoMdClose className="cursor-pointer w-8 h-8" onClick={() => {set_show_slider_big_pic(false); set_selected_image_index(null)} }/>
        </div>
          <Slider {...settings}>
            {image_to_show.map(el => 
              <div key={el.id} className="cursor-pointer" >
                <Image 
                  src={el.src} 
                  width={path === '/portfolio'? 600 : 760}
                  height= {path === '/portfolio'? 600 : 760}
                  alt="gallery slider image"
                />
              </div> 
            )}
          </Slider>
          {path === "/portfolio" ? null : <div className="flex justify-center items-center">
            <Button onClick={() => {path.push('/portfolio')}}>View More</Button>
          </div>}
      </div>
    </motion.div>
  );
}

export default SliderBigPic;