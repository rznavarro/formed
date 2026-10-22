import { useState } from 'react';
import { FAQS } from '../data/formedData';
import { WhatsAppButton } from './common/WhatsAppButton';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="preguntas" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00807C] uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolución de dudas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2A2E] tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A6366]">
            Todo lo que necesitas saber sobre convenios Fonasa, sedes, valores y agendamiento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200/80 rounded-2xl overflow-hidden bg-[#F7FAFA] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-[#0F2A2E] hover:text-[#00807C] transition-colors min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFAA]"
                >
                  <span className="text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200/60 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#E6F7F6] text-[#00807C]' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#4A6366] leading-relaxed border-t border-slate-100"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Primary WhatsApp Button */}
        <div className="flex justify-center">
          <WhatsAppButton location="faq_section">
            Reservar hora por WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
