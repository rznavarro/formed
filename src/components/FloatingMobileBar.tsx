import { useState, useEffect } from 'react';
import { WhatsAppSvg } from './common/WhatsAppButton';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';
import { Phone } from 'lucide-react';

export function FloatingMobileBar() {
  const [showFloatingLabel, setShowFloatingLabel] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolledPastHero(true);
        // Label appears after 2s of scrolling as requested
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          setShowFloatingLabel(true);
        }, 1500);
      } else {
        setHasScrolledPastHero(false);
        setShowFloatingLabel(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const whatsappHref = 'https://wa.me/56956065805?text=Hola%2C%20quiero%20reservar%20una%20hora%20en%20Formed';

  return (
    <>
      {/* Desktop & Tablet: Floating WhatsApp Button (bottom-right) */}
      <aside 
        aria-label="Contacto flotante"
        className={`hidden sm:flex fixed bottom-6 right-6 z-50 items-center transition-all duration-300 ${
          hasScrolledPastHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('boton_flotante_desktop')}
          className="group flex items-center gap-2.5 bg-[#00AFAA] hover:bg-[#00807C] text-white p-3.5 rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 animate-pulse-subtle focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00AFAA]/40"
          aria-label="Reservar hora por WhatsApp"
        >
          <WhatsAppSvg className="w-6 h-6 text-white shrink-0" />
          <span 
            className={`font-bold text-sm overflow-hidden whitespace-nowrap transition-all duration-300 ${
              showFloatingLabel ? 'max-w-[100px] pr-2' : 'max-w-0 pr-0 group-hover:max-w-[100px] group-hover:pr-2'
            }`}
          >
            Reservar
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Action Bar (fixed at bottom, sleek, within 15% viewport height cap) */}
      <nav 
        aria-label="Acciones rápidas móviles"
        className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
      >
        <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
          {/* Quick Call */}
          <a
            href="tel:+56229148748"
            onClick={() => trackPhoneClick('+56 2 2914 8748')}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 bg-[#F7FAFA] hover:bg-[#E6F7F6] text-[#0F2A2E] text-xs font-bold transition-colors min-h-[44px]"
            aria-label="Llamar a mesa central"
          >
            <Phone className="w-4 h-4 text-[#00807C]" aria-hidden="true" />
            <span>Llamar</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('barra_inferior_movil')}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00AFAA] hover:bg-[#00807C] text-white text-xs font-bold shadow-sm transition-colors min-h-[44px] active:scale-[0.98]"
            aria-label="Reservar hora por WhatsApp"
          >
            <WhatsAppSvg className="w-4 h-4 text-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
    </>
  );
}
