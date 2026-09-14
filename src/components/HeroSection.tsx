import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  FileDown, 
  Sparkles, 
  Boxes, 
  Ship, 
  Bot, 
  ExternalLink,
  CheckCircle2,
  Linkedin,
  Instagram,
  ArrowUpRight,
  User
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [userCustomImage] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mk_custom_headshot_composite');
    }
    return null;
  });
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-grid"
    >
      {/* Ambient background glow orbs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md mb-8 shadow-sm hover:border-cyan-400/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>Open to Opportunities | Shipping, Logistics & AI Generalist</span>
        </motion.div>

        {/* Centered Professional Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group"
        >
          {/* Animated subtle outer ambient ring */}
          <div 
            className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 opacity-70 blur-md group-hover:opacity-90 group-hover:blur-lg transition duration-500 animate-pulse" 
          />
          
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-[#0B0F19] ring-2 ring-cyan-500/40 shadow-2xl overflow-hidden transition-all duration-300">
            {!imageError ? (
              <img
                id="hero-headshot-img"
                src={userCustomImage || PERSONAL_INFO.headshotUrl}
                alt="Mohammad Kaderji – Professional Headshot"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top rounded-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center p-3 text-center">
                <User className="w-12 h-12 text-cyan-400 mb-1" />
                <span className="text-xs text-slate-200 font-semibold">Mohammad Kaderji</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Hero Name Greeting right near photo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-1 mb-3"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
            <span>Hi, I am Mohammad Kaderji ,</span>
          </h2>
        </motion.div>

        {/* Animated Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            Bridging AI & Supply Chain Operations
          </span>
        </motion.h1>

        {/* Dynamic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {PERSONAL_INFO.subtitle}
        </motion.p>

        {/* Prominent CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14"
        >
          {/* CTA 1: View My Work */}
          <button
            onClick={() => scrollToSection('projects')}
            id="hero-view-work-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group interactive-element"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* CTA 2: Download Resume */}
          <button
            onClick={onOpenResume}
            id="hero-download-resume-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white shadow-md transition-all duration-300 flex items-center justify-center gap-2 group interactive-element"
          >
            <FileDown className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Real Social Profiles Connect Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <span className="text-xs text-slate-400 font-medium mr-1">Direct Socials:</span>

          {/* Real LinkedIn Button */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-linkedin-connect-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-blue-300 bg-blue-950/50 hover:bg-blue-900/60 border border-blue-500/30 hover:border-blue-400 transition-all duration-200 shadow-sm interactive-element group"
          >
            <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span>LinkedIn: {PERSONAL_INFO.linkedinHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Real Instagram Button */}
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-instagram-connect-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-pink-300 bg-pink-950/50 hover:bg-pink-900/60 border border-pink-500/30 hover:border-pink-400 transition-all duration-200 shadow-sm interactive-element group"
          >
            <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>Instagram: @{PERSONAL_INFO.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Value Proposition Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-6 border-t border-slate-800/80"
        >
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-3.5 text-left">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400">Final-Year B.Com</p>
              <p className="text-sm font-bold text-slate-100">Lala Lajpat Rai College</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-3.5 text-left">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Ship className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400">EXIM & Ocean Shipping</p>
              <p className="text-sm font-bold text-slate-100">Supply Chain Certified</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-3.5 text-left">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400">Generative AI & n8n</p>
              <p className="text-sm font-bold text-slate-100">5+ Autonomous Deployments</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
