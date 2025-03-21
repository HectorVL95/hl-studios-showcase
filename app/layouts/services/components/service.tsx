'use client'

import Image from "next/image"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ServiceProps } from "@/app/types/children-props-types";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";


const Service: React.FC<ServiceProps> = ({ img, title, service_card }) => {

  const [accordion_open, set_accordion_open] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-24">
        <Image src={img} width={540} height={540} alt="image"/>
        <div className="flex items-center">
          {service_card ? 
            <p className="text-7xl">{title}</p> 
              : 
            <p className="text-7xl">For For any custom inquiries click <Link href={'/contact'}>Here</Link></p>
          }
        </div>
      </div>
      <div>
        {
          accordion_open && 
          <div className="flex gap-8 justify-center items-start">
            {
              service_card && service_card.map((el, index) => 
                <article key={index} className="flex flex-col gap-4 bg-[#282828] border p-[30px] w-[360px] border-none gap-4 rounded-[20px]">
                  <p className="text-2xl font-bold textn-center">{el.title}</p>
                  <h3 className="text-5xl font-bold text-center">
                    {el.price}
                  </h3>
                  <ul>
                    {el.services.map((li, indx) => (
              
                      <li key={indx} className="flex items-center gap-4">
                        <FaCircleCheck />
                        <p className="text-[20px] font-bold">{li}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              )

            }
          </div>
        }
       {service_card && <div className="flex gap-4 items-center">
          <div className="border-b-white border-b-[2px] w-full"></div>
          {
            accordion_open ? 
              <FaChevronUp className="w-8 h-8" onClick={() => set_accordion_open(false)} /> 
            : 
              <FaChevronDown className="w-8 h-8" onClick={() => set_accordion_open(true)}/>
          }
        </div>}
      </div>
    </div>
  );
}

export default Service;