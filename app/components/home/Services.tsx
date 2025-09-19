"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "../../../public/assets";
import PrimaryBtn from "../common/PrimaryBtn";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ServicesData {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

const servicesData: ServicesData = {
  title: "Expertise Behind Every Experience",
  subtitle: "Services",
  items: [
    {
      title: "Hotel & Leisure Services",
      description: "Praesentium porro a repellat exercitationem architecto.Quam reprehenderit sed non atque in voluptate omnis, ratione architecto facere vitae ducimus.Error natus maxime molestias quo velit quas placeat praesentium nulla sit! ",
      image: "/assets/images/services/service-1.jpg",
      slug: "#"
    },
    {
      title: "MICE",
      description: "Lorem ipsum dolor sit amet consectetur  perspiciatis exercitationem magnam minus sit libero officia! Fuga amet, a aspernatur soluta veritatis non odio architecto aliquid ipsum eveniet atque laborum provident eos sapiente quia dolore.Suscipit, sit voluptatum!",
      image: "/assets/images/services/service-2.jpg",
      slug: "#"
    },
    {
      title: "Cruise Liners",
      description: "Discover unforgettable journeys with our curated leisure travel experiences, offering personalized holidays, cultural escapes, and relaxing getaways across the Arabian Gulf and beyond.",
      image: "/assets/images/services/service-3.jpg",
      slug: "#"
    },
    {
      title: "Experiences",
      description: "Lorem ipsum dolor sit amet consectetur dfasf adipisicing elit. Doloremque magni cumdgs tempora dolore saepe? Natus in sed oditdfafa praesentium?Praesentium porro  provident eos sapiente quia dolore.Suscipit,",
      image: "/assets/images/services/service-4.png",
      slug: "#"
    }
  ]
};

const Services = () => {
  const [activeService, setActiveService] = useState<number>(2); // Default to Cruise Liners (index 2)
  const [displayedService, setDisplayedService] = useState<number>(2); // What's currently shown
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleServiceChange = async (index: number) => {
    if (index === activeService || isTransitioning) return;

    setIsTransitioning(true);
    setActiveService(index);

    // Wait for fade-out to complete before changing the displayed content
    setTimeout(() => {
      setDisplayedService(index);

      // Wait a bit more for content to load, then fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Match the CSS transition duration
  };

  const currentService = servicesData.items[displayedService];

  return (
    <section className="pt-25 xl:pt-[138px] pb-15 xl:pb-[150px] sec-noise">
      <div className="container">
        <div className="grid grid-cols-2 2xl:grid-cols-[1282px_auto]">
          <h2 className="text-70 leading-[1] font-light max-w-2xl text-black">
            {servicesData.title}
          </h2>
          <h3 className="text-30 leading-[1] font-light text-black">
            {servicesData.subtitle}
          </h3>
        </div>
        <div className="mt-18 xl:mt-[120px]">
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[544px_631px_auto]">
            {/* Services List */}
            <div className="pt-6 xl:pt-[41px] border-t border-[#5C8898] mt-25 xl:mt-[180px]">
              <ul>
                {servicesData.items.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 xl:gap-4 group">
                    <button
                      className={`text-30 leading-[2] font-light text-left transition-all duration-300 ${activeService === index
                        ? 'text-black'
                        : ''
                        }`}
                      onClick={() => handleServiceChange(index)}
                      onMouseEnter={() => handleServiceChange(index)}
                    >
                      {service.title}
                    </button>
                    <Image
                      src={assets.arrowPrimary}
                      alt="Arrow"
                      width={26}
                      height={26}
                      className={`w-4 h-4 xl:w-6 xl:h-6 transition-all duration-300 ${activeService === index
                          ? 'opacity-100 translate-x-1'
                          : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                        }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Image */}
            <div className="relative overflow-hidden">
              <div className="relative h-[400px] xl:h-[681px]">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  width={631}
                  height={681}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500  ${isTransitioning
                      ? 'opacity-100 blur-[5px]'
                      : 'opacity-100 blur-0'
                    }`}
                />
              </div>
            </div>

            {/* Service Details */}
            <div className="pt-6 xl:pt-[41px] border-t border-[#5C8898] mt-25 xl:mt-[180px] pl-15 xl:pl-[106px]">
              <div className="relative">
                {/* <div
                  className={`transition-all duration-300 ease-in-out ${isTransitioning
                      ? 'opacity-0 translate-y-2'
                      : 'opacity-100 translate-y-0'
                    }`}
                > */}
                  <h3 className={`text-30 leading-[1] font-light text-black mb-4 xl:mb-[35px] transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            
                    {currentService.title}
                  </h3>
                  <p className={`text-19 leading-[1.526315789473684] font-light text-[#484848] font-inter max-w-[36ch] mb-12 xl:mb-[63px] transition-all duration-700 ease-in-out   ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
                    {currentService.description}
                  </p>
                  <div className={`transition-all duration-500 ease-in-out  ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  <PrimaryBtn text="Read More" />
                  </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;