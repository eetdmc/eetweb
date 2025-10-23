"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { moveUp } from "../motionVarients";
import { useTextReveal } from "@/hooks/useTextReveal";
import type { DestinationFifthSection } from "./type";

type Props = {
  data: DestinationFifthSection;
};

const WhyExplore = ({ data }: Props) => {
  useTextReveal({ selector: ".heading" });
  useTextReveal({ selector: ".subtitle" });

  const items = data.items || [];

  return (
    <section className="pm-noise pt-10 pb-50 md:pb-80 xl:pb-80 xl:pt-20 2xl:pt-[145px] 2xl:pb-[400px]">
      <div className="container">
        <div className="xl:ml-[20%] w-fit 2xl:ml-[27%] 2xl:w-fit ">
          <h2 className="heading text-50 xl:text-70 3xl:text-70 font-light leading-[1.2] xl:leading-[1] text-black xl:max-w-[15ch] mb-10 xl:mb-20">
            {data.title}
          </h2>
        </div>
        <div className="explr-grid">
          <div className="explr-grid__col">
            <div className="">
              {items[0] && (
                <motion.div
                  variants={moveUp(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: "all" }}
                  className="xl:ml-auto"
                >
                  <Image
                    src={items[0].image}
                    width={60}
                    height={60}
                    alt={items[0].imageAlt}
                    className="w-10 xl:w-15 h-auto mb-4 xl:mb-30px"
                  ></Image>
                  <h3 className="text-30 leading-[1.333333333333333] font-light text-black">
                    {items[0].title}
                  </h3>
                </motion.div>
              )}
            </div>
          </div>
          <div className="explr-grid__col">
            <div>
              {items[1] && (
                <motion.div
                  variants={moveUp(0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: "all" }}
                >
                  <Image
                    src={items[1].image}
                    width={60}
                    height={60}
                    alt={items[1].imageAlt}
                    className="w-10 xl:w-15 h-auto mb-4 xl:mb-5"
                  ></Image>
                  <h3 className="text-30 leading-[1.333333333333333] font-light text-black">
                    {items[1].title}
                  </h3>
                </motion.div>
              )}
            </div>
            <div className="">
              {items[2] && (
                <motion.div
                  variants={moveUp(0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: "all" }}
                >
                  <Image
                    src={items[2].image}
                    width={60}
                    height={60}
                    alt={items[2].imageAlt}
                    className="w-10 xl:w-15 h-auto mb-4 xl:mb-5"
                  ></Image>
                  <h3 className="text-30 leading-[1.333333333333333] font-light text-black">
                    {items[2].title}
                  </h3>
                </motion.div>
              )}
            </div>
          </div>
          <div className="explr-grid__col">
            <div>
              {items[3] && (
                <motion.div
                  variants={moveUp(0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: "all" }}
                >
                  <Image
                    src={items[3].image}
                    width={60}
                    height={60}
                    alt={items[3].imageAlt}
                    className="w-10 xl:w-15 h-auto mb-4 xl:mb-30px"
                  ></Image>
                  <h3 className="text-30 leading-[1.333333333333333] font-light text-black">
                    {items[3].title}
                  </h3>
                </motion.div>
              )}
            </div>
            <div className="">
              {items[4] && (
                <motion.div
                  variants={moveUp(1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: "all" }}
                >
                  <Image
                    src={items[4].image}
                    width={60}
                    height={60}
                    alt={items[4].imageAlt}
                    className="w-10 xl:w-15 h-auto mb-4 xl:mb-30px"
                  ></Image>
                  <h3 className="text-30 leading-[1.333333333333333] font-light text-black">
                    {items[4].title}
                  </h3>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExplore;
