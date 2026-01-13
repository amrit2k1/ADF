'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioGridSection() {
  // Replace these with your actual video URLs and wedding details
  const weddings = [
    {
      id: 'aman-tara',
      video: '/videos/video7.mp4',
      names: "Aman & Tara's",
      slug: 'aman-tara'
    },
    {
      id: 'ravi-karan',
      video: '/videos/video2.mp4',
      names: "Ravi & Karan's",
      slug: 'ravi-karan'
    },
    {
      id: 'manisha-deepak',
      video: '/videos/video3.mp4',
      names: "Manisha & Deepak's",
      slug: 'manisha-deepak'
    },
    {
      id: 'rahul-sarah',
      video: '/videos/video4.mp4',
      names: "Rahul & Sarah's",
      slug: 'rahul-sarah'
    },
    {
      id: 'anusha-virat',
      video: '/videos/video5.mp4',
      names: "Anusha & Virat's",
      slug: 'anusha-virat'
    },
    {
      id: 'shravan-nikita',
      video: '/videos/video6.mp4',
      names: "Shravan & Nikita's",
      slug: 'shravan-nikita'
    },
  ];

  return (
    <section className="relative z-10 bg-black min-h-screen py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading - Bebas Neue Font */}
        <h2 
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white text-center mb-12 md:mb-20"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
        >
          OUR PORTFOLIO
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {weddings.map((wedding) => (
            <Link 
              key={wedding.id}
              href={`/portfolio/${wedding.slug}`}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer">
                {/* Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                >
                  <source src={wedding.video} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Names */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 
                    className="text-2xl md:text-3xl text-white font-bold"
                    style={{ fontFamily: "'Allura', cursive" }}
                  >
                    {wedding.names}
                  </h3>
                </div>

                {/* Hover Effect - Play Icon or View More */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white">
                    <svg 
                      className="w-8 h-8 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Add Bebas Neue and Allura fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Allura&display=swap');
      `}</style>
    </section>
  );
}