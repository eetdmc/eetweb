import Image from "next/image";
import { assets } from "@/public/assets";
const Main = () => {
  return ( 
    <section className=" pb-15  ">
      <div className="pm-noise pt-15 xl:pt-[130px]">
      <div className="container">
        <div className="text-center pb-10 xl:pb-[114px]">
            <h3 className="text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px]">Contact</h3>
            <h1 className="text-80 leading-[1.25] font-light text-black max-w-7xl mx-auto">Just Say Hello!</h1>
        </div>
      </div>
      </div>
      <div className="mb-15 xl:mb-25 min-h-[40vh] xl:h-[750px] relative overflow-hidden bg-amber-100">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-0 from-transparent to-100 to-black/80 z-10" />
         <Image src="/assets/images/contact/main.jpg" alt="" width={1920} height={1080}  className="w-full h-full object-cover absolute top-0 left-0 z-0" />
         <div className="container relative z-20 h-full">
          <div className="w-full flex flex-col items-center justify-end h-full pb-15 xl:pb-25 2xl:pb-[123px] ">
            <div className="bg-gradient-to-r from-0 from-transparent via-49% via-white to-100 to-tranparent w-full h-[2px] mb-8 lg:mb-10 xl:mb-[44px]" ></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white text-center">
              <div>
                <h3 className="text-19 leading-lhtext-19 font-light font-inter mb-3 xl:mb-[25px]">Call Us</h3>
                <p className="text-30 leading-[1.333333333333333] font-light ">+971 4 422 9563</p>
              </div>
              <div>
                <h3 className="text-19 leading-lhtext-19 font-light font-inter mb-3 xl:mb-[25px]">Address</h3>
                <p className="text-30 leading-[1.333333333333333] font-light ">PO Box 212371, Suite 12AE02, iRise Tower, Barsha Heights, Dubai, UAE</p>
              </div>
              <div>
                <h3 className="text-19 leading-lhtext-19 font-light font-inter mb-3 xl:mb-[25px]">Mail Us</h3>
                <p className="text-30 leading-[1.333333333333333] font-light ">info@eet.ae</p>
              </div>
            </div>
          </div>
         </div>
      </div>
      
    </section>
   );
}
 
export default Main;