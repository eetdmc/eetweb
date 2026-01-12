"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type OfferPopupData = {
    leftImage: string;
    dottedLineSvgTop: string;
    dottedLineSvgBottom: string;
    planeSvg: string;
    smallTitle: string;
    mainTitle: string;
    description: string;
    ctaText: string;
};

const data: OfferPopupData = {
    leftImage: "/assets/images/home/offer-popup/left-popup.jpg",
    dottedLineSvgTop: "/assets/images/home/offer-popup/vector.svg",
    dottedLineSvgBottom: "/assets/images/home/offer-popup/vector-bottom.svg",
    planeSvg: "/assets/images/home/offer-popup/fly.svg",
    smallTitle: "Experience true luxury across the UAE.",
    mainTitle: "50% Travel Offer",
    description:
        "Discover iconic cities, golden deserts, and luxury experiences across the UAE with an exclusive 50% OFF. Start your unforgettable journey today.",
    ctaText: "Book Now",
};

type OfferPopupProps = {
    onClose?: () => void;
};

export default function HomeOfferPopup({ onClose }: OfferPopupProps) {
    const popupRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const popup = popupRef.current;
        const content = contentRef.current;
        if (!popup || !content) return;

        // Initial state: white vertical line
        gsap.set(popup, {
            scaleX: 0.01,
            scaleY: 0.08,
            transformOrigin: "50% 50%",
            backgroundColor: "#ffffff",
        });

        // Content hidden initially
        gsap.set(content, {
            visibility: "hidden",
            opacity: 0,
            y: 16,
        });

        gsap.set(imageRef.current, {
            opacity: 0,
        });

        const tl = gsap.timeline({
            defaults: { ease: "power1.inOut" },
        });

        // Grow INTO the small vertical line
        tl.fromTo(
            popup,
            { scaleY: 0 },
            {
                scaleY: 0.08,
                duration: 0.4,
                ease: "power2.out",
            }
        )

            // Hold the small line
            .to({}, { duration: 0.3 })

            // Width expansion (white only)
            .to(popup, {
                scaleX: 1,
                duration: 0.8,
            })

            // Height expansion
            .to(popup, {
                scaleY: 1,
                duration: 0.8,
            })
            .to(
                imageRef.current,
                {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.out",
                },
                "-=0.9" // starts shortly after height begins
            )

            // Reveal content during height expansion
            .set(content, { visibility: "visible" }, "-=0.7")

            // Fade content IN smoothly
            .to(
                content,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power2.out",
                },
                "-=0.7"
            );

        return () => {
            tl.kill();
        };
    }, []);

    const handleClose = () => {
        const popup = popupRef.current;
        const content = contentRef.current;
        if (!popup) return;

        const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            onComplete: () => {
                onClose?.();
            },
        });

        // Fade content + shrink height AT THE SAME TIME
        tl.to(
            content,
            {
                opacity: 0,
                y: 12,
                duration: 0.5,
            },
            0
        )

            .to(
                popup,
                {
                    scaleY: 0,
                    duration: 0.8,
                },
                0.2
            );
    };

    return (
        <section className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto">
            {/* POPUP */}
            <div
                ref={popupRef}
                className="
                    flex w-full
                    max-w-[1373px]
                    bg-white
                    mx-4 sm:mx-6 md:mx-[clamp(16px,10vw,273px)]
                    md:flex-row flex-col
                    origin-center
                "
            >
                <div ref={contentRef} className="flex w-full h-full md:flex-row flex-col">
                    {/* LEFT IMAGE */}
                    <div
                        ref={imageRef}
                        className="
                            relative w-full
                            md:w-[clamp(260px,30vw,581px)]
                            h-[250px]
                            md:h-auto
                            max-h-[669px]
                        "
                    >
                        <Image src={data.leftImage} alt="Destination" fill priority className="object-cover" />

                        {/* Mobile Close */}
                        <button
                            onClick={handleClose}
                            aria-label="Close"
                            className="
                                absolute top-3 right-3
                                h-[40px] w-[40px]
                                rounded-[38px]
                                bg-[#E9E9E9]
                                text-[17px]
                                flex items-center justify-center
                                text-black md:hidden cursor-pointer
                            "
                        >
                            ✕
                        </button>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative flex-1 px-[clamp(24px,4vw,64px)] py-[clamp(24px,4vw,64px)]">
                        {/* TOP SVG */}
                        <div className="absolute top-0 left-0 hidden md:block pointer-events-none">
                            <Image src={data.dottedLineSvgTop} alt="" width={862} height={195} />
                            <Image
                                src={data.planeSvg}
                                alt=""
                                width={48}
                                height={48}
                                className="absolute right-[22%] md:top-[22%] lg:top-[29%] xl:top-[36%]"
                            />
                        </div>

                        {/* Desktop Close */}
                        <button
                            onClick={handleClose}
                            aria-label="Close"
                            className="
                                absolute top-6 right-6
                                h-[51px] w-[51px]
                                rounded-[38px]
                                bg-[#E9E9E9]
                                text-[20px]
                                flex items-center justify-center
                                text-black hidden md:block cursor-pointer hover:scale-[1.08] transition-all duration-300 ease-in-out
                            "
                        >
                            ✕
                        </button>

                        {/* CONTENT */}
                        <div className="relative z-10 md:pt-[12%] pb-[13%]">
                            <p className="text-42 font-sans font-[300] text-black mb-3 lg:mb-[30px] max-w-[21ch] leading-[0.95]">
                                {data.smallTitle}
                            </p>

                            <h2 className="text-50 xl:text-70 3xl:text-90 font-sans font-[390] leading-[0.89] text-primary mb-5">
                                {data.mainTitle}
                            </h2>

                            <p className="text-20 leading-[1.5] font-[300] mb-3 lg:mb-[30px]">{data.description}</p>

                            <button
                                onClick={handleClose}
                                className="
    relative overflow-hidden
    px-5 py-[9px]
    rounded-[50px]
    border border-[#484848]
    bg-transparent
    font-[300]
    text-[#484848]
    text-19
    cursor-pointer
    transition-colors duration-300
    group
  "
                            >
                                {/* Hover fill */}
                                <span
                                    className="
      absolute inset-y-0 left-0
      w-0
      bg-black
      transition-all duration-500 ease-in-out
      group-hover:w-full rounded-full
      z-0
    "
                                />

                                {/* Button text */}
                                <span
                                    className="
      relative z-10
      transition-colors duration-300
      group-hover:text-white
    "
                                >
                                    {data.ctaText}
                                </span>
                            </button>
                        </div>

                        {/* BOTTOM SVG */}
                        <div className="absolute bottom-0 right-0 pointer-events-none w-[clamp(200px,30vw,428px)]">
                            <Image src={data.dottedLineSvgBottom} alt="" width={428} height={157} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
