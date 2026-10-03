import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Github,
  Layers,
  Download,
  Calculator,
  CheckCircle2,
  Mic,
  X,
  Info,
  BookOpen
} from 'lucide-react';

export interface AICapstoneProject {
  id: string;
  title: string;
  category: string;
  stack: string[];
  tech?: string[];
  overview: string;
  description?: string;
  detailedDescription?: string;
  executionDetails: string;
  executionIndicator?: string;
  thumbnail: string;
  badge: string;
  accentColor: string;
  themeGlow: string;
  cardBgGradient: string;
  cardBorderAccent: string;
  contextType: 'chatbot' | 'creator' | 'docai' | 'workflow' | 'telegram' | 'shipping' | 'compliance' | 'rag' | 'voice';
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  tertiaryButtonText?: string;
  tertiaryButtonUrl?: string;
  liveUrl?: string;
  pdfViewerUrl?: string;
  githubUrl?: string;
  features?: string[];
  devNote?: string;
  status?: string;
  assessmentContext?: string;
  isAssessment?: boolean;
}

export interface WebDevProject {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  pdfUrl?: string;
  category: string;
  techTags: string[];
  thumbnail: string;
  statusBadge: string;
  previewNote: string;
}

export const AI_CAPSTONE_PROJECTS: AICapstoneProject[] = [
  {
    id: "express-docs-rag-assistant",
    title: "Express Docs — AI Technical Documentation Assistant",
    category: "Agentic AI / RAG",
    badge: "Assessment • LangGraph RAG",
    executionIndicator: "Runs Locally • 78 Tests Passing",
    executionDetails: "FastAPI + LangGraph workflow running locally with FAISS vector store",
    stack: ["Python", "FastAPI", "LangGraph", "Gemini API", "FAISS", "SQLite", "Pydantic", "HTML", "CSS", "JavaScript"],
    tech: ["Python", "FastAPI", "LangGraph", "Gemini API", "FAISS", "SQLite", "Pydantic", "HTML", "CSS", "JavaScript"],
    overview: "An AI assistant that searches technical documentation and produces answers with supporting sources. Built with AI-assisted development for the Express Analytics Data Science Intern assessment.",
    description: "The application indexes five official FastAPI guides. For each question, it retrieves relevant passages, checks their usefulness, and uses Gemini to generate a cited answer. LangGraph coordinates the workflow, including a bounded search retry and fallback when supporting information is insufficient.",
    detailedDescription: "The application indexes five official FastAPI guides. For each question, it retrieves relevant passages, checks their usefulness, and uses Gemini to generate a cited answer. LangGraph coordinates the workflow, including a bounded search retry and fallback when supporting information is insufficient.",
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
    devNote: "Developed with heavy AI assistance, followed by local testing and debugging.",
    status: "Completed assessment project; runs locally.",
    assessmentContext: "Express Analytics Data Science Intern assessment",
    githubUrl: "https://github.com/Mohammed905-stack/express-analytics-rag-assistant",
    primaryButtonText: "View Source & Setup ↗",
    primaryButtonUrl: "https://github.com/Mohammed905-stack/express-analytics-rag-assistant",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-emerald-500 to-teal-600",
    themeGlow: "rgba(16, 185, 129, 0.2)",
    cardBgGradient: "from-emerald-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-emerald-400/60",
    contextType: "rag",
    isAssessment: true
  },
  {
    id: "aria-ai-voice-customer-support",
    title: "Aria — AI Voice Customer Support Assistant",
    category: "Voice AI / Customer Support",
    badge: "Assessment • Web Speech API",
    executionIndicator: "Assessment Prototype • Local",
    executionDetails: "Node.js/Express backend with Web Speech API and mock order lookup",
    stack: ["JavaScript", "Node.js", "Express.js", "Gemini API", "Web Speech API", "HTML", "CSS", "REST APIs"],
    tech: ["JavaScript", "Node.js", "Express.js", "Gemini API", "Web Speech API", "HTML", "CSS", "REST APIs"],
    overview: "A browser-based voice assistant for the fictional Aura Skincare brand, handling sample order enquiries and policy questions with spoken responses.",
    description: "Built with AI-assisted development for the Datastraw AI + Tech Intern assessment. Aria combines browser speech recognition, a Node.js/Express backend, mock order lookup and explicit policy rules. Gemini supports general brand conversations. The interface provides spoken replies, a conversation transcript and a structured post-call outcome.",
    detailedDescription: "Built with AI-assisted development for the Datastraw AI + Tech Intern assessment. Aria combines browser speech recognition, a Node.js/Express backend, mock order lookup and explicit policy rules. Gemini supports general brand conversations. The interface provides spoken replies, a conversation transcript and a structured post-call outcome.",
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
    devNote: "Developed with heavy AI assistance and tested through sample customer-support conversations.",
    status: "Assessment prototype using fictional customer and order data.",
    assessmentContext: "Datastraw AI + Tech Intern assessment",
    githubUrl: "https://github.com/Mohammed905-stack/aura-skincare-ai-voice-agent",
    primaryButtonText: "View Source ↗",
    primaryButtonUrl: "https://github.com/Mohammed905-stack/aura-skincare-ai-voice-agent",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-amber-500 to-violet-600",
    themeGlow: "rgba(245, 158, 11, 0.2)",
    cardBgGradient: "from-amber-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-amber-400/60",
    contextType: "voice",
    isAssessment: true
  },
  {
    id: "ai-personal-assistant-chatbot",
    title: "AI Personal Assistant",
    category: "GENERATIVE AI / WORKFLOW AUTOMATION",
    badge: "Streamlit Cloud • Production",
    stack: ["Python", "Streamlit", "Automation", "Assistant"],
    tech: ["Python", "Streamlit", "Automation", "Assistant"],
    overview: "A productivity and workflow automation assistant built as an interactive web interface.",
    description: "A productivity and workflow automation assistant built as an interactive web interface.",
    executionDetails: "Streamlit cloud engine hosted at ai-personal-assistant-464q23nsnxufete6hooju5.streamlit.app",
    liveUrl: "https://ai-personal-assistant-464q23nsnxufete6hooju5.streamlit.app/",
    pdfViewerUrl: "/Project_1_AI_Personal_Assistant_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-personal-assistant",
    primaryButtonText: "Launch Live App ↗",
    primaryButtonUrl: "https://ai-personal-assistant-464q23nsnxufete6hooju5.streamlit.app/",
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
    title: "AI Content Creator",
    category: "GENERATIVE AI / CONTENT AUTOMATION",
    badge: "Streamlit Cloud • Production",
    stack: ["Python", "Streamlit", "Gemini API", "AI Content Generation"],
    tech: ["Python", "Streamlit", "Gemini API", "AI Content Generation"],
    overview: "An AI-powered content generation and optimization utility built with Python and Streamlit.",
    description: "An AI-powered content generation and optimization utility built with Python and Streamlit.",
    executionDetails: "Streamlit cloud engine hosted at ai-content-creator-7qzen2ftgmrssp4jgf2rzj.streamlit.app",
    liveUrl: "https://ai-content-creator-7qzen2ftgmrssp4jgf2rzj.streamlit.app/",
    pdfViewerUrl: "/Project_2_AI_Content_Creator_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-content-creator",
    primaryButtonText: "Launch Live App ↗",
    primaryButtonUrl: "https://ai-content-creator-7qzen2ftgmrssp4jgf2rzj.streamlit.app/",
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
    title: "AI PDF Assistant",
    category: "DOCUMENT AI / RETRIEVAL & PROCESSING",
    badge: "Streamlit Cloud • Production",
    stack: ["Python", "Streamlit", "RAG", "Document AI"],
    tech: ["Python", "Streamlit", "RAG", "Document AI"],
    overview: "An intelligent document querying and RAG assistant for analyzing PDFs and answering questions with context.",
    description: "An intelligent document querying and RAG assistant for analyzing PDFs and answering questions with context.",
    executionDetails: "Streamlit cloud engine hosted at ai-pdf-assistant-5u7wxvr9pxffmxvqfpgfw8.streamlit.app",
    liveUrl: "https://ai-pdf-assistant-5u7wxvr9pxffmxvqfpgfw8.streamlit.app/",
    pdfViewerUrl: "/Project_3_AI_PDF_Assistant_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-pdf-assistant",
    primaryButtonText: "Launch Live App ↗",
    primaryButtonUrl: "https://ai-pdf-assistant-5u7wxvr9pxffmxvqfpgfw8.streamlit.app/",
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
    tech: ["Python", "Streamlit", "Supply Chain", "Logistics Compliance"],
    stack: ["Python", "Streamlit", "Supply Chain", "Logistics Compliance"],
    description: "Autonomous Shipping Compliance Engine for freight forwarders and logistics teams to audit Ocean Bills of Lading, commercial invoices, and packing lists for discrepancies.",
    overview: "Autonomous Shipping Compliance Engine for freight forwarders and logistics teams to audit Ocean Bills of Lading, commercial invoices, and packing lists for discrepancies.",
    executionDetails: "Streamlit cloud engine auditing maritime trade documents & UCP 600 rules",
    liveUrl: "https://kaderji-cargo-auditor.streamlit.app/",
    pdfViewerUrl: "/ai-shipping-bl-auditor_Mohammed_Kaderji_Report.pdf",
    githubUrl: "https://github.com/Mohammed905-stack/ai-shipping-bl-auditor",
    primaryButtonText: "Launch Live App ↗",
    primaryButtonUrl: "https://kaderji-cargo-auditor.streamlit.app/",
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
  },
  {
    id: "ai-customs-hs-code-auditor",
    title: "AI-Powered Customs & HS Code Classification Auditor",
    category: "TRADE COMPLIANCE & n8n AI AGENT",
    badge: "n8n Local • Gemini 3.6 Flash",
    stack: ["n8n (Local Instance)", "n8n AI Agent Node", "Google Gemini API", "Gemini 3.6 Flash", "Modular Trade Prompting"],
    tech: ["n8n (Local Instance)", "n8n AI Agent Node", "Google Gemini API", "Gemini 3.6 Flash", "Modular Trade Prompting"],
    overview: "Automated local workflow built in n8n utilizing Google Gemini AI Agent to streamline international trade compliance, classify raw product descriptions into Harmonized System (HS) chapters, and flag regulatory watch-outs.",
    description: "Automated local workflow built in n8n utilizing Google Gemini AI Agent to streamline international trade compliance, classify raw product descriptions into Harmonized System (HS) chapters, and flag regulatory watch-outs.",
    executionDetails: "n8n local instance triggered via raw product payload & Gemini Agent node",
    primaryButtonText: "📄 Read Case Study PDF ↗",
    primaryButtonUrl: "/hs_code_compliance_project_documentation.pdf",
    secondaryButtonText: "View GitHub Repository ↗",
    secondaryButtonUrl: "https://github.com/Mohammed905-stack/AI-Customs-HS-Code-Auditor-",
    githubUrl: "https://github.com/Mohammed905-stack/AI-Customs-HS-Code-Auditor-",
    pdfViewerUrl: "/hs_code_compliance_project_documentation.pdf",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-amber-500 to-orange-600",
    themeGlow: "rgba(245, 158, 11, 0.2)",
    cardBgGradient: "from-amber-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-amber-400/60",
    contextType: "compliance"
  }
];

