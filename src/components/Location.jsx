'use client';

import { MapPin } from 'lucide-react';

export default function LocationSection() {
  // Replace this with your actual Google Maps embed URL
  const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13686.500816873999!2d76.50399399161726!3d30.95303060000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x63451c9cc5634c2d%3A0x7d38cee4d1b2cba5!2sAbhishek%20Dhupar%20Films!5e0!3m2!1sen!2sin!4v1768246619455!5m2!1sen!2sin";

  return (
    <section className="relative z-10 bg-black py-12 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Visit Our Studio
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Located in the heart of the city, our studio is designed to capture your most precious moments. 
            Drop by for a consultation or schedule your session today.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-700/50 shadow-2xl">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* Address Card */}
          <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Studio Address</h3>
                <p className="text-gray-300 text-sm md:text-base">
                 213 City Center, Model Town, Rupnagar, Punjab
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/hNYvYnzx3r9hQaAm7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2.5 text-sm rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap self-start md:self-center"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Open Monday - Saturday, 10:00 AM - 7:00 PM | Sunday by appointment only
          </p>
        </div>

      </div>
    </section>
  );
}