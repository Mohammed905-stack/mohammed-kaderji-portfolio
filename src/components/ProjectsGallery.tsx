import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Bot, 
  Workflow, 
  FileSearch, 
  CheckCircle, 
  Code2,
  MessageSquare,
  Zap,
  ExternalLink,
  Layers,
  Server,
  Activity,
  Terminal,
  X,
  Cpu,
  Globe,
  Lock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Share2,
  FileCode,
  Radio,
  Play
} from 'lucide-react';

export interface AICapstoneProject {
  id: string;
  title: string;
  category: string;
  stack: string[];
  overview: string;
  executionDetails: string;
  verifiedOutput: string;
  verifiedCapabilities?: string;
  problemStatement: string;
  systemArchitecture: string[];
  thumbnail: string;
  badge: string;
  accentColor: string;
  themeGlow: string;
  cardBgGradient: string;
  cardBorderAccent: string;
  portStatus: string;
  contextType: 'chatbot' | 'creator' | 'docai' | 'workflow' | 'telegram';
  liveAppUrl?: string;
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
    category: "Generative AI / NLP",
    stack: ["Python", "Streamlit", "Google Gemini 3.6 Flash", "Jupyter Notebook"],
    overview: "Responsive conversational assistant engineered to process arbitrary user inquiries and stream structured generative responses with 404 deprecation prevention.",
    executionDetails: "Streamlit local host server on port 8501.",
    verifiedOutput: "Real-time query execution generating structured biographical breakdowns with active success alert banners.",
    problemStatement: "Traditional conversational prototypes frequently break due to deprecated API endpoints (e.g., model naming transitions like Gemini 1.0 to 1.5/3.6 Flash) and unstructured streaming dropouts. Required a resilient, zero-friction interface providing deterministic error handling, session state memory, and formatted generative responses.",
    systemArchitecture: [
      "Streamlit Reactive UI: Binds user prompt to st.session_state chat message registry",
      "API Client Layer: Authenticated connection to Google Gemini 3.6 Flash using robust exception trapping",
      "Stream Response Handler: Token-by-token text streaming into formatted Markdown containers",
      "404 Deprecation Shield: Fallback model router preventing abrupt service failure during upstream model migration"
    ],
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    badge: "Port 8501 • Gemini 3.6",
    accentColor: "from-cyan-500 to-blue-600",
    themeGlow: "rgba(6, 182, 212, 0.2)",
    cardBgGradient: "from-cyan-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-cyan-400/60",
    portStatus: "Local Host :8501 • Active",
    contextType: "chatbot",
    liveAppUrl: "https://ai-personal-assistant-464q23nsnxufete6hooju5.streamlit.app/"
  },
  {
    id: "ai-content-creator-application",
    title: "AI Content Creator Application",
    category: "Generative AI / Content Automation",
    stack: ["Python", "Streamlit", "Gemini 3.6 Flash"],
    overview: "Multi-platform copy generator dynamically engineering tailored outputs for LinkedIn, Instagram, Twitter, Emails, and Blog Outlines with interactive persona/tone control (Professional, Funny, Formal, Friendly).",
    executionDetails: "Streamlit local host server on port 8502.",
    verifiedOutput: "Automated drafting of executive-level thought leadership copy with strategic calls-to-action and hashtag taxonomies.",
    problemStatement: "Content creators and founders spend hours rewriting the same core insight across disjointed channels with varying algorithm constraints (character limits, hashtag taxonomy, and tone). Needed an instantaneous multi-channel distribution studio.",
    systemArchitecture: [
      "Dynamic Prompt Matrix: Injects selected tone dials (Professional, Funny, Formal, Friendly) into channel-specific prompt wrappers",
      "Channel Synthesizer: Parallel multi-output generation tuned for LinkedIn carousel hooks, Instagram captions, X threads, and email blasts",
      "Evaluation & Taxonomy Engine: Generates contextual hashtags and call-to-action (CTA) variations tailored to audience engagement patterns",
      "One-Click Clipboard Exporter: Clean clipboard payload formatting ready for instant social scheduling"
    ],
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    badge: "Port 8502 • Multi-Channel",
    accentColor: "from-purple-500 to-pink-600",
    themeGlow: "rgba(168, 85, 247, 0.2)",
    cardBgGradient: "from-purple-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-purple-400/60",
    portStatus: "Local Host :8502 • Active",
    contextType: "creator",
    liveAppUrl: "https://ai-content-creator-7qzen2ftgmrssp4jgf2rzj.streamlit.app/"
  },
  {
    id: "ai-pdf-assistant-document-intelligence",
    title: "AI PDF Assistant & Document Intelligence",
    category: "Document AI / Retrieval & Processing",
    stack: ["Python", "Streamlit", "PyPDF", "Gemini 3.6 Flash"],
    overview: "Context-grounded document reader extracting text across multi-page PDFs, providing strict in-context question answering, automated bullet summarization, and multilingual translation.",
    executionDetails: "Streamlit local host server on port 8503.",
    verifiedCapabilities: "Ingested multi-page documents (ai_tools.pdf) with one-click translation and synthesis into fluent Hindi (मुख्य सारांश & मुख्य सामग्री).",
    verifiedOutput: "Ingested multi-page documents (ai_tools.pdf) with one-click translation and synthesis into fluent Hindi (मुख्य सारांश & मुख्य सामग्री).",
    problemStatement: "Enterprise documentation, shipping manifests, and technical whitepapers are trapped in dense PDFs. Users require fast semantic extraction without hallucination, plus real-time cross-language synthesis into regional languages like Hindi.",
    systemArchitecture: [
      "PyPDF Document Ingestion: High-throughput text & table parsing across arbitrary multi-page PDF payloads",
      "Chunking & Context Bounding: Strict ground-truth prompting to prevent model hallucination outside source text",
      "Multilingual Synthesis Core: Contextual translation into Hindi (मुख्य सारांश & मुख्य सामग्री) maintaining technical semantics",
      "Interactive Streamlit Workspace: Instant query input, source citations, and downloadable summarized briefs"
    ],
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    badge: "Port 8503 • Hindi Synthesis",
    accentColor: "from-emerald-500 to-teal-600",
    themeGlow: "rgba(16, 185, 129, 0.2)",
    cardBgGradient: "from-emerald-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-emerald-400/60",
    portStatus: "Local Host :8503 • Active",
    contextType: "docai",
    liveAppUrl: "https://ai-pdf-assistant-5u7wxvr9pxffmxvqfpgfw8.streamlit.app/"
  },
  {
    id: "autonomous-linkedin-content-pipeline",
    title: "Autonomous LinkedIn Content Pipeline",
    category: "AI Automation & Agent Workflows",
    stack: ["n8n Cloud", "LangChain Nodes", "OpenAI Model", "Google Sheets Trigger", "LinkedIn OAuth2 API"],
    overview: "Autonomous pipeline that continuously polls Google Sheets for article links, condenses core theses via LangChain, restructures them into viral LinkedIn social copy with opening hooks and hashtags, and publishes directly to personal feed via OAuth2.",
    executionDetails: "n8n Cloud workflow triggered via Google Sheets Watch Rows node & scheduled cron triggers.",
    verifiedOutput: "Verified end-to-end cloud pipeline instance (mohammedkaderji.app.n8n.cloud) with active webhook triggers.",
    problemStatement: "Maintaining consistent professional brand visibility requires regular reading, summarizing, copywriting, and manual posting. The manual workflow is prone to inconsistency, human friction, and delay.",
    systemArchitecture: [
      "Google Sheets Watcher: Polls new curated industry URLs from a shared spreadsheet data store",
      "LangChain Document Parser: Extracts webpage content, filters noise, and isolates core qualitative insights",
      "OpenAI Transformation Node: Reformats key takeaways into LinkedIn algorithm-friendly structure with hook + body + CTA",
      "OAuth2 Automated Publisher: Direct REST API invocation to LinkedIn UGC post creation with media attachments",
      "Status Sync: Updates Google Sheet with Published timestamp, post URL, and execution logs"
    ],
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    badge: "n8n Cloud • Zero-Touch",
    accentColor: "from-blue-600 to-indigo-600",
    themeGlow: "rgba(59, 130, 246, 0.2)",
    cardBgGradient: "from-blue-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-blue-400/60",
    portStatus: "mohammedkaderji.app.n8n.cloud • Active",
    contextType: "workflow"
  },
  {
    id: "autonomous-telegram-customer-assistant",
    title: "24/7 Autonomous Telegram Customer Assistant",
    category: "AI Agents & Conversational Bots",
    stack: ["Telegram Bot API (RoboClicks Bot)", "n8n Cloud", "LangChain Agent", "Window Buffer Memory", "Google Sheets"],
    overview: "High-availability conversational bot utilizing intent routing (Switch node) to handle transactional pricing ($20) and FAQ requests, while routing unstructured queries to a LangChain agent with conversation memory for multi-turn advisory roadmaps.",
    executionDetails: "Telegram Webhook trigger linked to n8n Cloud event pipeline with stateful memory.",
    verifiedOutput: "Real-time user interaction via /start command, automated conversation logging to Google Sheets, and structured 4-step ideation questionnaire.",
    problemStatement: "Standard customer support chatbots either provide rigid button-only trees that fail on custom questions or raw LLMs that hallucinate pricing and lack CRM lead storage.",
    systemArchitecture: [
      "Telegram Webhook Listener: Ingests user messages, commands (/start), and chat metadata instantly",
      "Conditional Switch Node: Classifies intent between standard pricing ($20)/FAQs and open-ended technical inquiries",
      "LangChain Agent + Buffer Memory: Retains rolling conversational context across multi-turn user dialogs",
      "Lead Capture & Sync: Dynamically appends qualified responses and customer IDs into Google Sheets CRM records",
      "Telegram Bot Responder: Returns Markdown-styled guidance, pricing options, and next action prompts within 1.2s"
    ],
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    badge: "RoboClicks Bot • Memory",
    accentColor: "from-sky-400 to-blue-700",
    themeGlow: "rgba(14, 165, 233, 0.2)",
    cardBgGradient: "from-sky-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-sky-400/60",
    portStatus: "Telegram Bot API • 24/7 Live",
    contextType: "telegram"
  }
];

