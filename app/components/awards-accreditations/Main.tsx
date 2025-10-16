"use client";
import {useTextReveal} from "@/hooks/useTextReveal";
const Main = () => { 
useTextReveal({ selector: '.heading' });

// Animate subtitles with different settings
useTextReveal({
  selector: '.subtitle',
  stagger: 0.02,
  duration: 0.4,
  y: 30,
});
  return (
    <section className="pb-10 xl:pb-[114px]">
      <div className="pm-noise pt-10 xl:pt-25">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[159px]">
            <h3 className=" subtitle text-34 leading-[1.294117647058824] font-light text-black mb-3 xl:mb-[25px]">Awards & Accreditations</h3>
            <h1 className="heading text-60 xl:text-80 leading-[1.25] font-light text-black max-w-7xl mx-auto">Industry Awards & Prestigious Accreditations</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;