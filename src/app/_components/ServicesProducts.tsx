import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

interface ServicesProps {
  title: string;
  bgImage: { src: string };
}

export default function ServicesProducts({ title, bgImage }: ServicesProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Create motion values for smooth animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Create springs with reduced stiffness for smoother movement
  const springX = useSpring(x, {
    stiffness: 100, // Lower stiffness for smoother movement
    damping: 30,    // Increased damping for less oscillation
    mass: 1        // Added mass for more natural movement
  });
  
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    mass: 1
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - 150; // 150 is half of image width
    const mouseY = e.clientY - rect.top - 150;  // 150 is half of image height
    
    // Update motion values
    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Section Content */}
      <div className="w-full mt-5 lg:flex justify-evenly border-t-2 border-b-2 pt-20 pb-20 border-b-gray-100 border-t-gray-100 ml-4 lg:ml-0">
        <div className="lg:w-[20%]">
          <h2 className="text-2xl font-medium uppercase leading-snug">
            {title}
          </h2>
        </div>

        <div className="lg:w-[40%] text-lg text-gray-600">
          <p className="w-96 mt-2">
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </p>
          <ul className="mt-8">
            <li>+ Logo Design</li>
            <li>+ Advertisement</li>
            <li>+ Promotion</li>
          </ul>
        </div>
        <div className="lg:w-[20%] mt-10">
          <Button
            title={"Contact Us"}
            hoverBackgroundColor="black"
            hoverTextColor="white"
          />
        </div>
      </div>

      {/* Image Display */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: springX,
            top: springY,
            zIndex: -1,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ 
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 }
          }}
        >
          <Image
            src={bgImage.src}
            width={300}
            height={300}
            alt="Hover Visual"
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
}