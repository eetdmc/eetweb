"use client";

import { useTextReveal } from "@/hooks/useTextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TeamData } from "./type";

type MainProps = {
  data: TeamData["data"]["firstSection"];
};
const Main = ({ data }: MainProps) => {
  useTextReveal({ selector: ".heading" });
  useTextReveal({ selector: ".subtitle", stagger: 0.02, duration: 0.4, y: 30 });
  return (
    <section className="pb-10 xl:pb-[114px] ">
      <div className="pm-noise pt-15 xl:pt-25">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[164px]">
            <h3 className="heading text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px]">
              {data.mainTitle}
            </h3>
            <h1 className="heading text-60 xl:text-80 leading-[1.25] font-light text-black max-w-6xl mx-auto">
              {data.subTitle}
            </h1>
          </div>
        </div>
      </div>
      <div className="container pt-10 xl:pt-30 2xl:pt-50 mb-0 xl:mb-30">
        <div className="xl:max-w-[1136px] ml-auto mr-10 xl:mr-[147px]">
          <div className="border-b border-[#5C8898] pb-10 xl:pb-25">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              rotationEnd="bottom 80%"
              wordAnimationEnd="bottom 80%"
              containerClassName="text-[30px] leading-[1.333333333333333] font-light max-w-[63ch]"
            >
              {data.description}
            </ScrollReveal>
            {/* <p  className="text-30 leading-[1.333333333333333] font-light max-w-[63ch]">At EET DMC, our strength lies in our people — a diverse team of travel experts, planners, and creatives who share one mission: to exceed expectations.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
