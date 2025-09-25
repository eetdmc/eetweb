import Image from "next/image";
import {assets} from "@/public/assets";
const Header = () => {
  return ( 
    <header className={`w-full py-[35px] bg-cover pm-noise`}  >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src={assets.logo} alt="Logo" width={100} height={100} />
          </div>
          <div className="w-fit rounded-3xl  bg-white overflow-hidden">
            <nav>
              <ul className="flex font-manrope">
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-6 py-2"><a href="#" className="uppercase font-normal font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">About</a></li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-6 py-2"><a href="#" className="uppercase font-normal font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Services</a></li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-6 py-2"><a href="#" className="uppercase font-normal font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Destinations</a></li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-6 py-2"><a href="#" className="uppercase font-normal font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Partners</a></li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-6 py-2"><a href="#" className="uppercase font-normal font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Blogs</a></li>
                <li className="group hover:bg-primary transition-all duration-300 ease-in-out px-6 py-2"><a href="#" className="uppercase font-normal font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <button className="font-inter bg-primary-color bg-white px-5 py-2 flex items-center gap-2 uppercase rounded-full relative group hover:text-white">
              <div className="absolute top-0 left-0 w-0 h-full z-0 group-hover:w-full bg-black transition-all duration-300 ease-in-out rounded-full"></div>
              <span className="relative z-10 group-hover:text-white">Partner Login</span>
              <span><Image src={assets.user} alt="User" width={20} height={20} className="group-hover:brightness-0 group-hover:invert" /></span>
            </button>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default Header;