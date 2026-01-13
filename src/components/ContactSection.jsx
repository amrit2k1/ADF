'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, ThumbsUp, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  // Replace these with your EmailJS credentials
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  // Replace with your WhatsApp number (include country code without + or spaces)
  const WHATSAPP_NUMBER = '1234567890'; // Example: '919876543210' for India

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      
      setStatus('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to inquire about your photography services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section className="relative z-10 bg-black py-12 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 border border-gray-700/50 shadow-2xl">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12">
            Get in touch.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            
            {/* Left Column - Form */}
            <div className="space-y-5">
              
              {/* Name Field */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={sending}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white font-medium px-7 py-2.5 text-sm rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Message */}
              {status && (
                <p className={`text-sm ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6 lg:space-y-7">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2.5 rounded-full flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5">Address</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    213 City Center, Model Town, Rupnagar, Punjab
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2.5 rounded-full flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5">E-mail</h3>
                  <p className="text-gray-300 text-sm">
                    contact@abhishekdhuparfilms.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2.5 rounded-full flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5">Phone</h3>
                  <p className="text-gray-300 text-sm">
                    98887 15322
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2.5 rounded-full flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                  <button
                    onClick={openWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 text-sm rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat
                  </button>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2.5 rounded-full flex-shrink-0">
                  <ThumbsUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/abhishekdhuparfilms"
                      className="bg-gray-700 hover:bg-gray-600 p-2.5 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    
                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@abhishekdhuparfilms"
                      className="bg-gray-700 hover:bg-gray-600 p-2.5 rounded-full transition-colors"
                      aria-label="YouTube"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}