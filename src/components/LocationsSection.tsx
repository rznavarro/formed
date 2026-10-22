import { LOCATIONS } from '../data/formedData';
import { trackMapsClick, trackPhoneClick } from '../utils/analytics';
import { MapPin, Navigation, Phone, Building2, Clock } from 'lucide-react';

export function LocationsSection() {
  return (
    <section id="sedes" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00807C] uppercase tracking-wider mb-2">
            <span>Presencialidad y cercanía</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2A2E] tracking-tight">
            4 sedes en Santiago y Concepción
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A6366]">
            Ubicaciones estratégicas con excelente conectividad a pasos de estaciones de Metro y locomoción colectiva.
          </p>
        </div>

        {/* 4 Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LOCATIONS.map((location) => (
            <div
              key={location.id}
              className="bg-[#F7FAFA] border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#00AFAA] transition-all duration-200 hover:shadow-md"
            >
              <div>
                {/* Visual card header */}
                <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#E6F7F6] to-white border-b border-slate-200/60 p-4 flex flex-col items-center justify-center text-center relative">
                  <div className="w-11 h-11 rounded-2xl bg-white shadow-2xs text-[#00807C] flex items-center justify-center mb-1.5 border border-[#00AFAA]/20">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#00807C] uppercase tracking-wider">
                    Centro Médico Formed
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-xs font-semibold text-[#00807C] uppercase tracking-wider mb-1">
                    {location.city} · {location.region}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2A2E] mb-2">
                    {location.fullName}
                  </h3>
                  
                  <div className="flex items-start gap-2 text-xs text-[#4A6366] mb-3">
                    <MapPin className="w-4 h-4 text-[#00AFAA] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{location.address}</span>
                  </div>

                  {location.phone && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2A2E] mb-3">
                      <Phone className="w-3.5 h-3.5 text-[#00AFAA]" />
                      <a
                        href={`tel:${location.phone.replace(/\s+/g, '')}`}
                        onClick={() => trackPhoneClick(location.phone || '')}
                        className="hover:text-[#00807C] underline"
                      >
                        {location.phone}
                      </a>
                    </div>
                  )}

                  <div className="mt-3 py-2 px-2.5 rounded-xl bg-white border border-slate-200/70 text-xs text-[#4A6366] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#00AFAA] shrink-0" />
                    <span>Atención con reserva inmediata</span>
                  </div>
                </div>
              </div>

              {/* Action Button: Cómo llegar */}
              <div className="p-5 pt-0">
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMapsClick(location.name)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#00807C] bg-white border border-slate-200/80 hover:bg-[#E6F7F6] hover:border-[#00AFAA] rounded-xl transition-all min-h-[44px]"
                  aria-label={`Cómo llegar a Sede ${location.name}`}
                >
                  <Navigation className="w-3.5 h-3.5 text-[#00AFAA]" aria-hidden="true" />
                  <span>Cómo llegar en Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
