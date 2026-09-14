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
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
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

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Centered Circular Avatar on top in the middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group"
        >
          {/* Subtle ambient outer glow ring */}
          <div 
            className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 opacity-50 blur-md pointer-events-none group-hover:opacity-75 transition-opacity" 
            aria-hidden="true"
          />

          {/* Balanced Avatar Container */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-blue-500/80 shadow-[0_0_35px_rgba(59,130,246,0.35)] relative mx-auto">
            <img
              id="hero-headshot-img"
              src="https://i.postimg.cc/BbPpjJKC/Chat-GPT-Image-Sep-14-2026-08-29-25-PM.png"
              alt="Mohammad Kaderji – Professional Headshot"
              referrerPolicy="no-referrer"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%'
              }}
            />
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md mb-6 shadow-sm hover:border-cyan-400/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>Open to Opportunities | Shipping, Logistics & AI Generalist</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3"
        >
          Hi, I am <span className="text-white">Mohammad Kaderji</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 mb-6 max-w-3xl"
        >
          Bridging AI & Supply Chain Operations
        </motion.h2>

        {/* Bio description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Action Buttons: View Projects & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8"
        >
          <button
            onClick={() => scrollToSection('projects')}
            id="hero-view-work-cta"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group interactive-element"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('resume')}
            id="hero-download-resume-cta"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white shadow-md transition-all duration-300 flex items-center justify-center gap-2 group interactive-element"
          >
            <FileDown className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </button>
        </motion.div>

        {/* Direct Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <span className="text-xs text-slate-400 font-medium mr-1">Direct Socials:</span>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-linkedin-connect-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-blue-300 bg-blue-950/50 hover:bg-blue-900/60 border border-blue-500/30 hover:border-blue-400 transition-all duration-200 shadow-sm interactive-element group"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-instagram-connect-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-pink-300 bg-pink-950/50 hover:bg-pink-900/60 border border-pink-500/30 hover:border-pink-400 transition-all duration-200 shadow-sm interactive-element group"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
            <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Value Proposition Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-8 border-t border-slate-800/80"
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
