"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  revealPresets,
  splitTextPresets,
  useSplitText,
} from "@/utils/animateText";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import type { ThirdSection } from "./type";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: ThirdSection;
}

const FeaturesSection = ({ data }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const items = data.items;

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        {
          scaleY: 1,
          transformOrigin: "bottom",
        },
        {
          scaleY: 0,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            // scrub: 1,
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const sectionRef = useSplitText([
    {
      className: ".fadeInUp-text",
      options: {
        ...splitTextPresets.fadeInUp,
        delay: 0,
      },
    },
    {
      className: ".typewriter-text",
      options: {
        ...splitTextPresets.typewriter,
        delay: 0.5,
      },
    },
    {
      className: ".slideInLeft-text",
      options: {
        ...splitTextPresets.slideInLeft,
        delay: 1.0,
      },
    },
    {
      className: ".reveal-image",
      options: {
        ...revealPresets.slideFromLeft,
        delay: 1.0,
      },
    },
  ]);

  return (
    <section
      className="pt-15 xl:pt-[247px] pb-15 xl:pb-[241px] overflow-hidden"
      ref={sectionRef}
    >
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-[408px_auto] gap-10 xl:gap-20 3xl:gap-[235px]">
          <div
            className="w-full h-full relative overflow-hidden "
            ref={containerRef}
          >
            <Image
              src={data.bigImage}
              alt={data.bigImageAlt}
              width={1000}
              height={1000}
              className="hidden xl:block h-40 w-full   xl:h-full object-cover object-bottom xl:object-right max-h-[630px]"
            />
            <Image
              src={data.smallImage}
              alt={data.smallImageAlt}
              width={1000}
              height={1000}
              className="xl:hidden h-[250px] w-full md:h-[400px] lg:h-[450px] xl:h-full object-cover object-bottom xl:object-right"
            />
            <div ref={overlayRef} className="absolute inset-0 bg-white z-10" />
          </div>
          <div className=" 3xl:pr-[146px] pt-7 xl:pt-[38px]">
            <div className="grid grid-cols-2 3xl:grid-cols-[455px_auto]">
              <div className="border-r border-black/20">
                <div className="flex flex-col gap-5 pb-8 xl:pb-[49px] border-b border-black/20 pr-2 2xl:pl-6">
                  <motion.div
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                  >
                    <Image
                      src={items[0].logo}
                      alt={items[0].logoAlt}
                      width={60}
                      height={60}
                      className="w-fit h-13 xl:h-[60px] object-contain"
                    />
                  </motion.div>
                  <h3 className="text-30 leading-[1.466666666666667] text-black font-light typewriter-text">
                    {items[0].title}
                  </h3>
                  <p className="text-19 leading-[1.526315789473684] font-light font-inter text-[#484848] max-w-[36ch] slideInLeft-text">
                    {items[0].description}
                  </p>
                </div>
                <div className="flex flex-col gap-5 pt-10 xl:pt-[51px] pb-20 xl:pb-[130px] pr-2 2xl:pl-6">
                  <motion.div
                    variants={moveUp(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                  >
                    <Image
                      src={items[1].logo}
                      alt={items[1].logoAlt}
                      width={60}
                      height={60}
                      className="w-fit h-13 xl:h-[60px] object-contain"
                    />
                  </motion.div>
                  <h3 className="text-30 leading-[1.466666666666667] text-black font-light typewriter-text">
                    {items[1].title}
                  </h3>
                  <p className="text-19 leading-[1.526315789473684] font-light font-inter text-[#484848] max-w-[36ch] slideInLeft-text">
                    {items[1].description}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-5 pl-6 xl:pl-[71.5px] pb-8 xl:pb-[57px] pt-8 xl:pt-[115px] border-b border-black/20">
                  <motion.div
                    variants={moveUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                  >
                    <Image
                      src={items[2].logo}
                      alt={items[2].logoAlt}
                      width={60}
                      height={60}
                      className="w-fit h-13 xl:h-[60px] object-contain"
                    />
                  </motion.div>
                  <h3 className="text-30 leading-[1.466666666666667] text-black font-light typewriter-text">
                    {items[2].title}
                  </h3>
                  <p className="text-19 leading-[1.526315789473684] font-light font-inter text-[#484848] max-w-[36ch] slideInLeft-text">
                    {items[2].description}
                  </p>
                </div>
                <div className="flex flex-col gap-5 pl-6 xl:pl-[71.5px] pb-5 xl:pb-[28px] pt-6 xl:pt-[43px] ">
                  <motion.div
                    variants={moveUp(0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                  >
                    <Image
                      src={items[3].logo}
                      alt={items[3].logoAlt}
                      width={60}
                      height={60}
                      className="w-fit h-13 xl:h-[60px] object-contain"
                    />
                  </motion.div>
                  <h3 className="text-30 leading-[1.466666666666667] text-black font-light typewriter-text">
                    {items[3].title}
                  </h3>
                  <p className="text-19 leading-[1.526315789473684] font-light font-inter text-[#484848] max-w-[36ch] slideInLeft-text">
                    {items[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
