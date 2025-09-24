'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCards, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { homeData } from "./data";
import Image from "next/image";
import { assets } from "@/public/assets";
import PrimaryBtn from "../common/PrimaryBtn";
const BlogSlider = () => {
  return (
    <section className="pt-25 xl:py-30 min-h-screen pm-noise overflow-hidden">
      <div className="container relative">
        <div className="relative h-full">
          <div className="flex justify-between max-w-[66%] relative">
            <div>
              <h2 className="text-70 leading-[1] font-light mg-8 xl:mb-[50px] max-w-3xl text-black">Inspiring Stories</h2>
              <h3 className="text-34 leading-[1.235294117647059] font-light text-black">Blogs</h3>
            </div>
            <div className="blog-slider-pagination">
              <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10">
                {/* Your custom SVG */}
                <Image src={assets.pmArrowLeft} alt="" width={50} height={50} className="w-8 xl:w-10 h-auto" />
              </button>

              <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10">
                {/* Your custom SVG */}
                <Image src={assets.pmArrowRight} alt="" width={50} height={50} className="w-8 xl:w-10 h-auto" />
              </button>
            </div>
          </div>
          <div>
            <Swiper className="blog-slider relative overflow-hidden"
              modules={[Navigation, Autoplay]}
              slidesPerView={3}
              spaceBetween={31}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              speed={1500}
            >
              {homeData.blog.items.map((item, i) => (
                <SwiperSlide key={i} className="overflow-hidden ">
                  <div className="group xl:h-[750px] 3xl:h-[1020px]" >
                    <div className="w-full h-full overflow-hidden blog-img relative flex flex-col justify-end">
                      <div className="relative w-full h-full z-0 bg-gray-300">
                        <Image src={item.image} alt="" width={700} height={700} className="blog-mainimg w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-4 left-4 xl:bottom-[30px] xl:left-[30px] z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 w-8 h-8 xl:w-[105px] border border-[#5C8898] rounded-full xl:h-[105px] flex items-center justify-center">
                        <Image src={assets.arrowPrimary} alt="" width={50} height={50} className=" w-8 xl:w-10 h-auto translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lggray text-19 leading-lhtext-19 font-inter pt-4 pb-3 xl:pt-[33px] xl:pb-[23px]">{item.date}</p>
                      <h3 className="text-30 leading-[1.2] font-light text-black max-w-[80%]">{item.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-fit ml-auto absolute bottom-0 right-0">
          <PrimaryBtn text="View All" link="#" />
        </div>
      </div>
    </section>
  );
}

export default BlogSlider;