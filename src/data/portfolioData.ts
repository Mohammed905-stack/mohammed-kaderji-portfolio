/**
 * =======================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =======================================================================
 * Edit this file to easily add, remove, or modify your projects, certifications,
 * experience, skills, and contact information without touching any UI code.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI Agents' | 'Automation Workflows' | 'Document Intelligence' | 'AI Web Apps' | 'EXIM LOGISTICS & COMPLIANCE AI' | string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  tech?: string[];
  liveUrl: string;
  pdfViewerUrl?: string;
  githubUrl?: string;
  thumbnail: string;
  badge?: string;
  accentColor?: string;
  themeGlow?: string;
  cardBgGradient?: string;
  cardBorderAccent?: string;
  projectContextType?: 'chatbot' | 'creator' | 'docai' | 'workflow' | 'telegram' | 'shipping' | 'compliance' | 'rag' | 'voice';
  metricLabel?: string;
  detailedDescription?: string;
  features?: string[];
  devNote?: string;
  status?: string;
  assessmentContext?: string;
  isAssessment?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialCode?: string;
  year: string;
  skillsLearned: string[];
  summary: string;
  badgeType: 'exim' | 'ai' | 'logistics' | 'excel';
  verifiedLink?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Professional' | 'Entrepreneurial' | 'Education';
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level: number; // 1 to 100
    categoryBadge: string;
    context: string;
  }[];
}

// -----------------------------------------------------------------------
// 1. PERSONAL INFORMATION & LINKS
// -----------------------------------------------------------------------
export const PERSONAL_INFO = {
  name: "Mohammed Kaderji",
  roleHeadline: "Bridging AI & Supply Chain Operations",
  animatedPrefix: "Mohammed Kaderji – ",
  fullHeadline: "Mohammed Kaderji – Bridging AI & Supply Chain Operations",
  subtitle:
    "Entry-level professional open to opportunities in Shipping, Logistics, or as an AI Generalist.",
  educationHighlight: "Final-year B.Com student at Lala Lajpat Rai College",
  location: "Mumbai, India",
  email: "mohdkaderji022@gmail.com",
  phone: "+91 8905659753",
  whatsappUrl: "https://wa.me/918905659753",
  linkedinUrl: "https://www.linkedin.com/in/mohammed-kaderji-77109b37a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  linkedinHandle: "mohammed-kaderji-77109b37a",
  instagramUrl: "https://www.instagram.com/___mohammedk___?stkn=MTNhemlhNmd0dzhqcg==",
  instagramHandle: "___mohammedk___",
  resumeDownloadName: "Mohammed_Kaderji_Resume.pdf",
  // Direct high-resolution profile photo
  headshotUrl: "https://i.postimg.cc/KvG1gK9V/Chat-GPT-Image-Sep-14-2026-08-29-25-PM.png",
  bio: "A proactive Commerce graduate combining deep foundational coursework in EXIM Logistics and Ocean Freight with hands-on expertise in generative AI agent development, n8n automations, and data analytics. Focused on modernizing supply chains and eliminating manual bottlenecks.",
};

// -----------------------------------------------------------------------
// 2. LIVE PROJECTS GALLERY DATA
// -----------------------------------------------------------------------
// 💡 TO ADD A NEW PROJECT IN THE FUTURE:
// Copy and paste this template into the array below:
// {
//   id: "my-new-project-slug",
//   title: "Project Title",
//   category: "AI Agents", // or "Automation Workflows" | "Document Intelligence" | "AI Web Apps"
//   tagline: "Short 1-line punchy description",
//   description: "Detailed description of what you built and the problem it solved.",
//   highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
//   tags: ["Ycode", "Prompt Engineering", "n8n"],
//   liveUrl: "https://your-project-url.com",
//   thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
//   badge: "New Release",
//   accentColor: "from-cyan-500 to-blue-600",
//   themeGlow: "rgba(6, 182, 212, 0.2)",
//   cardBgGradient: "from-cyan-950/30 via-[#0B0F19] to-slate-950",
//   cardBorderAccent: "hover:border-cyan-400/60",
//   projectContextType: "chatbot", // or "creator" | "docai" | "workflow" | "telegram"
//   metricLabel: "Live • Production",
// },
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "express-docs-rag-assistant",
    title: "Express Docs — AI Technical Documentation Assistant",
    category: "Agentic AI / RAG",
    tagline: "LangGraph & FastAPI RAG Assistant indexing technical docs with citation validation",
    description:
      "An AI assistant that searches technical documentation and produces answers with supporting sources. Built with AI-assisted development for the Express Analytics Data Science Intern assessment.",
    detailedDescription:
      "The application indexes five official FastAPI guides. For each question, it retrieves relevant passages, checks their usefulness, and uses Gemini to generate a cited answer. LangGraph coordinates the workflow, including a bounded search retry and fallback when supporting information is insufficient.",
    highlights: [
      "Gemini embeddings & FAISS similarity search across indexed FastAPI guides",
      "LangGraph conditional routing, passage relevance grading & query rewriting",
      "Citation validation, SQLite storage, and 78 recorded passing unit tests"
    ],
    features: [
      "Document ingestion and chunking with overlap.",
      "Gemini embeddings and FAISS similarity search.",
      "Individual passage relevance grading.",
      "Conditional routing and bounded query rewriting.",
      "Citation validation and an answer-support check.",
      "SQLite storage for documents, queries and feedback.",
      "Browser interface with source excerpts, workflow trace and JSON export.",
      "70 Python tests and 8 frontend tests recorded as passing."
    ],
    tags: ["Python", "FastAPI", "LangGraph", "Gemini API", "FAISS", "SQLite", "Pydantic", "HTML", "CSS", "JavaScript"],
    tech: ["Python", "FastAPI", "LangGraph", "Gemini API", "FAISS", "SQLite", "Pydantic", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://github.com/Mohammed905-stack/express-analytics-rag-assistant",
    githubUrl: "https://github.com/Mohammed905-stack/express-analytics-rag-assistant",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    badge: "Assessment • LangGraph RAG",
    accentColor: "from-emerald-500 to-teal-600",
    themeGlow: "rgba(16, 185, 129, 0.2)",
    cardBgGradient: "from-emerald-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-emerald-400/60",
    projectContextType: "rag",
    metricLabel: "Runs Locally • 78 Tests Passing",
    devNote: "Developed with heavy AI assistance, followed by local testing and debugging.",
    status: "Completed assessment project; runs locally.",
    assessmentContext: "Express Analytics Data Science Intern assessment",
    isAssessment: true,
  },
  {
    id: "aria-ai-voice-customer-support",
    title: "Aria — AI Voice Customer Support Assistant",
    category: "Voice AI / Customer Support",
    tagline: "Browser voice assistant handling sample order queries and skincare policies",
    description:
      "A browser-based voice assistant for the fictional Aura Skincare brand, handling sample order enquiries and policy questions with spoken responses.",
    detailedDescription:
      "Built with AI-assisted development for the Datastraw AI + Tech Intern assessment. Aria combines browser speech recognition, a Node.js/Express backend, mock order lookup and explicit policy rules. Gemini supports general brand conversations. The interface provides spoken replies, a conversation transcript and a structured post-call outcome.",
    highlights: [
      "Microphone conversation with browser Web Speech API & status indicators",
      "Sample order lookup (ORD-101 to 103) & call context for follow-up questions",
      "Shipping, returns, cancellation-eligibility, COD policy handling & JSON summary"
    ],
    features: [
      "Microphone conversation with browser speech-to-text and text-to-speech.",
      "Listening, Thinking and Speaking indicators.",
      "Text interface for testing.",
      "Sample order lookup using ORD-101, ORD-102 and ORD-103.",
      "Call-level order context for follow-up questions.",
      "Shipping, returns, cancellation-eligibility and COD policy handling.",
      "Missing/invalid order ID handling and responses to common out-of-scope requests.",
      "Conversation transcript.",
      "Rule-based JSON outcome containing customer intent, order ID, resolution status and call summary.",
      "Gemini API key kept on the backend."
    ],
    tags: ["JavaScript", "Node.js", "Express.js", "Gemini API", "Web Speech API", "HTML", "CSS", "REST APIs"],
    tech: ["JavaScript", "Node.js", "Express.js", "Gemini API", "Web Speech API", "HTML", "CSS", "REST APIs"],
    liveUrl: "https://github.com/Mohammed905-stack/aura-skincare-ai-voice-agent",
    githubUrl: "https://github.com/Mohammed905-stack/aura-skincare-ai-voice-agent",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    badge: "Assessment • Web Speech API",
    accentColor: "from-amber-500 to-violet-600",
    themeGlow: "rgba(245, 158, 11, 0.2)",
    cardBgGradient: "from-amber-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-amber-400/60",
    projectContextType: "voice",
    metricLabel: "Assessment Prototype • Local",
    devNote: "Developed with heavy AI assistance and tested through sample customer-support conversations.",
    status: "Assessment prototype using fictional customer and order data.",
    assessmentContext: "Datastraw AI + Tech Intern assessment",
    isAssessment: true,
  },
  {
    id: "ai-personal-assistant-chatbot",
    title: "AI Personal Assistant",
    category: "AI Agents",
    tagline: "Python & Streamlit productivity and workflow automation assistant",
    description:
      "A productivity and workflow automation assistant built as an interactive web interface.",
    highlights: [
      "Streamlit cloud engine hosted at ai-personal-assistant-464q23nsnxufete6hooju5.streamlit.app",
      "Real-time query execution generating structured biographical breakdowns with active success alert banners",
      "Google Gemini 3.6 Flash & Jupyter Notebook integration"
    ],
    tags: ["Python", "Streamlit", "Automation", "Assistant"],
    tech: ["Python", "Streamlit", "Automation", "Assistant"],
    liveUrl: "https://ai-personal-assistant-464q23nsnxufete6hooju5.streamlit.app/",
    pdfViewerUrl: "/Project_1_AI_Personal_Assistant_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-personal-assistant",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    badge: "Streamlit Cloud",
    accentColor: "from-cyan-500 to-blue-600",
    themeGlow: "rgba(6, 182, 212, 0.2)",
    cardBgGradient: "from-cyan-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-cyan-400/60",
    projectContextType: "chatbot",
    metricLabel: "Live • Production",
  },
  {
    id: "ai-content-creator-application",
    title: "AI Content Creator",
    category: "AI Web Apps",
    tagline: "Python & Streamlit AI-powered content generation and optimization utility",
    description:
      "An AI-powered content generation and optimization utility built with Python and Streamlit.",
    highlights: [
      "Streamlit cloud engine hosted at ai-content-creator-7qzen2ftgmrssp4jgf2rzj.streamlit.app",
      "Automated drafting of executive-level thought leadership copy with strategic calls-to-action and hashtag taxonomies",
      "Persona/Tone control: Professional, Funny, Formal, Friendly"
    ],
    tags: ["Python", "Streamlit", "Gemini API", "AI Content Generation"],
    tech: ["Python", "Streamlit", "Gemini API", "AI Content Generation"],
    liveUrl: "https://ai-content-creator-7qzen2ftgmrssp4jgf2rzj.streamlit.app/",
    pdfViewerUrl: "/Project_2_AI_Content_Creator_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-content-creator",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    badge: "Streamlit Cloud",
    accentColor: "from-purple-500 to-pink-600",
    themeGlow: "rgba(168, 85, 247, 0.2)",
    cardBgGradient: "from-purple-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-purple-400/60",
    projectContextType: "creator",
    metricLabel: "Live • Production",
  },
  {
    id: "ai-pdf-assistant-document-intelligence",
    title: "AI PDF Assistant",
    category: "Document Intelligence",
    tagline: "Python & Streamlit intelligent document querying and RAG assistant",
    description:
      "An intelligent document querying and RAG assistant for analyzing PDFs and answering questions with context.",
    highlights: [
      "Streamlit cloud engine hosted at ai-pdf-assistant-5u7wxvr9pxffmxvqfpgfw8.streamlit.app",
      "Ingested multi-page documents (ai_tools.pdf) with one-click translation and synthesis into fluent Hindi (मुख्य सारांश & मुख्य सामग्री)",
      "Strict in-context Q&A and automated bullet summarization"
    ],
    tags: ["Python", "Streamlit", "RAG", "Document AI"],
    tech: ["Python", "Streamlit", "RAG", "Document AI"],
    liveUrl: "https://ai-pdf-assistant-5u7wxvr9pxffmxvqfpgfw8.streamlit.app/",
    pdfViewerUrl: "/Project_3_AI_PDF_Assistant_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-pdf-assistant",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    badge: "Streamlit Cloud",
    accentColor: "from-emerald-500 to-teal-600",
    themeGlow: "rgba(168, 85, 247, 0.2)",
    cardBgGradient: "from-emerald-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-emerald-400/60",
    projectContextType: "docai",
    metricLabel: "Live • Production",
  },
  {
    id: "global-trade-ocean-bl-auditor",
    title: "Global Trade & Ocean B/L Document Auditor",
    category: "EXIM LOGISTICS & COMPLIANCE AI",
    tagline: "Autonomous shipping compliance engine auditing Ocean Bills of Lading",
    description:
      "Autonomous Shipping Compliance Engine for freight forwarders and logistics teams to audit Ocean Bills of Lading, commercial invoices, and packing lists for discrepancies.",
    highlights: [
      "Streamlit cloud engine auditing maritime trade documents & UCP 600 rules",
      "Automated verification of HS codes, port codes, container weights, and consignment details",
      "Instant customs clearance verdict generation with structured export reports"
    ],
    tags: ["Python", "Streamlit", "Supply Chain", "Logistics Compliance"],
    tech: ["Python", "Streamlit", "Supply Chain", "Logistics Compliance"],
    liveUrl: "https://kaderji-cargo-auditor.streamlit.app/",
    pdfViewerUrl: "/ai-shipping-bl-auditor_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-shipping-bl-auditor",
    thumbnail: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    badge: "EXIM Logistics",
    accentColor: "from-teal-500 to-emerald-600",
    themeGlow: "rgba(20, 184, 166, 0.2)",
    cardBgGradient: "from-teal-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-teal-400/60",
    projectContextType: "shipping",
    metricLabel: "Live • Production",
  },
  {
    id: "autonomous-linkedin-content-pipeline",
    title: "Autonomous LinkedIn Content Pipeline",
    category: "Automation Workflows",
    tagline: "Autonomous pipeline polling Google Sheets and publishing via OAuth2",
    description:
      "Autonomous pipeline that continuously polls Google Sheets for article links, condenses core theses via LangChain, restructures them into viral LinkedIn social copy with opening hooks and hashtags, and publishes directly to personal feed via OAuth2.",
    highlights: [
      "n8n Cloud, LangChain Nodes, OpenAI Model, Google Sheets Trigger, LinkedIn OAuth2 API",
      "Verified end-to-end cloud pipeline instance (mohammedkaderji.app.n8n.cloud) with active webhook triggers",
      "Continuous polling, automated summarization, and direct OAuth2 publishing"
    ],
    tags: ["n8n Cloud", "LangChain", "OpenAI", "Google Sheets", "LinkedIn API"],
    liveUrl: "/linkedin-automation-case-study.pdf",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    badge: "n8n Cloud",
    accentColor: "from-blue-600 to-indigo-600",
    themeGlow: "rgba(59, 130, 246, 0.2)",
    cardBgGradient: "from-blue-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-blue-400/60",
    projectContextType: "workflow",
    metricLabel: "mohammedkaderji.app.n8n.cloud",
  },
  {
    id: "autonomous-telegram-customer-assistant",
    title: "24/7 Autonomous Telegram Customer Assistant",
    category: "AI Agents",
    tagline: "High-availability conversational bot with intent routing & memory",
    description:
      "High-availability conversational bot utilizing intent routing (Switch node) to handle transactional pricing ($20) and FAQ requests, while routing unstructured queries to a LangChain agent with conversation memory for multi-turn advisory roadmaps.",
    highlights: [
      "Telegram Bot API (RoboClicks Bot), n8n Cloud, LangChain Agent, Window Buffer Memory, Google Sheets",
      "Real-time user interaction via /start command, automated conversation logging to Google Sheets",
      "Structured 4-step ideation questionnaire & conversational memory"
    ],
    tags: ["Telegram Bot API", "n8n Cloud", "LangChain", "Buffer Memory", "Google Sheets"],
    liveUrl: "/telegram-bot-case-study.pdf",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    badge: "RoboClicks Bot",
    accentColor: "from-sky-400 to-blue-700",
    themeGlow: "rgba(14, 165, 233, 0.2)",
    cardBgGradient: "from-sky-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-sky-400/60",
    projectContextType: "telegram",
    metricLabel: "24/7 Live • Bot API",
  },
  {
    id: "ai-customs-hs-code-auditor",
    title: "AI-Powered Customs & HS Code Classification Auditor",
    category: "Automation Workflows",
    tagline: "Automated local n8n workflow with Gemini AI Agent for customs & HS code classification",
    description:
      "An automated local workflow built in n8n utilizing the Google Gemini AI Agent to streamline international trade compliance, classify products into Harmonized System (HS) chapters, and flag regulatory watch-outs.",
    highlights: [
      "n8n (Local Instance), n8n AI Agent Node, Google Gemini API (gemini-3.6-flash / Gemini Chat Model)",
      "Automated evaluation of raw product descriptions using custom system instructions focused on international trade laws",
      "Multi-tier compliance report covering HS chapters, regulatory watch-outs (UFLPA, quotas, labeling), and required documentation"
    ],
    tags: ["n8n (Local Instance)", "n8n AI Agent Node", "Google Gemini API", "Gemini 3.6 Flash", "Trade Compliance"],
    tech: ["n8n (Local Instance)", "n8n AI Agent Node", "Google Gemini API", "Gemini 3.6 Flash", "Modular Trade Prompting"],
    liveUrl: "/hs_code_compliance_project_documentation.pdf",
    pdfViewerUrl: "/hs_code_compliance_project_documentation.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/AI-Customs-HS-Code-Auditor-",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    badge: "n8n Local • Gemini 3.6 Flash",
    accentColor: "from-amber-500 to-orange-600",
    themeGlow: "rgba(245, 158, 11, 0.2)",
    cardBgGradient: "from-amber-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-amber-400/60",
    projectContextType: "compliance",
    metricLabel: "n8n Local • Gemini Agent",
  },
  {
    id: "incoterms-2020-trade-engine",
    title: "Incoterms 2020 & Global Trade Cost Engine",
    category: "EXIM LOGISTICS & COMPLIANCE AI",
    tagline: "React & Vite Landed Cost Engine navigating ICC 2020 Risk Transfer Matrices",
    description:
      "A comprehensive React & Vite web application built to calculate landed costs, navigate international trade risk matrices under official ICC 2020 standards, and audit global supply chain compliance.",
    highlights: [
      "11 ICC Incoterms 2020 Rules Support across multimodal and maritime shipping routes",
      "Dynamic Landed Cost calculation auditing Ex-Works, Port Delivery, Freight, CIF/CIP Values, and Customs Tariffs",
      "Interactive Responsibility Matrix color-coding 10 key supply chain risk and obligation handoffs"
    ],
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Incoterms 2020"],
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Incoterms 2020"],
    liveUrl: "https://mohammed905-stack.github.io/incoterms-trade-engine/",
    pdfViewerUrl: "/Incoterms_2020_Trade_Engine_Project_Delivery_Summary.pdf",
    githubUrl: "https://github.com/mohammed905-stack/incoterms-trade-engine",
    thumbnail: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
    badge: "Official ICC 2020",
    accentColor: "from-cyan-500 to-blue-600",
    themeGlow: "rgba(6, 182, 212, 0.2)",
    cardBgGradient: "from-cyan-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-cyan-400/60",
    projectContextType: "shipping",
    metricLabel: "Live • Production",
  },
  {
    id: "web-routine-tracker",
    title: "Daily Progress & Routine Tracker App",
    category: "Full-Stack Web App",
    tagline: "Interactive, responsive task and personal growth tracking application",
    description: "Interactive, responsive task and personal growth tracking application built with dynamic state handling.",
    highlights: [
      "Responsive task and personal growth tracking",
      "Interactive state handling and real-time updates",
      "Secured client runtime deployment"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Local State"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Local State"],
    liveUrl: "https://smart-diet-glow.lovable.app",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80",
    badge: "Public Preview",
    accentColor: "from-blue-500 to-cyan-600",
    themeGlow: "rgba(59, 130, 246, 0.2)",
    cardBgGradient: "from-blue-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-blue-400/60",
    projectContextType: "workflow",
    metricLabel: "Public Preview",
  }
];

// -----------------------------------------------------------------------
// 3. CERTIFICATIONS DATA
// -----------------------------------------------------------------------
// 💡 TO ADD A NEW CERTIFICATION OR COURSE IN THE FUTURE:
// Copy and paste this template into the array below:
// {
//   id: "cert-new-course-id",
//   title: "Course or Certification Name",
//   issuer: "Issuing Organization (e.g., Coursera, Udemy, Institute)",
//   year: "2025",
//   skillsLearned: ["Skill 1", "Skill 2", "Skill 3"],
//   summary: "Short summary of what you mastered in this course.",
//   badgeType: "ai", // or "exim" | "logistics" | "excel"
//   verifiedLink: "https://link-to-certificate-or-drive.com", // Optional: paste link here for instant proof button!
// },
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-exim",
    title: "Post Diploma in EXIM Logistics Supply Chain Management",
    issuer: "ETTI (Export Training & Trade Institute)",
    year: "2024 - 2025",
    skillsLearned: ["EXIM Documentation", "Customs Clearance", "Incoterms 2020", "Freight Forwarding", "Port Operations"],
    summary: "Comprehensive professional qualification covering international trade documentation, customs clearance procedures, multi-modal transport contracts, and supply chain risk mitigation.",
    badgeType: "exim",
  },
  {
    id: "cert-ai-leaders",
    title: "AI for Business Leaders Bootcamp",
    issuer: "Outskill",
    year: "2024",
    skillsLearned: ["Generative AI Strategy", "Workflow Optimization", "AI Agent Deployment", "Enterprise Automation"],
    summary: "Intensive executive-level bootcamp focusing on evaluating high-ROI enterprise AI opportunities, deploying agentic workflows, and leveraging LLMs to optimize business processes.",
    badgeType: "ai",
  },
  {
    id: "cert-logistics-ocean",
    title: "Logistics and Ocean Shipping",
    issuer: "Udemy",
    year: "2024",
    skillsLearned: ["Ocean Freight Dynamics", "Container Logistics", "Bill of Lading", "Chartering Principles"],
    summary: "Practical training in maritime logistics, global container shipping routes, liner vs tramp operations, freight pricing structures, and port turnaround times.",
    badgeType: "logistics",
  },
  {
    id: "cert-ai-excel",
    title: "AI-Powered Excel Micro Course",
    issuer: "Skill Course",
    year: "2024",
    skillsLearned: ["Advanced Excel Formulas", "AI Formula Generators", "Automated Dashboards", "Data Modeling"],
    summary: "Advanced analytical training combining Microsoft Excel modeling with AI capabilities for rapid inventory reconciliations, trend forecasting, and operational dashboards.",
    badgeType: "excel",
  },
];

// -----------------------------------------------------------------------
// 4. TECHNICAL & OPERATIONAL SKILLS
// -----------------------------------------------------------------------
export const SKILLS_DATA = [
  {
    category: "Core Technical Skills",
    description: "Hands-on tools, AI frameworks, and automation pipelines",
    skills: [
      { name: "Prompt Engineering", level: 94, note: "Advanced system prompts, few-shot conditioning, chain-of-thought, and structured JSON outputs", icon: "Sparkles" },
      { name: "Automations & n8n", level: 91, note: "Autonomous workflow pipelines, webhook triggers, API integrations, and background automations", icon: "Workflow" },
      { name: "AI Image & Video Generation", level: 90, note: "High-fidelity visual & video synthesis with Midjourney, Flux, Runway, and AI video generators", icon: "Video" },
      { name: "Web & App Building (Ycode)", level: 90, note: "Visual web and app development using Ycode with responsive UI design and live deployed projects", icon: "Globe" },
      { name: "Advanced MS Skills & Excel", level: 92, note: "XLOOKUP, Dynamic Arrays, Pivot Tables, AI-powered spreadsheet models, and executive reports", icon: "Table" },
      { name: "EXIM Documentation", level: 88, note: "Commercial Invoices, Bills of Lading, Customs Clearance, Shipping Bills, and Incoterms 2020", icon: "FileText" },
    ]
  },
  {
    category: "Operational & Domain Competencies",
    description: "Bridging digital intelligence with physical freight and commerce",
    skills: [
      { name: "Order Processing & Fulfillment", level: 94, note: "End-to-end dispatch, courier coordination, returns triage & real-time tracking", icon: "PackageCheck" },
      { name: "Ocean Shipping & Logistics", level: 86, note: "Container allocation, ocean freight forwarding, port customs workflows", icon: "Ship" },
      { name: "Inventory Optimization", level: 87, note: "Stock monitoring, replenishment forecasting, supplier communication", icon: "Boxes" },
      { name: "AI Agent Orchestration", level: 90, note: "Autonomous agents, Gemini Flash integrations, multimodal pipelines, and conversational bots", icon: "Bot" },
    ]
  }
];

export interface DeploymentProficiency {
  title: string;
  category: string;
  description: string;
  badge: string;
  iconName: string;
}

export const DEPLOYMENT_PROFICIENCIES: DeploymentProficiency[] = [
  {
    title: "Prompt Engineering",
    category: "AI Cognition",
    description: "Multi-turn persona conditioning, system prompts, chain-of-thought, and zero-defect JSON structuring.",
    badge: "LLMs & Agents",
    iconName: "Sparkles"
  },
  {
    title: "AI Image Generation",
    category: "Generative Media",
    description: "High-resolution creative generation with Midjourney, Flux, Stable Diffusion, and Gemini Imagen.",
    badge: "Visual Assets",
    iconName: "Image"
  },
  {
    title: "AI Video Generation",
    category: "Generative Media",
    description: "Motion synthesis, dynamic text-to-video, camera control, and automated reels via Runway, Pika & AI video tools.",
    badge: "Video AI",
    iconName: "Video"
  },
  {
    title: "Web Development (Ycode)",
    category: "Visual Web Dev",
    description: "Building responsive, modern, production web experiences visually with Ycode, clean UI layouts, and live project deployments.",
    badge: "Ycode Built",
    iconName: "Globe"
  },
  {
    title: "App Development (Ycode)",
    category: "Visual App Dev",
    description: "Creating interactive web applications, dynamic CMS-backed structures, and mobile-responsive products with Ycode.",
    badge: "Ycode Powered",
    iconName: "Smartphone"
  },
  {
    title: "Autonomous Automations",
    category: "Workflow Systems",
    description: "End-to-end n8n pipelines, webhook triggers, API syncs, Zapier flows, and scheduled background jobs.",
    badge: "n8n & APIs",
    iconName: "Workflow"
  },
  {
    title: "Advanced MS Skills & Excel",
    category: "Data Modeling",
    description: "XLOOKUP, Nested Formulas, Pivot Tables, AI-assisted spreadsheet models, and PowerPoint dashboards.",
    badge: "Office Suite",
    iconName: "FileSpreadsheet"
  },
  {
    title: "EXIM Documentations",
    category: "Global Logistics",
    description: "Commercial Invoices, Bills of Lading, Packing Lists, Customs Clearance, and Incoterms 2020 compliance.",
    badge: "Trade Ops",
    iconName: "FileText"
  }
];

// -----------------------------------------------------------------------
// 5. EXPERIENCE & TIMELINE DATA
// -----------------------------------------------------------------------
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "ecommerce-seller",
    role: "Independent E-Commerce Seller",
    company: "Direct-to-Consumer / Marketplace Operations",
    period: "2024 – 2025",
    type: "Entrepreneurial",
    summary: "Managed an independent online business handling product listing, order processing, customer communication, and courier fulfillment.",
    achievements: [
      "Streamlined end-to-end order processing, decreasing average dispatch turnaround time through structured tracking sheets.",
      "Oversaw daily inventory reconciliations, vendor replenishment orders, and return management with minimal stockout rates.",
      "Implemented automated customer notification scripts and standardized packing workflows to maintain positive delivery ratings."
    ],
    skills: ["Order Fulfillment", "Inventory Management", "Logistics Tracking", "Customer Support", "MS Excel"],
  },
  {
    id: "family-decor-assistant",
    role: "Sales & Support Assistant (6-Month Stint)",
    company: "Family Home Decor Business",
    period: "2023 – 2024",
    type: "Professional",
    summary: "Worked directly on customer support, on-floor retail sales, vendor deliveries, and freight coordination in a dynamic family enterprise.",
    achievements: [
      "Assisted walk-in and remote B2B buyers with order customization, quotation preparation, and delivery timelines.",
      "Coordinated with local logistics partners and freight couriers for scheduled consignments across regional distribution points.",
      "Resolved client inquiries and payment confirmations, ensuring seamless post-purchase communication and customer retention."
    ],
    skills: ["Client Relationship", "Freight Coordination", "Sales Operations", "Vendor Communication"],
  },
  {
    id: "bcom-education",
    role: "Bachelor of Commerce (B.Com) – Final Year",
    company: "Lala Lajpat Rai College",
    period: "2024 – Present",
    type: "Education",
    summary: "Specializing in commerce, accounting, business economics, and trade operations. Actively applying classroom theoretical concepts as an AI Generalist.",
    achievements: [
      "Pursuing honors-level commerce coursework with strong performance in business finance and management.",
      "Proactively completed additional international trade and AI certifications concurrent with university curriculum.",
      "Active participant in collegiate trade, entrepreneurship, and technical development workshops."
    ],
    skills: ["Business Economics", "Commercial Accounting", "Trade Law", "Business Strategy"],
  }
];
