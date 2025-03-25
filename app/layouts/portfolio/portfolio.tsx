import TitlenSubtitle from "@/app/components/title";
import SectionLayout from "../section-layout";
import { Masonry } from "@mui/lab";

const Portfolio = () => {
  return (
    <SectionLayout>
      <TitlenSubtitle title={'Portfolio'} />
      <Masonry columns={3} spacing={3}>

      </Masonry>
    </SectionLayout>
  );
}

export default Portfolio;