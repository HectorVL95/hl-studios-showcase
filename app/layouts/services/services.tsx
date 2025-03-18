import SectionLayout from "../section-layout";
import TitlenSubtitle from "@/app/components/title";
import Service from "./components/service";

const Services = () => {
  return (
    <SectionLayout>
      <TitlenSubtitle  title='Services' />
      <Service />
    </SectionLayout>   
  );
}

export default Services;