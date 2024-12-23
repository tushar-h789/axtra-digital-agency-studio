'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import marketingAgency from "../../../../public/axtra/marketing-agency.jpg";
import Button from "../Button";

export default function MarketingAgencySection() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const image = imageRef.current;
    const section = sectionRef.current;

    // Initial state
    gsap.set(image, {
      opacity: 0,
      y: 100,
    });

    // Main timeline for image appearance and movement
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "30% center", // Trigger when section is 40% visible
        end: "60% center",
        scrub: 1, // Smooth scrolling
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    mainTl.to(image, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Quick upward movement timeline
    const upwardTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "60% center", // Start quick movement after initial animation
        end: "70% center",
        scrub: true, // Enable scrubbing
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    upwardTl.to(image, {
      y: -50,
      duration: 0.3,
      ease: "power1.in",
    });

    // Fade out timeline
    const fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "80% center", // Start fade out near the end
        end: "90% center",
        scrub: 1, // Smooth scrolling
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    fadeTl.to(image, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    return () => {
      // Cleanup all scroll triggers
      [mainTl, upwardTl, fadeTl].forEach((timeline) => {
        if (timeline.scrollTrigger) {
          timeline.scrollTrigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black bg-custom p-8">
      <div className="container grid grid-cols-1 lg:grid-cols-2  lg:py-60 bg-black">
        {/* Image with animation */}
        <div ref={imageRef} className="relative">
          <Image
            src={marketingAgency}
            width={500}
            height={500}
            alt="marketing agency"
            className="relative"
          />
        </div>

        {/* Content Section */}
          <div className="text-slate-200 relative">
            <hr className="animated-line absolute left-36 -top-[272px] h-64 lg:border border-gray-900" />
            <div className="uppercase lg:w-4/5 mt-16">
              <div className="relative z-10">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-xl"
                >
                  Who We Are
                </motion.h2>
                <h2 className="lg:text-5xl text-2xl my-3 font-semibold">
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="inline-block mr-2"
                  >
                    We are leading
                  </motion.span>
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="inline-block mr-2"
                  >
                    digital marketing
                  </motion.span>
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="inline-block mr-10 lg:mr-0"
                  >
                    agency.
                  </motion.span>
                </h2>
                <hr className="animated-line absolute left-36 top-52 lg:h-[735px] lg:border border-gray-900" />
              </div>
            </div>
            {/* bg black not found */}
            <div className="absolute lg:mx-0 w-full lg:w-2/3 lg:right-10 top-64">
              <p className="text-gray-500">
                {[
                  "We're a team of strategic digital marketing",
                  "working globally with largest brands. We believe",
                  "that progress only happens when you refuse",
                  "to play it safe. We combine ideas, behaviors, and",
                  "insights with design, and data to produce brand",
                  "experiences that customers love.",
                ].map((text, index) => (
                  <motion.span key={index} className="inline-block mr-1">
                    {text}{" "}
                  </motion.span>
                ))}
              </p>
              <div className="mt-6 lg:mt-20">
                <Button />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
