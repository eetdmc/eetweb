"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { moveUpfourty } from "../motionVarients";
import { AboutData } from "./type";

gsap.registerPlugin(ScrollTrigger);

const MIVI = ({ data }: { data: AboutData["data"]["thirdSection"] }) => {
  const [mission, vision] = data.items;

  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      imageTimeline
        .set(imageContainerRef.current, { clipPath: "inset(0 100% 0 0)" })
        .to(imageContainerRef.current, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power2.out",
        })
        .fromTo(
          imageRef.current,
          { scale: 1.3, rotation: 2 },
          { scale: 1, rotation: 0, duration: 1.2, ease: "power2.out" },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-10 xl:py-25 2xl:py-[150px] sec-noise"
      ref={sectionRef}
    >
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-10 xl:gap-y-5 xl:flex-nowrap">
          {/* Mission Section */}
          <div ref={imageContainerRef}>
            <div className="mb-8 xl:mb-50px" ref={imageRef}>
              <Image
                src={mission.image}
                alt={mission.imageAlt}
                width={1920}
                height={1080}
                className="w-full h-full xl:max-w-[80%] 3xl:max-w-none 3xl:max-h-[750px] object-cover"
              />
            </div>
            <motion.h2
              variants={moveUpfourty(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-70 leading-[1] font-light text-black mb-30px"
            >
              {mission.title}
            </motion.h2>
            <motion.p
              variants={moveUpfourty(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-19 leading-lhtext-19 font-light font-inter xl:max-w-[45ch]"
            >
              {mission.description}
            </motion.p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-wrap justify-between w-full xl:w-auto">
            <div className="w-full xl:w-auto">
              <motion.div
                variants={moveUpfourty(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-8 xl:mb-50px"
              >
                <Image
                  src={vision.image}
                  alt={vision.imageAlt}
                  width={1920}
                  height={1080}
                  className="w-full h-[250px] max-h-full md:h-[350px] 2xl:h-[400px] 3xl:h-[446px] xl:max-h-[750px] object-cover"
                />
              </motion.div>
              <motion.h2
                variants={moveUpfourty(0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-70 leading-[1] font-light text-black mb-30px"
              >
                {vision.title}
              </motion.h2>
              <motion.p
                variants={moveUpfourty(0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-19 leading-lhtext-19 font-light font-inter xl:max-w-[45ch]"
              >
                {vision.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MIVI;