export const WEB_DEV_PROJECTS: WebDevProject[] = [
  {
    id: "web-routine-tracker",
    title: "Daily Progress & Routine Tracker App",
    description: "Interactive, responsive task and personal growth tracking application built with dynamic state handling.",
    liveUrl: "https://lovable.dev/projects/bc102071-bd3e-40a9-978d-7c09b7947bfd",
    category: "Full-Stack Web App",
    techTags: ["React", "TypeScript", "Tailwind CSS", "Local State"],
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80",
    statusBadge: "Public Preview",
    previewNote: "Secured read-only preview"
  },
  {
    id: "web-aistudio-dynamic",
    title: "AI Studio Dynamic Web Application",
    description: "Responsive web application prototype engineered with modern front-end layout paradigms and reactive components.",
    liveUrl: "https://aistudio.google.com/apps/8a7747b1-3450-4632-b4a6-574ecbc272b7?showPreview=true&showAssistant=false",
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
    liveUrl: "https://aistudio.google.com/apps/7deb9174-cf6e-42f2-9951-ec06788307a2?showPreview=true&showAssistant=false",
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
    liveUrl: "https://lovable.dev/projects/91b0f461-5f4c-45ac-92d4-cfa10632b013",
    category: "Front-End Experience",
    techTags: ["UI/UX Prototype", "Modern CSS", "Micro-Interactions", "Fluid Layout"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    statusBadge: "Public Preview",
    previewNote: "Secured read-only preview"
  }
];

export const ProjectsGallery: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<AICapstoneProject | null>(null);

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
          PART 1: AI & Automation Capstone Projects (5 Projects with Modals)
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
          Production-grade generative AI services, autonomous n8n orchestration pipelines, and document intelligence systems. Click any card to inspect the full architecture & verified execution output.
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

              {/* Execution Port Indicator */}
              <div className="absolute bottom-3 left-3.5 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-200 bg-slate-950/85 border border-slate-700/70 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {project.executionDetails.split(' ')[0]} {project.executionDetails.includes('port') ? project.executionDetails.substring(project.executionDetails.indexOf('port')) : 'Pipeline'}
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

              {/* Project Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                {project.liveAppUrl ? (
                  <>
                    {/* Primary Button: Launch Live App directly */}
                    <a
                      href={project.liveAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`launch-live-app-${project.id}`}
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-all duration-200 group/btn interactive-element"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                      <span>Launch Live App</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Secondary Button: View Case Study & Architecture */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      id={`view-case-study-${project.id}`}
                      className="w-full py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-600 transition-all duration-200 group/subbtn interactive-element"
                    >
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                      <span>View Case Study & Architecture</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setActiveModalProject(project)}
                    id={`view-case-study-${project.id}`}
                    className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-all duration-200 group/btn interactive-element"
                  >
                    <Activity className="w-4 h-4 text-slate-950" />
                    <span>View Case Study & Architecture</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* =========================================================================
          PART 2: Web Development & Interactive Applications (6th Division)
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
            Responsive client-side prototypes, dynamic growth trackers, and sandboxed AI application interfaces. Each links strictly to a public, read-only preview deployment.
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

                {/* Secured Public Link */}
                <div className="pt-3 border-t border-slate-800/80">
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
                  <p className="text-[10px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-slate-500" />
                    <span>{webApp.previewNote}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE CASE STUDY & ARCHITECTURE MODAL
          ========================================================================= */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#0B0F19] border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border-b border-slate-800 flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 mb-2">
                    <Activity className="w-3 h-3 text-cyan-400" />
                    <span>Interactive Case Study & System Architecture</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono mt-1">
                    Category: {activeModalProject.category}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200">
                
                {/* Section 1: Executive Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Project Overview</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                    {activeModalProject.overview}
                  </p>
                </div>

                {/* Section 2: Problem Statement */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <Radio className="w-4 h-4 text-pink-400" />
                    <span>Problem Statement</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                    {activeModalProject.problemStatement}
                  </p>
                </div>

                {/* Section 3: Tech Stack Badges */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-blue-400" />
                    <span>Tech Stack Badges</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-cyan-950/50 text-cyan-200 border border-cyan-500/30 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 4: System Architecture */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>System Architecture & Pipeline Flow</span>
                  </h4>
                  <div className="space-y-2.5">
                    {activeModalProject.systemArchitecture.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-300"
                      >
                        <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                          {sIdx + 1}
                        </div>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5: Execution Environment & Port Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Execution Environment</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 font-mono">
                      {activeModalProject.executionDetails}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Port / Runtime Status</span>
                    </h4>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{activeModalProject.portStatus}</span>
                    </div>
                  </div>
                </div>

                {/* Section 6: Verified Real-World Output */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Verified Real-World Output</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {activeModalProject.verifiedOutput}
                  </p>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-5 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono text-center sm:text-left">
                  Verified by Mohammad Kaderji • Capstone Engineering
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {activeModalProject.liveAppUrl && (
                    <a
                      href={activeModalProject.liveAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 flex items-center justify-center gap-1.5 transition-all shadow-md interactive-element"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Launch Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="flex-1 sm:flex-initial px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
