"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useTextReveal } from "@/hooks/useTextReveal";
import { ServiceFirstSection } from "./type";

type MainProps = {
  data: ServiceFirstSection;
};
const Main = ({ data }: MainProps) => {
  useTextReveal({ selector: ".heading" });
  useTextReveal({ selector: ".subtitle" });
  return (
    <section className="pb-10 xl:pb-25 2xl:pb-50 ">
      <div className="pm-noise pt-15 xl:pt-25">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[114px]">
            <h3 className="subtitle text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px]">
              {data.mainTitle}
            </h3>
            <h1 className="heading text-60 xl:text-80 leading-[1.25] font-light text-black max-w-6xl mx-auto">
              {data.subTitle}
            </h1>
          </div>
        </div>
      </div>
      <motion.div
        variants={moveUp(0.2)}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: "all" }}
        className="mb-10 xl:mb-25 "
      >
        <Image
          src={data.image}
          alt={data.imageAlt}
          width={1920}
          height={1080}
          className="w-full h-[250px] xl:h-[750px] object-cover"
        />
        {/* <video src="/assets/videos/mice.mp4" className="w-full xl:h-[750px] object-cover" autoPlay={true} muted={false} loop={true} playsInline /> */}
      </motion.div>
      <div className="container">
        <div className="xl:max-w-[1283px] ml-auto">
          <div className="">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={20}
              rotationEnd="bottom 80%"
              wordAnimationEnd="bottom 80%"
              containerClassName="text-30 leading-[1.333333333333333] font-light mb-8 xl:mb-50px max-w-[70ch]"
            >
              {data.thirdTitle}
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={20}
              rotationEnd="bottom 80%"
              wordAnimationEnd="bottom 80%"
              containerClassName="text-19 leading-lhtext-19 font-light font-inter max-w-[70ch]"
            >
              {data.description}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
