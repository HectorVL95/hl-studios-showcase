import Image from "next/image"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Service = () => {
  return (
    <div>
      <div className="flex gap-24">
        <Image src='/images/service-wedding.png' width={540} height={540} alt="image"/>
        <div className="flex items-center">
          <p className="text-7xl">Weddings</p>
        </div>
      </div>
      <Accordion sx={{backgroundColor: '#1e1e1e', borderColor: '#fff', border: 'none'}}>
        <AccordionSummary 

          expandIcon={<FaChevronDown/>}>
        </AccordionSummary>
        <AccordionDetails>
          <p>Hi there</p>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

export default Service;