import React from 'react';
import { 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  GraduationCap, 
  Award, 
  Wrench, 
  Briefcase, 
  Target,
  ExternalLink,
  Printer,
  Ship,
  Sparkles,
  Languages,
  CheckCircle2
} from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-24">
      {/* Background Cyber Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4 shadow-sm shadow-cyan-500/10">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-wide uppercase">Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Vitae</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Academic foundations, certifications, and operational experience.
          </p>
        </div>

        {/* Main Resume Container */}
        <div className="bg-[#0e1626] border border-cyan-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8 text-slate-200">
          
          {/* Top Card: Name & Contact Details */}
          <div className="border border-white/10 hover:border-cyan-500/40 rounded-xl bg-slate-900/60 backdrop-blur-md p-6 sm:p-7 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  MOHAMMED KADERJI
                </h3>
                <p className="text-cyan-400 text-xs sm:text-sm font-medium mt-1">
                  Shipping & EXIM Logistics Operations | AI-Enabled Business Automation
                </p>
                
                <div className="text-xs sm:text-sm text-slate-300 mt-3 flex flex-wrap items-center gap-y-2 leading-relaxed">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    Mumbai, Maharashtra
                  </span>
                  <span className="mx-2.5 text-cyan-500/60 hidden sm:inline">|</span>
                  <a 
                    href="tel:+918905659753" 
                    className="flex items-center gap-1.5 hover:text-cyan-300 font-mono transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    +91 8905659753
                  </a>
                  <span className="mx-2.5 text-cyan-500/60 hidden sm:inline">|</span>
                  <a 
                    href="mailto:mohdkaderji022@gmail.com" 
                    className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    mohdkaderji022@gmail.com
                  </a>
                  <span className="mx-2.5 text-cyan-500/60 hidden sm:inline">|</span>
                  <a 
                    href="https://linkedin.com/in/mohammed-kaderji-77109b37a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 shrink-0" />
                    <span>LinkedIn: linkedin.com/in/mohammed-kaderji-77109b37a</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>

              {/* Print / Save PDF button */}
              <div className="shrink-0">
                <button
                  onClick={handlePrint}
                  id="resume-section-print-btn"
                  title="Print or Save CV as PDF"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-200 shadow-sm interactive-element group"
                >
                  <Printer className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Career Objective Card */}
          <div className="border border-white/10 hover:border-cyan-500/40 rounded-xl bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 flex items-center gap-2">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>Career Objective</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Final-year B.Com student holding a Post Diploma in EXIM Logistics and certifications in AI workflows and ocean shipping fundamentals. Possesses foundational experience in e-commerce order coordination, billing, and customer support. Seeking an entry-level fresher role in Shipping, Freight Forwarding, Logistics Operations, or AI-enabled Business Operations.
            </p>
          </div>

          {/* Education Card (Two-column grid) */}
          <div className="border border-white/10 hover:border-cyan-500/40 rounded-xl bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Education</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Institution 1 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between gap-3">
                <div>
                  <h5 className="text-sm font-bold text-white">Bachelor of Commerce (B.Com)</h5>
                  <p className="text-xs text-slate-400 mt-1">Lala Lajpat Rai College, Mumbai</p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30">
                    2024–2027 Ongoing
                  </span>
                </div>
              </div>

              {/* Institution 2 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between gap-3">
                <div>
                  <h5 className="text-sm font-bold text-white">Higher Secondary Certificate (HSC)</h5>
                  <p className="text-xs text-slate-400 mt-1">MSB Educational Institute</p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30">
                    CGPA: 7.1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Diplomas (Render as glowing bordered badges) */}
          <div className="border border-white/10 hover:border-cyan-500/40 rounded-xl bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Certifications & Diplomas</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Cert 1 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 space-y-1.5 shadow-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/90 border border-cyan-500/50 text-cyan-300">
                  Govt. of India Recognized
                </span>
                <h5 className="text-xs sm:text-sm font-bold text-white">
                  Post Diploma in EXIM Logistics Supply Chain Management
                </h5>
                <p className="text-xs text-slate-400">
                  ETTI Institute (ETTI Export Import Management Institute)
                </p>
              </div>

              {/* Cert 2 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 space-y-1.5 shadow-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/90 border border-cyan-500/50 text-cyan-300">
                  AI Workflows & Agents
                </span>
                <h5 className="text-xs sm:text-sm font-bold text-white">
                  AI for Business Leaders Bootcamp
                </h5>
                <p className="text-xs text-slate-400">
                  Outskill (Prompt Engineering, AI Workflows, N8N)
                </p>
              </div>

              {/* Cert 3 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 space-y-1.5 shadow-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/90 border border-cyan-500/50 text-cyan-300">
                  Maritime Freight & Trade
                </span>
                <h5 className="text-xs sm:text-sm font-bold text-white">
                  Logistics and Ocean Shipping in Supply Chain Management
                </h5>
                <p className="text-xs text-slate-400">
                  Udemy
                </p>
              </div>

              {/* Cert 4 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 space-y-1.5 shadow-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/90 border border-cyan-500/50 text-cyan-300">
                  ID: SC-95537CEEAB
                </span>
                <h5 className="text-xs sm:text-sm font-bold text-white">
                  AI-Powered Excel Micro Course
                </h5>
                <p className="text-xs text-slate-400">
                  Skill Course (ID: SC-95537CEEAB)
                </p>
              </div>
            </div>
          </div>

          {/* Knowledge & Skills (Organized pill tags) */}
          <div className="border border-white/10 hover:border-cyan-500/40 rounded-xl bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>Knowledge & Skills</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Logistics & EXIM */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Ship className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Logistics & EXIM</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Export-Import Documentation", "Ocean Shipping Concepts", "Supply Chain", "Order Fulfillment"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-950/70 border border-cyan-500/30 text-cyan-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & Technical Tools */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">AI & Technical Tools</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Prompt Engineering", "N8N Workflows", "Custom AI Assistants", "MS Excel"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-950/70 border border-cyan-500/30 text-cyan-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Operational Skills */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Operational Skills</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Customer Support", "Order Processing", "Billing", "Telesales", "Inventory Tracking"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-950/70 border border-cyan-500/30 text-cyan-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Languages</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["English", "Hindi", "Gujarati"].map((lang) => (
                    <span key={lang} className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-950/70 border border-cyan-500/30 text-cyan-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="border border-white/10 hover:border-cyan-500/40 rounded-xl bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Experience Timeline</span>
            </h4>

            <div className="space-y-4">
              {/* Role 1 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h5 className="text-sm font-bold text-white">Independent E-Commerce Seller</h5>
                    <p className="text-xs text-slate-400">Meesho / Flipkart</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 w-fit">
                    2024–2025
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Online product listings, order processing, customer inquiries, and fulfillment.</span>
                  </li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h5 className="text-sm font-bold text-white">Sales & Support Assistant</h5>
                    <p className="text-xs text-slate-400">Home Decor Store (Family Business)</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 w-fit">
                    6 Months
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Walk-in customer assistance, billing, telesales support, and stock tracking.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
