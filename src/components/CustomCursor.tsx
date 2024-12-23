"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const checkPointer = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const isClickable = hoveredElement?.matches('a, button, [role="button"]');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousemove', checkPointer);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousemove', checkPointer);
    };
  }, [mousePosition.x, mousePosition.y]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1
    },
    pointer: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5
    }
  };

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
        animate={isPointer ? "pointer" : "default"}
        variants={variants}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className={`absolute inset-0 ${isPointer ? 'scale-75' : ''} transition-transform duration-150`}>
          <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-25" />
          <div className="absolute inset-[6px] rounded-full border border-blue-500" />
          <div className="absolute inset-0 rounded-full bg-blue-500/5" />
        </div>
      </motion.div>
    </>
  );
};
