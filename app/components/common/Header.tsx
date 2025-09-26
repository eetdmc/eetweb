import Image from "next/image";
import {assets} from "@/public/assets";
const Header = () => {
  return ( 
    <header className={`w-full py-3 xl:py-7 2xlpy-[35px] bg-cover pm-noise`}  >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src={assets.logo} alt="Logo" width={200} height={200} className="w-15 xl:w-[105px] h-auto object-contain" />
          </div>
          <div className="w-fit rounded-3xl  bg-white overflow-hidden 2xl:ml-68 3xl:ml-15 hidden xl:block">
            <nav>
              <ul className="flex font-manrope">
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-[17.5px] first:pl-[30px] py-2 xl:py-[12.5px]">
                  <a href="#" className="uppercase font-light leading-[1] text-base font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">About</a>
                </li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-[17.5px] py-2 xl:py-[12.5px]">
                  <a href="#" className="uppercase font-light leading-[1] text-base font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Services</a>
                </li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-[17.5px] py-2 xl:py-[12.5px]">
                  <a href="#" className="uppercase font-light leading-[1] text-base font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Destinations</a>
                </li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-[17.5px] py-2 xl:py-[12.5px]">
                  <a href="#" className="uppercase font-light leading-[1] text-base font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Partners</a>
                </li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-[17.5px] py-2 xl:py-[12.5px]">
                  <a href="#" className="uppercase font-light leading-[1] text-base font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Blogs</a>
                </li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-[17.5px] last:pr-[30px] py-2 xl:py-[12.5px]">
                  <a href="#" className="uppercase font-light leading-[1] text-base font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <button className="font-inter bg-primary-color bg-white px-5 py-2 xl:pt-[15px] xl:pb-[13px] flex items-center gap-[6px] uppercase rounded-full relative group hover:text-white">
              <div className="absolute top-0 left-0 w-0 h-full z-0 group-hover:w-full bg-black transition-all duration-300 ease-in-out rounded-full"></div>
              <span className="relative z-10 font-[300] leading-[1] text-black group-hover:text-white">Partner Login</span>
              <span><Image src={assets.user} alt="User" width={20} height={20} className="w-[11px] h-[11px] group-hover:brightness-0 group-hover:invert" /></span>
            </button>
          </div>
          <div className="xl:hidden menu-icon">
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default Header;