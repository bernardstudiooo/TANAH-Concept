import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen w-full flex items-end md:items-center justify-start overflow-hidden bg-[#1E130D] text-[#FDFCF9]"
    >
      {/* Background Cinematic Photography with Rich Dynamic Contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2400&q=90"
          alt="Atmospheric sunlit specialty cafe interior in Saradise with artisan espresso bar, timber tables and lush greenery"
          className="w-full h-full object-cover object-center scale-100 md:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Gradients & Contrast Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E130D] via-[#1E130D]/65 to-[#1E130D]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E130D]/90 via-[#1E130D]/50 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-12 pt-36 pb-20 md:py-40">
        <div className="max-w-3xl">
          {/* Location & Heritage Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6 bg-[#1E130D]/60 backdrop-blur-md px-3.5 py-1.5 border border-white/15 rounded-xs">
            <div className="h-[1px] w-5 bg-[#BF6347]" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold uppercase text-white">
              {CAFE_INFO.locationTag}
            </span>
          </div>

          {/* Large, High-Contrast Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.98] tracking-tight text-white mb-6">
            Good coffee. <br />
            <span className="italic font-light text-[#D97E63]">Slow moments.</span>
          </h1>

          {/* Atmospheric Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-xl mb-10">
            A quiet sanctuary in Saradise for specialty single-origin brews, slow-fermented bakes, and unhurried mornings.
          </p>

          {/* Minimalist, Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
            <button
              id="hero-explore-menu-btn"
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C1E16] font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.22em] rounded-xs hover:bg-[#BF6347] hover:text-white transition-all duration-300 shadow-2xl focus:outline-none cursor-pointer"
            >
              Explore Menu
            </button>

            <a
              id="hero-whatsapp-btn"
              href={CAFE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 bg-[#BF6347] text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.22em] rounded-xs hover:bg-[#9E4A31] transition-all duration-300 shadow-2xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Subtle Live Badge Footer */}
          <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-white/75 font-light">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D97E63]" />
              <span className="font-normal text-white">Seasonal Micro-Lot Roastery</span>
            </div>
            <div className="hidden sm:block text-white/30">·</div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#D97E63]" />
              <span>Saradise Commercial Centre, Kuching</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center space-y-3 z-10 text-white/60">
        <span className="text-[8px] uppercase tracking-[0.35em] rotate-90 origin-right translate-x-4 mb-5 font-bold">
          Scroll
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#BF6347] to-transparent" />
      </div>
    </section>
  );
};

