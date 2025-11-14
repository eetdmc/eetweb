"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { assets } from "@/public/assets";
import Image from "next/image";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { moveDown, moveUp } from "../motionVarients";
import { SeventhSection } from "./type";

interface Props {
  data: SeventhSection;
}
const Testimonials = ({ data }: Props) => {
  const [current, setCurrent] = useState(0);
  const totalSlides = data.items.length;
  // useTextReveal({selector: ".title", stagger: 0.03, duration: 0.9, y: 50, rotateX: -90, ease: "power3.out", start: "bottom 50%"});
  // Animate headings
  useTextReveal({ selector: ".heading" });

  // Animate subtitles with different settings
  useTextReveal({
    selector: ".subtitle",
    stagger: 0.02,
    duration: 0.4,
    y: 30,
  });
  return (
    <section className="py-10 xl:pt-[143px] xl:pb-[150px] pm-noise">
      <div className="container">
        <div className="mb-5 xl:mb-[70px]">
          <h2 className="heading text-50 leading-1 text-center font-light text-black">
            {data.title}
          </h2>
        </div>
        <div className="">
          <Swiper
            className="testimonials-slider relative"
            modules={[Navigation, EffectFade]}
            slidesPerView={1}
            spaceBetween={30}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-testimonials",
              nextEl: ".swiper-button-next-testimonials",
            }}
          >
            {data.items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[1428px] mx-auto">
                  <div className="border-b border-primary-light pb-5 xl:pb-[55px] text-center">
                    <motion.h3
                      variants={moveUp(0.2)}
                      initial="hidden"
                      animate={current === index ? "show" : "hidden"}
                      viewport={{ once: false, amount: "all" }}
                      className="text-19 font-medium leading-[1.526315789473684] text-black"
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                  <div className="pt-10 xl:pt-[60px] flex justify-between">
                    <motion.div
                      variants={moveDown(0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      <Image
                        src={assets.quoteUp}
                        alt="quote-up"
                        width={227}
                        height={205.2}
                        className="w-8 xl:w-[227px] h-auto"
                      />
                    </motion.div>
                    <div>
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                          current === index
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 30 }
                        }
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        viewport={{ once: false, amount: "all" }}
                        className="text-19 leading-lhtext-19 font-light font-sans text-black text-center max-w-[58ch] mb-4 xl:mb-0"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      <Image
                        src={assets.quoteDown}
                        alt="quote-down"
                        width={227}
                        height={205.2}
                        className="w-8 xl:w-[227px] h-auto max-w-[205px]"
                      />
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col justify-center items-center max-w-[1428px] mx-auto gap-y-5 xl:gap-y-0">
            <div className="testimonials-slider-navigation flex justify-center items-center gap-6 ">
              <button className="swiper-button-prev-testimonials">
                <Image
                  src={assets.pmArrowLeft}
                  alt=""
                  width={52}
                  height={32}
                  className="w-8 xl:w-10 h-auto 2xl:w-[52px] 2xl:h-[32px]"
                />
              </button>

              <button className="swiper-button-next-testimonials">
                <Image
                  src={assets.pmArrowRight}
                  alt=""
                  width={52}
                  height={32}
                  className="w-8 xl:w-10 h-auto 2xl:w-[52px] 2xl:h-[32px]"
                />
              </button>
            </div>
            {/* <div className="pt-0 xl:pt-10">
              <h4 className="text-50 leading-[0.8] font-light text-black/30">
                {String(current + 1).padStart(2, "0")}/
                {String(totalSlides).padStart(2, "0")}
              </h4>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
