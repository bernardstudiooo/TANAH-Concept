import React from 'react';
import { Compass, Coffee, Clock, Sparkles } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-32 md:py-44 bg-[#FDFCF9] text-[#2C1E16] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        {/* Top subtle eyebrow & coordinates */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#2C1E16]/8 pb-6 mb-20 gap-4">
          <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-[#5A5E4B] font-bold">
            <Compass className="w-3.5 h-3.5 text-[#BF6347]" />
            <span>Saradise Community · Kuching</span>
          </div>
          <p className="text-[10px] text-[#2C1E16]/50 font-mono tracking-widest uppercase">
            1°31'40.8"N 110°22'18.6"E · SARAWAK
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-6 bg-[#BF6347]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#BF6347] font-bold block">
                Our Philosophy
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.04] text-[#2C1E16]">
              More than a <br />
              <span className="italic font-light text-[#5A5E4B]">coffee stop.</span>
            </h2>
            
            <div className="mt-10 pt-8 border-t border-[#2C1E16]/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#2C1E16]/75">
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-[#BF6347]" />
                <span className="font-semibold text-[#2C1E16]">Ethically Sourced Micro-Lots</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#BF6347]" />
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#5A5E4B]" />
                <span className="font-semibold text-[#2C1E16]">Slow-Crafted Kitchen</span>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraph and Editorial Quote */}
          <div className="lg:col-span-7 space-y-10 text-base sm:text-lg md:text-xl text-[#2C1E16]/85 font-light leading-relaxed">
            <p className="text-xl sm:text-2xl text-[#2C1E16] font-normal leading-snug font-serif">
              Tucked into the leafy avenues of Saradise, we built this space for the rituals that make mornings in Kuching worth slowing down for.
            </p>
            
            <p className="text-[#2C1E16]/75 text-base md:text-lg leading-relaxed">
              From the quiet first cup in the sunlit breeze to the gentle steam rising from freshly toasted Bario rice flour sourdough, every detail is considered. We roast micro-lots with care, ferment our breads slowly, and pair contemporary specialty coffee culture with the genuine warmth of Sarawakian hospitality.
            </p>

            {/* Editorial pull quote */}
            <div className="pt-8 pb-2 border-l-2 border-[#BF6347] pl-8">
              <p className="italic font-serif text-2xl sm:text-3xl text-[#2C1E16] leading-snug mb-3">
                “There is no hurry here. The water is heated steadily, the espresso extracted patiently, and the morning welcomed on your own terms.”
              </p>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#BF6347] font-bold block">
                The Tanah Credo
              </span>
            </div>
          </div>
        </div>

        {/* Ambient Photographic Trio (Natural Light & Texture) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-[4/3] overflow-hidden group rounded-xs border border-[#2C1E16]/10 shadow-sm bg-[#EAE8E2]">
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=85"
              alt="Freshly roasted specialty coffee beans being inspected"
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E130D]/85 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-5 left-5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D97E63] font-bold block mb-0.5">Roastery</span>
              <span className="text-sm font-serif text-white font-normal">Micro-Lot Selections</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden group rounded-xs border border-[#2C1E16]/10 shadow-sm bg-[#EAE8E2]">
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85"
              alt="Warm sunlight illuminating handcrafted ceramic coffee cups"
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E130D]/85 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-5 left-5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D97E63] font-bold block mb-0.5">Space</span>
              <span className="text-sm font-serif text-white font-normal">Sun-Drenched Seating</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden group rounded-xs border border-[#2C1E16]/10 shadow-sm bg-[#EAE8E2]">
            <img
              src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=85"
              alt="Artisan sourdough breakfast plate prepared fresh"
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E130D]/85 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-5 left-5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D97E63] font-bold block mb-0.5">Kitchen</span>
              <span className="text-sm font-serif text-white font-normal">Artisan Sourdough & Eggs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

