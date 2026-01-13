"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Trigger navbar slide-in animation after preloader
    const loadTimer = setTimeout(() => {
      setHasLoaded(true);
    }, 3400); // Slightly after preloader fades (3200ms + 200ms delay)

    const handleScroll = () => {
      // Calculate scroll progress from 0 to 1
      // Transition happens from 0px to when user scrolls ~800px (adjust as needed)
      const scrollY = window.scrollY;
      const maxScroll = 800; // Adjust this value to control when transition completes
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate dynamic values based on scroll progress
  const borderRadius = `${50 - scrollProgress * 50}px`; // 50px to 0px (rounded-full equivalent)
  const maxWidth =
    scrollProgress === 1 ? "100%" : `${60 + scrollProgress * 40}%`; // 60% to 100%
  const padding = `${24 - scrollProgress * 8}px`; // 24px to 16px (py-6 to py-4)
  const innerPadding = `${16 - scrollProgress * 4}px ${
    32 - scrollProgress * 8
  }px`; // Adjust inner padding

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] md:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-6">
              <img
                src="/adf-logo.png"
                alt="Brand Logo"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 px-6">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Services
              </a>
              <a
                href="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 border border-white/20 mt-8"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Glass Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 ${
          hasLoaded ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
        style={{
          paddingTop: padding,
          paddingBottom: padding,
          transition: hasLoaded
            ? "all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
            : "none",
        }}
      >
        <div
          className="bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl mx-auto transition-all duration-150 ease-out"
          style={{
            maxWidth: maxWidth,
            borderRadius: borderRadius,
            padding: innerPadding,
          }}
        >
          <div className="flex items-center justify-between">
            {/* Left - Branding */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="/adf-logo.png"
                  alt="Brand Logo"
                  className="h-6 sm:h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            {/* Right - Navigation Links (Desktop) */}
            <div
              className="hidden md:flex items-center transition-all duration-150"
              style={{
                gap: `${16 + scrollProgress * 16}px`, // 16px to 32px spacing
              }}
            >
              <a
                href="/"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Services
              </a>
              <a
                href="/portfolio"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Contact
              </a>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 lg:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/20">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
