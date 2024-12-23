'use client';

import { motion } from "framer-motion";

type HoverTextPartProps = {
  subTitle: string;
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  paragraph: string[];
};

export default function HoverTextPart({ subTitle, titleOne, titleTwo, titleThree, paragraph }: HoverTextPartProps) {
  // Animation variants for heading and paragraph
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8
      }
    })
  };

  return (
    <section className="relative p-8 ">
      <div className="container mx-auto text-slate-200">
        {/* Title and Subtitle Section */}
        <div className="relative">
          {/* Decorative line before title */}
          <hr className="animated-line absolute left-36 -top-[300px] h-64 lg:border border-gray-900" />

          <div className="uppercase lg:w-4/5 ">
            <div className="relative z-10">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={headingVariants}
                transition={{ duration: 0.8 }}
                className="text-xl font-semibold"
              >
                {subTitle}
              </motion.h2>

              <h2 className="text-5xl my-3 font-medium">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={headingVariants}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="inline-block mr-2"
                >
                  {titleOne}
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={headingVariants}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="inline-block mr-2"
                >
                  {titleTwo}
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={headingVariants}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="inline-block"
                >
                  {titleThree}
                </motion.span>
              </h2>

              {/* Decorative line after title */}
              <hr className="animated-line absolute left-36 top-64 lg:h-[680px] lg:border border-gray-900" />
            </div>
          </div>
        </div>

        {/* Paragraph Section */}
        <div className="absolute lg:mx-0 w-full lg:w-2/3 right-0 top-72">
          <p className="text-gray-500">
            {paragraph.map((text, index) => (
              <motion.span
                key={index}
                custom={index + 4} // Add custom index for delay calculation
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={paragraphVariants}
                className="inline-block mr-1"
              >
                {text}{" "}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
