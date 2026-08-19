import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Copy, Check, Car, Wifi } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const VisitSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="visit"
      className="w-full py-28 md:py-36 bg-[#F7F5F0] text-[#2C1E16] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        {/* Section Header */}
        <div className="max-w-xl mb-16 pb-6 border-b border-[#2C1E16]/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-6 bg-[#BF6347]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#BF6347] font-bold block">
              Location & Hours
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#2C1E16]">
            Come by.
          </h2>
          <p className="text-[#2C1E16]/70 text-base md:text-lg font-light leading-relaxed mt-4">
            We are nestled within the leafy avenues of Saradise Commercial Centre in Kuching, with plenty of roadside and basement parking.
          </p>
        </div>

        {/* Practical Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Address & Direct Action Buttons */}
          <div className="lg:col-span-6 bg-[#FDFCF9] p-8 sm:p-12 border border-[#2C1E16]/10 rounded-sm flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.25em] text-[#5A5E4B] font-bold mb-6">
                <MapPin className="w-3.5 h-3.5 text-[#BF6347]" />
                <span>Our Address</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C1E16] font-normal mb-3">
                {CAFE_INFO.name} Saradise
              </h3>

              <div className="text-base sm:text-lg text-[#2C1E16]/75 font-light leading-relaxed mb-6 space-y-1">
                <p>{CAFE_INFO.addressLine1}</p>
                <p>{CAFE_INFO.addressLine2}</p>
                <p>{CAFE_INFO.postcode} {CAFE_INFO.city}, {CAFE_INFO.state}</p>
                <p>{CAFE_INFO.country}</p>
              </div>

              {/* Copy Address helper button */}
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.18em] text-[#5A5E4B] hover:text-[#2C1E16] font-bold border border-[#2C1E16]/10 px-3.5 py-2 bg-[#EAE8E2] rounded-xs transition-colors mb-8 focus:outline-none cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#5A5E4B]" />
                    <span className="text-[#5A5E4B]">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons: Google Maps & WhatsApp */}
            <div className="pt-6 border-t border-[#2C1E16]/10 flex flex-col sm:flex-row gap-3.5">
              <a
                id="visit-google-maps-btn"
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#2C1E16] text-[#FDFCF9] hover:bg-[#BF6347] transition-colors text-[10px] uppercase tracking-[0.2em] font-bold rounded-xs text-center shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                id="visit-whatsapp-btn"
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#BF6347] text-white hover:opacity-90 transition-opacity text-[10px] uppercase tracking-[0.2em] font-bold rounded-xs text-center shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Operating Hours & Guest Amenities */}
          <div className="lg:col-span-6 space-y-6">
            {/* Opening Hours Box */}
            <div className="bg-[#FDFCF9] p-8 sm:p-10 border border-[#2C1E16]/10 rounded-sm shadow-sm">
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.25em] text-[#5A5E4B] font-bold mb-6">
                <Clock className="w-3.5 h-3.5 text-[#BF6347]" />
                <span>Opening Hours</span>
              </div>

              <div className="space-y-5">
                {CAFE_INFO.schedules.map((sched) => (
                  <div
                    key={sched.days}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-[#2C1E16]/10 last:border-b-0 last:pb-0 gap-1"
                  >
                    <div>
                      <p className="font-serif text-lg text-[#2C1E16] font-normal">{sched.days}</p>
                      {sched.note && (
                        <p className="text-xs text-[#5A5E4B] font-light">{sched.note}</p>
                      )}
                    </div>
                    <span className="font-mono text-xs text-[#5A5E4B] font-medium sm:text-right shrink-0">
                      {sched.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Phone & Amenities Box */}
            <div className="bg-[#FDFCF9] p-8 border border-[#2C1E16]/10 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
              <div>
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#5A5E4B] font-bold mb-1">
                  <Phone className="w-3.5 h-3.5 text-[#BF6347]" />
                  <span>Call Us</span>
                </div>
                <a
                  href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-serif text-xl sm:text-2xl text-[#2C1E16] hover:text-[#BF6347] transition-colors"
                >
                  {CAFE_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-6 border-t sm:border-t-0 sm:border-l border-[#2C1E16]/10 pt-4 sm:pt-0 sm:pl-6 text-xs text-[#2C1E16]/70">
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-[#5A5E4B]" />
                  <span className="font-medium">Ample Parking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="w-4 h-4 text-[#5A5E4B]" />
                  <span className="font-medium">High-Speed Wi-Fi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
