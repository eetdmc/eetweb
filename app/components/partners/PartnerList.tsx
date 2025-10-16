"use client";
import { partnerData } from "./data";
import Image from "next/image";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
const PartnerList = () => {
  return ( 
    <section className="pb-50 xl:pb-[300px] 2xl:pb-[400px]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 xl:gap-15">
          {partnerData.PartnerList.items.map((item, index) => (
            <motion.div variants={moveUp(index * 0.1)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} key={index} className="border-b border-black/10 flex justify-center items-center pb-8 xl:pb-15 group">
              <div className="">
                <Image src={item.image} alt={item.name} width={200} height={200} className="w-25 xl:w-auto max-w-[100%] h-auto object-contain group-hover:scale-110 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default PartnerList;