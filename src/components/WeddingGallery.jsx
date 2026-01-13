"use client";

import { useState } from "react";

export default function WeddingGallery({ weddingFolder }) {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  // Generate media items - 15 videos and 35 images
  const mediaItems = [
    // Videos (1-15)
    ...Array.from({ length: 15 }, (_, i) => ({
      id: `video-${i + 1}`,
      type: 'video',
      src: `/${weddingFolder}/video${i + 1}.mp4`,
      aspectRatio: i % 3 === 0 ? 'tall' : i % 3 === 1 ? 'wide' : 'square'
    })),
    // Images (1-35)
    ...Array.from({ length: 35 }, (_, i) => ({
      id: `image-${i + 1}`,
      type: 'image',
      src: `/${weddingFolder}/image${i + 1}.jpg`,
      aspectRatio: i % 4 === 0 ? 'tall' : i % 4 === 1 ? 'wide' : i % 4 === 2 ? 'square' : 'tall'
    }))
  ].sort(() => Math.random() - 0.5); // Shuffle for Pinterest-like variety

  // Get aspect ratio class
  const getAspectClass = (aspectRatio) => {
    switch (aspectRatio) {
      case 'tall': return 'row-span-2';
      case 'wide': return 'col-span-2';
      case 'square': return '';
      default: return '';
    }
  };

  const openMedia = (media) => {
    setSelectedMedia(media);
    setSelectedType(media.type);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    setSelectedType(null);
  };

  return (
    <>
      <section className="relative z-10 bg-black py-12 md:py-16">
        <div className="max-w-[95vw] mx-auto px-4">
          
          {/* Pinterest-style Masonry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-[200px] gap-3 md:gap-4">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${getAspectClass(item.aspectRatio)}`}
                onClick={() => openMedia(item)}
              >
                {item.type === 'video' ? (
                  <>
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Video indicator */}
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt="Wedding moment"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Full-screen Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          onClick={closeMedia}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={closeMedia}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Media container */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedType === 'video' ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt="Wedding moment"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}