import React from 'react';
import { ArrowUp, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#20140D] text-[#FDFCF9] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Location column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl font-normal tracking-wide text-white">
              {CAFE_INFO.name}
            </h3>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-4 bg-[#BF6347]" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#D97E63] font-bold">
                SARADISE · KUCHING
              </p>
            </div>
            <p className="text-sm text-[#FDFCF9]/70 font-light max-w-sm leading-relaxed pt-2">
              A neighbourhood sanctuary for specialty coffee, artisan slow bakes, and relaxed moments in Sarawak.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#BF6347] font-bold mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="text-[#FDFCF9]/80 hover:text-[#D97E63] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="text-[#FDFCF9]/80 hover:text-[#D97E63] transition-colors cursor-pointer"
                >
                  Daily Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('signatures')}
                  className="text-[#FDFCF9]/80 hover:text-[#D97E63] transition-colors cursor-pointer"
                >
                  Signatures
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="text-[#FDFCF9]/80 hover:text-[#D97E63] transition-colors cursor-pointer"
                >
                  About the Space
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-[#FDFCF9]/80 hover:text-[#D97E63] transition-colors cursor-pointer"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visit')}
                  className="text-[#FDFCF9]/80 hover:text-[#D97E63] transition-colors cursor-pointer"
                >
                  Visit & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#BF6347] font-bold mb-4">
              Connect
            </p>
            <div className="flex items-center space-x-3">
              <a
                id="footer-instagram-link"
                href={CAFE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 hover:bg-[#BF6347] rounded-xs flex items-center justify-center text-[#FDFCF9] transition-colors border border-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                id="footer-facebook-link"
                href={CAFE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 hover:bg-[#BF6347] rounded-xs flex items-center justify-center text-[#FDFCF9] transition-colors border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                id="footer-whatsapp-link"
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white/5 hover:bg-[#BF6347] rounded-xs flex items-center justify-center text-[#FDFCF9] transition-colors border border-white/10"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <p className="text-xs text-[#FDFCF9]/50 font-light">
                For table inquiries or bean orders, reach out directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Concept Credit & Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFCF9]/45 font-light gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {CAFE_INFO.name} Specialty Coffee. All rights reserved.</p>
            <p className="text-[#D97E63]/80 font-serif italic text-sm">
              Website concept by Bernard Studio
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-[#FDFCF9]/70 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
