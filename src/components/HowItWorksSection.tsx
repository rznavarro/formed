import { WhatsAppButton } from './common/WhatsAppButton';
import { ShieldCheck, Stethoscope, Calendar, CreditCard } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Stethoscope,
      title: "Elige la especialidad",
      description: "Presencial en una de nuestras 4 sedes o por videollamada.",
    },
    {
      number: "2",
      icon: Calendar,
      title: "Elige día, hora y profesional",
      description: "Escríbenos por WhatsApp o reserva online.",
    },
    {
      number: "3",
      icon: CreditCard,
      title: "Paga tu copago y listo",
      description: "Recibes la confirmación al instante y, si es online, el enlace para conectarte.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7FAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-center mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00807C] uppercase tracking-wider mb-2">
            <span>Proceso simple y transparente</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2A2E] tracking-tight">
            Reserva tu hora en 3 pasos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A6366]">
            Sin filas ni trámites complejos. En pocos minutos tienes tu atención médica asegurada.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-xs border border-slate-200/70 hover:border-[#00AFAA] transition-all duration-200 flex flex-col relative"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-full bg-[#E6F7F6] text-[#00807C] font-extrabold text-base flex items-center justify-center font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#00807C] flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F2A2E] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4A6366] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real warranty line */}
        <div className="max-w-xl mx-auto mb-10 p-4 rounded-2xl bg-white border border-[#00AFAA]/30 shadow-xs flex items-center justify-center gap-3 text-center">
          <ShieldCheck className="w-5 h-5 text-[#00AFAA] shrink-0" aria-hidden="true" />
          <span className="text-sm font-bold text-[#0F2A2E]">
            Garantía real: Cancelación gratuita hasta 24 horas antes.
          </span>
        </div>

        {/* Section Primary WhatsApp Button */}
        <div className="flex justify-center">
          <WhatsAppButton location="como_funciona_section">
            Reservar hora por WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
