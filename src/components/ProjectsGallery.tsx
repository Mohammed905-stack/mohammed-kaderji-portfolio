import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Sparkles, 
  Bot, 
  Workflow, 
  FileSearch, 
  Layers, 
  CheckCircle, 
  Copy, 
  Check, 
  Code2,
  MessageSquare,
  Cpu,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'AI Agents', 'Automation Workflows', 'Document Intelligence', 'AI Web Apps'];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const handleCopyLink = (url: string, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderWatermarkIcon = (contextType?: string) => {
    switch (contextType) {
      case 'chatbot':
        return <Bot className="w-32 h-32 text-cyan-400/5 group-hover:text-cyan-400/10 transition-colors" />;
      case 'creator':
        return <Sparkles className="w-32 h-32 text-purple-400/5 group-hover:text-purple-400/10 transition-colors" />;
      case 'docai':
        return <FileSearch className="w-32 h-32 text-emerald-400/5 group-hover:text-emerald-400/10 transition-colors" />;
      case 'workflow':
        return <Workflow className="w-32 h-32 text-blue-400/5 group-hover:text-blue-400/10 transition-colors" />;
      case 'telegram':
        return <MessageSquare className="w-32 h-32 text-sky-400/5 group-hover:text-sky-400/10 transition-colors" />;
      default:
        return <Cpu className="w-32 h-32 text-cyan-400/5 group-hover:text-cyan-400/10 transition-colors" />;
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'AI Agents':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40';
      case 'AI Web Apps':
        return 'bg-purple-950/80 text-purple-300 border-purple-500/40';
      case 'Document Intelligence':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40';
      case 'Automation Workflows':
        return 'bg-blue-950/80 text-blue-300 border-blue-500/40';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700';
    }
  };

  const getCtaButtonStyle = (contextType?: string) => {
    switch (contextType) {
      case 'chatbot':
        return 'bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950';
      case 'creator':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white';
      case 'docai':
        return 'bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950';
      case 'workflow':
        return 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white';
      case 'telegram':
        return 'bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-300 hover:to-cyan-400 text-slate-950';
      default:
        return 'bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950';
    }
  };

  return (
    <section id="projects" className="relative scroll-mt-28 py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient Gallery Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-600/10 via-blue-600/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[300px] bg-purple-600/5 blur-3xl rounded-full" />
        {/* Subtle grid mesh overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Deployed Applications & Tools</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Live Projects Gallery
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Interactive, production-ready AI agents, autonomous workflow automation pipelines, and multilingual document intelligence tools.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 interactive-element ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Container */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              key={project.id}
              className={`group relative flex flex-col rounded-3xl bg-gradient-to-b ${
                project.cardBgGradient || 'from-slate-900/90 via-[#0B0F19] to-slate-950'
              } border border-slate-800/80 overflow-hidden ${
                project.cardBorderAccent || 'hover:border-cyan-400/60'
              } hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 interactive-element`}
            >
              {/* Thematic Watermark in Card Background */}
              <div className="absolute -bottom-6 -right-6 pointer-events-none select-none z-0">
                {renderWatermarkIcon(project.projectContextType)}
              </div>

              {/* Thumbnail Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-black/20 to-black/40" />

                {/* Badge Tag */}
                {project.badge && (
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-md ${getCategoryBadgeStyle(project.category)}`}>
                      <Sparkles className="w-3 h-3" />
                      {project.badge}
                    </span>
                  </div>
                )}

                {/* Capability / Metric Indicator Pill */}
                {project.metricLabel && (
                  <div className="absolute bottom-3 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono text-slate-200 bg-slate-950/80 border border-slate-700/60 backdrop-blur-md">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      {project.metricLabel}
                    </span>
                  </div>
                )}

                {/* Quick copy link button */}
                <button
                  onClick={(e) => handleCopyLink(project.liveUrl, project.id, e)}
                  title="Copy Live Project URL"
                  className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-colors z-10"
                >
                  {copiedId === project.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <div className="text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 italic mb-3">
                    "{project.tagline}"
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 mb-5 text-xs text-slate-400">
                    {project.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Tags and Live Demo Button */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Themed Live Demo CTA */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`live-demo-${project.id}`}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 group/btn transition-all duration-200 ${getCtaButtonStyle(project.projectContextType)}`}
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Extension helper banner */}
      <div className="mt-14 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-center max-w-xl mx-auto backdrop-blur-md relative z-10">
        <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
          <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Need to add or update projects? Easily customize entries in <code className="text-cyan-300 font-mono">portfolioData.ts</code>!</span>
        </p>
      </div>
    </section>
  );
};
