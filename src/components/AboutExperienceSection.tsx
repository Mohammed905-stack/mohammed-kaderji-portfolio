import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  ShoppingBag, 
  Store, 
  Calendar, 
  CheckCircle2, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { EXPERIENCE_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const AboutExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>(EXPERIENCE_DATA[0].id);

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Entrepreneurial':
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case 'Professional':
        return <Store className="w-5 h-5 text-blue-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* About Section */}
      <section id="about" className="scroll-mt-28 mb-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About & Operational Background
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Merging academic rigor in commerce and trade with practical logistics execution and state-of-the-art AI tooling.
          </p>
        </div>

        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 text-xs font-medium">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.educationHighlight}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white leading-snug">
                From Traditional Supply Chains to Automated Intelligence
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a final-year Bachelor of Commerce student at <strong className="text-white">Lala Lajpat Rai College</strong>, I have cultivated a strong academic grounding in commercial trade, economics, and business operations. Parallel to my degree, I completed specialized post-diploma coursework in <strong className="text-cyan-300">EXIM Logistics and Supply Chain Management</strong>, learning the nuances of international trade corridors, container documentation, and customs clearance.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Recognizing that physical logistics bottlenecks are often caused by manual data handling, I invested deeply into modern AI technologies—building autonomous bots, n8n webhook pipelines, and document intelligence agents to accelerate decision-making and eliminate manual overhead.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 space-y-4">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
                <span>Quick Snapshot</span>
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="space-y-3 divide-y divide-slate-800/60 text-xs">
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">Current Status:</span>
                  <span className="font-semibold text-cyan-300">Final-Year B.Com</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Institution:</span>
                  <span className="font-semibold text-slate-200">Lala Lajpat Rai College</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-slate-200">Mumbai, India</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Focus Sectors:</span>
                  <span className="font-semibold text-slate-200 text-right">Shipping, EXIM & AI Ops</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="scroll-mt-28 pt-8 border-t border-slate-800/80">
        <div className="text-center sm:text-left mb-10">
          <h3 className="text-2xl font-bold text-white flex items-center justify-center sm:justify-start gap-3">
            <Layers className="w-6 h-6 text-cyan-400" />
            <span>Experience Timeline</span>
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Real-world execution across direct e-commerce, order fulfillment, and family enterprise support.
          </p>
        </div>

        {/* Timeline Desktop & Mobile layout */}
        <div className="relative border-l-2 border-slate-800/90 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCE_DATA.map((item, index) => {
            const isSelected = selectedExperience === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div 
                  className={`absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-slate-900 border-cyan-400 shadow-md shadow-cyan-500/20 scale-110' 
                      : 'bg-slate-950 border-slate-800 group-hover:border-slate-700'
                  }`}
                >
                  {getIconForType(item.type)}
                </div>

                {/* Content Card */}
                <div 
                  onClick={() => setSelectedExperience(item.id)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer interactive-element ${
                    isSelected
                      ? 'bg-slate-900/80 border-cyan-500/40 shadow-xl shadow-cyan-500/5'
                      : 'bg-slate-900/30 border-slate-800/70 hover:bg-slate-900/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider mb-1.5 bg-slate-800 text-cyan-400 border border-slate-700">
                        {item.type}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-sm font-medium text-slate-300">{item.company}</p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/70 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Bulleted achievements */}
                  <div className="space-y-2 mb-5">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