export const WEB_DEV_PROJECTS: WebDevProject[] = [
  {
    id: "web-incoterms-trade-engine",
    title: "Incoterms 2020 & Global Trade Cost Engine",
    description: "A comprehensive React & Vite web application built to calculate landed costs, navigate international trade risk matrices under official ICC 2020 standards, and audit global supply chain compliance.",
    liveUrl: "https://mohammed905-stack.github.io/incoterms-trade-engine/",
    githubUrl: "https://github.com/mohammed905-stack/incoterms-trade-engine",
    pdfUrl: "/Incoterms_2020_Trade_Engine_Project_Delivery_Summary.pdf",
    category: "EXIM Trade & Cost Engine",
    techTags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Incoterms 2020"],
    thumbnail: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80",
    statusBadge: "Official ICC 2020",
    previewNote: "Production Web App • Live GitHub Pages"
  },
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

// --- Tech Stack Icon Badges Components ---
const ViteIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#bd34fe] shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.5 4.5l-9.8 17.5a1 1 0 01-1.74 0L2.5 8.7a1 1 0 01.88-1.5h4.12l2.6 6 3.4-10.7a1 1 0 01.95-.7h6.05a1 1 0 011 1.7z" />
  </svg>
);
const N8nIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#ff6d5a] shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="3" />
    <circle cx="19" cy="7" r="3" />
    <circle cx="19" cy="17" r="3" />
    <path d="M7.5 10.8l8.5-3.6M7.5 13.2l8.5 3.6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const GeminiIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
      className="fill-cyan-400"
    />
    <path
      d="M12 5C12 8.86599 8.86599 12 5 12C8.86599 12 12 15.134 12 19C12 15.134 15.134 12 19 12C15.134 12 12 8.86599 12 5Z"
      className="fill-purple-400 opacity-90"
    />
  </svg>
);

const ReactIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#00d8ff] shrink-0" }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const PythonIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#38bdf8] shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.2h5.1v.7H4.3c-2 0-3.3 1.3-3.3 3.6 0 2.2 1.4 3.7 3.3 3.7h1.7v-2.3c0-1.8 1.4-3.1 3.2-3.1h5.1c1.5 0 2.6-1.1 2.6-2.6V5.3c0-1.9-1.9-3.3-5-3.3zm-1.8 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM12.1 22c3.1 0 5-1.4 5-3.3v-2.2h-5.1v-.7h7.7c2 0 3.3-1.3 3.3-3.6 0-2.2-1.4-3.7-3.3-3.7h-1.7v2.3c0 1.8-1.4 3.1-3.2 3.1H9.7c-1.5 0-2.6 1.1-2.6 2.6v2.2c0 1.9 1.9 3.3 5 3.3zm1.8-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
  </svg>
);

const StreamlitIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#ff4b4b] shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 4L22 14.5H11L16.5 4ZM7.5 9.5L13 20H2L7.5 9.5Z" />
  </svg>
);

const LangChainIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-emerald-400 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const OpenAIIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-teal-400 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2a10 10 0 0 0-7.07 17.07l1.41-1.41A8 8 0 1 1 12 4V2z" />
    <path d="M12 22a10 10 0 0 0 7.07-17.07l-1.41 1.41A8 8 0 1 1 12 20v2z" />
  </svg>
);

const TelegramIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#229ED9] shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#0A66C2] shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GoogleSheetsIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#0F9D58] shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14H6v-2h4v2zm0-4H6v-2h4v2zm0-4H6V7h4v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z" />
  </svg>
);

const TypeScriptIcon: React.FC = () => (
  <span className="w-3 h-3 shrink-0 rounded-[2px] bg-[#3178C6] text-white font-bold text-[7px] flex items-center justify-center font-mono leading-none">
    TS
  </span>
);

const TailwindIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-[#38bdf8] shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

export const getTechStackBadge = (tech: string) => {
  const lower = tech.toLowerCase();

  if (lower.includes('n8n')) {
    return {
      icon: <N8nIcon />,
      border: 'border-rose-500/30 hover:border-rose-500/60',
      text: 'text-rose-200',
      bg: 'bg-rose-950/20'
    };
  }
  if (lower.includes('gemini')) {
    return {
      icon: <GeminiIcon />,
      border: 'border-blue-500/30 hover:border-blue-500/60',
      text: 'text-blue-200',
      bg: 'bg-blue-950/20'
    };
  }
  if (lower.includes('react')) {
    return {
      icon: <ReactIcon />,
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      text: 'text-cyan-200',
      bg: 'bg-cyan-950/20'
    };
  }
  if (lower.includes('python')) {
    return {
      icon: <PythonIcon />,
      border: 'border-sky-500/30 hover:border-sky-500/60',
      text: 'text-sky-200',
      bg: 'bg-sky-950/20'
    };
  }
  if (lower.includes('streamlit')) {
    return {
      icon: <StreamlitIcon />,
      border: 'border-red-500/30 hover:border-red-500/60',
      text: 'text-red-200',
      bg: 'bg-red-950/20'
    };
  }
  if (lower.includes('langchain')) {
    return {
      icon: <LangChainIcon />,
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      text: 'text-emerald-200',
      bg: 'bg-emerald-950/20'
    };
  }
  if (lower.includes('openai')) {
    return {
      icon: <OpenAIIcon />,
      border: 'border-teal-500/30 hover:border-teal-500/60',
      text: 'text-teal-200',
      bg: 'bg-teal-950/20'
    };
  }
  if (lower.includes('telegram') || lower.includes('roboclicks')) {
    return {
      icon: <TelegramIcon />,
      border: 'border-sky-500/30 hover:border-sky-500/60',
      text: 'text-sky-200',
      bg: 'bg-sky-950/20'
    };
  }
  if (lower.includes('linkedin')) {
    return {
      icon: <LinkedInIcon />,
      border: 'border-blue-500/30 hover:border-blue-500/60',
      text: 'text-blue-200',
      bg: 'bg-blue-950/20'
    };
  }
  if (lower.includes('sheet') || lower.includes('sheets')) {
    return {
      icon: <GoogleSheetsIcon />,
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      text: 'text-emerald-200',
      bg: 'bg-emerald-950/20'
    };
  }
  if (lower.includes('typescript') || lower.includes('ts')) {
    return {
      icon: <TypeScriptIcon />,
      border: 'border-blue-500/30 hover:border-blue-500/60',
      text: 'text-blue-200',
      bg: 'bg-blue-950/20'
    };
  }
  if (lower.includes('tailwind')) {
    return {
      icon: <TailwindIcon />,
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      text: 'text-cyan-200',
      bg: 'bg-cyan-950/20'
    };
  }
  if (lower.includes('vite')) {
    return {
      icon: <ViteIcon />,
      border: 'border-purple-500/30 hover:border-purple-500/60',
      text: 'text-purple-200',
      bg: 'bg-purple-950/20'
    };
  }
  if (lower.includes('incoterm') || lower.includes('trade')) {
    return {
      icon: <Globe className="w-3 h-3 shrink-0 text-cyan-400" />,
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      text: 'text-cyan-200',
      bg: 'bg-cyan-950/20'
    };
  }
  if (lower.includes('pdf')) {
    return {
      icon: <FileText className="w-3 h-3 shrink-0 text-rose-400" />,
      border: 'border-rose-500/30 hover:border-rose-500/60',
      text: 'text-rose-200',
      bg: 'bg-rose-950/20'
    };
  }
  if (lower.includes('memory') || lower.includes('buffer')) {
    return {
      icon: <Cpu className="w-3 h-3 shrink-0 text-purple-400" />,
      border: 'border-purple-500/30 hover:border-purple-500/60',
      text: 'text-purple-200',
      bg: 'bg-purple-950/20'
    };
  }
  if (lower.includes('fastapi')) {
    return {
      icon: <Cpu className="w-3 h-3 shrink-0 text-emerald-400" />,
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      text: 'text-emerald-200',
      bg: 'bg-emerald-950/20'
    };
  }
  if (lower.includes('langgraph')) {
    return {
      icon: <Workflow className="w-3 h-3 shrink-0 text-cyan-400" />,
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      text: 'text-cyan-200',
      bg: 'bg-cyan-950/20'
    };
  }
  if (lower.includes('faiss')) {
    return {
      icon: <FileSearch className="w-3 h-3 shrink-0 text-sky-400" />,
      border: 'border-sky-500/30 hover:border-sky-500/60',
      text: 'text-sky-200',
      bg: 'bg-sky-950/20'
    };
  }
  if (lower.includes('sqlite') || lower.includes('sql')) {
    return {
      icon: <Layers className="w-3 h-3 shrink-0 text-blue-400" />,
      border: 'border-blue-500/30 hover:border-blue-500/60',
      text: 'text-blue-200',
      bg: 'bg-blue-950/20'
    };
  }
  if (lower.includes('pydantic')) {
    return {
      icon: <ShieldCheck className="w-3 h-3 shrink-0 text-rose-400" />,
      border: 'border-rose-500/30 hover:border-rose-500/60',
      text: 'text-rose-200',
      bg: 'bg-rose-950/20'
    };
  }
  if (lower.includes('rag')) {
    return {
      icon: <BookOpen className="w-3 h-3 shrink-0 text-cyan-400" />,
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      text: 'text-cyan-200',
      bg: 'bg-cyan-950/20'
    };
  }
  if (lower.includes('document')) {
    return {
      icon: <FileSearch className="w-3 h-3 shrink-0 text-emerald-400" />,
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      text: 'text-emerald-200',
      bg: 'bg-emerald-950/20'
    };
  }
  if (lower.includes('content') || lower.includes('generation')) {
    return {
      icon: <Sparkles className="w-3 h-3 shrink-0 text-purple-400" />,
      border: 'border-purple-500/30 hover:border-purple-500/60',
      text: 'text-purple-200',
      bg: 'bg-purple-950/20'
    };
  }
  if (lower.includes('automation')) {
    return {
      icon: <Workflow className="w-3 h-3 shrink-0 text-indigo-400" />,
      border: 'border-indigo-500/30 hover:border-indigo-500/60',
      text: 'text-indigo-200',
      bg: 'bg-indigo-950/20'
    };
  }
  if (lower.includes('assistant')) {
    return {
      icon: <Bot className="w-3 h-3 shrink-0 text-cyan-400" />,
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      text: 'text-cyan-200',
      bg: 'bg-cyan-950/20'
    };
  }
  if (lower.includes('supply chain') || lower.includes('shipping') || lower.includes('logistics')) {
    return {
      icon: <Ship className="w-3 h-3 shrink-0 text-teal-400" />,
      border: 'border-teal-500/30 hover:border-teal-500/60',
      text: 'text-teal-200',
      bg: 'bg-teal-950/20'
    };
  }
  if (lower.includes('speech')) {
    return {
      icon: <Mic className="w-3 h-3 shrink-0 text-amber-400" />,
      border: 'border-amber-500/30 hover:border-amber-500/60',
      text: 'text-amber-200',
      bg: 'bg-amber-950/20'
    };
  }
  if (lower.includes('express')) {
    return {
      icon: <Cpu className="w-3 h-3 shrink-0 text-slate-300" />,
      border: 'border-slate-500/30 hover:border-slate-500/60',
      text: 'text-slate-200',
      bg: 'bg-slate-900/40'
    };
  }
  if (lower.includes('node')) {
    return {
      icon: <Cpu className="w-3 h-3 shrink-0 text-emerald-400" />,
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      text: 'text-emerald-200',
      bg: 'bg-emerald-950/20'
    };
  }
  if (lower.includes('rest') || lower.includes('api')) {
    return {
      icon: <Globe className="w-3 h-3 shrink-0 text-sky-400" />,
      border: 'border-sky-500/30 hover:border-sky-500/60',
      text: 'text-sky-200',
      bg: 'bg-sky-950/20'
    };
  }
  if (lower.includes('javascript') || lower.includes('js')) {
    return {
      icon: <Cpu className="w-3 h-3 shrink-0 text-amber-300" />,
      border: 'border-amber-500/30 hover:border-amber-500/60',
      text: 'text-amber-200',
      bg: 'bg-amber-950/20'
    };
  }
  if (lower.includes('html') || lower.includes('css')) {
    return {
      icon: <Layers className="w-3 h-3 shrink-0 text-orange-400" />,
      border: 'border-orange-500/30 hover:border-orange-500/60',
      text: 'text-orange-200',
      bg: 'bg-orange-950/20'
    };
  }
  if (lower.includes('prompt') || lower.includes('compliance')) {
    return {
      icon: <ShieldCheck className="w-3 h-3 shrink-0 text-amber-400" />,
      border: 'border-amber-500/30 hover:border-amber-500/60',
      text: 'text-amber-200',
      bg: 'bg-amber-950/20'
    };
  }
  return {
    icon: <Cpu className="w-3 h-3 shrink-0 text-slate-400" />,
    border: 'border-slate-700/60 hover:border-slate-600',
    text: 'text-slate-300',
    bg: 'bg-slate-800/80'
  };
};

export type ProjectFilterType = 'All' | 'AI Apps' | 'n8n Automations';

export const ProjectsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterType>('All');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<AICapstoneProject | null>(null);

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProjectForModal(null);
      }
    };
    if (selectedProjectForModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectForModal]);

  const isN8nAutomation = (p: AICapstoneProject) =>
    p.id === "autonomous-linkedin-content-pipeline" ||
    p.id === "autonomous-telegram-customer-assistant" ||
    p.id === "ai-customs-hs-code-auditor" ||
    p.contextType === "workflow" ||
    p.contextType === "telegram" ||
    p.contextType === "compliance" ||
    p.stack.some(s => s.toLowerCase().includes("n8n"));

  const isAIApp = (p: AICapstoneProject) => !isN8nAutomation(p);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'AI Apps') {
      return AI_CAPSTONE_PROJECTS.filter(isAIApp);
    }
    if (activeFilter === 'n8n Automations') {
      return AI_CAPSTONE_PROJECTS.filter(isN8nAutomation);
    }
    return AI_CAPSTONE_PROJECTS;
  }, [activeFilter]);

  const counts = useMemo(() => ({
    all: AI_CAPSTONE_PROJECTS.length,
    aiApps: AI_CAPSTONE_PROJECTS.filter(isAIApp).length,
    n8n: AI_CAPSTONE_PROJECTS.filter(isN8nAutomation).length,
  }), []);

  const filterTabs = [
    {
      id: 'All' as ProjectFilterType,
      label: 'All',
      count: counts.all,
      icon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 'AI Apps' as ProjectFilterType,
      label: 'AI Apps',
      count: counts.aiApps,
      icon: <Bot className="w-3.5 h-3.5" />
    },
    {
      id: 'n8n Automations' as ProjectFilterType,
      label: 'n8n Automations',
      count: counts.n8n,
      icon: <Workflow className="w-3.5 h-3.5" />
    }
  ];

  const renderContextIcon = (type: string) => {
    switch (type) {
      case 'chatbot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'creator':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'docai':
        return <FileSearch className="w-5 h-5 text-emerald-400" />;
      case 'rag':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'voice':
        return <Mic className="w-5 h-5 text-amber-400" />;
      case 'workflow':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'telegram':
        return <MessageSquare className="w-5 h-5 text-sky-400" />;
      case 'shipping':
        return <Ship className="w-5 h-5 text-teal-400" />;
      case 'compliance':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
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
          PART 1: AI & Automation Capstone Projects
          ========================================================================= */}
      <div className="relative z-10 mb-20">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Part 1 • AI & Automation Capstones ({AI_CAPSTONE_PROJECTS.length} Projects)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AI & Automation Capstones
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Production-grade generative AI services, autonomous n8n orchestration pipelines, and document intelligence systems. Direct links to live deployments and verified architecture reports.
          </p>
        </div>

        {/* Simple Filter Bar: 'All' | 'AI Apps' | 'n8n Automations' */}
        <div className="flex justify-center mb-10 relative z-10">
          <div 
            role="tablist" 
            aria-label="Filter projects by category"
            className="p-1 sm:p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-xl shadow-cyan-950/20 inline-flex items-center gap-1 sm:gap-2"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  id={`filter-${tab.id.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 interactive-element ${
                    isActive
                      ? 'text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab.icon}
                    <span>{tab.label}</span>
                  </span>
                  <span
                    className={`relative z-10 text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-slate-950/20 text-slate-950'
                        : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Capstone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28 }}
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
                    {project.executionIndicator || (project.executionDetails.includes('port') ? project.executionDetails.substring(project.executionDetails.indexOf('port')) : 'Pipeline Active')}
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

                  {/* Tech Stack Pills with Small Icon Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech, tIdx) => {
                      const badge = getTechStackBadge(tech);
                      return (
                        <span
                          key={tIdx}
                          className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border ${badge.bg} ${badge.border} ${badge.text} transition-colors shadow-2xs`}
                        >
                          {badge.icon}
                          <span>{tech}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Project Action Buttons: Standard HTML <a> tags only */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  {project.isAssessment ? (
                    <>
                      {/* Primary Button: View Source on GitHub */}
                      <a
                        href={project.primaryButtonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`source-btn-${project.id}`}
                        className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-all duration-200 group/btn interactive-element"
                      >
                        <Github className="w-4 h-4 text-slate-950" />
                        <span>{project.primaryButtonText}</span>
                      </a>

                      {/* Secondary Button: Architecture & Assessment Details (Modal Trigger) */}
                      <button
                        type="button"
                        onClick={() => setSelectedProjectForModal(project)}
                        id={`details-btn-${project.id}`}
                        className="w-full py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-200 group/subbtn interactive-element cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Architecture & Assessment Details</span>
                      </button>
                    </>
                  ) : project.id === "autonomous-linkedin-content-pipeline" ? (
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
                  ) : project.id === "ai-customs-hs-code-auditor" ? (
                    <>
                      <a
                        href="/hs_code_compliance_project_documentation.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`view-case-study-${project.id}`}
                        className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs flex items-center justify-center gap-1.5 hover:opacity-95 transition"
                      >
                        📄 Read Case Study PDF ↗
                      </a>
                      <a
                        href="https://github.com/Mohammed905-stack/AI-Customs-HS-Code-Auditor-"
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`view-github-${project.id}`}
                        className="w-full py-2 px-3 rounded-xl border border-cyan-500/40 text-cyan-300 font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-cyan-500/10 transition"
                      >
                        <Github className="w-3.5 h-3.5 text-cyan-300" />
                        <span>View GitHub Repository ↗</span>
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
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================================================
          PART 2: Web Development & Interactive Applications
          ========================================================================= */}
      <div className="pt-16 border-t border-slate-800/80 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>Part 2 • Web Development & Core Applications ({WEB_DEV_PROJECTS.length} Projects)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Web Development & Interactive Applications
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Primary full-stack development, international trade cost engines, and responsive client-side growth trackers. Directly linked to clean, live production deployments.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-slate-400 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Secured Public Preview Endpoints (No editors, prompt histories, or sensitive settings exposed)</span>
          </div>
        </div>

        {/* Web Dev Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 relative z-10 mb-20">
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
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
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
                    {webApp.techTags.map((tag, tIdx) => {
                      const badge = getTechStackBadge(tag);
                      return (
                        <span
                          key={tIdx}
                          className={`inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded border ${badge.bg} ${badge.border} ${badge.text} transition-colors`}
                        >
                          {badge.icon}
                          <span>{tag}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Secured Public Link & Privacy Note */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  {webApp.githubUrl || webApp.pdfUrl ? (
                    <div className="flex flex-col gap-2">
                      <a
                        href={webApp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`web-demo-${webApp.id}`}
                        className="w-full py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-blue-400/40 shadow-md shadow-blue-500/20 transition-all duration-200 flex items-center justify-center gap-1.5 group/link interactive-element"
                      >
                        <Play className="w-3.5 h-3.5 fill-white text-white" />
                        <span>Launch Live App ↗</span>
                      </a>

                      {webApp.githubUrl && (
                        <a
                          href={webApp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`web-github-${webApp.id}`}
                          className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-cyan-300 bg-slate-900/60 hover:bg-cyan-500/10 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-200 flex items-center justify-center gap-1.5 group/git interactive-element"
                        >
                          <Github className="w-3.5 h-3.5 text-cyan-300" />
                          <span>View GitHub Repository ↗</span>
                        </a>
                      )}

                      {webApp.pdfUrl && (
                        <a
                          href={webApp.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`web-pdf-${webApp.id}`}
                          className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-blue-400/60 transition-all duration-200 flex items-center justify-center gap-1.5 group/pdf interactive-element"
                        >
                          <FileText className="w-3.5 h-3.5 text-cyan-400" />
                          <span>View/Download Documentation PDF ↗</span>
                        </a>
                      )}
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Architecture & Details Modal */}
      <AnimatePresence>
        {selectedProjectForModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProjectForModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-slate-900 via-[#0B0F19] to-slate-950 border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProjectForModal(null)}
                aria-label="Close project details"
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-900 border border-cyan-500/40 text-cyan-300">
                  {renderContextIcon(selectedProjectForModal.contextType)}
                  {selectedProjectForModal.category}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {selectedProjectForModal.badge}
                </span>
              </div>

              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                {selectedProjectForModal.title}
              </h3>

              {/* Status / Assessment Context Banner */}
              <div className="mb-6 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {selectedProjectForModal.status && (
                    <div className="font-semibold text-emerald-300">
                      Status: {selectedProjectForModal.status}
                    </div>
                  )}
                  {selectedProjectForModal.assessmentContext && (
                    <div className="text-slate-400">
                      Assessment Context: {selectedProjectForModal.assessmentContext}
                    </div>
                  )}
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  Project Architecture & Detailed Description
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedProjectForModal.detailedDescription || selectedProjectForModal.overview}
                </p>
              </div>

              {/* Features List (if available) */}
              {selectedProjectForModal.features && selectedProjectForModal.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                    Key Features & Technical Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedProjectForModal.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Development & Testing Note (if available) */}
              {selectedProjectForModal.devNote && (
                <div className="mb-6 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                  <span className="font-bold text-slate-200 block mb-1">Development & Testing Note:</span>
                  <p className="text-slate-400 leading-relaxed">{selectedProjectForModal.devNote}</p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProjectForModal.stack.map((t, idx) => {
                    const badge = getTechStackBadge(t);
                    return (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border ${badge.bg} ${badge.border} ${badge.text}`}
                      >
                        {badge.icon}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                {selectedProjectForModal.githubUrl && (
                  <a
                    href={selectedProjectForModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-slate-950" />
                    <span>{selectedProjectForModal.primaryButtonText || "View Source on GitHub ↗"}</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProjectForModal(null)}
                  className="w-full sm:w-auto py-2.5 px-5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
