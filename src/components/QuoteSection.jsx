"use client";

import { useEffect, useRef, useState } from "react";

export default function QuoteSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Fill starts when text is positioned at 15% from top (85% down the screen)
      const fillStartPosition = windowHeight * 0.15;
      // Fill ends when section top reaches this negative value (fully scrolled through)
      const fillEndPosition = -windowHeight * 0.5;

      if (rect.top <= fillStartPosition && rect.top >= fillEndPosition) {
        const totalRange = fillStartPosition - fillEndPosition;
        const currentPosition = fillStartPosition - rect.top;
        const progress = Math.min(Math.max(currentPosition / totalRange, 0), 1);
        setScrollProgress(progress);
      } else if (rect.top > fillStartPosition) {
        setScrollProgress(0);
      } else if (rect.top < fillEndPosition) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quote = "We capture emotions, not poses. Through honest moments and quiet details, we turn fleeting seconds into timeless memories — photographs that don't just look beautiful, but feel deeply personal, today and years from now.";

  const words = quote.split(/\s+/);

  const getWordFillProgress = (wordIndex) => {
    const totalWords = words.length;
    const progressPerWord = 1 / totalWords;
    const wordStart = wordIndex * progressPerWord;
    const wordEnd = (wordIndex + 1) * progressPerWord;

    if (scrollProgress < wordStart) return 0;
    if (scrollProgress >= wordEnd) return 100;
    
    const wordProgress = (scrollProgress - wordStart) / progressPerWord;
    return wordProgress * 100;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative z-10 bg-black text-white min-h-[200vh] py-20"
    >
      {/* Sticky container that holds text in place */}
      <div className="sticky top-[15vh] h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-2">
          {words.map((word, index) => {
            const fillProgress = getWordFillProgress(index);
            
            return (
              <span key={index} className="relative inline-block whitespace-nowrap">
                {/* Gray background text */}
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-700 leading-tight">
                  {word}
                </span>
                
                {/* White filled text */}
                <div 
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - fillProgress}% 0 0)` }}
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight">
                    {word}
                  </span>
                </div>
              </span>
            );
          })}
        </div>
      </div>

      {/* Debug progress indicator */}
      <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm z-50">
        Fill: {Math.floor(scrollProgress * 100)}%
      </div>
    </section>
  );
}