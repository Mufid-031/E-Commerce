"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Carousel = () => {
  const [index, setIndex] = useState<number>(1);
  const [animationStart, setAnimationStart] = useState<number>(20);
  const [animationEnd, setAnimationEnd] = useState<number>(-20);
  const slides = [1, 2, 3, 4, 5];

  const handleClick = (dotIndex: number) => {
    if (dotIndex > index) {
      setAnimationStart(20);
      setAnimationEnd(-20);
    } else {
      setAnimationStart(-20);
      setAnimationEnd(20);
    }
    setIndex(dotIndex);
  };

  return (
    <div className="w-full h-[400px] md:h-[600px] p-4 md:p-10 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: animationStart }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: animationEnd }}
          transition={{ duration: 0.4 }}
          className="w-full h-full bg-accent-foreground flex items-center justify-center text-3xl font-bold text-white rounded-xl"
        >
          Slide {index}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 w-1/3 flex justify-center items-center gap-5">
        {slides.map((item) => (
          <div
            key={item}
            onClick={() => handleClick(item)}
            className="w-4 h-4 rounded-full cursor-pointer transition-all bg-white flex items-center justify-center"
          >
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                item === index && "bg-red-400"
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
