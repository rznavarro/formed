import { SPECIALTIES, OTHER_SERVICES } from '../data/formedData';
import { WhatsAppButton, WhatsAppSvg } from './common/WhatsAppButton';
import { trackWhatsAppClick } from '../utils/analytics';
import { 
  Brain, 
  Baby, 
  Sparkles, 
  Activity, 
  Heart, 
  UserCheck, 
  ArrowUpRight 
} from 'lucide-react';

const iconMap = {
  brain: Brain,
  baby: Baby,
  sparkles: Sparkles,
  activity: Activity,
  heart: Heart,
  'user-check': UserCheck,
};

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00807C] uppercase tracking-wider mb-2">
            <span>Áreas médicas y profesionales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2A2E] tracking-tight">
            Especialistas para ti y tu familia
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A6366]">
            Atención presencial en Providencia, Santiago Centro y Concepción, y online en todo Chile.
          </p>
        </div>

        {/* 8 Specialties Grid (2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 mb-10">
          {SPECIALTIES.map((spec) => {
            const Icon = iconMap[spec.iconName] || Brain;
            const message = encodeURIComponent(`Hola, quiero reservar una hora de ${spec.name} en Formed`);
            const href = `https://wa.me/56956065805?text=${message}`;

            return (
              <a
                key={spec.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('especialidad_card', spec.name)}
                className="group relative bg-[#F7FAFA] hover:bg-[#E6F7F6]/60 border border-slate-200/80 hover:border-[#00AFAA] rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFAA]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#00807C] group-hover:bg-[#00AFAA] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00807C] transition-colors" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F2A2E] group-hover:text-[#00807C] transition-colors leading-tight mb-1.5">
                    {spec.name}
                  </h3>

                  <div className="text-xs font-semibold text-[#00807C] mb-2.5">
                    {spec.professionalsCount} profesionales
                  </div>

                  {/* Pricing and notes */}
                  <div className="space-y-1 text-xs text-[#4A6366]">
                    {spec.fonasaPricePresencial && (
                      <div className="font-medium text-[#0F2A2E]">
                        {spec.fonasaPricePresencial}
                      </div>
                    )}
                    {spec.fonasaPriceOnline && (
                      <div className="text-[#00807C] font-medium">
                        {spec.fonasaPriceOnline}
                      </div>
                    )}
                    {spec.notes && (
                      <div className="text-[11px] text-[#4A6366] leading-snug">
                        {spec.notes}
                      </div>
                    )}
                  </div>
                </div>

                {/* Micro CTA */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-[#00807C]">
                  <WhatsAppSvg className="w-3.5 h-3.5 text-[#00AFAA]" />
                  <span>Reservar hora</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Compact row of other services */}
        <div className="bg-[#F7FAFA] border border-slate-200/80 rounded-2xl p-5 sm:p-6 mb-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00807C] shrink-0">
              También disponible:
            </span>
            <p className="text-xs sm:text-sm text-[#0F2A2E] leading-relaxed">
              Medicina general, nutrición, reumatología, traumatología, cirugía general, ecografías, exámenes de laboratorio y evaluación ADOS-2 para adultos.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200/50 flex flex-wrap gap-2 text-[11px] text-[#4A6366]">
            {OTHER_SERVICES.map((serv, i) => (
              <span key={i} className="inline-block bg-white px-2.5 py-1 rounded-md border border-slate-200/60">
                {serv}
              </span>
            ))}
          </div>
        </div>

        {/* Small referential value note */}
        <p className="text-xs text-[#4A6366] italic text-center mb-8">
          * Valores referenciales. El precio final se confirma al reservar según tu previsión y tramo.
        </p>

        {/* Section Primary WhatsApp Button */}
        <div className="flex justify-center">
          <WhatsAppButton location="especialidades_section">
            Reservar hora por WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
