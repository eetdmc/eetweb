"use client";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState, useRef } from "react";
// import PrimaryBtn from "../common/PrimaryBtn";
import Link from "next/link";
import { assets } from "@/public/assets";
import { motion, Variants } from "motion/react";
import { moveUp } from "../motionVarients";
import type { BannerSection } from "./type";
// Custom Pagination Component matching the exact design
interface CustomPaginationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
  // locations: string[];
}

interface HeroProps {
  data: BannerSection;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentSlide,
  totalSlides,
  onSlideChange,
  // locations,
}) => {
  return (
    <div className="flex flex-col items-end space-y-6">
      {/* Progress Line with Counter */}
      <div className="relative flex items-center">
        {/* Counter Badge */}
        <div className="inline-flex items-center backdrop-blur-[7px] border border-white/20 rounded-full px-2 xl:px-[14px]">
          <span className="text-white font-base leading-[1.8125] font-inter font-light">
            {currentSlide + 1}
          </span>
          <span className="text-mdgray mx-2">-</span>
          <span className="text-mdgray font-base leading-[1.8125] font-inter">
            {String(totalSlides).padStart(2, "0")}
          </span>
        </div>

        {/* Slide Indicator Lines */}
        <div className="flex">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-12 xl:w-[67px] h-[1px] transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Location Navigation */}
      {/* <div className="hidden space-x-6">
        {locations.map((location, index) => (
          <button
            key={location}
            onClick={() => onSlideChange(index)}
            className={`text-sm xl:text-base transition-all duration-300 relative font-inter ${
              index === currentSlide
                ? "text-white font-[700]"
                : "text-mdgray hover:text-white/80 font-light"
            }`}
          >
            {location}
            {index === currentSlide && (
              <div className="absolute -bottom-1 left-0 w-full h-[1px]" />
            )}
          </button>
        ))}
      </div> */}
    </div>
  );
};

