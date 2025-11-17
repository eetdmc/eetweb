"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface ServiceItem {
  title: string;
  desc1: string;
  desc2: string;
  image: string;
}

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ServicesSection = ({ servicesData }: { servicesData: ServiceItem[] }) => {
  return (
    <section className="w-full pt-10 pb-35 md:pt-16 md:pb-40 lg:pt-20 lg:pb-60  2xl:pt-[100px] 2xl:pb-[315px]">
      <div className="container flex flex-col gap-[50px] xl:gap-[100px]">
        {servicesData.map((item, index) => {
          const isImageLeft = index % 2 === 0;
          const animationVariant = isImageLeft ? slideLeft : slideRight;

          return (
            <motion.div
              key={index}
              variants={animationVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col xl:flex-row items-center opacity-0 gap-[20px] lg:gap-[40px] xl:gap-[70px] ${
                isImageLeft ? "" : "xl:flex-row-reverse"
              }`}
            >
              {/* IMAGE */}
              <div className="flex-shrink-0 w-full xl:w-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={729}
                  height={1484}
                  className="w-full xl:w-[729px] h-auto object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-[15px] lg:gap-[30px] text-black font-light">
                <h2 className="text-50 font-sans leading-[1]">{item.title}</h2>
                <p className="text-19 font-inter leading-[1.526315789473684]">
                  {item.desc1}
                </p>
                <p className="text-19 font-inter leading-[1.526315789473684]">
                  {item.desc2}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
