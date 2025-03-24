import Service from "./components/service";
import SectionLayout from "../section-layout";
import TitlenSubtitle from "@/app/components/title";
import services_data from "@/app/data/services-data";
import { ServiceDataTypes } from "@/app/types/children-props-types";

const ServicesPage = () => {
  return (
    <SectionLayout>
      <TitlenSubtitle  title='Services' />
      <SectionLayout>
      <div className="flex flex-col gap-12 lg:gap-2">
        {services_data.map((service: ServiceDataTypes, index: number) => 
          <Service
            key={index}
            img={service.img} 
            title={service.title} 
            service_card={service.services_card} 
          />
        )}
        </div>
      </SectionLayout>
    </SectionLayout>   
  );
}

export default ServicesPage;