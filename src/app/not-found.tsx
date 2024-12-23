import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-[100px] opacity-50" />
            <div className="relative text-8xl font-bold text-blue-500">404</div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Page Not Found
            </span>
          </h1>

          <p className="text-lg text-blue-100/60 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="group relative inline-flex px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
          >
            <div className="absolute inset-0 w-3 bg-gradient-to-r from-white to-transparent opacity-20 transition-all duration-500 ease-out group-hover:w-full" />
            <span className="relative flex items-center justify-center gap-2">
              Back to Home
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 