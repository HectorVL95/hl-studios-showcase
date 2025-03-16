import Banner from "./components/banner";
import About from "./components/about";
import GallerySlider from "./components/slider";
import ServicesHomepage from "./components/services-homepage";
import Footer from "../footer";

const Homepage = () => {
  return (
    <>
      <Banner text={'Lets make your story unforgetable'} img={'banner-pic.png'} />
      <About />
      <Banner text='' img={'girl-woods-pic.png'} />
      <GallerySlider />
      <ServicesHomepage />
      <Banner  text='' img={'family-wedding-pic.png'}/>
      <Footer />
    </>
  );
}

export default Homepage;