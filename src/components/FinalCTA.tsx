import React from 'react';
import { Compass, MessageCircle, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const FinalCTA: React.FC = () => {
  return (
    <section
      id="final-cta"
      className="relative w-full py-32 md:py-44 bg-[#2C1E16] text-[#FDFCF9] overflow-hidden"
    >
      {/* Cinematic Full-Width Background Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=2200&q=85"
          alt="Warm, inviting evening atmosphere at Saradise cafe with ambient wooden lighting and coffee cups"
          className="w-full h-full object-cover object-center scale-105 grayscale-[15%]"
          referrerPolicy="no-referrer"
        />
        {/* Dark warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1E16]/95 via-[#2C1E16]/80 to-[#2C1E16]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16] via-transparent to-[#2C1E16]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-6 bg-[#BF6347]" />
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#D97E63] font-bold">
              <span>Join Us Today</span>
            </div>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] text-white mb-6">
            Your next favourite table <br />
            <span className="italic font-light text-[#D97E63]">is waiting.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-10 max-w-lg">
            Whether it’s the quiet morning pour-over, a mid-day sourdough sandwich, or lingering over dessert with friends — we have a seat set for you.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
            <a
              id="final-cta-directions-btn"
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-white text-[#2C1E16] hover:bg-[#BF6347] hover:text-white transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>

            <a
              id="final-cta-whatsapp-btn"
              href={CAFE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 bg-[#BF6347] text-white hover:opacity-90 transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
