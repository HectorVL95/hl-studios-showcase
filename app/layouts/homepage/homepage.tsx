import Banner from "./components/banner";
import About from "./components/about";
import GallerySlider from "./components/slider";

const Homepage = () => {
  return (
    <>
      <Banner text={'Lets make your story unforgetable'} img={'banner-pic.png'} />
      <About />
      <Banner text='' img={'girl-woods-pic.png'} />
      <GallerySlider />
    </>
  );
}

export default Homepage;