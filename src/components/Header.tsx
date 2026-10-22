import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WhatsAppButton } from './common/WhatsAppButton';
import { trackPhoneClick } from '../utils/analytics';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Telemedicina', href: '#telemedicina' },
    { label: 'Sedes', href: '#sedes' },
    { label: 'Preguntas', href: '#preguntas' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Zone */}
          <a
            href="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFAA] rounded-lg"
            aria-label="Centro Médico Formed - Ir al inicio"
          >
            <img
              src="https://formed.cl/assets/logos/logo_clean.svg"
              alt="Centro Médico Formed"
              className="h-8 sm:h-9 w-auto"
              width={160}
              height={36}
            />
          </a>

          {/* Nav Links (Desktop) */}
          <nav 
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A6366]" 
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-[#00807C] transition-colors py-1 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <WhatsAppButton
              location="header"
              size="md"
              className="text-sm font-bold"
            >
              Reservar por WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Actions: Phone icon + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+56229148748"
              onClick={() => trackPhoneClick('+56 2 2914 8748')}
              className="p-2.5 text-[#00807C] hover:bg-[#E6F7F6] rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFAA]"
              aria-label="Llamar a mesa central +56 2 2914 8748"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#0F2A2E] hover:bg-slate-100 rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFAA]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <nav
            className="sm:hidden mt-3 pt-3 border-t border-slate-200 pb-3 flex flex-col gap-2"
            aria-label="Menú móvil"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-[#0F2A2E] hover:bg-[#E6F7F6] hover:text-[#00807C] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <WhatsAppButton
                location="header_mobile"
                size="md"
                className="w-full text-center"
              >
                Reservar por WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
