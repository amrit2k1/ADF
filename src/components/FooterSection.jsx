'use client';

import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="relative z-10 bg-gradient-to-br from-black via-gray-900 to-orange-950 py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Glass Card Container */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            
            {/* Logo & About */}
            <div>
              {/* Replace this div with your logo image */}
              <img src="/adf-logo.png" alt="Studio Logo" className="h-12 md:h-16" />
              <p className="text-gray-300 text-sm leading-relaxed">
                Capturing timeless moments with passion and creativity. Your story, beautifully told.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex gap-3 mb-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-colors backdrop-blur-sm border border-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-colors backdrop-blur-sm border border-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-colors backdrop-blur-sm border border-white/10"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
              <p className="text-gray-300 text-sm mb-1">
                213, City Center, Model Town,<br />Ropar, Punjab
              </p>
              <p className="text-gray-300 text-sm mb-1">
                contact@abhishekdhuparfilms.com
              </p>
              <p className="text-gray-300 text-sm">
                98887 15322
              </p>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PhotoStudio. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}