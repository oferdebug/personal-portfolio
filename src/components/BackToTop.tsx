"use client";

import { useEffect, useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <IoArrowUpOutline className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
