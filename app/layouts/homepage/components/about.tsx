import Image from "next/image";
import SectionLayout from "../../section-layout";
import TitlenSubtitle from "@/app/components/title";

const About = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-12">
        <TitlenSubtitle title='About' />
        <div className="flex justify-center gap-24 lg:gap-48 items-center flex-col">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <Image src='/images/about-pic.png' width={530} height={530} alt="Self Shooting" className="rounded-[20px]"/>
            <div>
              <p className="text-[32px] align-middle text-center lg:text-left">
                Welcome to H&L STUDIOS, a creative studio dedicated to capturing life&apos;s most precious moments. With a passion for storytelling and a keen eye for detail, we aim to deliver exceptional Photography & Videography services that exceed your expectations.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
            <Image src='/images/self-shoot.png' width={530} height={530} alt="Shooting" className="rounded-[20px]"/>
            <div>
              <p className="text-[32px] align-middle text-center lg:text-left">
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