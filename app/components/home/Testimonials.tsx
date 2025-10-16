"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { homeData } from "./data";
import { assets } from "@/public/assets";
import Image from "next/image";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { fadeIn } from "../motionVarients";
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = homeData.testimonials.items.length ;
  useTextReveal({selector: ".title", stagger: 0.03, duration: 0.9, y: 50, rotateX: -90, ease: "power3.out", start: "bottom 10%"});
  return (
    <section className="py-10 xl:py-30 pm-noise">
      <div className="container">
        <div className="mb-5 xl:mb-[78px]">
          <h2 className="title text-70 text-center font-light text-black">Client Testimonials</h2>
        </div>
        <div className="">
          <Swiper className="testimonials-slider relative" modules={[Navigation, EffectFade]} slidesPerView={1} spaceBetween={30}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-testimonials",
              nextEl: ".swiper-button-next-testimonials",
            }}>
            {homeData.testimonials.items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[1428px] mx-auto">
                  <div className="border-b border-primary-light pb-5 xl:pb-12 text-center">
                    <h3 className="text-30 leading-[1.2] font-light text-black">{item.name}</h3>
                  </div>
                  <div className="pt-10 xl:pt-15 flex justify-between">
                    <div>
                      <Image src={assets.quoteUp} alt="quote-up" width={227} height={205.2} className="w-8 xl:w-[227px] h-auto" />
                    </div>
                    <div>
                      <motion.p variants={fadeIn(0.2)} initial="hidden" animate={current === index ? "show" : "hidden"} viewport={{ once: false, amount: "all" }} className=" text-19 leading-lhtext-19 font-light font-inter text-center max-w-[50ch] mb-4 xl:mb-0">{item.quote}</motion.p>
                    </div>
                    <div>
                      <Image src={assets.quoteDown} alt="quote-down" width={227} height={205.2} className="w-8 xl:w-[227px] h-auto" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col justify-center items-center max-w-[1428px] mx-auto gap-y-5 xl:gap-y-0">
            <div className="testimonials-slider-navigation flex justify-center items-center gap-6 ">
              <button  className="swiper-button-prev-testimonials">
                <Image src={assets.pmArrowLeft} alt="" width={52} height={32} className="w-8 xl:w-10 h-auto 2xl:w-[52px] 2xl:h-[32px]" />
              </button>

              <button className="swiper-button-next-testimonials">
                <Image src={assets.pmArrowRight} alt="" width={52} height={32} className="w-8 xl:w-10 h-auto 2xl:w-[52px] 2xl:h-[32px]" />
              </button>
            </div>
            <div className="pt-0 xl:pt-10">
              <h4 className="text-50 leading-[0.8] font-light text-black/30">
               {/* {String(current).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")} */}
                {String(current + 1).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}
               </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;