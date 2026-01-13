"use client";

import { useState, useEffect } from "react";

export default function PreLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fillProgress, setFillProgress] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Animate the fill from 0% to 100% over 2 seconds
    const fillInterval = setInterval(() => {
      setFillProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fillInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Start zoom effect after fill completes
    const zoomTimer = setTimeout(() => {
      setIsZooming(true);
    }, 2500);

    // Fade out and reveal landing page
    const fadeTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 3800);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(fadeTimer);
      clearInterval(fillInterval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // CRITICAL FIX: Return null immediately after loading completes
  if (!isLoading) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-all duration-1000 ${
        isZooming ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo with fill and zoom animation */}
      <div 
        className={`relative flex flex-col items-center transition-transform duration-1000 ease-in ${
          isZooming ? 'scale-[15]' : 'scale-100'
        }`}
      >
        <div className="relative animate-fadeIn">
          {/* Gray base logo */}
          <img 
            src="/adf-logo.png" 
            alt="Logo" 
            className="h-24 sm:h-32 md:h-40 w-auto opacity-30"
          />
          
          {/* White filled logo */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - fillProgress}% 0 0)`
            }}
          >
            <img 
              src="/adf-logo.png" 
              alt="Logo" 
              className="h-24 sm:h-32 md:h-40 w-auto"
            />
          </div>
        </div>

        {/* Full Form Text */}
        <div className="mt-4 sm:mt-6 animate-fadeIn">
          <p className="text-white text-xs sm:text-sm md:text-base tracking-[0.3em] font-light uppercase">
            ABHISHEK DHUPAR FILMS
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}