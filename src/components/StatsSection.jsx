'use client';

import { useEffect, useRef, useState } from 'react';

const StatItem = ({ number, text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation on enter AND exit
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-8xl md:text-9xl lg:text-[200px] font-bold text-white mb-6 leading-none">
        {number}
      </div>
      <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-md">
        {text}
      </p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="relative z-10 bg-black min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          <StatItem
            number="15+"
            text="Years of capturing stories, emotions, and moments that live far beyond the day they were created."
            delay={0}
          />
          
          <StatItem
            number="95"
            text="Carefully crafted stories, each one unique, personal, and timeless in its own way."
            delay={200}
          />
          
        </div>
      </div>
    </section>
  );
}