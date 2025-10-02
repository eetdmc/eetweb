import Image from "next/image";
import { assets } from "@/public/assets";
const Main = () => {
  return ( 
    <section className=" pb-15  xl:pb-[114px] ">
      <div className="pm-noise pt-15 xl:pt-[130px]">
      <div className="container">
        <div className="text-center pb-10 xl:pb-[114px]">
            <h3 className="text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px]">MICE</h3>
            <h1 className="text-80 leading-[1.25] font-[200] text-black max-w-7xl mx-auto">Elevate Your Business Events with EET’s MICE Solutions</h1>
        </div>
      </div>
      </div>
      <div className="mb-15 xl:mb-25">
        {/* <Image src="/assets/images/services/details/main.jpg" alt="" width={1920} height={1080} className="w-full h-full max-h-[750px] object-cover" /> */}
        <video src="/assets/videos/main.mp4" className="w-full h-[750px] object-cover" autoPlay={true} muted={true}
          loop={true} playsInline />
      </div>
      <div className="container">
        <div className="xl:max-w-[1080px] ml-auto mb-15 xl:mb-25 2xl:mb-[208px] xl:mr-[292px]">
          <div className="">
            <h2 className="text-30 leading-[1.333333333333333] font-light mb-8 xl:mb-50px max-w-[70ch]">From corporate meetings to world-class exhibitions, we design and deliver experiences that inspire, connect, and impress.</h2>
            <p className="text-19 leading-lhtext-19 font-light font-inter max-w-[70ch]">At EET DMC, we bring creativity, precision, and logistical excellence to the world of MICE — Meetings, Incentives, Conferences, and Exhibitions. With strong regional knowledge and a trusted partner network, we ensure every detail of your event is flawlessly executed, from concept to curtain call.</p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Main;