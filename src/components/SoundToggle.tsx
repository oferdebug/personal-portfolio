"use client";

import { motion } from "framer-motion";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [audio] = useState(() => {
    if (typeof window !== "undefined") {
      const hoverSound = new Audio("/hover.mp3");
      const clickSound = new Audio("/click.mp3");
      return { hover: hoverSound, click: clickSound };
    }
    return null;
  });

  useEffect(() => {
    const playHoverSound = () => {
      if (!isMuted && audio) {
        audio.hover.currentTime = 0;
        audio.hover.volume = 0.2;
        audio.hover.play().catch(() => {});
      }
    };

    const playClickSound = () => {
      if (!isMuted && audio) {
        audio.click.currentTime = 0;
        audio.click.volume = 0.3;
        audio.click.play().catch(() => {});
      }
    };

    const buttons = document.querySelectorAll("button, a");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", playHoverSound);
      button.addEventListener("click", playClickSound);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", playHoverSound);
        button.removeEventListener("click", playClickSound);
      });
    };
  }, [isMuted, audio]);

  return (
    <motion.button
      onClick={() => setIsMuted(!isMuted)}
      className="fixed top-20 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isMuted ? (
        <IoVolumeMuteOutline className="w-6 h-6" />
      ) : (
        <IoVolumeHighOutline className="w-6 h-6" />
      )}
    </motion.button>
  );
};
