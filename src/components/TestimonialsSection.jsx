"use client";

import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const carouselRef = useRef(null);
  const modalVideoRef = useRef(null);

  const testimonials = [
    { id: 1, video: "/testimonials/review1.mp4", name: "Client 1" },
    { id: 2, video: "/testimonials/review2.mp4", name: "Client 2" },
    { id: 3, video: "/testimonials/review3.mp4", name: "Client 3" },
    { id: 4, video: "/testimonials/review4.mp4", name: "Client 4" },
    { id: 5, video: "/testimonials/review5.mp4", name: "Client 5" },
    { id: 6, video: "/testimonials/review6.mp4", name: "Client 6" }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || selectedVideo !== null) return;

    let scrollPos = 0;
    const scrollSpeed = 1; // pixels per frame

    const autoScroll = () => {
      if (selectedVideo === null) {
        scrollPos += scrollSpeed;
        
        const maxScroll = carousel.scrollWidth / 2; // Half because we duplicated
        
        if (scrollPos >= maxScroll) {
          scrollPos = 0;
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft = scrollPos;
        }
      }
      requestAnimationFrame(autoScroll);
    };

    const animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [selectedVideo]);

  // Handle video click - open modal with separate video element
  const handleVideoClick = (index) => {
    setSelectedVideo(index);
  };

  // Close modal and keep carousel videos playing
  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="relative z-10 bg-black text-white py-16 md:py-24 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Don't take our word for it.
          <br />
          <span className="text-gray-400">Their words tell the story better.</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative px-6 md:px-12">
        <div 
          ref={carouselRef}
          className="flex gap-4 md:gap-6 overflow-x-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`carousel-${index}`}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group relative"
              onClick={() => handleVideoClick(index % testimonials.length)}
            >
              <video
                src={testimonial.video}
                loop
                muted
                playsInline
                autoPlay
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-screen video - SEPARATE video element */}
      {selectedVideo !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={closeModal}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video container - SEPARATE video element to avoid echo */}
          <div 
            className="relative w-full h-full md:w-auto md:h-[90vh] md:aspect-[9/16] rounded-none md:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={`modal-${selectedVideo}`}
              ref={modalVideoRef}
              src={testimonials[selectedVideo].video}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}