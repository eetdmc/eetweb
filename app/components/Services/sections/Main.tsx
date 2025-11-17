"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { serviceMainData } from "../data";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  useTextReveal({ selector: ".heading" });

  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current.querySelector("img"),
      { scale: 1 },
      {
        scale: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom", // when image enters bottom of screen
          end: "bottom top", // when image leaves top of screen
          scrub: 1.5, // smooth scrolling effect
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="pm-noise pt-10 xl:pt-[118px]">
        <div>
          <div className="text-center">
            <div className="w-full flex items-center justify-center">
              <h1 className="text-65 leading-[1.153846153846154] font-sans font-light text-black mb-10 xl:mb-[130px] max-w-[25ch] text-center heading">
                {serviceMainData.title}
              </h1>
            </div>

            {/* Image container with GSAP Scroll Zoom */}
            <motion.div
              variants={moveUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              ref={imageRef}
              className="overflow-hidden" // IMPORTANT: prevents scale bleed
            >
              <Image
                src={serviceMainData.mainImage}
                alt=""
                width={1920}
                height={1080}
                className="w-full h-full min-h-[250px] 2xl:h-[750px] object-cover will-change-transform"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
