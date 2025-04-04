'use client'

import TitlenSubtitle from "@/app/components/title";
import SectionLayout from "../section-layout";
import Masonry from "@mui/lab/Masonry";
import portfolioPictures from "@/app/data/portfolio-pictures";
import Image from "next/image";
import { useState } from "react";
import SliderBigPic from "@/app/components/slider-big-pic";

const Portfolio = () => {
  const [show_slider_big_pic, set_show_slider_big_pic] = useState(false)
  const [selected_image_index, set_selected_image_index] = useState<number | null>(null)

  //Pending working on it
  
  return (
    <SectionLayout>
      <TitlenSubtitle title={'Portfolio'} />
      <div className="py-24">
        <Masonry columns={4} spacing={2}>
          {
            portfolioPictures.map((el) => 
            <Image
              key={el.id}
              src={el.src}
              alt={el.alt}
              width={300}
              height={300}
              className="rounded-[25px] cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() => {set_show_slider_big_pic(true), set_selected_image_index(el.id)}}
            />

          )
          }
        </Masonry>
      </div>
      {
        show_slider_big_pic && 
          <SliderBigPic  
            set_show_slider_big_pic={set_show_slider_big_pic}
            selected_image_index={selected_image_index}
            set_selected_image_index={set_selected_image_index}
          />
      }
    </SectionLayout>
  );
}

export default Portfolio;