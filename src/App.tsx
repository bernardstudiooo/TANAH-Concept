import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SignatureMenu } from './components/SignatureMenu';
import { InteractiveMenu } from './components/InteractiveMenu';
import { AboutExperience } from './components/AboutExperience';
import { PhotoGallery } from './components/PhotoGallery';
import { VisitSection } from './components/VisitSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF9] text-[#2C1E16] font-sans selection:bg-[#BF6347]/20 selection:text-[#2C1E16] relative overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero */}
        <Hero onExploreMenu={() => scrollToSection('menu')} />

        {/* 2. Introduction */}
        <Introduction />

        {/* 3. Signature Menu Highlights */}
        <SignatureMenu onViewFullMenu={() => scrollToSection('menu')} />

        {/* 4. Interactive Categorized Menu */}
        <InteractiveMenu />

        {/* 5. About & Space Experience */}
        <AboutExperience />

        {/* 6. Photo Gallery */}
        <PhotoGallery />

        {/* 7. Practical Visit Information */}
        <VisitSection />

        {/* 8. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
