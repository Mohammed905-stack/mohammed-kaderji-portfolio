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
  category: 'AI Agents' | 'Automation Workflows' | 'Document Intelligence' | 'AI Web Apps';
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl: string;
  thumbnail: string;
  badge?: string;
  accentColor?: string;
  themeGlow?: string;
  cardBgGradient?: string;
  cardBorderAccent?: string;
  projectContextType?: 'chatbot' | 'creator' | 'docai' | 'workflow' | 'telegram';
  metricLabel?: string;
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
  headshotUrl: "https://i.postimg.cc/YCGPnX6d/profile-jpg.jpg",
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
    id: "ai-personal-assistant",
    title: "AI Personal Assistant",
    category: "AI Agents",
    tagline: "Autonomous intelligent companion built with Gemini Flash",
    description:
      "A fast, context-aware AI conversational assistant powered by Gemini 3.6 / 1.5 Flash. Handles multi-turn inquiries, task prioritization, and contextual recommendations with sub-second response times.",
    highlights: [
      "Gemini Flash model architecture with prompt tuning",
      "Real-time streaming responses & contextual memory",
      "Sleek conversational user interface"
    ],
    tags: ["Gemini Flash", "Prompt Engineering", "Lovable", "AI Assistant"],
    liveUrl: "https://lovable.dev/projects/bc102071-bd3e-40a9-978d-7c09b7947bfd",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    badge: "Gemini 3.6 Flash",
    accentColor: "from-cyan-500 to-blue-600",
    themeGlow: "rgba(6, 182, 212, 0.2)",
    cardBgGradient: "from-cyan-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-cyan-400/60",
    projectContextType: "chatbot",
    metricLabel: "< 800ms Latency • Streaming",
  },
  {
    id: "ai-content-creator",
    title: "AI Content Creator",
    category: "AI Web Apps",
    tagline: "Dynamic social copy generator & brand content engine",
    description:
      "An automated content ideation and copywriting platform designed to generate high-converting social media posts, headlines, and marketing hooks tailored to platform-specific algorithms.",
    highlights: [
      "Multi-platform format adapting (LinkedIn, X, Instagram)",
      "Configurable tone-of-voice and targeted audience dials",
      "One-click variation generator with clipboard integration"
    ],
    tags: ["Generative AI", "Social Copy", "Lovable", "AI UI/UX"],
    liveUrl: "https://lovable.dev/projects/bc102071-bd3e-40a9-978d-7c09b7947bfd",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    badge: "Copy Generator",
    accentColor: "from-purple-500 to-pink-600",
    themeGlow: "rgba(168, 85, 247, 0.2)",
    cardBgGradient: "from-purple-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-purple-400/60",
    projectContextType: "creator",
    metricLabel: "LinkedIn • X • Instagram",
  },
  {
    id: "ai-pdf-assistant",
    title: "AI PDF Assistant",
    category: "Document Intelligence",
    tagline: "Multilingual document intelligence & instant contract parser",
    description:
      "Intelligent document comprehension system designed to read, analyze, and synthesize lengthy commercial invoices, bill of lading documentation, and multi-page international trade contracts.",
    highlights: [
      "Multilingual translation & clause extraction",
      "Instant Q&A over complex logistics documentation",
      "Semantic indexing for rapid retrieval"
    ],
    tags: ["Document AI", "EXIM Docs", "Multilingual", "RAG / Embeddings"],
    liveUrl: "https://lovable.dev/projects/91b0f461-5f4c-45ac-92d4-cfa10632b013",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    badge: "Multilingual DocAI",
    accentColor: "from-emerald-500 to-teal-600",
    themeGlow: "rgba(16, 185, 129, 0.2)",
    cardBgGradient: "from-emerald-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-emerald-400/60",
    projectContextType: "docai",
    metricLabel: "Invoices • Bill of Lading • Contracts",
  },
  {
    id: "linkedin-post-automation",
    title: "LinkedIn Post Automation",
    category: "Automation Workflows",
    tagline: "Autonomous n8n & LangChain content orchestration pipeline",
    description:
      "End-to-end autonomous publishing and scheduling pipeline that synthesizes industry trend feeds, generates verified drafts via LangChain, and synchronizes scheduling through n8n webhooks.",
    highlights: [
      "n8n node orchestration with error-handling fallbacks",
      "LangChain prompt chaining & tone validation",
      "Zero-touch publishing cadence"
    ],
    tags: ["n8n Automation", "LangChain", "Webhooks", "AI Studio"],
    liveUrl: "https://ai.studio/apps/8a7747b1-3450-4632-b4a6-574ecbc272b7",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    badge: "n8n & LangChain",
    accentColor: "from-blue-600 to-indigo-600",
    themeGlow: "rgba(59, 130, 246, 0.2)",
    cardBgGradient: "from-blue-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-blue-400/60",
    projectContextType: "workflow",
    metricLabel: "Zero-Touch • n8n Webhooks",
  },
  {
    id: "telegram-customer-assistant",
    title: "Telegram Customer Assistant",
    category: "AI Agents",
    tagline: "24/7 intelligent routing & automated customer bot",
    description:
      "Always-on conversational bot deployed to Telegram for instant customer inquiry qualification, FAQ resolution, shipment order lookup, and seamless handoff to human support representatives.",
    highlights: [
      "24/7 autonomous query resolution and instant triage",
      "Webhook-driven state management & conversational memory",
      "Custom intent matching for rapid support dispatch"
    ],
    tags: ["Telegram Bot", "Customer Support", "Webhooks", "AI Studio"],
    liveUrl: "https://ai.studio/apps/7deb9174-cf6e-42f2-9951-ec06788307a2",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    badge: "24/7 Routing Bot",
    accentColor: "from-sky-400 to-blue-700",
    themeGlow: "rgba(14, 165, 233, 0.2)",
    cardBgGradient: "from-sky-950/30 via-[#0B0F19] to-slate-950",
    cardBorderAccent: "hover:border-sky-400/60",
    projectContextType: "telegram",
    metricLabel: "Instant Triage • 24/7 Availability",
  },
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
