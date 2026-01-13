'use client';

import { useState, useEffect } from 'react';

export default function PortfolioHeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace these with your actual image URLs
  const images = [
    '/portfolio-images/1.jpg',
    '/portfolio-images/2.jpg',
    '/portfolio-images/3.jpg',
    '/portfolio-images/4.jpg',
    '/portfolio-images/9.jpg',
    '/portfolio-images/6.jpg',
    '/portfolio-images/7.jpg',
    '/portfolio-images/8.jpg',
    '/portfolio-images/4.jpg',
    '/portfolio-images/9.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Optional: Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Page Title Overlay */}
      
    </section>
  );
}