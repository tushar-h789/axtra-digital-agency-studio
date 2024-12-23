"use client";

import { motion } from "framer-motion"; // Importing framer-motion
import Image from "next/image";
import banner from "../../../../public/axtra/banner.jpg";
import DownArrowIcon from "../Icons/down-arrow";
import { useState } from "react";

// Variants for Animation
const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const paragraphVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3 + 2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

// Down Arrow Animation Variants
const arrowVariants = {
  move: {
    y: [0, 70, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 8,
        ease: "easeInOut",
      },
    },
  },
};

export default function HeroSection() {
  const title = "Mark";
  const subtitle = "Eting";
  const description =
    "Static and dynamic secure code review, can prevent a day before your product, is even released. We can integrate with, your dev environment.";
  const descriptionWords = description.split(",");

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="container mt-10">
      <div className="w-full relative text-slate-900 select-none">
        {/* Header Section */}
        <div className="flex items-center w-40 gap-6 ml-4 lg:ml-10">
          <span className="uppercase font-semibold text-2xl">Digital</span>
          <hr className="flex-grow border-t border-black" />
        </div>

        {/* video part start */}
        <div className="absolute right-6 top-24 shadow-slate-100 hidden lg:block">
          {/* "Added Video" Button */}
          <div className="relative">
            {/* Always playing background video */}
            <div className="flex items-center gap-5">
              <div
                onClick={handleToggleFullscreen}
                className="cursor-pointer relative w-36 h-36 rounded-full overflow-hidden"
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
                    <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-white border-b-10 border-b-transparent ml-2"></div>
                  </div>
                </div>
              </div>
              <div>
                <p className="uppercase">
                  Watch <br /> Video Intro
                </p>
              </div>
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && (
              <div className="fixed inset-0 bg-black z-50">
                <button
                  onClick={handleToggleFullscreen}
                  className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                  aria-label="Close fullscreen"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
        {/* video part end */}

        {/* Hero Title */}
        <div className="uppercase font-semibold lg:text-[250px] text-7xl leading-none relative ml-4 lg:ml-10">
          {Array.from(title).map((letter, index) => (
            <motion.h2
              key={`letter-${index}`}
              className="inline-block"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={textVariants}
            >
              {letter}
            </motion.h2>
          ))}

          <motion.h2
            className="absolute left-[32%] transform -translate-x-[20%] lg:top-[230px] z-10"
            initial="hidden"
            animate="visible"
            custom={title.length}
            variants={textVariants}
          >
            {subtitle}
          </motion.h2>
        </div>

        {/* Description */}
        <div className="w-72 ml-4 text-slate-500 mt-20 lg:mt-6">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            className="block"
          >
            {descriptionWords.map((word, index) => (
              <motion.span
                key={`word-${index}`}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={paragraphVariants}
                className="inline-block"
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Icon and Banner Section */}
        <div className="relative flex items-center mt-5">
          {/* DownArrowIcon on the Left */}
          <div className="flex items-center justify-center lg:w-64 lg:h-64">
            <motion.div
              variants={arrowVariants}
              animate="move"
              className="border-2 py-3 lg:py-8 rounded-full w-10 flex items-center justify-center"
            >
              <DownArrowIcon />
            </motion.div>
          </div>

          {/* Banner on the Right */}
          <div className="ml-6">
            <Image src={banner} width={900} height={300} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
}
