'use client'

import Image from "next/image"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceCard from "./service-card";

const Service = () => {

  const [accordion_open, set_accordion_open] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-24">
        <Image src='/images/service-wedding.png' width={540} height={540} alt="image"/>
        <div className="flex items-center">
          <p className="text-7xl">Weddings</p>
        </div>
      </div>
      <div>
        {
          accordion_open && 
          <div className="flex gap-8 justiy-center items-start">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        }
        <div className="flex gap-4 items-center">
          <div className="border-b-white border-b-[2px] w-full"></div>
          {
            accordion_open ? 
              <FaChevronUp className="w-8 h-8" onClick={() => set_accordion_open(false)} /> 
            : 
              <FaChevronDown className="w-8 h-8" onClick={() => set_accordion_open(true)}/>
          }
        </div>
      </div>
    </div>
  );
}

export default Service;