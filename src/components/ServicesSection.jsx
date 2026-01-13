"use client";

import { useEffect, useRef, useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ServicesSection() {
  const [carouselProgress, setCarouselProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const carouselStart = -100;
      const carouselEnd = -windowHeight * 1.2;

      if (rect.top <= carouselStart && rect.top >= carouselEnd) {
        const totalRange = carouselStart - carouselEnd;
        const currentPosition = carouselStart - rect.top;
        const progress = Math.min(
          Math.max(currentPosition / totalRange, 0),
          1
        );
        setCarouselProgress(progress);
      } else if (rect.top > carouselStart) {
        setCarouselProgress(0);
      } else if (rect.top < carouselEnd) {
        setCarouselProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const services = [
    { title: "Destination Wedding Shoot", image: "/services/destination.jpg" },
    { title: "Pre-Wedding", image: "/services/pre-wed.jpg" },
    { title: "Wedding Shoot", image: "/services/wedding.jpg" },
    { title: "Baby Shot", image: "/services/baby-shoot.jpg" },
    { title: "Portraits", image: "/services/portrait.jpg" },
    { title: "Brand Shoots", image: "/services/brand-shoot.jpg" },
  ];

  // SEPARATE LOGIC FOR MOBILE VS DESKTOP
  const totalCards = services.length;
  let visibleCards, maxTranslate, translateX;

  if (isMobile) {
    // MOBILE: Show 1 card at a time, scroll through all 6
    visibleCards = 1;
    const cardsToScroll = totalCards - visibleCards; // 5 cards to scroll
    // Each card is 100% width, so translate by card count * 100%
    maxTranslate = cardsToScroll * 100;
    translateX = -(carouselProgress * maxTranslate);
  } else {
    // DESKTOP: Show 3 cards at a time, scroll through 3 more
    visibleCards = 3;
    const cardsToScroll = totalCards - visibleCards; // 3 cards to scroll
    // Each card is 33.333% of total container
    maxTranslate = cardsToScroll * 33.333;
    translateX = -(carouselProgress * maxTranslate);
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative z-10 bg-black text-white min-h-[300vh]"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-visible">
        
        {/* Vertical spacing wrapper */}
        <div className="w-full flex flex-col items-center py-12 md:py-20">

          {/* Heading */}
          <div className="text-center mb-8 md:mb-16 px-4 md:px-6">
            <h2
              className={`${bebasNeue.className} text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider`}
            >
              Stories We Tell
            </h2>
          </div>

          {/* MOBILE VERSION */}
          {isMobile && (
            <div className="relative w-full flex justify-center overflow-hidden px-8">
              <div className="w-full max-w-[85vw]">
                <div
                  className="flex gap-4 transition-transform duration-100 ease-out"
                  style={{ transform: `translateX(${translateX}%)` }}
                >
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-[85vw] h-[55vh] rounded-xl overflow-hidden shadow-2xl"
                    >
                      {/* Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Dark gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                      {/* Warm overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-amber-500/10 to-pink-500/20 mix-blend-overlay" />

                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className={`${bebasNeue.className} text-xl font-bold tracking-wide text-white drop-shadow-lg`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DESKTOP VERSION */}
          {!isMobile && (
            <div className="relative w-full flex justify-center overflow-hidden px-12">
              <div className="w-[85%]">
                <div
                  className="flex gap-6 transition-transform duration-100 ease-out"
                  style={{ transform: `translateX(${translateX}%)` }}
                >
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-[calc(33.333%-16px)] h-[50vh] max-h-[520px] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
                    >
                      {/* Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Dark gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Warm overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-amber-500/10 to-pink-500/20 mix-blend-overlay" />

                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className={`${bebasNeue.className} text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-white drop-shadow-lg`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Progress indicator */}
          <div className="text-center mt-8 md:mt-12 px-4 md:px-6">
            <div className="flex items-center justify-center gap-2">
              {services.map((_, index) => {
                const cardIndex = Math.floor(carouselProgress * (totalCards - visibleCards));
                const isActive = index >= cardIndex && index < cardIndex + visibleCards;

                return (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive ? "w-8 bg-white" : "w-2 bg-white/30"
                    }`}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}