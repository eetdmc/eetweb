"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { AwardData } from "../awards-accreditations/type";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";

const Awards = ({
  awardsData,
}: {
  awardsData: AwardData["data"]["firstSection"];
}) => {
  return (
    <section className="pt-10 xl:pt-25 2xl:pt-[150px]">
      <div className="container">
        <div className="container border-b border-primary-light pb-12 xl:pb-[75px] 2xl:pb-[200px]">
          <h2 className="heading text-50 leading-[1] font-light text-black mb-[45px] 2xl:mb-[70px] text-center">
            {awardsData.mainTitle}
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 3500 }}
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
            {awardsData.items.map((award, index) => (
              <SwiperSlide key={award._id}>
                <motion.div
                  key={award._id}
                  variants={moveUp(index * 0.14)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-[46px]">
                    <Image
                      src={award.image}
                      alt={award.imageAlt}
                      height={408}
                      width={439}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <p className="font-light text-19 text-black leading-[1.294117647058824] max-w-[18ch]">
                    {award.title}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
            {/* Custom pagination container */}
            <div className="awards-pagination absolute bottom-10 lg:bottom-0 left-0 right-0"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Awards;
