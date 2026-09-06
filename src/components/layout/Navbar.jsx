import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'AWARDS', href: '#awards' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm border-b border-[#E8E2D5] py-3'
          : 'bg-[#FDFBF7] border-b border-[#E8E2D5]/70 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="group flex flex-col">
          <span className="text-lg font-serif font-bold tracking-wider text-[#2C2A29] group-hover:text-[#8C6D46] transition-colors">
            NABILA BALQIS
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#8C8275]">
            S1 Manajemen
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-[#5A554E] hover:text-[#8C6D46] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#2C2A29] text-[#FDFBF7] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-[#8C6D46] transition-all duration-200 shadow-sm"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2C2A29] hover:text-[#8C6D46] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#E8E2D5] px-6 py-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-widest text-[#5A554E] hover:text-[#8C6D46] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8E2D5]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#2C2A29] text-[#FDFBF7] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-[#8C6D46] transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
