import Service from "./components/service";
import SectionLayout from "../section-layout";
import TitlenSubtitle from "@/app/components/title";
import services_data from "@/app/data/services-data";
import { ServiceDataTypes } from "@/app/types/children-props-types";

const ServicesPage = () => {
  return (
    <SectionLayout>
      <TitlenSubtitle  title='Services' />
      {services_data.map((service: ServiceDataTypes, index: number) => 
        <Service
          key={index}
          img={service.img} 
          title={service.title} 
          service_card={service.services_card} 
        />
      )}
    </SectionLayout>   
  );
}

export default ServicesPage;