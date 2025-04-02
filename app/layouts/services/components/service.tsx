'use client'

import Link from "next/link";
import Image from "next/image"
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ServiceProps } from "@/app/types/children-props-types";
import { motion } from "motion/react";
import { useResponsive } from "@/app/hooks/useResponsive";

const Service: React.FC<ServiceProps> = ({ img, title, service_card, selected_service, id_tag }) => {
  const [accordion_open, set_accordion_open] = useState(selected_service || false);
  const { is_mobile } = useResponsive();

  useEffect(() => {
    if(selected_service) {
      set_accordion_open(true)
    }
  }, [selected_service])

  return (
    <div className="flex flex-col gap-8" id={id_tag}>
      <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-24">
        <Image src={img} width={540} height={540} alt="image"/>
        <div className="flex justify-center items-center">
          {service_card ? 
            <p className="text-5xl lg:text-7xl">{title}</p> 
              : 
            <p className="text-7xl">For any custom inquiries {is_mobile ? 'tap' : 'click'} <Link href={'/contact'} className="underline">here</Link></p>
          }
        </div>
      </div>
      <div>
        <motion.div
          initial={{height: 0, opacity: 0}}
          animate={{height: accordion_open ? 'auto' : 0, opacity: accordion_open ? 1 : 0}}
          transition={{duration: 0.3, ease: 'easeInOut'}}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-8 justify-center items-start">
            {
              service_card && service_card.map((el, index) => 
                <article key={index} className="flex flex-col gap-4 bg-[#282828] border p-[30px] min-w-[360px] max-w-[400px] border-none gap-4 rounded-[20px]">
                  <p className="text-2xl font-bold text-center">{el.title}</p>
                  <h3 className="text-5xl font-bold text-center">
                    {el.price}
                  </h3>
                  <ul>
                    {el.services.map((li, indx) => (
                      <li key={indx} className="flex items-center gap-4">
                        <div>
                          <FaCircleCheck />
                        </div>
                        <p className="text-[20px] font-bold">{li}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            }
          </div>
        </motion.div>
       {service_card && <div className="flex gap-4 items-center">
          <div className="border-b-white border-b-[2px] w-full"></div>
          {
            accordion_open ? 
              <FaChevronUp className="w-8 h-8 cursor-pointer" onClick={() => set_accordion_open(false)} /> 
            : 
              <FaChevronDown className="w-8 h-8 cursor-pointer" onClick={() => set_accordion_open(true)}/>
          }
        </div>}
      </div>
    </div>
  );
}

export default Service;