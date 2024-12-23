"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { TechStack } from "@/components/TechStack";
import { BackToTop } from "@/components/BackToTop";
import { CustomCursor } from "@/components/CustomCursor";
import { IoDownloadOutline } from "react-icons/io5";

// Social Icons component
const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      );
    default:
      return null;
  }
};

const SkillCard = ({ skill, level }: { skill: string; level: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{skill}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS/Tailwind", level: 85 },
    { name: "Python", level: 75 },
    { name: "Database Design", level: 80 },
  ];

  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Progress bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Hello, I'm Ofer Cohen
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-8">
                Full Stack Developer | UI/UX Enthusiast | Problem Solver
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center">
                  View My Work
                </Link>
                <Link href="#contact" className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition flex items-center justify-center">
                  Contact Me
                </Link>
                <a
                  href="/cv.pdf"
                  download
                  className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition flex items-center justify-center space-x-2"
                >
                  <span>Download CV</span>
                  <IoDownloadOutline className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
          {/* Animated background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"></div>
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack />

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            >
              My Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Featured Projects
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-white/10"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:opacity-0 transition-opacity duration-500" />
                    <Image
                      src={`https://placehold.co/600x400?text=Project+${i}`}
                      alt={`Project ${i}`}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mt-1 group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                      Project {i}
                    </h3>
                    
                    <p className="text-blue-100/60 mb-6 line-clamp-2 text-gray-800 dark:text-gray-300">
                      An innovative solution leveraging modern technologies to solve real-world challenges.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['React', 'Node.js', 'TypeScript'].map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href="/projects"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      View Details
                      <svg
                        className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Experience
              </span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  year: '2023',
                  title: 'Senior Developer',
                  company: 'Company Name',
                  description: 'Led development of multiple high-impact projects, mentored junior developers, and implemented best practices that improved team productivity by 40%.'
                },
                {
                  year: '2021',
                  title: 'Full Stack Developer',
                  company: 'Tech Corp',
                  description: 'Developed and maintained multiple web applications using React, Node.js, and PostgreSQL. Improved application performance by 60%.'
                },
                {
                  year: '2019',
                  title: 'Frontend Developer',
                  company: 'StartUp Inc',
                  description: 'Built responsive and interactive user interfaces using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect designs.'
                }
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 pb-12 border-l-2 border-blue-500/20 last:pb-0 group">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                  <span className="text-blue-400 font-medium">{exp.year}</span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-100/60">{exp.company}</p>
                  <p className="mt-2 text-blue-100/80 text-gray-800 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Latest Articles
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Building Scalable Web Applications',
                  date: 'Jan 2024',
                  description: 'Learn about the best practices for building scalable and maintainable web applications using modern technologies.',
                  link: '/blog/scalable-web-apps'
                },
                {
                  title: 'The Future of Web Development',
                  date: 'Dec 2023',
                  description: 'Exploring upcoming trends and technologies that will shape the future of web development.',
                  link: '/blog/future-of-web-dev'
                }
              ].map((article, i) => (
                <Link
                  key={i}
                  href={article.link}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
                >
                  <span className="text-sm text-blue-400">{article.date}</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-blue-100/60 text-gray-800 dark:text-gray-300">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Testimonials
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  text: 'Ofer is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.',
                  author: 'John Doe',
                  role: 'CEO, Tech Corp'
                },
                {
                  text: 'Working with Ofer was a great experience. He not only delivered the project on time but also suggested improvements that made our product even better.',
                  author: 'Jane Smith',
                  role: 'Product Manager, StartUp Inc'
                }
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <p className="text-lg text-blue-100/80 italic text-gray-800 dark:text-gray-300">"{testimonial.text}"</p>
                  <div className="mt-4">
                    <p className="font-medium group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Skills & Technologies
              </span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Tailwind CSS",
                "Git",
                "AWS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  <div className="relative text-center">
                    <span className="text-lg font-medium text-blue-100/80 group-hover:text-white transition-colors text-gray-900 dark:text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <BackToTop />
      </main>
    </>
  );
}