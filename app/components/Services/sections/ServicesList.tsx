"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ServiceProps } from "../type";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

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

const ServicesSection = ({ servicesData }: { servicesData: ServiceProps['secondSection'] }) => {
    const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("title")) {

      console.log(searchParams.get("title"));
      const handleLoad = () => {
        const el = document.getElementById(searchParams.get("title") || "");
        console.log(el)
        if (el) {
          const yOffset = -80;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      window.addEventListener("load", handleLoad);
      const timeout = setTimeout(handleLoad, 500);

      return () => {
        clearTimeout(timeout);
        window.removeEventListener("load", handleLoad);
      };
    }
  }, [searchParams]);

  return (
    <section className="w-full pt-10 pb-35 md:pt-16 md:pb-40 lg:pt-20 lg:pb-60  2xl:pt-[100px] 2xl:pb-[315px] overflow-hidden">
      <div className="container flex flex-col gap-[50px] xl:gap-[100px]">
        {servicesData.items.map((item, index) => {
          const isImageLeft = index % 2 === 0;
          const animationVariant = isImageLeft ? slideLeft : slideRight;

          return (
            <motion.div
              key={index}
              id={item.title.replace(/\s+/g, "-").toLowerCase()}
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
                  alt={item.imageAlt}
                  width={729}
                  height={1484}
                  className="w-full xl:w-[729px] h-auto object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-[15px] lg:gap-[30px] text-black font-light">
                <h2 className="text-50 font-sans leading-[1]">{item.title}</h2>
                <div>
                    {item.description.split("\n").map((item,index)=>(
                      <div key={index}>
                      <p className="text-19 font-sans leading-[1.526315789473684]">{item}</p>
                      <br/>
                      </div>
                    ))}
                </div>
                {/* <p >
                  {item.desc1}
                </p>
                <p className="text-19 font-sans leading-[1.526315789473684]">
                  {item.desc2}
                </p> */}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
