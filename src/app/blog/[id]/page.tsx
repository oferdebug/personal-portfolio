"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-[100px] transform rotate-45" />
          </div>
          <div className="absolute inset-0 bg-[#0A0F1C]/80" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group"
            >
              <svg
                className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Web Development', 'React', 'Tutorial'].map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Building Modern Web Applications with Next.js 13
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="https://placehold.co/100x100"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Ofer Cohen</p>
                <p className="text-sm text-blue-100/60">Jan 15, 2024 · 10 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://placehold.co/1200x800"
                alt="Featured Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg prose-invert">
            <p>
              Next.js 13 introduces groundbreaking features that revolutionize how we build web applications. 
              In this comprehensive guide, we'll explore the latest capabilities and best practices for creating 
              high-performance, scalable applications.
            </p>

            <h2>The Power of Server Components</h2>
            <p>
              React Server Components represent a paradigm shift in how we think about component rendering. 
              They enable us to execute components on the server, reducing the JavaScript bundle size and 
              improving initial page load performance.
            </p>

            <pre className="bg-white/5 p-4 rounded-xl overflow-x-auto">
              <code className="text-sm">
                {`// app/page.tsx
export default function Page() {
  return (
    <h1>Hello, Server Component!</h1>
  );
}`}
              </code>
            </pre>

            <h2>Data Fetching Patterns</h2>
            <p>
              Next.js 13 simplifies data fetching with new patterns that make it easier to handle both 
              static and dynamic data. Let's explore how to implement efficient data fetching strategies.
            </p>

            <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Pro Tip</h3>
              <p className="text-blue-100/80 mb-0">
                Always consider implementing proper caching strategies to optimize your application's 
                performance and reduce unnecessary server load.
              </p>
            </div>

            <h2>Optimizing for Production</h2>
            <p>
              When preparing your Next.js 13 application for production, there are several key 
              optimizations to consider:
            </p>

            <ul>
              <li>Implement proper caching strategies</li>
              <li>Optimize images and static assets</li>
              <li>Configure proper error boundaries</li>
              <li>Set up monitoring and analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                <Image
                  src="https://placehold.co/100x100"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About the Author</h3>
                <p className="text-blue-100/60 mb-4">
                  Ofer Cohen is a full-stack developer with over 5 years of experience building modern web applications.
                  He specializes in React, Next.js, and TypeScript, and loves sharing his knowledge with the community.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Related Articles
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Link
                  key={i}
                  href={`/blog/post-${i}`}
                  className="group block relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`https://placehold.co/600x400?text=Related+${i}`}
                      alt={`Related Post ${i}`}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      Advanced Next.js Concepts
                    </h3>
                    <p className="text-blue-100/60 mb-4 line-clamp-2">
                      Deep dive into advanced patterns and optimization techniques.
                    </p>
                    <div className="flex items-center text-sm text-blue-100/60">
                      <span>Jan {i}, 2024</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 