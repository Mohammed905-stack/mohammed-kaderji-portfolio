import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutExperienceSection } from './components/AboutExperienceSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { CertificationsSkillsSection } from './components/CertificationsSkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

/**
 * =========================================================================================
 * QUICK CONFIGURATION / EASY DATA ACCESS FOR BEGINNERS
 * =========================================================================================
 * The projects, certifications, timeline experience, and contact information are defined in:
 * 👉 `src/data/portfolioData.ts`
 * 
 * You can also inspect or customize them by editing that file, or swapping links directly:
 * - PROJECTS_DATA: Add, remove, or swap live links for your AI & Automation projects.
 * - CERTIFICATIONS_DATA: Add new licenses, diplomas, and credentials.
 * - PERSONAL_INFO: Update your name, headshot, email, phone, and LinkedIn.
 * =========================================================================================
 */
export { PROJECTS_DATA, CERTIFICATIONS_DATA, PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080B11] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Global Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single-Page Content Flow */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 2: About & Experience Timeline */}
        <AboutExperienceSection />

        {/* Section 3: Live Projects Gallery */}
        <ProjectsGallery />

        {/* Section 4: Certifications & Technical Skills */}
        <CertificationsSkillsSection />

        {/* Section 5: Contact & Connect Form */}
        <ContactSection />
      </main>

      {/* Section 6: Footer with Social Channels & Phone */}
      <Footer />

      {/* Downloadable / Printable Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
