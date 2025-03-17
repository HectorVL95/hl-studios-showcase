import Banner from "./components/banner";
import About from "./components/about";
import GallerySlider from "./components/slider";
import ServicesHomepage from "./components/services-homepage";

const Homepage = () => {
  return (
    <>
      <Banner text={'Lets make your story unforgetable'} img={'banner-pic.png'} />
      <About />
      <Banner text='' img={'girl-woods-pic.png'} />
      <GallerySlider />
      <ServicesHomepage />
      <Banner  text='' img={'family-wedding-pic.png'}/>
      
    </>
  );
}

export default Homepage;