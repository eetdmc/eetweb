"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const DestinationSlider = () => {
  return ( 
    <section className="py-25 xl:py-30">
      <div className="container">
        <div className="xl:pl-[573px]">
          <h2 className="text-70 leading-[1] font-light mg-8 xl:mb-[50px] max-w-3xl text-black">Expertise Behind Every Experience</h2>
          <h3 className="text-34 leading-[1.235294117647059] font-light text-black">Destinations</h3>
        </div>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
   ); 
}
 
export default DestinationSlider;