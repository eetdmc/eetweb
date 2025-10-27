"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const MeetOurTeam = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [marginLeft, setMarginLeft] = useState<number>(0);

  useEffect(() => {
    // Function to update margin safely
    const updateMargin = () => {
      const container = containerRef.current;
      if (container) {
        // Compute the left offset relative to viewport
        const rect = container.getBoundingClientRect();
        setMarginLeft(rect.left + window.scrollX);
      }
    };

    // ✅ Wait until next paint to ensure layout is stable
    requestAnimationFrame(updateMargin);

    // ✅ Recalculate on resize
    window.addEventListener("resize", updateMargin);

    return () => {
      window.removeEventListener("resize", updateMargin);
    };
  }, []);

  return (
    <section className="overflow-hidden sec-noise mb-0 xl:mb-[80px]">
      <div>
        {/* Invisible container to capture left offset */}
        <div ref={containerRef} className="container"></div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] ">
          {/* Left Title */}
          <div
            style={{ marginLeft }}
            className="transition-all duration-500 px-3 mb-5 md:mb-0"
          >
            <h2 className="text-50 xl:text-70 3xl:text-70 font-light leading-[1] mt-12 lg:mt-[148px]">
              Meet <br /> Our Team
            </h2>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/assets/images/team/teams.jpg"
              alt="team"
              width={1237}
              height={842}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
