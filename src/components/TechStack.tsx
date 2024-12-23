"use client";

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiAew,
  SiVercel
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiPython, name: 'Python' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiGit, name: 'Git' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiAew, name: 'AWS' },
  { icon: SiVercel, name: 'Vercel' },
];

export const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Tech Stack
        </motion.h2>
        
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl transform rotate-6 transition-transform group-hover:rotate-12" />
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <tech.icon className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
