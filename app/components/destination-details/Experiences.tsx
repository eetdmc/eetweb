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
import { destinationsData } from "./data";
const Experiences = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="sec-noise py-10 xl:py-20 2xl:pt-[140px] 2xl:pb-[150px]">
      <div className="container">
        <div className="w-full relative mb-15 xl:mb-20 2xl:mb-[120px]">
          <h2 className="text-50 xl:text-70 3xl:text-70 font-light leading-[1] mb-5 xl:mb-[30px] text-black text-center">Signature UAE Experiences</h2>
          <div className="flex gap-5 w-fit ml-auto absolute right-0 top-[50%] translate-y-[-50%]">
            <button className="swiper-button-next-team" onClick={() => { swiperRef.current?.slideNext() }}> <Image src={assets.pmArrowLeft} alt={"arrow"} width={30} height={30} className="" /></button>
            <button className="swiper-button-prev-team" onClick={() => { swiperRef.current?.slidePrev() }}> <Image src={assets.pmArrowRight} alt={"arrow"} width={30} height={30} className="" /></button>
          </div>
        </div>
        <div>
          <Swiper loop={true} className="overflow-hidden experiences-slider"
          speed={1800}
          slidesPerView={1.20}
          spaceBetween={30}
          breakpoints={
            {
              0:{
                slidesPerView:1
              },
              768:{
                slidesPerView:1.20
              },
              1024:{
                slidesPerView:2
              },
              1280:{
                slidesPerView:3
              },
              1536:{
                slidesPerView:3,
                spaceBetween:"131"
              }
            }
          }
          onSlideChange={(swiper) => {
            console.log(swiper);
          }}
          onSwiper={
            (swiper) => {
              swiperRef.current = swiper;
            }
          }
          >
            {
              destinationsData.experiences.items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="border-t border-primary-light pt-10 overflow-hidden">
                    <h3 className="text-20 xl:text-30 3xl:text-30 font-light leading-[1] mb-5 xl:mb-[30px] text-black">{item.title}</h3>
                    <Image src={item.image} alt={item.title} width={437} height={472} className="w-full h-auto" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Experiences;