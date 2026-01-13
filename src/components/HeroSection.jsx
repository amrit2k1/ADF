"use client";

import React from "react";

export default function HeroSection() {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black overflow-hidden z-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-section.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 px-4">
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-end min-h-screen text-center px-4 pb-16">
          <h1 className="hidden text-2xl sm:text-5xl italic md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl bg-gradient-to-r from-yellow-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Capturing Moments, Creating Memories
          </h1>
          <style jsx>{`
            @keyframes gradient {
              0% {
                background-position: 0% center;
              }
              100% {
                background-position: 200% center;
              }
            }
            .animate-gradient {
              animation: gradient 18s linear infinite;
            }
          `}</style>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/70 text-xs sm:text-sm mb-2">Scroll Down</span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}