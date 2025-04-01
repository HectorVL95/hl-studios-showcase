import TitlenSubtitle from "@/app/components/title";
import SectionLayout from "../section-layout";
import Masonry from "@mui/lab/Masonry";
import portfolioPictures from "@/app/data/portfolio-pictures";
import Image from "next/image";

const Portfolio = () => {
  return (
    <SectionLayout>
      <TitlenSubtitle title={'Portfolio'} />
      <div>
        <Masonry columns={4} spacing={2}>
          {
            portfolioPictures.sort(() => Math.random() - 0.5).map(el => 
              <Image
                key={el.id}
                src={el.src}
                alt={el.alt}
                width={300}
                height={300}
              />
            )
          }
        </Masonry>
      </div>
    </SectionLayout>
  );
}

export default Portfolio;