const Hero = ({ data }: HeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const imageRefs = useRef<HTMLImageElement[]>([]);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  titleRefs.current = [];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
      },
    },
  };

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1, x: "0%", y: "0%" },
        {
          scale: 1.2,
          x: "-4%",
          y: "-4%",
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    });
  }, []);

  useEffect(() => {
    titleRefs.current.forEach((title) => {
      gsap.fromTo(
        title,
        { opacity: 0, y: "20%" },
        {
          opacity: 1,
          y: "0%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleSwiperSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <section className="w-full h-[calc(100vh-100px)] md:h-[50vh] xl:h-[calc(100vh-130px)] max-h-[706px] pm-noise relative">
      {data.items.map((item, i) => (
        <div
          className="w-full  xl:w-[calc(66%-10px)] 3xl:w-[1205px]  h-full absolute right-0 top-0 z-0 overflow-hidden"
          key={i}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={1920}
            height={1080}
            ref={(el) => {
              if (el) imageRefs.current[i] = el;
            }}
            className={`max-w-[1205px] object-cover w-full h-full transition-opacity duration-[1800ms] ease-in-out ${
              activeIndex === i ? "opacity-100 " : "opacity-0"
            }`}
          />
        </div>
      ))}
      <div className="w-full xl:w-[calc(66%-10px)] 3xl:w-[1205px] h-full xl:h-[70%] absolute right-0 bottom-0 z-0 bg-gradient-to-b from-black/20 xl:from-transparent to-black xl:to-black/70"></div>
      <div className="container h-full">
        <Swiper
          className="w-full h-full hero-slider"
          pagination={false}
          // loop={false}
          rewind={true}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          slidesPerView={1}
          speed={1800}
          // cssMode={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSwiperSlideChange}
          // onSlideChangeTransitionEnd={(swiper) => {
          //   const activeSlide = swiper.slides[swiper.activeIndex] as HTMLElement;
          //   const title = activeSlide.querySelector<HTMLElement>(".slide-title");
          //   const subtitle = activeSlide.querySelector<HTMLElement>(".slide-subtitle");

          //   if (title) {
          //     gsap.fromTo(title, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
          //   }

          //   if (subtitle) {
          //     gsap.fromTo(subtitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 });
          //   }
          // }}
        >
          {data.items.map((item, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full relative ">
                <div className="h-full z-10 relative">
                  <div className="flex flex-col justify-end h-full pb-10 xl:pb-21 pt-25 xl:pt-0 ">
                    <div className="flex flex-wrap justify-between items-end">
                      <div className="w-full h-fit gap-10 xl:gap-0 xl:h-full xl:max-w-[calc(30%+10px)] flex flex-col  justify-end  pb-10 xl:pb-0">
                        <motion.h2
                          variants={containerVariants}
                          initial="hidden"
                          animate={activeIndex === index ? "show" : "hidden"}
                          viewport={{ once: false, amount: "all" }}
                          className="text-[3rem] xl:text-60 2xl:text-65 leading-[1] xl:leading-[65px] text-white xl:text-black font-[300] mb-0 xl:mb-[70px] slide-title "
                          style={{ perspective: "1000px" }}
                        >
                          {item.title.split(" ").map((word, wordIndex) => (
                            <span
                              key={`word-${index}-${wordIndex}`}
                              style={{
                                display: "inline-block",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {word.split("").map((char, charIndex) => (
                                <motion.span
                                  key={`${index}-${wordIndex}-${charIndex}`}
                                  variants={charVariants}
                                  style={{ display: "inline-block" }}
                                >
                                  {char}
                                </motion.span>
                              ))}
                              {wordIndex < item.title.split(" ").length - 1 &&
                                "\u00A0"}
                            </span>
                          ))}
                        </motion.h2>
                        <motion.div
                          variants={moveUp(0.3)}
                          initial="hidden"
                          animate={activeIndex === index ? "show" : "hidden"}
                          viewport={{ once: false, amount: "all" }}
                          className="flex items-center relative group/main overflow-hidden w-fit"
                        >
                          <Link
                            href="#"
                            className="border border-white xl:border-black text-white xl:text-black font-light font-inter bg-transparent px-5 py-2 flex items-center gap-2 rounded-3xl relative z-10 group/link overflow-hidden group-hover/main:text-white"
                          >
                            <div className="absolute top-0 left-0 w-0 h-full z-0 group-hover/main:w-full bg-black transition-all duration-300 ease-in-out rounded-full"></div>
                            <span className="relative text-19 z-10 font-sans">
                              {item.cta}
                            </span>
                          </Link>
                          {/* Arrow container */}
                          <div className="hidden bg-primary rounded-full w-8 h-8 xl:w-[44px] xl:h-[44px]  items-center justify-center relative overflow-hidden">
                            {/* First arrow (default) */}
                            <Image
                              src={assets.arrowTopRight}
                              alt="Arrow"
                              width={20}
                              height={20}
                              className="w-4 h-4 xl:w-[16px] xl:h-[16px] object-contain  absolute transition-all duration-400 ease-in-out group-hover/main:translate-x-2 group-hover/main:-translate-y-2 opacity-100 group-hover/main:opacity-0"
                            />

                            {/* Second arrow (enters on hover) */}
                            <Image
                              src={assets.arrowTopRight}
                              alt="Arrow"
                              width={20}
                              height={20}
                              className="w-4 h-4 xl:w-[16px] xl:h-[16px] object-contain absolute translate-x-[-1rem] translate-y-[1rem] opacity-0 transition-all duration-400 ease-in-out group-hover/main:translate-x-0 group-hover/main:translate-y-0 group-hover/main:opacity-100"
                            />
                          </div>
                        </motion.div>
                      </div>
                      <div className="relative z-10 ml-auto xl:ml-0">
                        {/* <h3 className="text-[1.5rem] xl:text-90 leading-[1] text-white font-light mb-5 xl:mb-[23px] text-right">{item.location}</h3> */}
                        <div>
                          <CustomPagination
                            currentSlide={activeIndex}
                            totalSlides={data.items.length}
                            onSlideChange={handleSlideChange}
                            // locations={data.items.map((item) => item.title)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
