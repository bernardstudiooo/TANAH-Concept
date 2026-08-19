import React from 'react';
import { Sun, HeartHandshake, Leaf, Sparkles } from 'lucide-react';

export const AboutExperience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full py-28 md:py-36 bg-[#2C1E16] text-[#FDFCF9] relative overflow-hidden"
    >
      {/* Background Subtle Geometric/Artistic Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#BF6347_1px,transparent_1px)] [background-size:40px_40px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 relative z-10">
        {/* Top Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-6 bg-[#BF6347]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D97E63] font-bold block">
              The Space & Atmosphere
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight">
            A place to <br />
            <span className="italic font-light text-[#D97E63]">linger.</span>
          </h2>
        </div>

        {/* Editorial Grid: Asymmetric Text + Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Rich Human Narrative & Values */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-lg sm:text-xl text-[#FDFCF9]/90 font-light leading-relaxed">
              We designed this space around the quiet luxury of natural morning light, honest materials, and the comforting hum of an espresso bar in motion.
            </p>

            <p className="text-base text-[#FDFCF9]/75 font-light leading-relaxed">
              From the raw timber tabletops to the warm terracotta details and native greenery, every corner is created to make you feel immediately at ease. Whether you arrive early for a solitary pour-over before the city wakes, or spend an entire afternoon over sourdough brunch with friends, time slows down here.
            </p>

            {/* highlights */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#D97E63]">
                  <Sun className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white">Natural Light</span>
                </div>
                <p className="text-xs text-[#FDFCF9]/70 leading-relaxed font-light">
                  Generous high ceilings and floor-to-ceiling windows bringing the lush Saradise greenery indoors.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#D97E63]">
                  <Leaf className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white">Mindful Sourcing</span>
                </div>
                <p className="text-xs text-[#FDFCF9]/70 leading-relaxed font-light">
                  Partnering with ethical coffee roasters and local growers for fresh, seasonal ingredients.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#D97E63]">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white">Neighbourhood Heart</span>
                </div>
                <p className="text-xs text-[#FDFCF9]/70 leading-relaxed font-light">
                  A welcoming room built for regulars, travellers, families, and quiet moments alike.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#D97E63]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white">Artisan Ceramics</span>
                </div>
                <p className="text-xs text-[#FDFCF9]/70 leading-relaxed font-light">
                  Every brew is served in custom stoneware created to feel grounding in your hands.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Primary Large Image */}
              <div className="aspect-[4/5] overflow-hidden shadow-2xl bg-[#3E2B21] rounded-sm border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Sun-drenched cafe seating area with plants and timber tables"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Secondary Detail Card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-[#3E2B21] p-6 max-w-xs border border-white/15 shadow-2xl hidden sm:block rounded-xs">
                <p className="font-serif italic text-xl text-[#FDFCF9] mb-2 leading-snug">
                  “The coffee is hot, the bread is warm, and the morning is yours.”
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-4 bg-[#BF6347]" />
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#D97E63] font-bold">
                    Saradise · Kuching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
