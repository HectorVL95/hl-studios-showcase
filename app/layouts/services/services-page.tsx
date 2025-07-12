'use client'

import Service from "./components/service";
import SectionLayout from "../section-layout";
import TitlenSubtitle from "@/app/components/title";
import services_data from "@/app/data/services-data";
import { ServiceDataTypes } from "@/app/types/children-props-types";
import { useSearchParams } from "next/navigation";

const ServicesPage = () => {

  const params = useSearchParams();
  const found = params.get('service') ?? '';

  return (
    <SectionLayout>
      <TitlenSubtitle  title='Services' />
      <section className="py-24">
        <div className="flex flex-col gap-12 lg:gap-2">
          {services_data.map((service: ServiceDataTypes, index: number) => 
            <Service
              key={index}
              img={service.img} 
              title={service.title || 'Untitled'} 
              service_card={service.services_card}
              selected_service={found === service.title}
              id_tag={service.id_tag}
            />
          )}
        </div>
        <p>*To book any package, an advance deposit payment of at least 25% of the total payment is required, (no refund for deposit) the rest of the payment has to be done ending the event.</p>
      </section>
    </SectionLayout>   
  );
}

export default ServicesPage;