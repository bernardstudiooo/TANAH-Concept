import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SIGNATURE_ITEMS } from '../data/cafeData';

interface SignatureMenuProps {
  onViewFullMenu: () => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onViewFullMenu }) => {
  const [heroSignature, ...secondarySignatures] = SIGNATURE_ITEMS;

  return (
    <section
      id="signatures"
      className="w-full py-32 md:py-44 bg-[#F7F5F0] text-[#2C1E16] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-[#2C1E16]/8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-6 bg-[#BF6347]" />
              <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#BF6347] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>House Signatures</span>
              </div>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#2C1E16]">
              Crafted to be <br className="hidden sm:inline" />
              <span className="italic font-light text-[#5A5E4B]">remembered.</span>
            </h2>
          </div>

          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-sm text-[#2C1E16]/75 max-w-xs md:text-right font-light mb-5 leading-relaxed">
              Seasonal creations pairing Sarawakian ingredients with single-origin roasts and French pastry techniques.
            </p>
            <button
              id="signature-view-full-menu-btn"
              onClick={onViewFullMenu}
              className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] font-bold text-[#2C1E16] hover:text-[#BF6347] transition-colors group cursor-pointer"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 1. Large Hero Signature Showcase */}
        {heroSignature && (
          <div className="mb-20 bg-[#FDFCF9] border border-[#2C1E16]/10 rounded-xs grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-[0_4px_30px_rgba(44,30,22,0.03)]">
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] overflow-hidden group bg-[#EAE8E2]">
              <img
                src={heroSignature.image}
                alt={heroSignature.imageAlt}
                className="w-full h-full object-cover grayscale-[5%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-[#1E130D] text-[#FDFCF9] text-[9px] uppercase tracking-[0.28em] font-bold px-3.5 py-1.5 rounded-xs">
                {heroSignature.badge}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between border-b border-[#2C1E16]/8 pb-4 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#5A5E4B] font-bold">
                    {heroSignature.subtitle}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-[#2C1E16] font-normal">
                    RM {heroSignature.price}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#2C1E16] font-normal mb-4">
                  {heroSignature.name}
                </h3>

                <p className="text-[#2C1E16]/75 text-base leading-relaxed font-light mb-8">
                  {heroSignature.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#2C1E16]/8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5A5E4B] font-bold mb-3">
                  Flavor Profile
                </p>
                <div className="flex flex-wrap gap-2">
                  {heroSignature.flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="text-xs bg-[#EAE8E2] text-[#2C1E16] px-3 py-1 font-medium border border-[#2C1E16]/8 rounded-xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Magazine Grid for Remaining Signatures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {secondarySignatures.map((item, index) => (
            <div
              key={item.id}
              className={`bg-[#FDFCF9] border border-[#2C1E16]/10 rounded-xs p-6 sm:p-9 flex flex-col justify-between shadow-[0_2px_20px_rgba(44,30,22,0.02)] ${
                index % 2 === 1 ? 'md:translate-y-6' : ''
              }`}
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[16/10] overflow-hidden mb-6 group bg-[#EAE8E2] rounded-xs">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover grayscale-[5%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-[#FDFCF9]/95 backdrop-blur-sm text-[#2C1E16] text-[9px] uppercase tracking-[0.22em] font-bold px-3 py-1 border border-[#2C1E16]/10 rounded-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Header & Price */}
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#5A5E4B] font-bold">
                    {item.subtitle}
                  </span>
                  <span className="font-serif text-2xl text-[#2C1E16] font-normal ml-3">
                    RM {item.price}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1E16] font-normal mb-3">
                  {item.name}
                </h3>

                <p className="text-sm sm:text-base text-[#2C1E16]/75 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tasting notes */}
              <div className="pt-4 border-t border-[#2C1E16]/8 flex flex-wrap items-center gap-2">
                {item.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="text-[11px] bg-[#EAE8E2] text-[#5A5E4B] px-2.5 py-0.5 rounded-xs font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

