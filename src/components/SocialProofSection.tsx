import { useEffect, useState, useRef } from 'react';
import { PATIENT_REVIEWS } from '../data/formedData';
import { WhatsAppButton } from './common/WhatsAppButton';
import { Star } from 'lucide-react';

function AnimatedCounter({ endValue, prefix = "", suffix = "" }: { endValue: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(endValue);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const steps = 30;
          const increment = endValue / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= endValue) {
              setCount(endValue);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div ref={elementRef} className="font-mono tabular-nums text-3xl sm:text-4xl font-extrabold text-[#00807C]">
      {prefix}{count}{suffix}
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00807C] uppercase tracking-wider mb-2">
            <span>Experiencias verificadas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2A2E] tracking-tight">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A6366]">
            Opiniones reales de pacientes atendidos en nuestras sedes y por telemedicina.
          </p>
        </div>

        {/* Animated KPI figures row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14">
          <div className="bg-[#F7FAFA] border border-slate-200/80 rounded-2xl p-5 text-center">
            <AnimatedCounter endValue={200} prefix="+" />
            <div className="text-xs sm:text-sm font-semibold text-[#0F2A2E] mt-1.5">
              Profesionales
            </div>
          </div>

          <div className="bg-[#F7FAFA] border border-slate-200/80 rounded-2xl p-5 text-center">
            <AnimatedCounter endValue={18} prefix="+" />
            <div className="text-xs sm:text-sm font-semibold text-[#0F2A2E] mt-1.5">
              Especialidades
            </div>
          </div>

          <div className="bg-[#F7FAFA] border border-slate-200/80 rounded-2xl p-5 text-center">
            <AnimatedCounter endValue={4} />
            <div className="text-xs sm:text-sm font-semibold text-[#0F2A2E] mt-1.5">
              Sedes clínicas
            </div>
          </div>

          <div className="bg-[#F7FAFA] border border-slate-200/80 rounded-2xl p-5 text-center">
            <div className="font-mono tabular-nums text-3xl sm:text-4xl font-extrabold text-[#00807C]">
              2022
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#0F2A2E] mt-1.5">
              Cuidando tu salud
            </div>
          </div>
        </div>

        {/* 6 Real Reviews: horizontal scroll with snap on mobile, 3x2 grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {PATIENT_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center bg-[#F7FAFA] border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-[#00AFAA] transition-all duration-200"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400" aria-label="Calificación 5 de 5 estrellas">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#0F2A2E] italic leading-relaxed mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0F2A2E]">{review.name}</span>
                <span className="text-[#00807C] font-semibold">Paciente Formed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Primary WhatsApp Button */}
        <div className="flex justify-center">
          <WhatsAppButton location="prueba_social_section">
            Reservar hora por WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
