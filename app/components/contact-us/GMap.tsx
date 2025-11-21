"use client";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";

const GMap = () => {
  return ( 
    <section className="pt-0 pb-50 xl:pb-[280px] 2xl:pb-[335px]">
      <div className="container">
        <motion.div variants={moveUp(0.05)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="w-full max-w-full xl:max-w-[845px] mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.136102005223!2d55.175992585789686!3d25.097253778452227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b709add218b%3A0xeb4c3812c99cc1cd!2sEET%20Destination%20Management!5e0!3m2!1sen!2sin!4v1760417192389!5m2!1sen!2sin" width="845" height="753" className="max-w-full max-h-50 xl:max-h-[500px] 3xl:max-h-[753px]" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
      </div>
    </section>
   );
}
 
export default GMap;