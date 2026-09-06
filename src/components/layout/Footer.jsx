import React from 'react';
import { personalInfo } from '../../data/portfolio';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C2A29] text-[#E8E2D5] py-12 border-t border-[#4A4643]">
      <div className="max-w-6xl mx-auto px-6">


        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#8C8275] gap-3">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="inline-flex items-center gap-1.5 text-xs text-[#C4BAAB]">
            <MapPin className="w-3 h-3 text-[#8C6D46]" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
