import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Philosophy', target: 'about' },
    { label: 'Signatures', target: 'signatures' },
    { label: 'Menu', target: 'menu' },
    { label: 'Experience', target: 'experience' },
    { label: 'Journal', target: 'gallery' },
    { label: 'Visit', target: 'visit' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#FDFCF9]/95 backdrop-blur-md shadow-[0_1px_15px_rgba(44,30,22,0.05)] py-4 border-b border-[#2C1E16]/8'
            : 'bg-gradient-to-b from-[#1E130D]/80 via-[#1E130D]/40 to-transparent py-7 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-between">
          {/* Logo / Cafe Name */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="text-left group focus:outline-none flex flex-col cursor-pointer"
          >
            <span
              className={`block font-serif text-2xl md:text-3xl font-normal tracking-wide uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[#2C1E16] group-hover:text-[#BF6347]' : 'text-[#FDFCF9] group-hover:text-white'
              }`}
            >
              {CAFE_INFO.name}
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <div className={`h-[1px] w-3.5 transition-colors ${isScrolled ? 'bg-[#BF6347]' : 'bg-[#D97E63]'}`} />
              <span
                className={`block text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-[#5A5E4B]' : 'text-white/80'
                }`}
              >
                SARADISE · KUCHING
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`nav-link-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className={`text-[10px] uppercase tracking-[0.22em] font-bold transition-all duration-300 relative py-1 focus:outline-none cursor-pointer group ${
                  isScrolled
                    ? 'text-[#2C1E16]/75 hover:text-[#BF6347]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#BF6347] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Primary CTA (WhatsApp) & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              id="nav-whatsapp-cta"
              href={CAFE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 text-[10px] font-bold tracking-[0.22em] uppercase rounded-xs transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#2C1E16] text-[#FDFCF9] hover:bg-[#BF6347]'
                  : 'bg-white/10 hover:bg-white text-white hover:text-[#2C1E16] backdrop-blur-md border border-white/20'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className={`p-2 focus:outline-none lg:hidden transition-colors cursor-pointer ${
                isScrolled ? 'text-[#2C1E16]' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu-drawer"
        className={`fixed inset-0 z-40 bg-[#1E130D] text-[#FDFCF9] transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-6 bg-[#BF6347]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D97E63]">Navigation</p>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`mobile-nav-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="text-left font-serif text-3xl text-[#FDFCF9] hover:text-[#D97E63] italic transition-colors py-2 flex items-center justify-between border-b border-white/10"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu bottom details */}
        <div className="pt-8 border-t border-white/15 space-y-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#5A5E4B]">Location</p>
            <p className="text-sm text-[#FDFCF9]/85 mt-1 font-light">Saradise Commercial Centre, Kuching, Sarawak</p>
          </div>
          <div className="flex space-x-3 pt-2">
            <a
              id="mobile-menu-whatsapp-btn"
              href={CAFE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#BF6347] text-white py-3.5 px-4 text-[10px] font-bold tracking-widest uppercase rounded-xs hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
            <button
              onClick={() => handleLinkClick('visit')}
              className="flex-1 text-center border border-white/30 text-[#FDFCF9] py-3.5 px-4 text-[10px] font-bold tracking-widest uppercase rounded-xs hover:bg-white/10 transition-colors"
            >
              Hours & Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

