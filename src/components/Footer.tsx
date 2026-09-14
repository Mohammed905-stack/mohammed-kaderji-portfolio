import React from 'react';
import { 
  Linkedin, 
  Instagram, 
  Phone, 
  Mail, 
  ArrowUp, 
  Heart, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080E] py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow accent */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-cyan-500/5 blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-2">
            <span className="font-bold text-lg text-white tracking-wide">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Bridging AI & Supply Chain Operations • Shipping, EXIM Logistics & Autonomous Agent Automation.
          </p>
        </div>

        {/* Center: Social Icons & Phone Link */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Connect & Reach Out
          </div>
          
          <div className="flex items-center gap-3">
            
            {/* LinkedIn Profile */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-link"
              title={`LinkedIn Profile: ${PERSONAL_INFO.name} (${PERSONAL_INFO.linkedinHandle})`}
              className="h-11 px-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-blue-400 flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm interactive-element group"
            >
              <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold hidden sm:inline">{PERSONAL_INFO.linkedinHandle}</span>
            </a>

            {/* Instagram Profile */}
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-instagram-link"
              title={`Instagram: @${PERSONAL_INFO.instagramHandle}`}
              className="h-11 px-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-pink-500/60 text-slate-300 hover:text-pink-400 flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm interactive-element group"
            >
              <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold hidden sm:inline">@{PERSONAL_INFO.instagramHandle}</span>
            </a>

            {/* Clickable Phone Number */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              id="footer-phone-link"
              title={`Call Mohammed Kaderji: ${PERSONAL_INFO.phone}`}
              className="h-11 px-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/60 text-slate-300 hover:text-emerald-400 flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm interactive-element group"
            >
              <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold font-mono">{PERSONAL_INFO.phone}</span>
            </a>

            {/* Direct Email Link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="footer-email-link"
              title={`Email: ${PERSONAL_INFO.email}`}
              className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm interactive-element group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

          </div>
        </div>

        {/* Right: Scroll to Top */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors interactive-element group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Mohammed Kaderji. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
