"use client";
import AccordionStyleThree from "../common/AccordionStyleThree";
import { useState } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { ServiceSecondSection } from "./type";

type ServiceOfferingsProps = {
  data: ServiceSecondSection;
};
const ServiceOfferings = ({ data }: ServiceOfferingsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  useTextReveal({ selector: ".heading" });
  return (
    <section className="sec-noise py-10 xl:pt-25 2xl:pt-[139px] 2xl:pb-[150px]">
      <div className="container">
        <div className="ml-container">
          <h2 className="heading text-50 xl:text-70  font-light leading-[1] mb-8   xl:mb-10 2xl:mb-20 text-black">
            Our MICE Offerings
          </h2>
        </div>
        <div>
          {data.items.map((item, index) => (
            <AccordionStyleThree
              key={index}
              title={item.title}
              content={item.description}
              image={item.image}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
