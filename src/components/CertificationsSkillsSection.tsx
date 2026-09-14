import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Sparkles, 
  Ship, 
  Bot, 
  FileSpreadsheet, 
  FileText, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  TrendingUp, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Image,
  Video,
  Globe,
  Smartphone,
  Workflow,
  Code2
} from 'lucide-react';
import { CERTIFICATIONS_DATA, SKILLS_DATA, DEPLOYMENT_PROFICIENCIES, PERSONAL_INFO } from '../data/portfolioData';

export const CertificationsSkillsSection: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<number>(0);

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'exim':
        return <Ship className="w-5 h-5 text-cyan-400" />;
      case 'ai':
        return <Bot className="w-5 h-5 text-sky-400" />;
      case 'logistics':
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case 'excel':
        return <FileSpreadsheet className="w-5 h-5 text-teal-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  const renderProficiencyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
      case 'Image':
        return <Image className="w-4 h-4 text-purple-400" />;
      case 'Video':
        return <Video className="w-4 h-4 text-pink-400" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-indigo-400" />;
      case 'Workflow':
        return <Workflow className="w-4 h-4 text-blue-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
      case 'FileText':
        return <FileText className="w-4 h-4 text-amber-400" />;
      default:
        return <Zap className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Certifications Section */}
      <section id="certifications" className="scroll-mt-28 mb-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Technical Credentials
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal credentials in global trade documentation, ocean freight, executive AI leadership, and automation.
          </p>
        </div>

        {/* Part 1: Certifications Cards Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Professional Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS_DATA.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 sm:p-7 rounded-3xl bg-[#0B0F19]/90 border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-cyan-500/30 transition-colors shadow-inner">
                      {getBadgeIcon(cert.badgeType)}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold">
                        {cert.year}
                      </span>
                      {cert.verifiedLink ? (
                        <a
                          href={cert.verifiedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[11px] text-cyan-300 bg-cyan-950/70 hover:bg-cyan-900/80 px-2 py-0.5 rounded border border-cyan-500/40 transition-colors interactive-element"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Proof
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                          Credential on File
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-cyan-400 mb-3">
                    Issuer: {cert.issuer}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {cert.summary}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Competencies Acquired:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Verifiable proof action */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    {cert.verifiedLink ? (
                      <a
                        href={cert.verifiedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 interactive-element text-xs"
                      >
                        <span>Open Official Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Request for Credential Proof: ${cert.title}`)}&body=${encodeURIComponent(`Hello Mohammed,\n\nI am viewing your portfolio and would like to review the certificate / credential verification for:\n- ${cert.title} (Issued by: ${cert.issuer})\n\nPlease share the certificate copy or documentation.`)}`}
                        className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 interactive-element text-[11px]"
                      >
                        <span>Request Document Proof</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    )}
                    <span className="text-[10px] text-slate-500 font-mono">Formal Certificate</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Technical Skills Grid */}
      <section id="skills" className="scroll-mt-28 pt-8 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>Core Technical & Operational Toolset</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Key competencies explicitly deployed across my logistics operations and AI pipeline development.
            </p>
          </div>

          {/* Category Toggle */}
          <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start sm:self-auto">
            {SKILLS_DATA.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSkillCategory(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all interactive-element ${
                  activeSkillCategory === idx
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Highlighted Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SKILLS_DATA[activeSkillCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-white">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full"
                />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {skill.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Direct Highlights of requested Technical Skills */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0B0F19] to-slate-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-800/80 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production & Deployment Ready</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Key Requested Proficiencies Ready for Deployment:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Immediate operational impact across generative media, visual web & app development with Ycode, autonomous workflows, trade compliance, and advanced spreadsheet modeling.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 px-3.5 py-1.5 rounded-xl bg-cyan-950/70 border border-cyan-500/40 shadow-sm shadow-cyan-500/15">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Immediate Value Add</span>
              </span>
            </div>
          </div>

          {/* Responsive Bento Grid of Proficiencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {DEPLOYMENT_PROFICIENCIES.map((prof, pIdx) => (
              <motion.div
                key={prof.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: pIdx * 0.05 }}
                className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-400/50 hover:bg-slate-900/95 transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:scale-105 transition-all shadow-inner">
                      {renderProficiencyIcon(prof.iconName)}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                      {prof.badge}
                    </span>
                  </div>

                  <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {prof.title}
                  </h5>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {prof.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-cyan-400/80 font-medium">{prof.category}</span>
                  <span className="text-cyan-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Deployment Ready
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scannable Inline Summary Strip */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-xs text-slate-300 relative z-10">
            <span className="font-bold text-cyan-400 shrink-0 uppercase tracking-wider text-[11px]">
              Core Deployable Stack:
            </span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
              <span className="text-white font-medium">Prompt Engineering</span>
              <span className="text-slate-600">•</span>
              <span className="text-white font-medium">AI Image Generation</span>
              <span className="text-slate-600">•</span>
              <span className="text-white font-medium">AI Video Generation</span>
              <span className="text-slate-600">•</span>
              <span className="text-white font-medium">Web Development (Ycode)</span>
              <span className="text-slate-600">•</span>
              <span className="text-white font-medium">App Development (Ycode)</span>
              <span className="text-slate-600">•</span>
              <span className="text-white font-medium">Autonomous Automations</span>
              <span className="text-slate-600">•</span>
              <span className="text-white font-medium">Advanced MS Skills & Excel</span>
              <span className="text-slate-600">•</span>
              <span className="text-white font-medium">EXIM Documentations</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
