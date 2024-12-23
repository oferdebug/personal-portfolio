"use client";

import { motion } from "framer-motion";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {theme === "dark" ? (
        <IoSunnyOutline className="w-6 h-6" />
      ) : (
        <IoMoonOutline className="w-6 h-6" />
      )}
    </motion.button>
  );
};
