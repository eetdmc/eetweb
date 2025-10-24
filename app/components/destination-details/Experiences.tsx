"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { assets } from "@/public/assets";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import { useTextReveal } from "@/hooks/useTextReveal";
import type { DestinationThirdSection } from "./type";

type Props = {
  data: DestinationThirdSection;
};
const Experiences = ({ data }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);
  useTextReveal({ selector: ".heading" });
  return (
    <section className="sec-noise py-15 xl:py-20 2xl:pt-[140px] 2xl:pb-[150px]">
      <div className="container">
        <div className="w-full relative mb-10 md:mb-15  xl:mb-20 2xl:mb-[120px] flex items-center justify-between">
          <h2 className="relative md:left-[100px] 3xl:left-0 heading text-50 xl:text-70 3xl:text-70 font-light leading-[1] mb-0   text-black xl:mx-auto xl:text-center">
            {data.title}
          </h2>
          <div className="ml-0 flex items-center gap-5 group/main">
            <motion.button
              variants={moveUp(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: "all" }}
              aria-label="View More"
              className="flex hidden shadow-lg border-2 border-white text-white font-light font-inter bg-gradient-to-r from-primary
             to-secondary px-5 py-2  items-center gap-2 rounded-3xl relative z-10 group/link overflow-hidden group-hover/main:text-white cursor-pointer"
            >
              <div className="absolute bottom-0 left-0 w-0 h-full z-0 group-hover/main:w-full bg-black transition-all duration-300 ease-in-out rounded-full"></div>
              <span className="relative z-10">View More</span>
            </motion.button>
            <motion.div
              variants={moveUp(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: "all" }}
              className="flex gap-2 lg:gap-5 w-fit "
            >
              <button
                className="swiper-button-next-team cursor-pointer"
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
              >
                {" "}
                <Image
                  src={assets.pmArrowLeft}
                  alt={"arrow"}
                  width={40}
                  height={24.62}
                  className="w-4 lg:w-8 xl:w-auto"
                />
              </button>
              <button
                className="swiper-button-prev-team cursor-pointer"
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
              >
                {" "}
                <Image
                  src={assets.pmArrowRight}
                  alt={"arrow"}
                  width={40}
                  height={24.62}
                  className="w-4 lg:w-8 xl:w-auto"
                />
              </button>
            </motion.div>
          </div>
        </div>
        <div className="xl:pl-[146px]">
          <Swiper
            loop={true}
            className="overflow-hidden experiences-slider"
            speed={1800}
            slidesPerView={1.2}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.3,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: "70",
              },
              1800: {
                slidesPerView: 3,
                spaceBetween: "131",
              },
            }}
            onSlideChange={(swiper) => {
              console.log(swiper);
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.items.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={moveUp(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="border-t border-primary-light pt-5  md:pt-10 overflow-hidden"
                >
                  <motion.h3
                    variants={moveUp(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-20 xl:text-30 3xl:text-30 font-light leading-[1.333333333333333] mb-5 xl:mb-10 2xl:mb-[50px] text-black"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.div
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={437}
                      height={472}
                      className="w-full h-[300px] xl:h-auto object-cover"
                    />
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
