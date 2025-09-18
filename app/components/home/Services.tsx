import Image from "next/image";
import { assets } from "../../../public/assets";
import PrimaryBtn from "../common/PrimaryBtn";
const Services = () => {
  return ( 
    <section className="pt-25 xl:pt-[138px] pb-15 xl:pb-[150px] sec-noise">
      <div className="container">
        <div className="grid grid-cols-2 2xl:grid-cols-[1282px_auto] ">
          <h2 className="text-70 leading-[1] font-light max-w-2xl text-black">Expertise Behind Every Experience</h2>
          <h3 className="text-30 leading-[1] font-light text-black">Services</h3>
        </div>
        <div className="mt-18 xl:mt-[120px]">
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[544px_631px_auto] ">
            <div className="pt-6 xl:pt-[41px] border-t border-[#5C8898] mt-25 xl:mt-[180px]">
              <ul>
                <li className="flex items-center gap-3 xl:gap-4 group"><button className="text-30 leading-[2] font-light">Hotel & Leisure Services</button> <Image src={assets.arrowPrimary} alt="Arrow" width={26} height={26} className="w-4 h-4 xl:w-6 xl:h-6 opacity-0 group-hover:opacity-100 transition-all duration-200" /></li>
                <li className="flex items-center gap-3 xl:gap-4 group"><button className="text-30 leading-[2] font-light">MICE</button> <Image src={assets.arrowPrimary} alt="Arrow" width={26} height={26} className="w-4 h-4 xl:w-6 xl:h-6 opacity-0 group-hover:opacity-100 transition-all duration-200" /></li>
                <li className="flex items-center gap-3 xl:gap-4 group"><button className="text-30 leading-[2] font-light">Cruise Liners</button> <Image src={assets.arrowPrimary} alt="Arrow" width={26} height={26} className="w-4 h-4 xl:w-6 xl:h-6 opacity-0 group-hover:opacity-100 transition-all duration-200" /></li>
                <li className="flex items-center gap-3 xl:gap-4 group"><button className="text-30 leading-[2] font-light">Experiences</button> <Image src={assets.arrowPrimary} alt="Arrow" width={26} height={26} className="w-4 h-4 xl:w-6 xl:h-6 opacity-0 group-hover:opacity-100 transition-all duration-200" /></li>
              </ul>
            </div>
            <div className="relative">
              <div className="">
                <Image src="/assets/images/services/service-3.jpg" alt="Services" width={631} height={681} />
              </div>
            </div>
            <div className="pt-6 xl:pt-[41px] border-t border-[#5C8898] mt-25 xl:mt-[180px] pl-15 xl:pl-[106px]">
              <div>
                <h3 className="text-30 leading-[1] font-light text-black mb-4 xl:mb-[35px]">Cruise Liners</h3>
                <p className="text-19 leading-[1.526315789473684] font-light text-[#484848] font-inter max-w-[36ch] mb-12 xl:mb-[63px]">Discover unforgettable journeys with our curated leisure travel experiences, offering personalized holidays, cultural escapes, and relaxing getaways across the Arabian Gulf and beyond.</p>  
                <PrimaryBtn text="Read More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Services;