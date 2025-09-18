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
          <div className="w-fit rounded-3xl px-6 py-2 bg-white">
            <nav>
              <ul className="flex gap-5 font-manrope">
                <li><a href="#" className="uppercase font-normal font-manrope text-black">About</a></li>
                <li><a href="#" className="uppercase font-normal font-manrope text-black">Services</a></li>
                <li><a href="#" className="uppercase font-normal font-manrope text-black">Destinations</a></li>
                <li><a href="#" className="uppercase font-normal font-manrope text-black">Partners</a></li>
                <li><a href="#" className="uppercase font-normal font-manrope text-black">Blogs</a></li>
                <li><a href="#" className="uppercase font-normal font-manrope text-black">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <button className="font-inter bg-primary-color bg-white px-5 py-2 flex items-center gap-2 uppercase rounded-2xl">Partner Login <span><Image src={assets.user} alt="User" width={20} height={20} /></span></button>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default Header;