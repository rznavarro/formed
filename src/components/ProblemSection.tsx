import { WhatsAppButton } from './common/WhatsAppButton';
import { DollarSign, Smartphone, HeartHandshake } from 'lucide-react';

export function ProblemSection() {
  const cards = [
    {
      icon: DollarSign,
      question: "¿No sabes cuánto vas a pagar?",
      answer: "Te mostramos el copago Fonasa y el valor particular antes de reservar.",
    },
    {
      icon: Smartphone,
      question: "¿No tienes tiempo de ir?",
      answer: "Atiéndete por videollamada desde tu celular, estés donde estés.",
    },
    {
      icon: HeartHandshake,
      question: "¿Es para tu hijo o hija?",
      answer: "Tenemos psicología, psiquiatría y neurología infanto-juvenil.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F7FAFA] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2A2E] tracking-tight">
            Buscar especialista no debería ser otro problema
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A6366]">
            En Formed eliminamos la incertidumbre de precios, las esperas infinitas y la falta de horas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/70 hover:border-[#00AFAA] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E6F7F6] text-[#00807C] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F2A2E] mb-3 leading-snug">
                    {card.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A6366] leading-relaxed">
                    {card.answer}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-[#00807C] inline-flex items-center gap-1">
                    Atención sin fricciones &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Primary WhatsApp Button */}
        <div className="flex justify-center">
          <WhatsAppButton location="problema_section">
            Reservar hora por WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
