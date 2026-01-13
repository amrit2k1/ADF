'use client';

export default function WeddingHeroSection({ videoUrl, brideName, groomName }) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Couple Names Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 lg:pb-32 z-10">
        <div className="text-center px-6">
          {/* Names in romantic script font */}
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-4 drop-shadow-2xl"
            style={{ 
              fontFamily: "'Great Vibes', cursive",
              lineHeight: '1.2'
            }}
          >
            {brideName} & {groomName}
          </h1>
          
          {/* Optional: Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 md:w-16 h-px bg-white/60" />
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 text-white/80" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="w-12 md:w-16 h-px bg-white/60" />
          </div>
        </div>
      </div>

      {/* Optional: Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>

      {/* Import Great Vibes font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
      `}</style>
    </section>
  );
}