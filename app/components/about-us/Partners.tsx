"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { PartnerData } from "../partners/type";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";

const Partners = ({
  partnersData,
}: {
  partnersData: PartnerData["data"]["firstSection"];
}) => {
  return (
    <section className="pt-10 pb-45 xl:pt-25 md:pb-[300px] xl:pb-[300px] 2xl:pb-[335px] 2xl:pt-[100px]">
      <div className="container">
        <div className="container">
          <h2 className="heading text-50 leading-[1] font-light text-black mb-[45px] 2xl:mb-[70px] text-center">
            Partners
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={245}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
              el: ".awards-pagination",
              bulletClass: "awards-bullet",
              bulletActiveClass: "awards-bullet-active",
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: "10" },
              640: { slidesPerView: 2, spaceBetween: "100" },
              1024: { slidesPerView: 3, spaceBetween: "100" },
              1420: { slidesPerView: 4 },
            }}
            className="!pb-20 relative"
          >
            {partnersData.items.map((partner, index) => (
              <SwiperSlide key={partner._id}>
                <motion.div
                  key={partner._id}
                  variants={moveUp(index * 0.12)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className=" h-[101px] w-[120px] sm:w-[150px]   lg:w-[150px]   xl:w-[200px] relative">
                    <Image
                      src={partner.image}
                      alt={partner.imageAlt}
                      fill
                      className="object-contain w-full h-full"
                    />
                  </div>
                  {/* <p className="font-light text-34 text-black leading-[1.294117647058824] max-w-[18ch]">
                    {partner?.title}
                  </p> */}
                </motion.div>
              </SwiperSlide>
            ))}
            {/* Custom pagination container */}
            <div className="awards-pagination absolute bottom-10  lg:-bottom-20 left-0 right-0"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
