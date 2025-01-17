"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface TimelineItem {
  title: string;
  description: string;
}
const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const items: TimelineItem[] = [
    {
      title: "Operating System",
      description: "Owl OS for seamless gaming experience\nPowered by Owl",
    },
    {
      title: "Haptics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Retro Game\nEmulation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "Portability",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
  ];
  return (
    <div className="pl-5 lg:px-32 min-h-screen flex flex-col md:flex-row w-full justify-between items-center text-white">
      <div className="felx flex-col space-y-16 justify-center items-center w-full md:w-1/2 p-8">
        <h1 className="text-3xl md:text-4xl md:text-nowrap font-ethnocentric uppercase">
          Product Features
        </h1>
        <div className="relative max-w-7xl w-full mx-auto">
          <div className="absolute left-1/2 top-[32px] w-[2px] h-[calc(100%-85px)] bg-[#DAD8DA]" />

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Left side - Title */}
                <div className="flex-1 text-right">
                  <h3
                    className={`text-base md:text-lg font-medium transition-colors duration-200 whitespace-pre-line ${
                      index === activeIndex ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Center - Timeline dot */}
                <div className="relative">
                  <div
                    className={cn(
                      `w-3 h-3 rounded-full border-2 border-white bg-white transition-colors duration-200 translate-x-[1px]`,
                      index === activeIndex ? "h-8 w-2" : "h-3"
                    )}
                  />
                </div>

                {/* Right side - Description */}
                <div className="flex-1">
                  <motion.p
                    className="text-sm md:text-lg text-white/80 whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === activeIndex ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/fatures_image.webp"
        alt="Features Image"
        className="max-sm:hidden"
        width={350}
        height={350}
        draggable={false}
      />
    </div>
  );
};

export default Features;
