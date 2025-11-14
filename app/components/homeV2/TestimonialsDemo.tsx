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
const TestimonialsDemo = () => {
  const [current, setCurrent] = useState(1);
  const totalSlides = 4;
  return (
    <section className="py-10 xl:py-30">
      <div className="container">
        <div className="mb-5 xl:mb-[95px]">
          <h2 className="text-70 text-center font-light text-black">Client Testimonials</h2>
        </div>
        <div>
          <Swiper className="testimonials-slider relative" modules={[Navigation, EffectFade]} slidesPerView={1} spaceBetween={30}
           onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
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
                <div className="grid grid-cols-1 gap-4 xl:gap-0 xl:grid-cols-3 2xl:grid-cols-[1.5fr_1.8fr_2fr] 3xl:grid-cols-[598px_512px_auto]">
                  <div className="xl:pt-[112px] pb-5 xl:pb-0 flex xl:block items-center justify-between border-b border-[#5C8898] xl:border-0">
                    <h3 className="text-30 leading-lhtext-30 font-light text-black xl:border-b border-[#5C8898] pb-0 xl:pb-[39px]">{item.name}</h3>
                    <div className="pt-0 xl:pt-[56px]">
                      <h4 className="text-50 leading-[0.8] font-light text-black/30"> {String(current).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}</h4>
                    </div>
                  </div>
                  <div>
                    <Image src={item.image} alt="" width={512} height={566} className="w-full h-[300px] xl:h-full object-cover rounded-3xl" />
                  </div>
                  <div >
                    <div className="relative pt-5 xl:pt-[95px] ">
                      <div className="testimonials-slider-pagination xl:h-30 pl-15 xl:pl-[113px] xl:border-b border-[#5C8898] pb-5 xl:pb-[39px]">
                        <button className="swiper-button-prev-testimonials absolute left-2 top-1/2 -translate-y-1/2 z-10">
                          {/* Your custom SVG */}
                          <Image src={assets.pmArrowLeft} alt="" width={52} height={32} className="w-8 xl:w-10 h-auto 2xl:w-[52px] 2xl:h-[32px]" />
                        </button>

                        <button className="swiper-button-next-testimonials absolute right-2 top-1/2 -translate-y-1/2 z-10">
                          {/* Your custom SVG */}
                          <Image src={assets.pmArrowRight} alt="" width={52} height={32} className="w-8 xl:w-10 h-auto 2xl:w-[52px] 2xl:h-[32px]" />
                        </button>
                      </div>
                    </div>
                    <div className="pt-6 xl:pt-[50px] pl-0 xl:pl-[113px] pr-0 xl:pr-[48px]">
                      <p className="text-19 leading-lhtext-19 font-inter font-light">{item.quote}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsDemo;