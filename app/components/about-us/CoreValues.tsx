"use client";
import { motion } from "motion/react";
import AccordionStyleTwo from "../common/AccordionStyleTwo";
import { useState } from "react";
import { moveUp } from "../motionVarients";
import { useTextReveal } from "@/hooks/useTextReveal";

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
    useTextReveal({ selector: '.heading' });
  
    // Animate subtitles with different settings
    useTextReveal({
      selector: '.subtitle',
      stagger: 0.02,
      duration: 0.4,
      y: 30,
    });

  return ( 
    <section className="pt-10 pb-45 xl:pt-25 md:pb-[300px] xl:pb-[300px] 2xl:pb-[400px] 2xl:pt-50">
      <div className="container">
        <div className="max-w-[1106px] mx-auto">
          <h2 className="heading text-70 leading-[1] font-light text-black mb-30px">{title}</h2>
          <div>
            {data.map((item, index) => (
                // <AccordionStyleTwo key={index} title={item.title} content={item.content} image={item.icon} isOpen={openIndex === index} onToggle={() => setOpenIndex(index)} />
              <motion.div key={index} variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}}>
                <AccordionStyleTwo title={item.title} content={item.content} image={item.icon} isOpen={openIndex === index} onToggle={() => setOpenIndex(index)} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
   );
}
 
export default CoreValues;