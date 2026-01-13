"use client";

import { useEffect, useRef, useState } from "react";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export default function CapturingMomentsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const headingRef = useRef(null);
  const heading2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fade in when entering, fade out when leaving
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px"
      }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible2(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px"
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    if (heading2Ref.current) {
      observer2.observe(heading2Ref.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (heading2Ref.current) {
        observer2.unobserve(heading2Ref.current);
      }
    };
  }, []);

  const items = [
    // Row 1 (matches your screenshot exactly)
    { src: "/videos/video4.mp4", span: "col-span-1 md:col-span-2 md:row-span-2" },  // Tall left
    { src: "/videos/video2.mp4", span: "col-span-1 md:col-span-2 md:row-span-1" },   // Wide top-right
    { src: "/videos/video3.mp4", span: "col-span-1 md:col-span-2" },                 // Square bottom-right
    
    // Row 2
    { src: "/videos/video4.mp4", span: "col-span-1 md:col-span-1 md:row-span-2" },   // Tall
    { src: "/videos/video5.mp4", span: "col-span-1 md:col-span-1 md:row-span-2" },   // Tall
    { src: "/videos/video6.mp4", span: "col-span-1 md:col-span-2 md:row-span-1" },   // Wide
    
    // Row 3  
    { src: "/videos/video7.mp4", span: "col-span-2 md:col-span-2" },                 // Wide
    { src: "/videos/video2.mp4", span: "col-span-1 md:col-span-1 md:row-span-2" },   // Tall right
    { src: "/videos/video3.mp4", span: "col-span-1 md:col-span-1 md:row-span-2" },                 // Square
    
    // Row 4 (duplicate pattern for length)
    { src: "/videos/video4.mp4", span: "col-span-1 md:col-span-2 md:row-span-2" },
    { src: "/videos/video6.mp4", span: "col-span-1 md:col-span-2 md:row-span-1" },
    { src: "/videos/video7.mp4", span: "col-span-1 md:col-span-2" },

    { src: "/videos/video3.mp4", span: "col-span-1 md:col-span-1 md:row-span-2" },
    { src: "/videos/video4.mp4", span: "col-span-1 md:col-span-1 md:row-span-2" },
  ];

  return (
    <section className="relative z-10 bg-black text-white py-12 mt-[100vh]">
      <div className="mx-auto max-w-8xl px-6">
        <h2 
          ref={headingRef}
          className={`${bebasNeue.className} text-center text-4xl md:text-6xl lg:text-[130px] font-black uppercase tracking-widest mb-16 bg-gradient-to-r from-pink-700 to-pink-100 bg-clip-text text-transparent transition-all duration-[1500ms] ease-in-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          CAPTURING MOMENTS
        </h2>

        <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-6 auto-rows-min md:auto-rows-[180px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-md md:rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${item.span}`}
            >
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
            </div>
          ))}
          
          {/* Creating Memories Text in Bottom Left Gap */}
          <div 
            ref={heading2Ref}
            className={`hidden md:flex col-span-4 row-span-1 items-center justify-center transition-all duration-[1500ms] ease-in-out ${
              isVisible2 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className={`${bebasNeue.className} text-center text-4xl lg:text-6xl xl:text-[100px] font-black uppercase tracking-widest bg-gradient-to-r from-pink-100 to-pink-700 bg-clip-text text-transparent`}>
              CREATING MEMORIES
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}