import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Clock, 
  MapPin, 
  ArrowUpRight,
  Linkedin,
  Instagram
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/mljeqaag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Unable to send message via Formspree. Please retry or email directly.');
        }
      }
    } catch {
      // If network/CORS error occurs, submit natively via the HTML form
      const targetForm = e.currentTarget;
      targetForm.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Contact & Connect
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Interested in discussing shipping logistics roles, supply chain optimization, or deploying custom AI workflows? Send a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info & Communication Channels */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-8 rounded-3xl bg-[#0B0F19]/90 border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white">
              Let's build high-efficiency operations together
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              I am actively seeking entry-level opportunities in <span className="text-cyan-300 font-semibold">Shipping, EXIM Logistics, or AI-enabled Business Operations</span>. I reply promptly to emails and direct calls.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-4 pt-2">
              
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  title="Copy email to clipboard"
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 transition-colors interactive-element"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Direct Phone</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      id="contact-phone-link"
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/60 transition-colors flex items-center gap-1 interactive-element"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Real LinkedIn Profile Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">LinkedIn Profile</p>
                    <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                      {PERSONAL_INFO.linkedinHandle}
                    </p>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-real-linkedin-btn"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-950/70 border border-blue-500/30 text-blue-300 hover:bg-blue-900/70 hover:text-white transition-colors flex items-center gap-1 shrink-0 interactive-element"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Real Instagram Profile Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-pink-500/40 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Instagram Account</p>
                    <p className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors truncate">
                      @{PERSONAL_INFO.instagramHandle}
                    </p>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-real-instagram-btn"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-pink-950/70 border border-pink-500/30 text-pink-300 hover:bg-pink-900/70 hover:text-white transition-colors flex items-center gap-1 shrink-0 interactive-element"
                >
                  <span>Follow / DM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location & Response Time */}
              <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Response Window:
                  </span>
                  <span className="text-cyan-300 font-medium">Within 24 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Location:
                  </span>
                  <span className="text-slate-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0F19]/90 border border-slate-800 shadow-xl relative">
            
            {submitted ? (
              <div className="py-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Delivered Successfully!</h4>
                <p className="text-slate-300 text-sm max-w-md">
                  Thank you! Your transmission has been sent directly to <strong className="text-cyan-300">{PERSONAL_INFO.email}</strong>. I will review your inquiry and reply promptly.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  {/* Option 1: Direct Gmail Web Composer */}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-cyan-400/20 interactive-element"
                  >
                    <span>Open in Gmail</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {/* Option 2: Default System Mail Client */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all flex items-center gap-2 border border-slate-700 interactive-element"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Open Mail App</span>
                  </a>

                  {/* Option 3: Copy Text */}
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `To: ${PERSONAL_INFO.email}\nSubject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
                      );
                      setCopiedEmail(true);
                      setTimeout(() => setCopiedEmail(false), 2500);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all flex items-center gap-2 border border-slate-800 interactive-element"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Full Details'}</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Write another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/mljeqaag"
                method="POST"
                onSubmit={handleSubmit}
                id="portfolio-contact-form"
                className="space-y-5"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-white">Send a Direct Message</h4>
                    <p className="text-xs text-slate-400">Routes straight to {PERSONAL_INFO.email}</p>
                  </div>
                  <span className="text-[11px] text-cyan-400 font-mono bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/30">
                    Formspree Verified
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject / Purpose */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Topic <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="e.g. Opportunity in Shipping Logistics / AI Workflow"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                {/* Message Box */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide details about the role, project, or operational inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group interactive-element"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  <span>{isSubmitting ? 'Transmitting Message...' : `Send Message to ${PERSONAL_INFO.email}`}</span>
                </button>
              </form>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
};
