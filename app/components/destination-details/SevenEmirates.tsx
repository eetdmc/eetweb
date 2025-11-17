"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import { assets } from "@/public/assets";
import { motion, AnimatePresence } from "framer-motion";
import { useTextReveal } from "@/hooks/useTextReveal";

import "swiper/css";
import "swiper/css/navigation";
import { moveLeft, moveRight, moveUp } from "../motionVarients";

interface EmirateItem {
  name: string;
  image: string;
  description: string;
}

interface Props {
  heading: string;
  items: EmirateItem[];
}

const SevenEmirates = ({ heading, items }: Props) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useTextReveal({ selector: ".heading" });

  const slideTo = (index: number) => {
    swiperRef.current?.slideTo(index);
    setActiveIndex(index);
  };

  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex === items.length - 1;

  return (
    <motion.div
      variants={moveUp()}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.45 }}
      viewport={{ amount: 0.2, once: true }}
      className="sec-noise 2xl:pt-[140px] 2xl:pb-[150px] py-10 xl:py-20"
    >
      <div className="container">
        <h2 className="font-sans text-50 font-light leading-[1] text-black lg:pl-[25.3%] pb-[30px] xl:pb-[50px] 2xl:pb-[70px] heading">
          {heading}
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row items-stretch gap-[40px] 2xl:gap-[70px] container">
        {/* LEFT IMAGE SWIPER */}
        <motion.div
          variants={moveRight(0.2)}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.45 }}
          viewport={{ amount: 0.2, once: true }}
          className="
  relative 
  w-full 
  xl:w-[700px] 
  emiratesImage
  2xl:min-h-[611px]
"
        >
          {/* LEFT ARROW */}
          <button
            onClick={() => !isPrevDisabled && swiperRef.current?.slidePrev()}
            disabled={isPrevDisabled}
            className={`
    absolute z-20 lg:top-1/2 lg:-translate-y-1/2 lg:left-[30px] -bottom-8 lg:bottom-auto
    transition-opacity duration-300
    ${
      isPrevDisabled
        ? "opacity-25 cursor-not-allowed pointer-events-none"
        : "cursor-pointer hover:opacity-80"
    }
`}
          >
            <Image
              src={assets.pmArrowLeft}
              alt="Previous"
              width={40}
              height={24}
              className="w-[32px] h-[18px] md:w-[40px] md:h-[24px]"
            />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => !isNextDisabled && swiperRef.current?.slideNext()}
            disabled={isNextDisabled}
            className={`
    absolute z-20 lg:top-1/2 lg:-translate-y-1/2 lg:right-[30px] right-0 -bottom-8 lg:bottom-auto
    transition-opacity duration-300
    ${
      isNextDisabled
        ? "opacity-25 cursor-not-allowed pointer-events-none"
        : "cursor-pointer hover:opacity-80"
    }
  `}
          >
            <Image
              src={assets.pmArrowRight}
              alt="Next"
              width={40}
              height={24}
              className="w-[32px] h-[18px] md:w-[40px] md:h-[24px]"
            />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500 }}
            speed={900}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={false}
            className="overflow-hidden"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={963}
                  height={650}
                  className="w-full h-[280px] md:h-[500px] lg:h-[520px]  2xl:min-h-[611px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-start w-full">
          {/* EMIRATES LIST – Entire row clickable */}
          <motion.div
            variants={moveLeft(0.2)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.45 }}
            viewport={{ amount: 0.2, once: true }}
            className="space-y-2 grid grid-cols-2 xl:grid-cols-1"
          >
            {items.map((item, index) => (
              <motion.div
                variants={moveUp(0.1 * index)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.45 }}
                viewport={{ amount: 0.2, once: true }}
                key={index}
                onClick={() => slideTo(index)}
                className="cursor-pointer select-none text-19 text-black"
              >
                <motion.div
                  className={`flex items-center gap-[20px] ${
                    activeIndex === index ? "font-medium" : "font-light"
                  }`}
                  initial={false}
                  animate={
                    activeIndex === index ? { opacity: 1, y: 0 } : { y: 0 }
                  }
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {/* EMIRATE NAME */}
                  {item.name}

                  {/* SMALL ICON */}
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Image
                        src={assets.arrowRightTopAngled}
                        alt="active"
                        width={18}
                        height={18}
                        className="w-[18px] h-[18px]"
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* LINE */}
          <motion.div
            variants={moveLeft(0.35)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.45 }}
            viewport={{ amount: 0.2, once: true }}
            className="border-b border-[#5C8898] mt-[18px] mb-[15px] emiratesLineMargin"
          />

          {/* CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="space-y-4 2xl:space-y-5"
            >
              {/* TITLE FIRST */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="font-medium text-19 text-black leading-[1.526315789473684]"
              >
                {items[activeIndex].name}
              </motion.h3>

              {/* DESCRIPTION AFTER DELAY */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: 0.15,
                }}
                className="text-black text-19 leading-[1.526315789473684] font-light font-inter"
              >
                {items[activeIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default SevenEmirates;
