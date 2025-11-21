import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseTextRevealOptions {
  selector?: string;
  stagger?: number;
  duration?: number;
  y?: number;
  rotateX?: number;
  ease?: string;
  start?: string;
}

export function useTextReveal(options: UseTextRevealOptions = {}) {
  const {
    selector = ".title",
    stagger = 0.03,
    duration = 0.6,
    y = 50,
    rotateX = -90,
    ease = "power3.out",
    start = "top 85%",
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ⭐ Register plugin ONLY on client
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const titles = document.querySelectorAll<HTMLElement>(selector);

      const splitTextIntoChars = (element: HTMLElement) => {
        const text = element.textContent || "";
        const words = text.split(" ");

        element.innerHTML = words
          .map((word) => {
            const chars = word
              .split("")
              .map((char) => `<span class="inline-block">${char}</span>`)
              .join("");
            return `<span class="inline-block" style="white-space: nowrap;">${chars}</span>`;
          })
          .join(" ");

        return element.querySelectorAll("span span");
      };

      titles.forEach((title) => {
        const chars = splitTextIntoChars(title);
        if (!chars || chars.length === 0) return;

        gsap.set(title, { perspective: 400 });

        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y,
            rotateX,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration,
            ease,
            stagger,
            scrollTrigger: {
              trigger: title,
              start,
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [selector, stagger, duration, y, rotateX, ease, start]);
}
