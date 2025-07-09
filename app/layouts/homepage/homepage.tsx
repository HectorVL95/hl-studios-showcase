import About from "./components/about";
import Banner from "./components/banner";
import { useEffect, useState } from "react";
import GallerySlider from "./components/slider";
import { useResponsive } from "@/app/hooks/useResponsive";
import SliderBigPic from "../../components/slider-big-pic";
import ServicesHomepage from "./components/services-homepage";

const Homepage = () => {
  const { is_mobile } = useResponsive();
  const [count, set_count] = useState(0);
  const [animated, set_animated] = useState(false);
  const [shown_image, set_shown_image] = useState('');
  const [show_slider_big_pic, set_show_slider_big_pic] = useState(false);
  const [selected_image_index, set_selected_image_index] = useState<number | null>(null);

  const shown_image_fn = () => {
    if (count === 0) {
      set_shown_image('girl-woods-pic.png');
    } else if ( count === 1) {
      set_shown_image('family-ha-2.png');
    } else if (count === 2) {
      set_shown_image('banner-pic.png');
    }
  }

  useEffect(() => {
    const counting = setInterval(() => set_count((prev) => prev >= 2 ? 0 : prev + 1), 2000);
    
    return () => clearInterval(counting);
  }, []);

  useEffect(() => {
    if (is_mobile) {
      set_show_slider_big_pic(false);
    }
  }, [is_mobile]);

  useEffect(() => {
    shown_image_fn();
    const timeout = setTimeout(() => {set_animated(false)}, 1000);
    
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <>
      <Banner text={'Lets make your story'} text_bigger="unforgettable" video />
      <About />
      <Banner text='' animated={animated} img={shown_image} />
      {show_slider_big_pic && 
        <SliderBigPic  
          set_show_slider_big_pic={set_show_slider_big_pic}
          selected_image_index={selected_image_index}
          set_selected_image_index={set_selected_image_index}
        />
      }
      <GallerySlider 
      set_show_slider_big_pic={set_show_slider_big_pic} 
      set_selected_image_index={set_selected_image_index}
      />
      <ServicesHomepage />
      <Banner text='' img={'family-wedding-pic.png'} />
    </>
  );
}

export default Homepage;