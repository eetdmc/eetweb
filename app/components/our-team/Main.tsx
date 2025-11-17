"use client";

import { useTextReveal } from "@/hooks/useTextReveal";
import { TeamData } from "./type";
import { motion } from "motion/react";
import { moveUpfourty } from "../motionVarients";

type MainProps = {
  data: TeamData["data"]["firstSection"];
};
const Main = ({ data }: MainProps) => {
  useTextReveal({ selector: ".heading" });
  useTextReveal({ selector: ".subtitle", stagger: 0.02, duration: 0.4, y: 30 });
  return (
    <section className="pb-15">
      <div className="pm-noise pt-15 xl:pt-[118px]">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[114px]">
            <h3 className="heading text-19 leading-lhtext-19 font-light text-black mb-3 xl:mb-[25px]">
              {data.mainTitle}
            </h3>
            <h1 className="heading text-65 leading-[1.153846153846154] font-light text-black max-w-4xl mx-auto">
              {data.subTitle}
            </h1>
          </div>
        </div>
      </div>
      <div className="container pt-15 2xl:pt-25 mb-0 xl:mb-[120px]">
        <div className="xl:max-w-[1136px] lg-auto md:mr-10 xl:mr-[147px] ml-auto">
          <div className="xl:border-b border-[#5C8898] xl:pb-[120px]">
            <motion.p
              variants={moveUpfourty(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="text-19 leading-1h-text-19 font-medium max-w-[73ch]"
            >
              {data.description}
            </motion.p>
            {/* <p  className="text-30 leading-[1.333333333333333] font-light max-w-[63ch]">At EET DMC, our strength lies in our people — a diverse team of travel experts, planners, and creatives who share one mission: to exceed expectations.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
