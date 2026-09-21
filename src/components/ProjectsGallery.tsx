import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Bot, 
  Workflow, 
  FileSearch, 
  ExternalLink, 
  Cpu, 
  Globe, 
  Lock, 
  ArrowUpRight, 
  ShieldCheck, 
  Play, 
  FileText,
  MessageSquare,
  Ship,
  Github
} from 'lucide-react';

export interface AICapstoneProject {
  id: string;
  title: string;
  category: string;
  stack: string[];
  tech?: string[];
  overview: string;
  description?: string;
  executionDetails: string;
  thumbnail: string;
  badge: string;
  accentColor: string;
  themeGlow: string;
  cardBgGradient: string;
  cardBorderAccent: string;
  contextType: 'chatbot' | 'creator' | 'docai' | 'workflow' | 'telegram' | 'shipping';
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  tertiaryButtonText?: string;
  tertiaryButtonUrl?: string;
  liveUrl?: string;
  pdfViewerUrl?: string;
  githubUrl?: string;
}

export interface WebDevProject {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  category: string;
  techTags: string[];
  thumbnail: string;
  statusBadge: string;
  previewNote: string;
}

export const AI_CAPSTONE_PROJECTS: AICapstoneProject[] = [
  {
    id: "ai-personal-assistant-chatbot",
    title: "AI Personal Assistant Chatbot",
    category: "GENERATIVE AI / NLP",
    badge: "Port 8501 • Gemini 3.6",
    stack: ["Python", "Streamlit", "Google Gemini 3.6 Flash", "Jupyter Notebook"],
    tech: ["Python", "Streamlit", "Google Gemini 3.6 Flash", "Jupyter Notebook"],
    overview: "Responsive conversational assistant engineered to process arbitrary user inquiries and stream structured generative responses with 404 deprecation prevention.",
    description: "Responsive conversational assistant engineered to process arbitrary user inquiries and stream structured generative responses with 404 deprecation prevention.",
    executionDetails: "Streamlit local host server on port 8501",
    liveUrl: "https://kaderji-personal-assistant.streamlit.app",
    pdfViewerUrl: "/Project_1_AI_Personal_Assistant_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-personal-assistant",
    primaryButtonText: "Launch Live App ↗",
    primaryButtonUrl: "https://kaderji-personal-assistant.streamlit.app",
    secondaryButtonText: "📄 View Case Study PDF ↗",
    secondaryButtonUrl: "/Project_1_AI_Personal_Assistant_Mohammed_Kaderji_Report.pdf",
    tertiaryButtonText: "View GitHub Repository ↗",
    tertiaryButtonUrl: "https://github.com/Mohammed905-stack/ai-personal-assistant",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-cyan-500 to-blue-600",
    themeGlow: "rgba(6, 182, 212, 0.2)",
    cardBgGradient: "from-cyan-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-cyan-400/60",
    contextType: "chatbot"
  },
  {
    id: "ai-content-creator-application",
    title: "AI Content Creator Application",
    category: "GENERATIVE AI / CONTENT AUTOMATION",
    badge: "Port 8502 • Multi-Channel",
    stack: ["Python", "Streamlit", "Gemini 3.6 Flash"],
    tech: ["Python", "Streamlit", "Gemini 3.6 Flash"],
    overview: "Multi-platform copy generator dynamically engineering tailored outputs for LinkedIn, Instagram, Twitter, Emails, and Blog Outlines with interactive persona/tone control (Professional, Funny, Formal, Friendly).",
    description: "Multi-platform copy generator dynamically engineering tailored outputs for LinkedIn, Instagram, Twitter, Emails, and Blog Outlines with interactive persona/tone control (Professional, Funny, Formal, Friendly).",
    executionDetails: "Streamlit local host server on port 8502",
    liveUrl: "https://kaderji-content-creator.streamlit.app",
    pdfViewerUrl: "/Project_2_AI_Content_Creator_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-content-creator",
    primaryButtonText: "Launch Live App ↗",
    primaryButtonUrl: "https://kaderji-content-creator.streamlit.app",
    secondaryButtonText: "📄 View Case Study PDF ↗",
    secondaryButtonUrl: "/Project_2_AI_Content_Creator_Mohammed_Kaderji_Report.pdf",
    tertiaryButtonText: "View GitHub Repository ↗",
    tertiaryButtonUrl: "https://github.com/Mohammed905-stack/ai-content-creator",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-purple-500 to-pink-600",
    themeGlow: "rgba(168, 85, 247, 0.2)",
    cardBgGradient: "from-purple-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-purple-400/60",
    contextType: "creator"
  },
  {
    id: "ai-pdf-assistant-document-intelligence",
    title: "AI PDF Assistant & Document Intelligence",
    category: "DOCUMENT AI / RETRIEVAL & PROCESSING",
    badge: "Port 8503 • Document AI",
    stack: ["Python", "Streamlit", "PyPDF", "Gemini 3.6 Flash"],
    tech: ["Python", "Streamlit", "PyPDF", "Gemini 3.6 Flash"],
    overview: "Context-grounded document reader extracting text across multi-page PDFs, providing strict in-context question answering, automated bullet summarization, and multilingual translation.",
    description: "Context-grounded document reader extracting text across multi-page PDFs, providing strict in-context question answering, automated bullet summarization, and multilingual translation.",
    executionDetails: "Streamlit local host server on port 8503",
    liveUrl: "https://kaderji-pdf-assistant.streamlit.app",
    pdfViewerUrl: "/Project_3_AI_PDF_Assistant_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-pdf-assistant",
    primaryButtonText: "Launch Live App ↗",
    primaryButtonUrl: "https://kaderji-pdf-assistant.streamlit.app",
    secondaryButtonText: "📄 View Case Study PDF ↗",
    secondaryButtonUrl: "/Project_3_AI_PDF_Assistant_Mohammed_Kaderji_Report.pdf",
    tertiaryButtonText: "View GitHub Repository ↗",
    tertiaryButtonUrl: "https://github.com/Mohammed905-stack/ai-pdf-assistant",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-emerald-500 to-teal-600",
    themeGlow: "rgba(16, 185, 129, 0.2)",
    cardBgGradient: "from-emerald-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-emerald-400/60",
    contextType: "docai"
  },
  {
    id: "global-trade-ocean-bl-auditor",
    title: "Global Trade & Ocean B/L Document Auditor",
    category: "EXIM LOGISTICS & COMPLIANCE AI",
    tech: ["Python", "Streamlit", "PyPDF", "Google Gemini 3.6 Flash"],
    stack: ["Python", "Streamlit", "PyPDF", "Google Gemini 3.6 Flash"],
    description: "Autonomous shipping compliance engine auditing Ocean Bills of Lading against UCP 600, checking HS codes, and generating customs clearance verdicts.",
    overview: "Autonomous shipping compliance engine auditing Ocean Bills of Lading against UCP 600, checking HS codes, and generating customs clearance verdicts.",
    executionDetails: "Streamlit cloud engine auditing maritime trade documents & UCP 600 rules",
    liveUrl: "https://kaderji-cargo-auditor.streamlit.app",
    pdfViewerUrl: "/ai-shipping-bl-auditor_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-shipping-bl-auditor",
    primaryButtonText: "Launch Live App ↗",
    primaryButtonUrl: "https://kaderji-cargo-auditor.streamlit.app",
    secondaryButtonText: "📄 View Case Study PDF ↗",
    secondaryButtonUrl: "/ai-shipping-bl-auditor_Mohammed_Kaderji_Report.pdf",
    tertiaryButtonText: "View GitHub Repository ↗",
    tertiaryButtonUrl: "https://github.com/Mohammed905-stack/ai-shipping-bl-auditor",
    thumbnail: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    badge: "EXIM Logistics • Gemini 3.6",
    accentColor: "from-teal-500 to-emerald-600",
    themeGlow: "rgba(20, 184, 166, 0.2)",
    cardBgGradient: "from-teal-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-teal-400/60",
    contextType: "shipping"
  },
  {
    id: "autonomous-linkedin-content-pipeline",
    title: "Autonomous LinkedIn Content Pipeline",
    category: "AI AUTOMATION & AGENT WORKFLOWS",
    badge: "n8n Cloud Zero-Touch",
    stack: ["n8n Cloud", "LangChain Nodes", "OpenAI Model", "LinkedIn OAuth2 API", "Google Sheets Trigger"],
    overview: "Autonomous pipeline that continuously polls Google Sheets for article links, condenses core theses via LangChain, restructures them into viral LinkedIn social copy with opening hooks and hashtags, and publishes directly to personal feed via OAuth2.",
    executionDetails: "n8n Cloud workflow triggered via Google Sheets Watch Rows & OAuth2",
    primaryButtonText: "📄 Read Case Study PDF ↗",
    primaryButtonUrl: "/linkedin-automation-case-study.pdf",
    secondaryButtonText: "🔍 View n8n Canvas Proof ↗",
    secondaryButtonUrl: "/linkedin-proof.png",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-blue-600 to-indigo-600",
    themeGlow: "rgba(59, 130, 246, 0.2)",
    cardBgGradient: "from-blue-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-blue-400/60",
    contextType: "workflow"
  },
  {
    id: "autonomous-telegram-customer-assistant",
    title: "24/7 Autonomous Telegram Customer Assistant",
    category: "AI AGENTS & CONVERSATIONAL BOTS",
    badge: "RoboClicks Bot • Memory",
    stack: ["Telegram Bot API (RoboClicks Bot)", "n8n Cloud", "LangChain Agent", "Google Sheets", "Window Buffer Memory"],
    overview: "High-availability conversational bot utilizing intent routing (Switch node) to handle transactional pricing ($20) and FAQ requests, while routing unstructured queries to a LangChain agent with conversation memory for multi-turn advisory roadmaps.",
    executionDetails: "Telegram Bot API webhook trigger linked to n8n Cloud event pipeline",
    primaryButtonText: "📄 Read Case Study PDF ↗",
    primaryButtonUrl: "/telegram-bot-case-study.pdf",
    secondaryButtonText: "🔍 View Bot & Canvas Proof ↗",
    secondaryButtonUrl: "/telegram-proof.png",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-sky-400 to-blue-700",
    themeGlow: "rgba(14, 165, 233, 0.2)",
    cardBgGradient: "from-sky-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-sky-400/60",
    contextType: "telegram"
  }
];

