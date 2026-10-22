import { LOCATIONS } from '../data/formedData';
import { trackPhoneClick, trackMapsClick } from '../utils/analytics';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  FileText, 
  Building 
} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/formed.cl/', icon: Instagram },
    { name: 'TikTok', href: 'https://www.tiktok.com/@formed.cl/', icon: FileText },
    { name: 'Facebook', href: 'https://www.facebook.com/formed.cl', icon: Facebook },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/centro-medico-formed', icon: Linkedin },
    { name: 'YouTube', href: 'https://www.youtube.com/@Formed_cl', icon: Youtube },
  ];

  return (
    <footer className="bg-[#0F2A2E] text-slate-300 pt-16 pb-28 sm:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Col 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-block bg-white/95 p-2 rounded-xl">
              <img
                src="https://formed.cl/assets/logos/logo_clean.svg"
                alt="Centro Médico Formed"
                className="h-8 w-auto"
                width={150}
                height={32}
              />
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Centro médico ambulatorio con foco en salud mental, dermatología y especialidades para adultos y niños. Modalidad Libre Elección Fonasa, Isapres y particular.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Síguenos en redes
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#00AFAA] text-white flex items-center justify-center transition-colors min-w-[36px] min-h-[36px]"
                      aria-label={`Visitar nuestro perfil de ${social.name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Payment methods */}
            <div className="pt-3">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Medios de pago y convenios
              </span>
              <div className="flex items-center gap-3">
                <img
                  src="https://formed.cl/assets/medios-pago/logo_fonasaweb.webp"
                  alt="Fonasa Modalidad Libre Elección"
                  className="h-7 w-auto bg-white/90 p-1 rounded-md"
                  width={80}
                  height={28}
                  loading="lazy"
                />
                <img
                  src="https://formed.cl/assets/medios-pago/logo_flowweb.webp"
                  alt="Flow pagos online"
                  className="h-7 w-auto bg-white/90 p-1 rounded-md"
                  width={80}
                  height={28}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Col 2: Sedes y Direcciones */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00AFAA]" />
              <span>Nuestras 4 sedes</span>
            </h3>
            <ul className="space-y-3 text-xs" role="list">
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className="pb-2 border-b border-slate-800 last:border-none">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackMapsClick(loc.name)}
                    className="hover:text-white transition-colors block group"
                  >
                    <strong className="text-white group-hover:text-[#00AFAA] block">
                      {loc.fullName}
                    </strong>
                    <span className="text-slate-400">{loc.address}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacto y Enlaces útiles */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00AFAA]" />
              <span>Contacto directo</span>
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00AFAA] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Mesa central:</span>
                  <a
                    href="tel:+56229148748"
                    onClick={() => trackPhoneClick('+56 2 2914 8748')}
                    className="text-white hover:text-[#00AFAA] font-medium"
                  >
                    +56 2 2914 8748
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00AFAA] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Concepción:</span>
                  <a
                    href="tel:+56999208368"
                    onClick={() => trackPhoneClick('+56 9 9920 8368')}
                    className="text-white hover:text-[#00AFAA] font-medium"
                  >
                    +56 9 9920 8368
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#00AFAA] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-slate-400 block">Correos electrónicos:</span>
                  <a href="mailto:contacto@formed.cl" className="text-white hover:text-[#00AFAA] block">
                    contacto@formed.cl
                  </a>
                  <a href="mailto:contacto.concepcion@formed.cl" className="text-white hover:text-[#00AFAA] block">
                    contacto.concepcion@formed.cl
                  </a>
                  <a href="mailto:servicioalcliente@formed.cl" className="text-white hover:text-[#00AFAA] block">
                    servicioalcliente@formed.cl
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs">
              <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[11px]">
                Portales y servicios
              </span>
              <a
                href="https://app.dalca.cl/portal/formed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00AFAA] flex items-center gap-1.5"
              >
                <span>Resultados de ecografías (Dalca)</span>
              </a>
              <a
                href="https://formed.cl/presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00AFAA] flex items-center gap-1.5"
              >
                <Building className="w-3.5 h-3.5 text-[#00AFAA]" />
                <span>Programas para empresas e instituciones</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            Centro Médico Formed es una marca de Centro de Especialidades Médicas Consuelo Molina E.I.R.L. &copy; 2026. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a
              href="https://formed.cl/terminos-y-condiciones"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Términos y condiciones
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://formed.cl/privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Política de privacidad
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
