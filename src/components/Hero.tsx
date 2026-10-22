import { WhatsAppButton, SecondaryBookingLink } from './common/WhatsAppButton';
import { ShieldCheck, Users, CalendarCheck, Video, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E6F7F6]/40 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle organic background blobs */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[500px] bg-gradient-to-tr from-[#00AFAA]/10 to-[#E6F7F6]/80 rounded-[40%] blur-3xl pointer-events-none animate-blob-slow"
        aria-hidden="true"
      />
      <div 
        className="absolute -top-20 -right-20 -z-10 w-96 h-96 bg-[#00AFAA]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F7F6] text-[#00807C] text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-[#00AFAA]/20">
              <span className="w-2 h-2 rounded-full bg-[#00AFAA]" aria-hidden="true" />
              <span>Centro médico en Providencia, Santiago Centro y Concepción</span>
            </div>

            {/* Unique H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2A2E] leading-[1.15] tracking-tight mb-5 text-balance">
              Tu hora con un especialista, con copago Fonasa y sin esperar semanas
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#4A6366] leading-relaxed mb-8 max-w-2xl">
              Psicología, psiquiatría, dermatología, neurología y cardiología para adultos y niños. En 4 sedes o por videollamada desde <strong className="text-[#0F2A2E] font-semibold">$4.050 de copago</strong>.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto mb-3">
              <WhatsAppButton
                location="hero"
                size="lg"
                className="w-full sm:w-auto shadow-md"
              >
                Reservar hora por WhatsApp
              </WhatsAppButton>
            </div>

            {/* Secondary Discrete Action */}
            <div className="mb-8">
              <SecondaryBookingLink />
            </div>

            {/* 3 Trust Chips */}
            <div className="w-full pt-6 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#4A6366] font-medium">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#00AFAA]" aria-hidden="true" />
                  <span className="font-semibold text-[#0F2A2E]">+200 profesionales</span>
                </div>
                <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00AFAA]" aria-hidden="true" />
                  <span className="font-semibold text-[#0F2A2E]">Fonasa, Isapre y particular</span>
                </div>
                <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-[#00AFAA]" aria-hidden="true" />
                  <span className="font-semibold text-[#0F2A2E]">Confirmación inmediata</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Container with Floating Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer rounded card with photo / consultation box view */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#E6F7F6] to-white p-2.5 sm:p-3 shadow-xl border border-[#00AFAA]/20">
                <div className="relative overflow-hidden rounded-[22px] bg-white aspect-[4/3] sm:aspect-[5/4]">
                  <img
                    src="https://formed.cl/assets/banner/dermatologia_mobile.webp"
                    alt="Consulta médica y dermatología en Centro Médico Formed"
                    className="w-full h-full object-cover object-center"
                    width={640}
                    height={512}
                    // high fetch priority for hero image
                    fetchPriority="high"
                  />
                  
                  {/* Subtle brand overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2A2E]/85 via-[#0F2A2E]/40 to-transparent p-4 sm:p-5 flex flex-col justify-end text-white">
                    <span className="text-xs uppercase font-semibold tracking-wider text-[#E6F7F6] mb-1">
                      Atención ambulatoria de excelencia
                    </span>
                    <p className="text-sm font-medium text-white/95 leading-snug">
                      Boxes clínicos modernos y calidez profesional
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-[11px] font-medium w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AFAA]"></span>
                      <span>Atención en Providencia, Santiago Centro y Concepción</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Telemedicina */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md py-3 px-4 rounded-2xl shadow-lg border border-[#00AFAA]/25 flex items-center gap-3 animate-float-soft max-w-[270px]">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7F6] text-[#00807C] flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#00807C] block">
                    Telemedicina
                  </span>
                  <p className="text-xs font-bold text-[#0F2A2E] leading-tight">
                    Desde $4.050 copago Fonasa
                  </p>
                </div>
              </div>

              {/* Floating Card 2: Cancelación gratis */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md py-3 px-4 rounded-2xl shadow-lg border border-[#00AFAA]/25 flex items-center gap-3 animate-float-soft-delayed max-w-[270px]">
                <div className="w-10 h-10 rounded-xl bg-[#E6F7F6] text-[#00807C] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#00807C] block">
                    Garantía y flexibilidad
                  </span>
                  <p className="text-xs font-bold text-[#0F2A2E] leading-tight">
                    Cancelación gratis hasta 24 h antes
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
