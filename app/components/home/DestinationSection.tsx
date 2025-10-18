"use client";
import DestinationSliderNew from "./DestinationSliderNew";
import { useTextReveal } from "@/hooks/useTextReveal";

const DestinationSection = () => {
  // Animate headings
  useTextReveal({ selector: '.heading' });

  // Animate subtitles with different settings
  useTextReveal({
    selector: '.subtitle',
    stagger: 0.02,
    duration: 0.4,
    y: 30,
  });
  return ( 
    <section className="py-10 xl:pt-30 xl:pb-26 overflow-hidden">
      <div className="container">
        <div className="xl:pl-[353px] 3xl:pl-[573px]" >
          <h2 className="heading text-70 leading-[1] font-light mb-4 xl:mb-[50px] max-w-4xl text-black">Expertise Behind Every Experience</h2>
          <h3 className="subtitle text-34 leading-[1.235294117647059] font-light text-black">Destinations</h3>
        </div>
      </div>
      <DestinationSliderNew />
    </section>
   );
}
 
export default DestinationSection;