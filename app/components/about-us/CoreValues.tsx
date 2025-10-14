"use client";
import AccordionStyleTwo from "../common/AccordionStyleTwo";
import { useState } from "react";

type CoreValuesProps = {
    title: string;
    data: {
        title: string;
        content: string;
        icon: string;
    }[];
}
const CoreValues = ({ title, data }: CoreValuesProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return ( 
    <section className="py-10 xl:pt-25 xl:pb-[300px] 2xl:pb-[400px] 2xl:pt-50">
      <div className="container">
        <div className="max-w-[1106px] mx-auto">
          <h2 className="text-70 leading-[1] font-light text-black mb-30px">{title}</h2>
          <div>
            {data.map((item, index) => (
                // <AccordionStyleTwo key={index} title={item.title} content={item.content} image={item.icon} isOpen={openIndex === index} onToggle={() => setOpenIndex(index)} />
              <AccordionStyleTwo key={index} title={item.title} content={item.content} image={item.icon}
               isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
            ))}
          </div>
        </div>

      </div>
    </section>
   );
}
 
export default CoreValues;