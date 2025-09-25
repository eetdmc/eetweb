// utils/splitText.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextOptions {
  className?: string;
  splitBy?: "words" | "chars" | "lines";
  stagger?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  y?: number;
  x?: number;
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

// Interface for multiple animation configurations
export interface MultipleAnimationConfig {
  className: string;
  options: Omit<SplitTextOptions, 'className'>;
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
  const { stagger = 0.03, duration = 0.8, delay = 0, ease = "power2.out", y = 100, x = 0, opacity = 0, scrollTrigger } = options;

  const timeline = gsap.timeline({
    delay,
    scrollTrigger: {
      trigger: elements[0]?.parentElement,
      start: "top 80%",
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    },
  });

  // Build from and to objects dynamically
  const fromProps: any = {
    opacity,
  };

  const toProps: any = {
    opacity: 1,
    duration,
    ease,
    stagger,
  };

  // Add transform properties if they exist
  if (y !== 0) {
    fromProps.y = `${y}%`;
    toProps.y = "0%";
  }

  if (x !== 0) {
    fromProps.x = `${x}%`;
    toProps.x = "0%";
  }

  // Add rotation if y transform exists (for the flip effect)
  if (y !== 0) {
    fromProps.rotationX = 90;
    toProps.rotationX = 0;
  }

  timeline.fromTo(elements, fromProps, toProps);

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

// Enhanced React Hook - supports both single and multiple animations
export const useSplitText = (
  config: SplitTextOptions | MultipleAnimationConfig[]
) => {
  const containerRef = useRef<HTMLElement>(null);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx: gsap.Context = gsap.context(() => {
      timelinesRef.current = [];

      // Check if config is an array (multiple animations) or single config
      if (Array.isArray(config)) {
        // Multiple animations
        config.forEach((animConfig) => {
          const timelines = initSplitText(containerRef.current!, {
            className: animConfig.className,
            ...animConfig.options
          });
          timelinesRef.current.push(...timelines);
        });
      } else {
        // Single animation (backward compatibility)
        const timelines = initSplitText(containerRef.current!, config);
        timelinesRef.current.push(...timelines);
      }
    }, containerRef);

    return () => {
      ctx.revert();
      timelinesRef.current.forEach((timeline: gsap.core.Timeline) => timeline.kill());
      timelinesRef.current = [];
    };
  }, []);

  return containerRef;
};

// Image/Element reveal animation options
export interface RevealAnimationOptions {
  className?: string;
  duration?: number;
  delay?: number;
  ease?: string;
  direction?: "left" | "right" | "top" | "bottom";
  scale?: number;
  rotation?: number;
  scrollTrigger?: {
    start?: string;
    end?: string;
    trigger?: string | HTMLElement;
    toggleActions?: string;
    scrub?: boolean;
    once?: boolean;
  };
}

// Image/Element reveal animation function
export const animateReveal = (element: HTMLElement, options: RevealAnimationOptions = {}): gsap.core.Timeline => {
  const { 
    duration = 1.2, 
    delay = 0, 
    ease = "power2.out", 
    direction = "left",
    scale = 1.3,
    rotation = 2,
    scrollTrigger 
  } = options;

  const timeline = gsap.timeline({
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    },
  });

  // Set initial clip path based on direction
  const clipPaths = {
    left: { initial: "inset(0 100% 0 0)", final: "inset(0 0% 0 0)" },
    right: { initial: "inset(0 0 0 100%)", final: "inset(0 0% 0 0)" },
    top: { initial: "inset(100% 0 0 0)", final: "inset(0% 0 0 0)" },
    bottom: { initial: "inset(0 0 100% 0)", final: "inset(0% 0 0% 0)" }
  };

  const clipPath = clipPaths[direction];

  // Find the image inside the container (if it exists) - support Next.js Image component
  const image = element.querySelector('img') as HTMLElement;

  // Ensure the container has overflow hidden and proper positioning
  gsap.set(element, {
    overflow: 'hidden',
    position: 'relative'
  });

  // Set initial state without hiding the image completely
  timeline
    .set(element, {
      clipPath: clipPath.initial
    })
    .to(element, {
      clipPath: clipPath.final,
      duration,
      ease
    });

  // If there's an image inside, animate it too
  if (image) {
    // Set initial image state
    gsap.set(image, {
      scale,
      rotation,
      transformOrigin: "center center"
    });

    timeline.to(
      image,
      {
        scale: 1,
        rotation: 0,
        duration,
        ease
      },
      0 // Start at the same time as clip path animation
    );
  }

  return timeline;
};

