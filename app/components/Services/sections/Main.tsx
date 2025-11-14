import React from "react";
import Image from "next/image";
import { serviceMainData } from "../data";

const Main = () => {
  return (
    <section>
      <div className="pm-noise pt-10 xl:pt-[118px]">
        <div>
          <div className="text-center">
            <div className="w-full flex items-center justify-center">
              <h1 className="text-65 leading-[1.153846153846154] font-sans font-light text-black mb-10 xl:mb-[130px] max-w-[25ch] text-center">
                {serviceMainData.title}
              </h1>
            </div>
            <Image
              src={serviceMainData.mainImage}
              alt=""
              width={1920}
              height={1080}
              className="w-full h-full 2xl:h-[750px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
