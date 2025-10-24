"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { AwardData } from "../awards-accreditations/type";

const Awards = ({
  awardsData,
}: {
  awardsData: AwardData["data"]["firstSection"];
}) => {
  return (
    <section className="pt-10 xl:pt-25 2xl:pt-[150px]">
      <div className="container">
        <div className="container border-b border-primary-light pb-12 xl:pb-[75px] 2xl:pb-[200px]">
          <h2 className="heading text-70 leading-[1] font-light text-black mb-[45px] xl:mb-[60px] 2xl:mb-[75px] text-center">
            {awardsData.mainTitle}
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={103}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
              el: ".awards-pagination",
              bulletClass: "awards-bullet",
              bulletActiveClass: "awards-bullet-active",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="!pb-20 relative"
          >
            {awardsData.items.map((award) => (
              <SwiperSlide key={award._id}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-full h-[116px] relative mb-[40px]">
                    <Image
                      src={award.image}
                      alt={award.imageAlt}
                      fill
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <p className="font-light text-34 text-black leading-[1.294117647058824]">
                    {award.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom pagination container */}
            <div className="awards-pagination absolute bottom-0 left-0 right-0"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Awards;
