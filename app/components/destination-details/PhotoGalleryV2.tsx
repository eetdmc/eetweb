"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { assets } from "@/public/assets";

import { DestinationFourthSection } from "./type";
import { useTextReveal } from "@/hooks/useTextReveal";

type Props = {
  data: DestinationFourthSection;
};

const GallerySlider = ({ data }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useTextReveal({ selector: ".heading-one" });

  return (
    <section className="pm-noise overflow-hidden pt-10 pb-12 xl:py-20 2xl:pt-[144px] 2xl:pb-[180px]">
      {/* Top heading + arrows */}
      <div className="container flex items-center justify-between mb-10 2xl:mb-[70px]">
        <h2 className="text-50 heading-one font-light leading-[1] text-black">
          Photo Gallery
        </h2>

        {/* Arrows */}
        <div className="flex gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <Image
              src={assets.pmArrowLeft}
              alt="prev"
              width={40}
              height={24.62}
              className="w-[24px] h-[24px] lg:w-[40px] lg:h-[24.62px]"
            />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <Image
              src={assets.pmArrowRight}
              alt="next"
              width={40}
              height={24.62}
              className="w-[24px] h-[24px] lg:w-[40px] lg:h-[24.62px]"
            />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="gallery-slider container !overflow-hidden xl:h-[525px] 2xl:h-[630px] flex items-center justify-center">
        <Swiper
          effect="coverflow"
          centeredSlides
          spaceBetween={-10}
          loop
          breakpoints={{
            450: { spaceBetween: -11 },
            640: { spaceBetween: -40 },
            768: { spaceBetween: -20 },
            1024: { spaceBetween: -30 },
            1280: { spaceBetween: -40 },
            1536: { spaceBetween: -60 },
          }}
          speed={700}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView="auto"
          onBeforeInit={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper: SwiperType) => {
            setActiveIndex(swiper.realIndex);
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 291,
            modifier: 2.9,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container !overflow-hidden"
        >
          {data.items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={index} className="swiper-slide relative">
                <div
                  className={` overflow-hidden ${
                    isActive ? "active-card" : "side-card"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt || ""}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySlider;
