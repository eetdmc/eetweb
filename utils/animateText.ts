// utils/splitText.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextOptions {
  className?: string;
  splitBy?: "words" | "chars" | "lines";
  stagger?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  y?: number;
  opacity?: number;
  scrollTrigger?: {
    start?: string;
    end?: string;
    trigger?: string | HTMLElement;
    toggleActions?: string;
    scrub?: boolean;
    once?: boolean;
  };
}

/**
 * Splits text content into individual elements for animation
 * @param element - The HTML element containing text to split
 * @param splitBy - How to split the text: 'words', 'chars', or 'lines'
 * @returns Array of HTML elements ready for animation
 */
export const splitTextContent = (element: HTMLElement, splitBy: "words" | "chars" | "lines" = "words"): HTMLElement[] => {
  const text: string = element.textContent || "";
  let splitElements: HTMLElement[] = [];

  switch (splitBy) {
    case "words":
      // Split text into words, filter out empty strings
      const words: string[] = text.split(/\s+/).filter((word: string) => word.length > 0);

      // Wrap each word in nested spans for animation control
      element.innerHTML = words.map((word: string) => `<span class="split-word"><span class="split-inner">${word}</span></span>`).join(" ");

      // Get all inner spans for animation
      splitElements = Array.from(element.querySelectorAll<HTMLElement>(".split-inner"));
      break;

    case "chars":
      const chars: string[] = text.split("");
      element.innerHTML = chars
        .map((char: string) => {
          if (char === " ") {
            return " ";
          }
          return `<span class="split-char"><span class="split-inner">${char}</span></span>`;
        })
        .join("");
      splitElements = Array.from(element.querySelectorAll<HTMLElement>(".split-inner"));
      break;

    case "lines":
      // For lines, we need to preserve the original layout
      const lineHeight: number = parseInt(getComputedStyle(element).lineHeight);
      const wordsForLines: string[] = text.split(/\s+/);
      element.innerHTML = wordsForLines.map((word: string) => `<span class="split-line-word">${word}</span>`).join(" ");

      // Group words into lines based on their position
      const wordElements: HTMLElement[] = Array.from(element.querySelectorAll<HTMLElement>(".split-line-word"));
      const lines: HTMLElement[][] = [];
      let currentLine: HTMLElement[] = [];
      let currentTop: number = -1;

      wordElements.forEach((wordEl: HTMLElement) => {
        const rect: DOMRect = wordEl.getBoundingClientRect();
        if (currentTop === -1) {
          currentTop = rect.top;
        }

        if (Math.abs(rect.top - currentTop) < 5) {
          // Same line (with 5px tolerance)
          currentLine.push(wordEl);
        } else {
          lines.push(currentLine);
          currentLine = [wordEl];
          currentTop = rect.top;
        }
      });

      if (currentLine.length > 0) {
        lines.push(currentLine);
      }

      // Wrap each line
      let innerHTML: string = "";
      lines.forEach((line: HTMLElement[], index: number) => {
        const lineText: string = line.map((el: HTMLElement) => el.textContent).join(" ");
        innerHTML += `<span class="split-line"><span class="split-inner">${lineText}</span></span>`;
        if (index < lines.length - 1) innerHTML += "<br>";
      });

      element.innerHTML = innerHTML;
      splitElements = Array.from(element.querySelectorAll<HTMLElement>(".split-inner"));
      break;
  }

  return splitElements;
};

// Animation function
export const animateSplitText = (elements: HTMLElement[], options: Omit<SplitTextOptions, "className"> = {}): gsap.core.Timeline => {
  const { stagger = 0.03, duration = 0.8, delay = 0, ease = "power2.out", y = 100, opacity = 0, scrollTrigger } = options;

  const timeline = gsap.timeline({
    delay,
    scrollTrigger: {
      trigger: elements[0]?.parentElement,
      start: "top 80%",
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    },
  });

  timeline.fromTo(
    elements,
    {
      y: `${y}%`,
      opacity,
      rotationX: 90,
    },
    {
      y: "0%",
      opacity: 1,
      rotationX: 0,
      duration,
      ease,
      stagger,
    }
  );

  return timeline;
};


// Main utility function
export const initSplitText = (container: HTMLElement, options: SplitTextOptions = {}): gsap.core.Timeline[] => {
  const { className = ".split-text", splitBy = "words", ...animationOptions } = options;

  const elements: NodeListOf<HTMLElement> = container.querySelectorAll<HTMLElement>(className);
  const timelines: gsap.core.Timeline[] = [];

  elements.forEach((element: HTMLElement, index: number) => {
    const splitElements: HTMLElement[] = splitTextContent(element, splitBy);
    const timeline: gsap.core.Timeline = animateSplitText(splitElements, {
      ...animationOptions,
      delay: (animationOptions.delay || 0) + index * 0.1, // Stagger multiple elements
      scrollTrigger: animationOptions.scrollTrigger
        ? {
            trigger: element,
            ...animationOptions.scrollTrigger,
          }
        : undefined,
    });

    timelines.push(timeline);
  });

  return timelines;
};

// React Hook
import { useEffect, useRef } from "react";

export const useSplitText = (options: SplitTextOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx: gsap.Context = gsap.context(() => {
      timelinesRef.current = initSplitText(containerRef.current!, options);
    }, containerRef);

    return () => {
      ctx.revert();
      timelinesRef.current.forEach((timeline: gsap.core.Timeline) => timeline.kill());
      timelinesRef.current = [];
    };
  }, []);

  return containerRef;
};

// Preset configurations
export const splitTextPresets = {
  fadeInUp: {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.03,
  },

  fadeInDown: {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.03,
  },

  slideInLeft: {
    x: -50,
    y: 0,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.02,
  },

  typewriter: {
    opacity: 0,
    duration: 0.05,
    ease: "none",
    stagger: 0.05,
    splitBy: "chars" as const,
  },

  bounce: {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "bounce.out",
    stagger: 0.05,
  },
  splitTextWords: {
    opacity: 0,
    y: 100,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.03,
    splitBy: "words" as const, // <--- add `as const` here
  },
};
