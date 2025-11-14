"use client";

import Image from "next/image";

export interface ServiceItem {
  title: string;
  desc1: string;
  desc2: string;
  image: string;
}

const ServicesSection = ({ servicesData }: { servicesData: ServiceItem[] }) => {
  return (
    <section className="w-full pt-10 pb-35 md:pt-16 md:pb-40 lg:pt-20 lg:pb-60  2xl:pt-[100px] 2xl:pb-[315px]">
      <div className="container flex flex-col gap-[50px] xl:gap-[100px]">
        {servicesData.map((item, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col xl:flex-row items-center gap-[20px] lg:gap-[40px] xl:gap-[70px] ${
                isImageLeft ? "" : "xl:flex-row-reverse"
              }`}
            >
              {/* IMAGE */}
              <div className="flex-shrink-0 w-full xl:w-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={729}
                  height={1484}
                  className="w-full xl:w-[729px] h-auto object-cover"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col gap-[15px] lg:gap-[30px] text-black font-light">
                <h2 className="text-50 font-sans leading-[1]">{item.title}</h2>

                <p className="text-19 font-inter leading-[1.526315789473684]">
                  {item.desc1}
                </p>

                <p className="text-19 font-inter leading-[1.526315789473684]">
                  {item.desc2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
