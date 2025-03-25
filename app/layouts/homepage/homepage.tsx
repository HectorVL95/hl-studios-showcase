import Banner from "./components/banner";
import About from "./components/about";
import GallerySlider from "./components/slider";
import ServicesHomepage from "./components/services-homepage";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [count, set_count] = useState(0);
  const [shown_image, set_shown_image] = useState('');
  const [animated, set_animated] = useState(false);

  //Pending

  const shown_image_fn = () => {
    if (count === 0) {
      set_shown_image('girl-woods-pic.png');
    } else if ( count === 1) {
      set_shown_image('family-wedding-pic.png');
    } else if (count === 2) {
      set_shown_image('banner-pic.png');
    }
  }

  useEffect(() => {
    const counting = setInterval(() => set_count((prev) => prev >= 2 ? 0 : prev + 1), 2000)
    
    return () => clearInterval(counting)  
  }, [])


//Work to better up the animation
  useEffect(() => {
    set_animated(true)
    shown_image_fn();
    const timeout = setTimeout(() => {set_animated(false)}, 1000)
    
    return () => clearTimeout(timeout)
  }, [count])


  return (
    <>
      <Banner text={'Lets make your story unforgetable'} video="hHEn-1H3w4s" />
      <About />
      <Banner text='' animated={animated} img={shown_image} />
      <GallerySlider />
      <ServicesHomepage />
      <Banner text='' img={'family-wedding-pic.png'}/>
    </>
  );
}

export default Homepage;