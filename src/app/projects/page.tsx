"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { CustomCursor } from "@/components/CustomCursor";
import { BackToTop } from "@/components/BackToTop";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    details: "A fully responsive portfolio website with dark mode support, animations, and interactive features.",
    categories: ["Web", "Frontend"]
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with advanced features",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://yourecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    details: "A complete e-commerce solution with user authentication, payment processing, and order management.",
    categories: ["Web", "Full Stack", "E-commerce"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application",
    image: "/projects/taskapp.jpg",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://yourtaskapp.com",
    githubUrl: "https://github.com/yourusername/taskapp",
    details: "A real-time task management application with team collaboration features.",
    categories: ["Web", "Full Stack", "Productivity"]
  }
];

const categories = ["All", "Web", "Frontend", "Full Stack", "E-commerce", "Productivity"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.categories.includes(selectedCategory);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
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
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                Explore my latest work and side projects
              </p>

              {/* Search and Filter */}
              <div className="max-w-xl mx-auto mb-12 space-y-6">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full ${
                        selectedCategory === category
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard {...project} />
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