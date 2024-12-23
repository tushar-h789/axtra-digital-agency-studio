"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import sliderOne from "../../../../public/axtra/benjon-web-01.jpg";
import sliderTwo from "../../../../public/axtra/benjon-web-02.jpg";
import sliderThree from "../../../../public/axtra/benjon-web-03.jpg";
import sliderFour from "../../../../public/axtra/benjon-web-04.jpg";
import RightArrowIcon from "../Icons/right-arrow";
import LeftArrowIcon from "../Icons/left-arrow-icon";

export default function FeaturedSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplay = Autoplay({ delay: 10000, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
    },
    [autoplay]
  );

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.reset();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.reset();
    }
  };

  useEffect(() => {
    const onSelect = () => {
      if (emblaApi) {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      }
    };

    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi]);

  const slides = [
    { image: sliderOne, id: 1 },
    { image: sliderTwo, id: 2 },
    { image: sliderThree, id: 3 },
    { image: sliderFour, id: 4 },
  ];

  return (
    <section className="bg-black">
      <div className="container mx-auto relative py-20">
        <div className="lg:flex justify-between items-start mb-10">
          <h2 className="text-2xl text-white font-bold uppercase lg:leading-6">
            Featured <br /> Work
          </h2>

          <motion.p
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-5xl font-medium mt-6 lg:mt-0"
          >
            {`${selectedIndex + 1}/`}
            <span className="text-5xl text-gray-600">4</span>
          </motion.p>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div key={slide.id} className="embla__slide">
                <div className="lg:flex min-h-[70vh] relative">
                  <AnimatePresence mode="wait">
                    {index === selectedIndex && (
                      <motion.div
                        className="w-1/2 flex items-center"
                        initial={{ opacity: 0, y: 280 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -80 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <h3 className="text-6xl lg:text-9xl  lg:ml-20 leading-none font-medium text-white absolute z-10 mt-[450px] lg:mt-0 right-16 lg:left-0">
                          BENJON
                          <br />
                          <span className="ml-20 lg:ml-32">WEBSITE</span>
                          <br />
                          <span className="">2012</span>
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="lg:w-1/2  h-[600px] relative">
                    <Image
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors z-20"
          >
            <LeftArrowIcon className="w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors z-20"
          >
            {/* <p>&gt;</p> */}
            <RightArrowIcon className="w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
