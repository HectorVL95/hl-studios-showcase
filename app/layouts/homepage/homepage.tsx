import Banner from "./components/banner";
import About from "./components/about";
import GallerySlider from "./components/slider";
import ServicesHomepage from "./components/services-homepage";

const Homepage = () => {
  return (
    <>
      <Banner text={'Lets make your story unforgetable'} video="hHEn-1H3w4s" />
      <About />
      <Banner img={'girl-woods-pic.png'} />
      <GallerySlider />
      <ServicesHomepage />
      <Banner img={'family-wedding-pic.png'}/>
    </>
  );
}

export default Homepage;