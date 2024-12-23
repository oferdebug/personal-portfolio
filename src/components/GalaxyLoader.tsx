"use client";

import { motion } from 'framer-motion';

export const GalaxyLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="relative w-40 h-40">
        {/* Orbits */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-blue-500/30"
            style={{
              transformOrigin: 'center',
              rotate: i * 45,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Planets */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"
            style={{
              top: '50%',
              left: '50%',
              margin: '-6px',
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, Math.cos(i * Math.PI / 1.5) * 60],
              y: [0, Math.sin(i * Math.PI / 1.5) * 60],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-white/50"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.3,
              }}
            />
          </motion.div>
        ))}

        {/* Center Star */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-6 h-6 -mt-3 -ml-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-white/50"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
