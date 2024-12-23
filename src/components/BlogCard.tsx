"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { IoTimeOutline, IoArrowForward } from 'react-icons/io5';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  tags: string[];
}

export const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  image,
  slug,
  tags
}: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${slug}`}>
        <article className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
              {title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <IoTimeOutline className="w-4 h-4" />
                  {readTime}
                </span>
                <span>{date}</span>
              </div>
              
              <motion.div
                className="text-blue-500"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IoArrowForward className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};
