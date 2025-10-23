"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { PartnerData } from "../partners/type";

interface AwardItem {
  id: number;
  image: string;
}

const awards: AwardItem[] = [
  {
    id: 1,
    image: "assets/images/partners/p1.jpg",
  },
  {
    id: 2,
    image: "assets/images/partners/p2.jpg",
  },
  {
    id: 3,
    image: "assets/images/partners/p3.jpg",
  },
  {
    id: 4,
    image: "assets/images/partners/p4.jpg",
  },
  {
    id: 5,
    image: "assets/images/partners/p5.jpg",
  },
  {
    id: 6,
    image: "assets/images/partners/p6.jpg",
  },
  {
    id: 7,
    image: "assets/images/partners/p7.jpg",
  },
];

const Partners = ({
  partnersData,
}: {
  partnersData: PartnerData["data"]["firstSection"];
}) => {
  return (
    <section className="pt-10 pb-45 xl:pt-25 md:pb-[300px] xl:pb-[300px] 2xl:pb-[400px] 2xl:pt-[100px]">
      <div className="container">
        <div className="container">
          <h2 className="heading text-70 leading-[1] font-light text-black mb-[45px] xl:mb-[60px] 2xl:mb-[75px] text-center">
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="!pb-20 relative"
          >
            {partnersData.items.map((partner) => (
              <SwiperSlide key={partner._id}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-full h-[101px] relative">
                    <Image
                      src={partner.image}
                      alt={partner.imageAlt}
                      fill
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom pagination container */}
            <div className="awards-pagination absolute -bottom-20 left-0 right-0"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
