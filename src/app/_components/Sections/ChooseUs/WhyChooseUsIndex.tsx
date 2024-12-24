'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { FC } from "react";
import WhyChooseUs from "./WhyChooseUs";
import ChooseUsReason from "./ChooseUsReason";
import ChooseUsInformation from "./ChooseUsInformation";
import GoTogether from "./GoTogether";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseUsIndex: FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.set(sectionsRef.current.slice(1), { xPercent: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: "top top",
        end: () => `+=${sectionsRef.current.length * 100}%`, // Adjust dynamically
        scrub: 4,
        anticipatePin: 1,
      },
    });

    sectionsRef.current.forEach((section, index) => {
      if (index === 0) return;

      tl.to(section, {
        xPercent: 0,
        duration: 10,
        ease: "none",
      }).to(
        sectionsRef.current[index - 1],
        {
          xPercent: -100,
          duration: 10,
          ease: "none",
        },
        "<"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#f6f6f5] w-full h-screen"> {/* Dynamic height */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {[WhyChooseUs, ChooseUsReason, ChooseUsInformation, GoTogether].map(
          (Component, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionsRef.current[index] = el;
              }}
              className="absolute w-full h-screen" // Each section has full screen height
            >
              <Component />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WhyChooseUsIndex;
