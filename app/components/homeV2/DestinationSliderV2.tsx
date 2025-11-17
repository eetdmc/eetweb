"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import {
  DestinationData,
  DestinationSixthItem,
} from "../destination-details/type";
import { assets } from "@/public/assets";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "framer-motion";
import { moveLeft, moveUp } from "../motionVarients";

const DestinationSliderV2: React.FC<{ destinations: DestinationData[] }> = ({
  destinations,
}) => {
  const formattedDestinations = destinations.map(
    (item: DestinationData, index: number) => ({
      id: index + 1,
      location: item.firstSection.location,
      destinationCount: item.sixthSection.destinationCount + "+",
      homeImage: item.sixthSection?.homeImage,
      mainDestinations:
        item.sixthSection?.mainDestinations?.map(
          (d: DestinationSixthItem) => d.title
        ) || [],
      slug: item.firstSection.slug,
    })
  );

  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = formattedDestinations.length;

  const active = formattedDestinations[activeIndex];

  useTextReveal({ selector: ".heading" });

  return (
    <section className="overflow-hidden">
      <div className="container font-sans">
        {/* Header */}
        <div className="flex items-center justify-between mb-[30px] md:mb-[50px] xl:mb-[70px]">
          <h2 className="font-sans text-50 font-light leading-[1] text-black ml-0 lg:ml-[31.3%] heading">
            Destinations
          </h2>
          <motion.div
            variants={moveLeft(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: "all" }}
            className="flex gap-[16px] xl:gap-[26px]"
          >
            <div
              ref={prevRef}
              className={`cursor-pointer transition-opacity duration-300 opacity-100 
      ${activeIndex === 0 ? "pointer-events-none opacity-40" : ""}`}
            >
              <Image
                src={assets.pmArrowLeft}
                alt="Previous"
                width={52}
                height={38}
                className={`w-[32px] h-[18px] xl:w-[52px] xl:h-[38px] ${
                  activeIndex === 0 ? "opacity-40" : ""
                } `}
              />
            </div>
            <div
              ref={nextRef}
              className={`cursor-pointer transition-opacity duration-300 opacity-100 
      ${
        activeIndex === totalSlides - 1 ? "pointer-events-none opacity-40" : ""
      }`}
            >
              <Image
                src={assets.pmArrowRight}
                alt="Next"
                width={52}
                height={38}
                className={`w-[32px] h-[18px] xl:w-[52px] xl:h-[38px] ${
                  activeIndex === totalSlides - 1 ? "opacity-40" : ""
                } `}
              />
            </div>
          </motion.div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2500 }}
          speed={900}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (!swiper.params.navigation) return;

            Object.assign(swiper.params.navigation, {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            });
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
        >
          {formattedDestinations.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full">
                <div className="w-full h-[300px] md:h-[450px] xl:h-[600px] 2xl:h-[700px] relative overflow-hidden">
                  <Image
                    src={item.homeImage}
                    alt={item.location}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 19.92%, rgba(0, 0, 0, 0.5) 100%)",
                    }}
                  />

                  {/* Buttons */}
                  <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 xl:bottom-10 xl:right-10 flex gap-2 lg:gap-[14px] font-light font-funnel-display text-19 ">
                    <button className="px-3 lg:px-6 py-2 bg-black/75 border border-[#00AEEF] text-white rounded-[50px] cursor-pointer">
                      Know More
                    </button>
                    <button className="px-3 lg:px-6 py-2 bg-black/75 border border-[#00AEEF] text-white rounded-[50px] cursor-pointer">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* UNDER-IMAGE CONTENT (only active slide) */}
          <motion.div
            key={activeIndex} // ⭐ triggers re-animation on slide change
            className="lg:w-[65%] mt-[28px] lg:mt-[35px] grid grid-cols-2 lg:grid-cols-4 gap-6 text-black"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.12, // Delay between columns
                },
              },
            }}
            initial="hidden"
            animate="show" // ⭐ animate on every index change
          >
            {/* Column 1 */}
            <motion.div variants={moveUp(0.1)}>
              <p className="text-19 font-medium">{active.location}</p>
            </motion.div>

            {/* Column 2 */}
            <motion.div variants={moveUp(0.15)}>
              <p className="text-19 font-medium">{active.destinationCount}</p>
              <p className="text-19 font-light">Destinations</p>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              variants={moveUp(0.2)}
              className="text-19 font-light leading-1h-text19"
            >
              {active.mainDestinations.slice(0, 3).map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </motion.div>

            {/* Column 4 */}
            <motion.div
              variants={moveUp(0.25)}
              className="text-19 font-light leading-1h-text19 lg:ml-12"
            >
              {active.mainDestinations.slice(3).map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom line */}
          <div className="w-full border-b mt-[35px] border-[#5C8898]" />
        </Swiper>
      </div>
    </section>
  );
};

export default DestinationSliderV2;
