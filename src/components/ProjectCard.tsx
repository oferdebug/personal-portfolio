"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoLogoGithub, IoGlobeOutline, IoInformationCircleOutline } from 'react-icons/io5';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  details
}: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[400px] cursor-pointer perspective-1000"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 w-full h-full preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Front of card */}
          <div className={`absolute inset-0 w-full h-full backface-hidden`}>
            <div className="relative h-full group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:opacity-0 transition-opacity duration-500" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute bottom-4 right-4 flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IoLogoGithub className="w-5 h-5" />
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IoGlobeOutline className="w-5 h-5" />
                  </a>
                )}
                {details && (
                  <button
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <IoInformationCircleOutline className="w-5 h-5" />
                  </button>
                )}
              </motion.div>
            </div>
          </div>

          {/* Back of card */}
          <div className={`absolute inset-0 w-full h-full [transform:rotateY(180deg)] backface-hidden`}>
            <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl [transform:rotateY(180deg)]">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About {title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{details}</p>
              <div className="absolute bottom-6 right-6">
                <button
                  onClick={() => setIsFlipped(false)}
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
