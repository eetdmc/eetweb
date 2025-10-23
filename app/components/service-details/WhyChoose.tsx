"use client";
import Image from "next/image";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { moveDown } from "../motionVarients";
import { ServiceThirdSection } from "./type";

type WhyChooseProps = {
  data: ServiceThirdSection;
};

const WhyChoose = ({ data }: WhyChooseProps) => {
  useTextReveal({ selector: ".heading" });
  return (
    <section className="py-10 xl:py-25 2xl:pt-50 2xl:pb-[269px]">
      <div className="container">
        <h2 className="heading text-50 xl:text-70  font-light leading-[1]  text-black xl:max-w-[15ch]">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-0 lg:grid-cols-3 xl:grid-cols-4 why-choose-wrap mt-6 md:mt-8 lg:mt-10 xl:mt-0">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="pl-5 xl:pl-6 2xl:pl-[47px] pr-5 xl:pr-0 2xl:pr-0 3xl:first:border-l border-primary-light xl:min-h-[506px] flex flex-col xl:last:pt-5 group bg-gray-600/10 xl:bg-transparent py-5 xl:py-0 xl:bg-none justify-between lg:justify-normal"
            >
              <div className="card-head">
                <p className="text-19 leading-lhtext-19 font-inter text-primary crd-index pb-50px">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="text-30 leading-[1.466666666666667] font-light pb-3 xl:pb-[25px]">
                  {item.title}
                </h3>
                <p className="pb-8 xl:pb-10 text-19 font-inter font-light text-foreground max-w-[28ch] lg:pe-2 ">
                  {item.description}
                </p>
              </div>
              <motion.div
                variants={moveDown(index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: "all" }}
                className=""
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={383}
                  height={264}
                  className="h-full w-full    xl:w-[383px] object-contain flex"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
