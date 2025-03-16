import Image from "next/image";
import SectionLayout from "../../section-layout";

const About = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-12">
        <h3 className="text-6xl font-bold">About</h3>
        <div className="flex justify-center gap-48 items-center flex-col">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            <Image src='/images/about-pic.png' width={530} height={300} alt="Self Shooting" className="rounded-[20px]"/>
            <div>
              <p className="text-[32px] align-middle font-semibold">
                Welcome to H&L STUDIOS, a creative studio dedicated to capturing life's most precious moments. With a passion for storytelling and a keen eye for detail, we aim to deliver exceptional Photography & Videography services that exceed your expectations.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-24 items-center">
            <Image src='/images/self-shoot.png' width={530} height={300} alt="Shooting" className="rounded-[20px]"/>
            <div>
              <p className="text-[32px] align-middle font-semibold">
                From portraits to weddings or any type of social event as well as commercial shoots and social media projects, we are committed to providing high-quality images that tell your unique story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default About;