// Main utility function for reveals
export const initReveal = (container: HTMLElement, options: RevealAnimationOptions = {}): gsap.core.Timeline[] => {
  const { className = ".reveal-element", ...animationOptions } = options;

  const elements: NodeListOf<HTMLElement> = container.querySelectorAll<HTMLElement>(className);
  const timelines: gsap.core.Timeline[] = [];

  elements.forEach((element: HTMLElement, index: number) => {
    const timeline: gsap.core.Timeline = animateReveal(element, {
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

// Combined interface for mixed animations
export interface MixedAnimationConfig {
  className: string;
  type: "text" | "reveal";
  options: SplitTextOptions | RevealAnimationOptions;
}

// Separate hook specifically for reveal animations
export const useReveal = (options: RevealAnimationOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx: gsap.Context = gsap.context(() => {
      timelinesRef.current = initReveal(containerRef.current!, options);
    }, containerRef);

    return () => {
      ctx.revert();
      timelinesRef.current.forEach((timeline: gsap.core.Timeline) => timeline.kill());
      timelinesRef.current = [];
    };
  }, []);

  return containerRef;
};

// Enhanced hook that supports text, reveal, and mixed animations
export const useAnimations = (
  config: SplitTextOptions | MultipleAnimationConfig[] | RevealAnimationOptions | MixedAnimationConfig[]
) => {
  const containerRef = useRef<HTMLElement>(null);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx: gsap.Context = gsap.context(() => {
      timelinesRef.current = [];

      if (Array.isArray(config)) {
        // Check if it's mixed animations or multiple text animations
        if (config.length > 0 && 'type' in config[0]) {
          // Mixed animations
          (config as MixedAnimationConfig[]).forEach((animConfig) => {
            if (animConfig.type === "text") {
              const timelines = initSplitText(containerRef.current!, {
                className: animConfig.className,
                ...(animConfig.options as SplitTextOptions)
              });
              timelinesRef.current.push(...timelines);
            } else if (animConfig.type === "reveal") {
              const timelines = initReveal(containerRef.current!, {
                className: animConfig.className,
                ...(animConfig.options as RevealAnimationOptions)
              });
              timelinesRef.current.push(...timelines);
            }
          });
        } else {
          // Multiple text animations
          (config as MultipleAnimationConfig[]).forEach((animConfig) => {
            const timelines = initSplitText(containerRef.current!, {
              className: animConfig.className,
              ...animConfig.options
            });
            timelinesRef.current.push(...timelines);
          });
        }
      } else {
        // Single animation - check if it has reveal-specific properties
        if ('direction' in config || 'scale' in config) {
          // Single reveal animation
          const timelines = initReveal(containerRef.current!, config as RevealAnimationOptions);
          timelinesRef.current.push(...timelines);
        } else {
          // Single text animation
          const timelines = initSplitText(containerRef.current!, config as SplitTextOptions);
          timelinesRef.current.push(...timelines);
        }
      }
    }, containerRef);

    return () => {
      ctx.revert();
      timelinesRef.current.forEach((timeline: gsap.core.Timeline) => timeline.kill());
      timelinesRef.current = [];
    };
  }, []);

  return containerRef;
};

// Preset configurations for text animations
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

  slideInRight: {
    x: 50,
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
    splitBy: "words" as const,
  },

  fadeIn: {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.03,
    y: 0,
  },
};

// Preset configurations for reveal animations
export const revealPresets = {
  slideFromLeft: {
    direction: "left" as const,
    duration: 1.2,
    ease: "power2.out",
    scale: 1.3,
    rotation: 2,
  },

  slideFromRight: {
    direction: "right" as const,
    duration: 1.2,
    ease: "power2.out",
    scale: 1.3,
    rotation: -2,
  },

  slideFromTop: {
    direction: "top" as const,
    duration: 1.0,
    ease: "power2.out",
    scale: 1.2,
    rotation: 0,
  },

  slideFromBottom: {
    direction: "bottom" as const,
    duration: 1.0,
    ease: "power2.out",
    scale: 1.2,
    rotation: 0,
  },

  zoomReveal: {
    direction: "left" as const,
    duration: 1.5,
    ease: "power2.out",
    scale: 1.5,
    rotation: 5,
  },
};