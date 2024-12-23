"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogCard } from "@/components/BlogCard";
import { CustomCursor } from "@/components/CustomCursor";
import { BackToTop } from "@/components/BackToTop";

const blogPosts = [
  {
    title: "Building a Modern Portfolio with Next.js",
    excerpt: "Learn how to create a stunning portfolio website using Next.js, Tailwind CSS, and Framer Motion.",
    date: "Dec 23, 2023",
    readTime: "5 min read",
    image: "/blog/portfolio.jpg",
    slug: "building-modern-portfolio",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    title: "The Power of Framer Motion Animations",
    excerpt: "Discover how to create smooth and engaging animations using Framer Motion in your React applications.",
    date: "Dec 20, 2023",
    readTime: "4 min read",
    image: "/blog/animations.jpg",
    slug: "framer-motion-animations",
    tags: ["Animation", "React", "UI/UX"]
  },
  {
    title: "Mastering Tailwind CSS",
    excerpt: "A comprehensive guide to using Tailwind CSS for building beautiful and responsive user interfaces.",
    date: "Dec 15, 2023",
    readTime: "6 min read",
    image: "/blog/tailwind.jpg",
    slug: "mastering-tailwind-css",
    tags: ["CSS", "Tailwind", "Web Development"]
  }
];

const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort();

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"></div>
          </div>

          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                Thoughts, tutorials, and insights about web development
              </p>

              {/* Search and Filter */}
              <div className="max-w-xl mx-auto mb-12 space-y-6">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex flex-wrap justify-center gap-2">
                  <motion.button
                    onClick={() => setSelectedTag(null)}
                    className={`px-4 py-2 rounded-full ${
                      !selectedTag
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    All
                  </motion.button>
                  {allTags.map((tag) => (
                    <motion.button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 rounded-full ${
                        selectedTag === tag
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BlogCard {...post} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <BackToTop />
      </main>
    </>
  );
}