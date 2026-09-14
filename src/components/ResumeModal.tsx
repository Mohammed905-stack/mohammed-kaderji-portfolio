import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram,
  GraduationCap, 
  Briefcase, 
  Award, 
  Sparkles,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Backdrop dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D121F] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Action Bar */}
          <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Mohammed Kaderji – Curriculum Vitae</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                id="resume-print-btn"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                id="resume-close-btn"
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-200 font-sans print:bg-white print:text-black print:p-0">
            
            {/* Header / Contact */}
            <div className="border-b border-slate-800 pb-6 print:border-black">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-cyan-500/40 shrink-0 bg-slate-900">
                    <img
                      src="https://i.postimg.cc/YCGPnX6d/profile-jpg.jpg"
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-cyan-400 font-medium text-sm sm:text-base mt-1 print:text-blue-700">
                      {PERSONAL_INFO.roleHeadline}
                    </p>
                  </div>
                </div>

                <div className="text-xs space-y-1 text-slate-300 print:text-gray-800 sm:text-right">
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">
                      {PERSONAL_INFO.phone}
                    </a>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                    <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      {PERSONAL_INFO.linkedinHandle}
                    </a>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Instagram className="w-3.5 h-3.5 text-pink-400 print:text-black" />
                    <a href={PERSONAL_INFO.instagramUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      @{PERSONAL_INFO.instagramHandle}
                    </a>
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed print:bg-gray-50 print:text-black print:border-gray-300">
                {PERSONAL_INFO.bio}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 print:text-black">
                <GraduationCap className="w-4 h-4 text-cyan-400 print:text-black" />
                <span>Education</span>
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 print:bg-white print:border-gray-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-white print:text-black">
                      Bachelor of Commerce (B.Com) – Final Year
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium print:text-blue-700">
                      Lala Lajpat Rai College, Mumbai
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 print:text-gray-700">2024 – Present</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 print:text-gray-800">
                  Focused on commercial accounting, business economics, logistics principles, and operational trade strategy.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 print:text-black">
                <Briefcase className="w-4 h-4 text-cyan-400 print:text-black" />
                <span>Experience</span>
              </h2>

              <div className="space-y-3">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 print:bg-white print:border-gray-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div>
                        <h3 className="font-bold text-sm text-white print:text-black">{exp.role}</h3>
                        <p className="text-xs text-slate-400 print:text-gray-700">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-cyan-400 print:text-black">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 mt-2 text-xs text-slate-300 print:text-gray-800">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 print:text-black" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Live AI Projects */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 print:text-black">
                <Sparkles className="w-4 h-4 text-cyan-400 print:text-black" />
                <span>Key AI & Automation Projects</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 print:bg-white print:border-gray-300">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-xs text-white print:text-black">{proj.title}</h3>
                      <span className="text-[10px] font-mono text-cyan-400 print:text-blue-700">{proj.badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 print:text-gray-800 line-clamp-2">{proj.description}</p>
                    <div className="mt-2 text-[10px] text-slate-400 font-mono">
                      Stack: {proj.tags.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Skills */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 print:text-black">
                <Award className="w-4 h-4 text-cyan-400 print:text-black" />
                <span>Certifications & Core Tooling</span>
              </h2>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs space-y-2 print:bg-white print:border-gray-300">
                <p><strong className="text-white print:text-black">Credentials:</strong> Post Diploma in EXIM Logistics Supply Chain Management (ETTI) • AI for Business Leaders Bootcamp (Outskill) • Logistics and Ocean Shipping (Udemy) • AI-Powered Excel Micro Course (Skill Course)</p>
                <p><strong className="text-white print:text-black">Technical Skills:</strong> Prompt Engineering • AI Image & Video Generation • Web & App Building (Ycode) • Autonomous Automations (n8n) • Advanced MS Skills & Excel • EXIM Documentation • Gemini API • Ocean Shipping & Logistics</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
