import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Avoid overriding activeSection while smooth scrolling to a clicked nav link
      if (isProgrammaticScrollRef.current) return;

      // Bottom of page detection -> highlight contact
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // Check section bounding rects from bottom to top
      const sections = ['hero', 'about', 'experience', 'projects', 'certifications', 'skills', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 280) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    
    // Immediately set active highlight on click
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    // Temporarily pause scroll listener overrides during smooth scroll
    isProgrammaticScrollRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 850);

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B11]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name (MK Logo removed) */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 interactive-element"
          id="nav-brand-logo"
        >
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                id={`desktop-nav-${link.name.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 interactive-element ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border border-cyan-400/50 rounded-full shadow-sm shadow-cyan-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button & Socials */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Real LinkedIn Quick Link */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-link"
            title="LinkedIn Profile: Mohammed Kaderji"
            className="p-2 rounded-xl text-slate-400 hover:text-blue-400 bg-slate-900/60 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/40 transition-all duration-200 interactive-element"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Real Instagram Quick Link */}
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-instagram-link"
            title="Instagram: @___mohammedk___"
            className="p-2 rounded-xl text-slate-400 hover:text-pink-400 bg-slate-900/60 hover:bg-pink-950/40 border border-slate-800 hover:border-pink-500/40 transition-all duration-200 interactive-element"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            id="nav-contact-quick-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all duration-200 interactive-element shadow-md shadow-cyan-500/20"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-nav-toggle"
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-xl text-slate-300 bg-slate-900/80 border border-slate-800 hover:text-white transition-colors interactive-element"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#080B11]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 mt-2 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    id={`mobile-nav-${link.name.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-950/70 to-blue-950/70 border border-cyan-400/50 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/20'
                        : 'text-slate-200 hover:bg-slate-800/60 hover:text-cyan-400'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                {/* Social Quick Links */}
                <div className="grid grid-cols-2 gap-2 mb-1">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-blue-300 bg-blue-950/40 border border-blue-500/30"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-pink-300 bg-pink-950/40 border border-pink-500/30"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </div>

                <a
                  href="#contact"
                  id="mobile-contact-cta"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400"
                >
                  <span>Connect Directly</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
