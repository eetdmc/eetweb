
import Image from "next/image";
import { assets } from "@/public/assets";
import Link from "next/link";
import { h3 } from "motion/react-client";

const Footer   = () => {
  return ( 
    <footer className="bg-black min-h-screen">
      <div className="container">
        <div className="relative z-0">
          <div className="absolute -top-30 xl:-top-[215px] w-full h-fit xl:h-auto xl:max-h-[435px] left-0 ">
            <div className="w-full h-full absolute z-0">
              <Image src={assets.footerImg} alt="" width={1700} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0  bg-black/60 w-full h-full z-10"></div>
            <div className="relative z-20 px-8 xl:px-[142px] py-30 xl:py-[145px]">
              <div className="flex items-center justify-between">
                <h2 className="3xl:max-w-4xl text-50 xl:text-60 3xl:text-70 font-[200] text-white leading-[1]">
                  Start Your Destination Experience Today</h2>
                <button className="rounded-full font-inter border border-white min-w-max px-4 py-3 xl:px-8 xl:py-3 3xl:px-[65px] 3xl:py-[49.5px] flex items-center gap-5 text-lg xl:text-30 font-light leading-lhtext-30 ">
                  <span className="text-white">Let&apos;s Connect</span>
                  <Image src={assets.arrowPrimary} alt="" width={50} height={50} className="w-5 xl:w-5 3xl:w-10 h-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:pt-[391px]">
          <div className="w-full h-[1px] bg-gradient-to-r from-0% from-white/10 via-52% via-white/100 to-100% to-white/10 mb-5 xl:mb-[50px]"></div>
          <div className="grid grid-cols-2 xl:grid-cols-3">
            <div>
              <h3 className="text-19 leading-lhtext-19 font-light text-white font-inter pb-3 xl:pb-[24px]">Follow Us</h3>
              <div>
                <ul>
                  <li className="text-30 leading-lhtext-30 font-light text-white">
                    <Link href={"#"}>Instegram</Link>
                  </li>
                  <li className="text-30 leading-lhtext-30 font-light text-white">
                    <Link href={"#"}>Linkedin</Link>
                  </li>
                  <li className="text-30 leading-lhtext-30 font-light text-white">
                    <Link href={"#"}>Facebook</Link>
                  </li>
                  <li className="text-30 leading-lhtext-30 font-light text-white">
                    <Link href={"#"}>X</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-19 leading-lhtext-19 font-light text-white font-inter pb-3 xl:pb-[24px]">Contact</h3>
              <ul>
                <li className="text-50 leading-[1.34] font-light text-white">
                  <Link href={"tel:+97144229563"}>+971 4 422 9563</Link>
                </li>
                <li className="text-50 leading-[1.34] font-light text-white">
                  <Link href={"mailto:info@eet.ae"}>info@eet.ae</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-19 leading-lhtext-19 font-light text-white font-inter pb-3 xl:pb-[24px]">Address</h3>
              <p className="text-19 leading-lhtext-19 font-light text-white font-inter xl:max-w-[28ch]">East Europe Travel & Tourism LLC
                PO Box 212371| Suite 12AE02 | iRise Tower
                Barsha Heights (Tecom)
                Dubai, UAE</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-0% from-white/10 via-52% via-white/100 to-100% to-white/10 mt-5 xl:mt-[68px] mb-5 xl:mb-[50px]"></div>
        <div className="grid grid-cols-2 xl:grid-cols-3">
          <div>
            <h3 className="text-19 leading-lhtext-19 font-light text-white font-inter pb-3 xl:pb-[24px]">Destinations</h3>
            <div>
              <ul>
                <li className="text-19 leading-lhtext-19 font-light text-white/70 font-inter hover:text-white transition-all duration-300">
                  UAE
                </li>
                <li className="text-19 leading-lhtext-19 font-light text-white/70 font-inter hover:text-white transition-all duration-300">
                  Oman
                </li>
                <li className="text-19 leading-lhtext-19 font-light text-white/70 font-inter hover:text-white transition-all duration-300">
                  Qatar
                </li>
                <li className="text-19 leading-lhtext-19 font-light text-white/70 font-inter hover:text-white transition-all duration-300">
                  Saudi Arabia
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-19 leading-lhtext-19 font-light text-white font-inter pb-3 xl:pb-[24px]">Services</h3>
            <ul>
              <li className="text-19 leading-lhtext-19 font-light text-white/70 font-inter hover:text-white transition-all duration-300">
                <Link href={"#"}>Hotel & Leisure Services</Link>
              </li>
              <li className="text-19 leading-lhtext-19 font-light text-white/70 font-inter hover:text-white transition-all duration-300">
                <Link href={"#"}>MICE</Link>
              </li>
              <li className="text-19 leading-lhtext-19 font-light text-white/70 font-inter hover:text-white transition-all duration-300">
                <Link href={"#"}>Cruise Liners</Link>
              </li>
              <li className="text-19 leading-lhtext-19 font-light text-white/70 font-inter hover:text-white transition-all duration-300">
                <Link href={"#"}>Experiences</Link>
              </li>
            </ul>
          </div>
       
        </div>
      </div>
      
      <div className="bg-[#191919] py-5 xl:py-[17px] mt-5 xl:mt-[74px]">
        <div className="container">
          <p className="text-14 leading-[2.857142857142857] font-light text-white font-inter">Copyright {new Date().getFullYear()}© East Europe Travel & Tourism LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer ;