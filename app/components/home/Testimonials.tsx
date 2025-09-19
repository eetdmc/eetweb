"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { homeData } from "./data";
import { assets } from "@/public/assets";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section className="py-25 xl:py-30">
      <div className="container">
        <div className="mb-8 xl:mb-[95px]">
          <h2 className="text-70 text-center font-light text-black">Client Testimonials</h2>
        </div>
        <div>
          <Swiper className="testimonials-slider relative" modules={[Navigation,EffectFade]} slidesPerView={1} spaceBetween={30}
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
                <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-[598px_512px_auto]">
                  <div className="pt-15 xl:pt-[112px]  ">
                    <h3 className="text-30 leading-lhtext-30 font-light text-black border-b border-[#5C8898] pb-5 xl:pb-[39px]">{item.name}</h3>
                  </div>
                  <div>
                    <Image src={item.image} alt="" width={512} height={566} className="w-full h-full object-cover rounded-3xl" />
                  </div>
                  <div >
                    <div className="relative  pt-15 xl:pt-[95px]">
                      <div className="testimonials-slider-pagination h-30 pl-15 xl:pl-[113px] border-b border-[#5C8898] pb-5 xl:pb-[39px]">
                        <button className="swiper-button-prev-testimonials absolute left-2 top-1/2 -translate-y-1/2 z-10">
                          {/* Your custom SVG */}
                          <Image src={assets.pmArrowLeft} alt="" width={50} height={50} className="w-8 xl:w-10 h-auto" />
                        </button>

                        <button className="swiper-button-next-testimonials absolute right-2 top-1/2 -translate-y-1/2 z-10">
                          {/* Your custom SVG */}
                          <Image src={assets.pmArrowRight} alt="" width={50} height={50} className="w-8 xl:w-10 h-auto" />
                        </button>
                      </div>
                    </div>
                    <div className="pt-15 xl:pt-[50px] pl-15 xl:pl-[113px] pr-6 xl:pr-[48px]">
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

export default Testimonials;