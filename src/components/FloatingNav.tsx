"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IoHomeOutline,
  IoCodeSlashOutline,
  IoNewspaperOutline,
  IoMailOutline,
  IoMenuOutline,
  IoCloseOutline
} from 'react-icons/io5';

const menuItems = [
  { path: '/', icon: IoHomeOutline, label: 'Home' },
  { path: '/projects', icon: IoCodeSlashOutline, label: 'Projects' },
  { path: '/blog', icon: IoNewspaperOutline, label: 'Blog' },
  { path: '/contact', icon: IoMailOutline, label: 'Contact' },
];

export const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <IoCloseOutline className="w-6 h-6" />
          ) : (
            <IoMenuOutline className="w-6 h-6" />
          )}
        </motion.button>

        {/* Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 min-w-[200px]"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-10 blur-sm" />

                {/* Menu Items */}
                <nav className="relative space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path;

                    return (
                      <Link key={item.path} href={item.path}>
                        <motion.div
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                            isActive
                              ? 'bg-blue-500 text-white'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white dark:bg-gray-800" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