export const WEB_DEV_PROJECTS: WebDevProject[] = [
  {
    id: "web-routine-tracker",
    title: "Daily Progress & Routine Tracker App",
    description: "Interactive, responsive task and personal growth tracking application built with dynamic state handling.",
    liveUrl: "https://smart-diet-glow.lovable.app",
    category: "Full-Stack Web App",
    techTags: ["React", "TypeScript", "Tailwind CSS", "Local State"],
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80",
    statusBadge: "Public Preview",
    previewNote: "Secured client runtime (zero editor/code access)"
  },
  {
    id: "web-aistudio-dynamic",
    title: "AI Studio Dynamic Web Application",
    description: "Responsive web application prototype engineered with modern front-end layout paradigms and reactive components.",
    liveUrl: "https://ai-dynamic-app.web.app",
    category: "AI Application Prototype",
    techTags: ["AI Studio", "TypeScript", "Reactive UI", "Cloud Host"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    statusBadge: "Verified Preview",
    previewNote: "Sandboxed public demo (no editor/prompts)"
  },
  {
    id: "web-aistudio-utility",
    title: "AI Utility & Assistant Web Platform",
    description: "AI-enabled productivity interface featuring custom agent interactions within a minimalist, high-performance UI.",
    liveUrl: "https://ai-utility-platform.web.app",
    category: "Productivity Platform",
    techTags: ["AI Agent UI", "Gemini API", "Modern Layout", "Fast Response"],
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    statusBadge: "Verified Preview",
    previewNote: "Sandboxed public demo (no editor/prompts)"
  },
  {
    id: "web-lovable-prototype",
    title: "Lovable Productivity Prototype",
    description: "Rapid front-end web prototype emphasizing smooth component state transitions and modern styling.",
    liveUrl: "https://chatty-practice-pal.lovable.app",
    category: "Front-End Experience",
    techTags: ["UI/UX Prototype", "Modern CSS", "Micro-Interactions", "Fluid Layout"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    statusBadge: "Public Preview",
    previewNote: "Secured client runtime (zero editor/code access)"
  }
];

export const ProjectsGallery: React.FC = () => {
  const renderContextIcon = (type: string) => {
    switch (type) {
      case 'chatbot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'creator':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'docai':
        return <FileSearch className="w-5 h-5 text-emerald-400" />;
      case 'workflow':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'telegram':
        return <MessageSquare className="w-5 h-5 text-sky-400" />;
      case 'shipping':
        return <Ship className="w-5 h-5 text-teal-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="relative scroll-mt-28 py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient Gallery Glow Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-b from-cyan-600/10 via-blue-600/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-[550px] h-[320px] bg-purple-600/5 blur-3xl rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* =========================================================================
          PART 1: AI & Automation Capstone Projects (Exactly 5 Cards)
          ========================================================================= */}
      <div className="flex flex-col items-center text-center mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm backdrop-blur-md">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Part 1 • Backend & Automation Capstones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          AI & Automation Capstones
        </h2>
        <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
          Production-grade generative AI services, autonomous n8n orchestration pipelines, and document intelligence systems. Direct links to live deployments and verified architecture reports.
        </p>
      </div>

      {/* Capstone Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 mb-28">
        {AI_CAPSTONE_PROJECTS.map((project, index) => (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            key={project.id}
            className={`group relative flex flex-col rounded-3xl bg-gradient-to-b ${project.cardBgGradient} border border-slate-800/80 overflow-hidden ${project.cardBorderAccent} hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 interactive-element`}
          >
            {/* Thumbnail Header */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-950">
              <img
                src={project.thumbnail}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-black/30 to-black/50" />

              {/* Top Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-md bg-slate-900/90 text-cyan-300 border-cyan-500/40">
                  {renderContextIcon(project.contextType)}
                  {project.badge}
                </span>
              </div>

              {/* Execution Indicator */}
              <div className="absolute bottom-3 left-3.5 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-200 bg-slate-950/85 border border-slate-700/70 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {project.executionDetails.includes('port') ? project.executionDetails.substring(project.executionDetails.indexOf('port')) : 'Pipeline Active'}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
              <div>
                <div className="text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-1">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.overview}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Action Buttons: Standard HTML <a> tags only */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                {project.id === "autonomous-linkedin-content-pipeline" ? (
                  <>
                    <a
                      href="/linkedin-automation-case-study.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`view-case-study-${project.id}`}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs flex items-center justify-center gap-1.5 hover:opacity-95 transition"
                    >
                      📄 Read Case Study PDF ↗
                    </a>
                    <a
                      href="/linkedin-proof.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`view-proof-${project.id}`}
                      className="w-full py-2 px-3 rounded-xl border border-cyan-500/40 text-cyan-300 font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-cyan-500/10 transition"
                    >
                      🔍 View n8n Canvas Proof ↗
                    </a>
                  </>
                ) : project.id === "autonomous-telegram-customer-assistant" ? (
                  <>
                    <a
                      href="/telegram-bot-case-study.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`view-case-study-${project.id}`}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs flex items-center justify-center gap-1.5 hover:opacity-95 transition"
                    >
                      📄 Read Case Study PDF ↗
                    </a>
                    <a
                      href="/telegram-proof.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`view-proof-${project.id}`}
                      className="w-full py-2 px-3 rounded-xl border border-cyan-500/40 text-cyan-300 font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-cyan-500/10 transition"
                    >
                      🔍 View Bot & Canvas Proof ↗
                    </a>
                  </>
                ) : project.tertiaryButtonUrl ? (
                  <>
                    {/* Button 1: Launch Live App ↗ */}
                    <a
                      href={project.liveUrl || project.primaryButtonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`launch-app-${project.id}`}
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-all duration-200 group/btn interactive-element"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                      <span>{project.primaryButtonText}</span>
                    </a>

                    {/* Button 2: 📄 View Case Study PDF ↗ */}
                    <a
                      href={project.pdfViewerUrl || project.secondaryButtonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`view-case-study-${project.id}`}
                      className="w-full py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-600 transition-all duration-200 group/subbtn interactive-element"
                    >
                      <FileText className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.secondaryButtonText}</span>
                    </a>

                    {/* Button 3: View GitHub Repository ↗ */}
                    <a
                      href={project.githubUrl || project.tertiaryButtonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`view-github-${project.id}`}
                      className="w-full py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-600 transition-all duration-200 group/subbtn interactive-element"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>{project.tertiaryButtonText}</span>
                    </a>
                  </>
                ) : (
                  <>
                    {/* Button 1: Launch App */}
                    <a
                      href={project.primaryButtonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`launch-app-${project.id}`}
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-all duration-200 group/btn interactive-element"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                      <span>{project.primaryButtonText}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Button 2: Case Study PDF */}
                    {project.secondaryButtonUrl && (
                      <a
                        href={project.secondaryButtonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`view-case-study-${project.id}`}
                        className="w-full py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-600 transition-all duration-200 group/subbtn interactive-element"
                      >
                        <FileText className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{project.secondaryButtonText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/subbtn:translate-x-0.5 group-hover/subbtn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* =========================================================================
          PART 2: Web Development & Interactive Applications (Division 6 - 4 Cards)
          ========================================================================= */}
      <div className="pt-8 border-t border-slate-800/80 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>Part 2 • Division 6: Web Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web Development & Interactive Applications
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Responsive client-side prototypes, dynamic growth trackers, and sandboxed AI application interfaces. Each links strictly to a clean, public runtime deployment.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-slate-400 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Secured Public Preview Endpoints (No editors, prompt histories, or sensitive settings exposed)</span>
          </div>
        </div>

        {/* Web Dev Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {WEB_DEV_PROJECTS.map((webApp, wIdx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: wIdx * 0.08 }}
              key={webApp.id}
              className="group flex flex-col rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#0B0F19] to-slate-950 border border-slate-800/80 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Thumbnail Header */}
              <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                <img
                  src={webApp.thumbnail}
                  alt={webApp.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-black/20 to-black/40" />

                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-950/90 text-blue-300 border border-blue-500/40 backdrop-blur-md">
                    {webApp.statusBadge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    {webApp.category}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {webApp.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {webApp.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {webApp.techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Secured Public Link & Privacy Note */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <a
                    href={webApp.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`web-demo-${webApp.id}`}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-700 hover:border-blue-500 transition-all duration-200 flex items-center justify-center gap-2 group/link interactive-element"
                  >
                    <span>Launch Public App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-[10px] text-slate-500 text-center pt-1 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-slate-500" />
                    <span>{webApp.previewNote}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
