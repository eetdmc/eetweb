"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { moveUp, moveUpfourty } from "../motionVarients";
import { TeamData } from "./type";

type Props = {
  data: TeamData["data"]["thirdSection"];
};
gsap.registerPlugin(ScrollTrigger);
const BehindTheScene = ({ data }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 90%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Create mask effect for image reveal
      imageTimeline
        .set(imageContainerRef.current, {
          clipPath: "inset(0 100% 0 0)",
        })
        .to(imageContainerRef.current, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power2.out",
        })
        .fromTo(
          imageRef.current,
          {
            scale: 1.3,
            rotation: 0,
          },
          {
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      className="pt-10 md:pt-20 2xl:pt-30 pb-[150px] md:pb-[280px] 2xl:pb-[335px] overflow-hidden"
      ref={sectionRef}
    >
      <div className="container">
        <div className="xl:max-w-[1285px] 2xl:max-w-[1400px] ml-auto mb-15 xl:mb-20 2xl:mb-[122px]">
          <motion.h2
            variants={moveUpfourty(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-50 font-light leading-[1] mb-5 xl:mb-[30px] text-black xl:max-w-[23ch]"
          >
            {data.title}
          </motion.h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-y-10 justify-end">
          <motion.div
            variants={moveUp(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: "all" }}
            className="m-auto sm:mr-auto  sm:ml-0"
          >
            <Image
              src={data.firstImage}
              alt={data.firstImageAlt}
              width={408}
              height={498}
              className="w-auto h-full sm:h-[300px] md:h-[300px] lg:h-full"
            />
          </motion.div>
          <div>
            <div className="lg:ml-auto lg:pl-15 3xl:pr-[135px]">
              <motion.p
                variants={moveUpfourty(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                // className="text-30 md:text-[24px] xl:text-30 leading-[1.333333333333333] text-black font-light max-w-[58ch]"
                className="text-19 leading-1h-text-19 text-black font-sans font-light max-w-[77ch]"
              >
                {data.description}
              </motion.p>
            </div>
            <div ref={imageContainerRef}>
              <div ref={imageRef}>
                <Image
                  src={data.secondImage}
                  alt={data.secondImageAlt}
                  width={406}
                  height={192}
                  // className="mt-8 md:mt-15 xl:mt-[146px] w-full sm:w-auto sm:ml-auto"
                  className="mt-8 md:mt-15 xl:mt-[126px] w-full sm:w-auto sm:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScene;
