"use client";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import { ServiceFourthSection } from "./type";

type OurProcessProps = {
  data: ServiceFourthSection;
};

const OurProcess = ({ data }: OurProcessProps) => {
  const items = data.items;
  useTextReveal({ selector: ".heading" });
  return (
    <section className="pt-10 pb-45 xl:py-25 2xl:pt-[139px] 2xl:pb-[400px] pm-noise">
      <div className="container">
        <div className="ml-container-big">
          <h2 className="heading text-50 xl:text-70  font-light leading-[1] mb-10 xl:mb-15 2xl:mb-25 text-black xl:max-w-[15ch]">
            {data.title}
          </h2>
          <div className="process-grid flex flex-col md:grid">
            <div className=""></div>
            <div className="md:pl-3 xl:pl-30px sm-csst order1 ">
              <div className="sm-layout">
                <div>
                  <motion.h3
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="text-[20px] xl:text-30 leading-[1.466666666666667] font-light text-black mb-1 md:mb-4 lg:mb-[25px]"
                  >
                    {items[0].title}
                  </motion.h3>
                  <motion.p
                    variants={moveUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="text-sm xl:text-19 leading-lhtext-19 font-light font-inter"
                  >
                    {items[0].description}
                  </motion.p>
                </div>
                <div className="pr-num">
                  <h4 className="text-primary text-19 leading-lhtext-19 font-light font-inter">
                    01
                  </h4>
                </div>
              </div>
            </div>
            <div className="md:pl-3 xl:pl-30px sm-csst order3 ">
              <div className="sm-layout">
                <div>
                  <motion.h3
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="text-[20px] xl:text-30 leading-[1.466666666666667] font-light text-black mb-1 md:mb-4 lg:mb-[25px]"
                  >
                    {items[1].title}
                  </motion.h3>
                  <motion.p
                    variants={moveUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="text-sm xl:text-19 leading-lhtext-19 font-light font-inter"
                  >
                    {items[1].description}
                  </motion.p>
                </div>
                <div className="pr-num">
                  <h4 className="text-primary text-19 leading-lhtext-19 font-light font-inter">
                    03
                  </h4>
                </div>
              </div>
            </div>
            <div className=""></div>
            <div className="md:pl-3 xl:pl-30px flex flex-col justify-end sm-csst order2">
              <div className="sm-layout">
                <div>
                  <motion.h3
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="text-[20px] xl:text-30 leading-[1.466666666666667] font-light text-black mb-1 md:mb-4 lg:mb-[25px]"
                  >
                    {items[2].title}
                  </motion.h3>
                  <motion.p
                    variants={moveUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="text-sm xl:text-19 leading-lhtext-19 font-light font-inter"
                  >
                    {items[2].description}
                  </motion.p>
                </div>
                <div className="pr-num">
                  <h4 className="text-primary text-19 leading-lhtext-19 font-light font-inter">
                    02
                  </h4>
                </div>
              </div>
            </div>
            <div className="md:pl-3 xl:pl-30px flex flex-col justify-end sm-csst order4">
              <div className="sm-layout">
                <div>
                  <motion.h3
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="text-[20px] xl:text-30 leading-[1.466666666666667] font-light text-black mb-1 md:mb-4 lg:mb-[25px]"
                  >
                    {items[3].title}
                  </motion.h3>
                  <motion.p
                    variants={moveUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="text-sm xl:text-19 leading-lhtext-19 font-light font-inter"
                  >
                    {items[3].description}
                  </motion.p>
                </div>
                <div className="pr-num">
                  <h4 className="text-primary text-19 leading-lhtext-19 font-light font-inter">
                    04
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
