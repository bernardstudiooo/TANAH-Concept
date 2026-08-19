import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';

export const PhotoGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Atmosphere', 'Coffee', 'Food', 'Details'];

  const displayedItems = filterCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filterCategory);

  return (
    <section
      id="gallery"
      className="w-full py-28 md:py-36 bg-[#FDFCF9] text-[#2C1E16] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#2C1E16]/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[1px] w-6 bg-[#BF6347]" />
              <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#BF6347] font-bold">
                <Camera className="w-3.5 h-3.5" />
                <span>Visual Journal</span>
              </div>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#2C1E16]">
              Moments & Textures
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-xs transition-all duration-300 font-bold cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#2C1E16] text-[#FDFCF9]'
                    : 'bg-[#EAE8E2] text-[#2C1E16]/75 hover:text-[#2C1E16] hover:bg-[#DCD8CF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Magazine-Style Asymmetric Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {displayedItems.map((item, idx) => {
            // Asymmetric column spans based on index
            let colSpan = 'md:col-span-6 lg:col-span-4';
            let aspect = 'aspect-[4/3]';

            if (idx === 0) {
              colSpan = 'md:col-span-12 lg:col-span-8';
              aspect = 'aspect-[16/10]';
            } else if (idx === 1) {
              colSpan = 'md:col-span-6 lg:col-span-4';
              aspect = 'aspect-[3/4]';
            } else if (idx === 2) {
              colSpan = 'md:col-span-6 lg:col-span-5';
              aspect = 'aspect-[4/3]';
            } else if (idx === 3) {
              colSpan = 'md:col-span-6 lg:col-span-7';
              aspect = 'aspect-[16/10]';
            } else if (idx === 4) {
              colSpan = 'md:col-span-12 lg:col-span-7';
              aspect = 'aspect-[16/9]';
            } else if (idx === 5) {
              colSpan = 'md:col-span-6 lg:col-span-5';
              aspect = 'aspect-[4/5]';
            }

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`${colSpan} relative group cursor-pointer overflow-hidden bg-[#EAE8E2] border border-[#2C1E16]/10 rounded-sm shadow-sm`}
              >
                <div className={`${aspect} w-full overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Editorial Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/90 via-[#2C1E16]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-[#FDFCF9]">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] uppercase tracking-[0.25em] bg-[#2C1E16]/80 px-2.5 py-1 border border-white/20 rounded-xs font-bold">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#FDFCF9]/80 font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footnote */}
        <p className="mt-8 text-center text-[10px] text-[#5A5E4B] tracking-[0.25em] font-bold uppercase">
          Capturing the natural rhythm and artisan details of Saradise
        </p>
      </div>

      {/* Modal / Lightbox for Focused Photo Viewing */}
      {activeItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-[#2C1E16]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FDFCF9] text-[#2C1E16] overflow-hidden shadow-2xl border border-[#2C1E16]/15 rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#2C1E16] text-[#FDFCF9] flex items-center justify-center hover:bg-[#BF6347] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.imageAlt}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#FDFCF9]">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#BF6347] font-bold">
                  {activeItem.category}
                </span>
                <span className="text-[#2C1E16]/30">·</span>
                <span className="text-xs text-[#5A5E4B]">Saradise, Kuching</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1E16] font-normal mb-2">
                {activeItem.title}
              </h3>
              <p className="text-sm text-[#2C1E16]/75 font-light leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
