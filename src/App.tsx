/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TelemedicineSection } from './components/TelemedicineSection';
import { SocialProofSection } from './components/SocialProofSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { LocationsSection } from './components/LocationsSection';
import { QuickFormSection } from './components/QuickFormSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F2A2E]">
      {/* 4.0 Desktop Thin Top Bar */}
      <TopBar />

      {/* 4.1 Fixed Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 4.2 Hero Section */}
        <Hero />

        {/* 4.3 Problema Section */}
        <ProblemSection />

        {/* 4.4 Especialidades (Servicios) Section */}
        <SpecialtiesSection />

        {/* 4.5 Telemedicina Section (#E6F7F6 featured block) */}
        <TelemedicineSection />

        {/* 4.6 Prueba Social Section */}
        <SocialProofSection />

        {/* 4.7 Cómo Funciona Section (3 steps) */}
        <HowItWorksSection />

        {/* 4.8 Sedes Section */}
        <LocationsSection />

        {/* 4.9 Formulario Rápido Section (3 fields max) */}
        <QuickFormSection />

        {/* 4.10 Preguntas Frecuentes Section */}
        <FaqSection />

        {/* 4.11 CTA Final (#00AFAA background) */}
        <FinalCtaSection />
      </main>

      {/* 4.12 Footer */}
      <Footer />

      {/* 4.13 Mobile Floating WhatsApp & Bottom Quick Bar */}
      <FloatingMobileBar />
    </div>
  );
}
