"use client";
import AccordionStyleThree from "../common/AccordionStyleThree";
import { serviceDetailsData } from "./data";
import { useState } from "react";

const ServiceOfferings = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return ( 
    <section className="sec-noise py-15 xl:pt-25 2xl:pt-[139px] 2xl:pb-[300px]">
      <div className="container">
        <div className="ml-container">
          <h2 className="text-50 xl:text-70  font-light leading-[1] mb-5 xl:mb-10 2xl:mb-20 text-black">Our MICE Offerings</h2>
        </div>
        <div>
          {
            serviceDetailsData.offerings.items.map((item, index) => (
              <AccordionStyleThree key={index} title={item.title} content={item.content} image={item.image}
                isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} index={index} />
            ))
          }
        </div>
      </div>
    </section>
   );
}
 
export default ServiceOfferings;