import About from "./components/about";
import Banner from "./components/banner";
import { useEffect, useState } from "react";
import GallerySlider from "./components/slider";
import { useResponsive } from "@/app/hooks/useResponsive";
import SliderBigPic from "../../components/slider-big-pic";
import ServicesHomepage from "./components/services-homepage";

const banner_images = [
  'girl-woods-pic.png',
  'family-ha-2.png',
  'banner-pic.png',
  'Jason+Harjot-06.jpg',
  'Jason+Harjot-17.jpg',
  'Jason+Harjot-23.jpg',
  'R+E-104.jpg',
  'R+E-106.jpg',
  'Sam+Kyle-05.jpg',
  'Sam+Kyle-16.jpg',
  'Sam+Kyle-18.jpg',
  'Sam+Kyle-19.jpg',
];

const Homepage = () => {
  const { is_mobile } = useResponsive();
  const [count, set_count] = useState(0);
  const [, set_shown_image] = useState('');
  const [show_slider_big_pic, set_show_slider_big_pic] = useState(false);
  const [selected_image_index, set_selected_image_index] = useState<number | null>(null);
  const [images_loaded, set_images_loaded] = useState(false);

  useEffect(() => {
    const load_image = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `/images/${src}`;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
      });
    };

    const preload_all_images = async () => {
      try {
        await Promise.all(banner_images.map(load_image));
        set_images_loaded(true);
        console.log('All banner images preloaded!');
      } catch (error) {
        console.error('Failed to preload images:', error);
      }
    };

    preload_all_images();
  }, []);

  useEffect(() => {
    if (images_loaded) {
      set_shown_image(banner_images[count]);
      const counting = setInterval(() => set_count((prev) => (prev >= banner_images.length - 1 ? 0 : prev + 1)), 2000);

      return () => clearInterval(counting);
    }
  }, [images_loaded, count]);

  useEffect(() => {
    if (is_mobile) {
      set_show_slider_big_pic(false);
    }
  }, [is_mobile]);

  useEffect(() => {
    if (images_loaded) {
      set_shown_image(banner_images[count]);
    }
  }, [count, images_loaded]);

  if (!images_loaded) {
    return <div>Loading banner images...</div>;
  }

  return (
    <>
      <Banner text={'Lets make your story'} text_bigger="unforgettable" video />
      <About />
      <Banner text='' images={banner_images} current_image_index={count} />
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