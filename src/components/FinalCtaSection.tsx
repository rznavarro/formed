import { WhatsAppButton } from './common/WhatsAppButton';
import { trackPhoneClick } from '../utils/analytics';
import { Phone } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#00AFAA] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00807C]/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
          Tu salud no tiene que esperar
        </h2>

        <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto mb-9 font-medium leading-relaxed">
          Escríbenos y te ayudamos a encontrar la hora y el especialista que necesitas.
        </p>

        {/* White button with dark turquoise text */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <WhatsAppButton
            location="cta_final"
            variant="white"
            size="lg"
            className="w-full sm:w-auto shadow-lg text-[#00807C] font-extrabold"
          >
            Reservar hora por WhatsApp
          </WhatsAppButton>
        </div>

        {/* Clickable phone call alternative */}
        <div>
          <a
            href="tel:+56229148748"
            onClick={() => trackPhoneClick('+56 2 2914 8748')}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm sm:text-base underline underline-offset-4 transition-colors min-h-[44px] py-1"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>o llama a mesa central +56 2 2914 8748</span>
          </a>
        </div>

      </div>
    </section>
  );
}
