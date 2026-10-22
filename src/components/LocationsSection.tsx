import { LOCATIONS } from '../data/formedData';
import { trackMapsClick, trackPhoneClick } from '../utils/analytics';
import { MapPin, Navigation, Phone, AlertCircle, Building2 } from 'lucide-react';

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
                {/* Photo Placeholder [FALTA] with #E6F7F6 background */}
                <div className="w-full aspect-[4/3] bg-[#E6F7F6] border-b border-slate-200/60 p-4 flex flex-col items-center justify-center text-center relative group">
                  <div className="w-10 h-10 rounded-xl bg-white/90 text-[#00807C] flex items-center justify-center mb-2 shadow-2xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-amber-900 bg-amber-50/90 border border-amber-200 px-2 py-0.5 rounded leading-tight">
                    {location.photoPlaceholder}
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

                  {/* Hours marker [FALTA] */}
                  <div className="mt-3 p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/70 text-[11px] font-mono text-amber-900 flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{location.missingHoursNotice}</span>
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
