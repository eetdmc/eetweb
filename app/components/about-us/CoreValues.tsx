"use client";
import { motion } from "motion/react";
import AccordionStyleTwo from "../common/AccordionStyleTwo";
import { useState } from "react";
import { moveUp } from "../motionVarients";
import { useTextReveal } from "@/hooks/useTextReveal";
import { AboutData } from "./type";

type CoreValuesProps = {
  data: AboutData["data"]["fourthSection"];
};
const CoreValues = ({ data }: CoreValuesProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  useTextReveal({ selector: ".heading" });

  // Animate subtitles with different settings
  useTextReveal({
    selector: ".subtitle",
    stagger: 0.02,
    duration: 0.4,
    y: 30,
  });
  return (
    <section className="py-10 xl:py-25 2xl:py-[150px] pm-noise">
      <div className="container">
        <div className="max-w-[1106px] mx-auto">
          <h2 className="heading text-50 leading-[1] font-light text-black mb-30px">
            {data.title}
          </h2>
          <div>
            {data.items.map((item, index) => (
              // <AccordionStyleTwo key={index} title={item.title} content={item.content} image={item.icon} isOpen={openIndex === index} onToggle={() => setOpenIndex(index)} />
              <motion.div
                key={index}
                variants={moveUp(index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: "all" }}
              >
                <AccordionStyleTwo
                  title={item.title}
                  content={item.description}
                  image={item.logo}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
