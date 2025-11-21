"use client";
import Image from "next/image";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import { ContactFirstSection } from "./type";

interface MainProps {
  data: ContactFirstSection;
}
const Main = ({ data }: MainProps) => {
  useTextReveal({ selector: ".heading" });
  useTextReveal({ selector: ".subtitle" });
  return (
    <section className="pb-15">
      <div className="pm-noise pt-15 xl:pt-[118px]">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[114px]">
            <h3 className="subtitle text-19 leading-lhtext-19 font-light text-black mb-3 xl:mb-[40px]">
              {data.mainTitle}
            </h3>
            <h1 className="heading text-65 leading-[1.15384] font-light text-black max-w-6xl mx-auto">
              {data.subTitle}
            </h1>
          </div>
        </div>
      </div>
      <div className="mb-0 xl:mb-25 min-h-[40vh] xl:h-[750px] relative overflow-hidden bg-amber-100">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-0 from-transparent to-100 to-black/80 z-10" />
        <Image
          src={data.image}
          alt={data.imageAlt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="container relative z-20 h-full">
          <div className="w-full flex flex-col items-center justify-end h-full pb-15 xl:pb-25 2xl:pb-[123px] ">
            <div className="bg-gradient-to-r from-0 from-transparent via-49% via-white to-100 to-tranparent w-full h-[1px] max-w-[1488px] mb-8 lg:mb-10 xl:mb-[44px]"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white text-center w-full">
              <motion.div
                variants={moveUp(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: "all" }}
              >
                <h3 className="text-19 leading-lhtext-19 font-light font-sans mb-3 xl:mb-[25px]">
                  Call Us
                </h3>
                <p className="text-19 leading-lhtext-19 font-medium ">
                  {data.phone}
                </p>
              </motion.div>
              <motion.div
                variants={moveUp(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: "all" }}
              >
                <h3 className="text-19 leading-lhtext-19 font-light font-sans mb-3 xl:mb-[25px]">
                  Address
                </h3>
                <p className="text-19 leading-lhtext-19 font-medium max-w-md mx-auto">
                  {data.address}
                </p>
              </motion.div>
              <motion.div
                variants={moveUp(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: "all" }}
              >
                <h3 className="text-19 leading-lhtext-19 font-light font-sans mb-3 xl:mb-[25px]">
                  Mail Us
                </h3>
                <p className="text-19 leading-lhtext-19 font-medium ">
                  {data.email}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
