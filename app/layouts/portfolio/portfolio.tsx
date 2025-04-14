'use client'

import Image from "next/image";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import SectionLayout from "../section-layout";
import { useTheme } from '@mui/material/styles';
import TitlenSubtitle from "@/app/components/title";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useResponsive } from "@/app/hooks/useResponsive";
import SliderBigPic from "@/app/components/slider-big-pic";
import portfolioPictures from "@/app/data/portfolio-pictures";

const Portfolio = () => {
  const {is_mobile} = useResponsive();
  const [show_slider_big_pic, set_show_slider_big_pic] = useState(false);
  const [selected_image_index, set_selected_image_index] = useState<number | null>(null);
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  let columns = 1
  if (isXs) columns = 1
  else if (isSm) columns = 2
  else if (isMd) columns = 3
  else if (isLg) columns = 4

  const handle_open_big_slider = (id:number) => {
    if(is_mobile) {
      return;
    }
    set_show_slider_big_pic(true);
    set_selected_image_index(id);
  }

  useEffect(() => {
    if (is_mobile) {
      set_show_slider_big_pic(false);
    }
  }, [is_mobile]);

  return (
    <SectionLayout>
      <TitlenSubtitle title={'Portfolio'} />
      <div className="py-24 flex justify-center">
      <Masonry columns={columns} spacing={2}>
        {portfolioPictures.map((el) => (
          <Image
            key={el.id}
            src={el.src}
            alt={el.alt}
            width={300}
            height={300}
            className={`rounded-[25px] ${!is_mobile && 'cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95'}`}
            onClick={() => handle_open_big_slider(el.id)}
            loading="lazy"
          />
        ))}
      </Masonry>
      </div>
      {
        !is_mobile && show_slider_big_pic && 
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