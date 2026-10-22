import { ONLINE_PRICES } from '../data/formedData';
import { WhatsAppButton } from './common/WhatsAppButton';
import { Check, Video, Laptop, Mail, Clock } from 'lucide-react';

export function TelemedicineSection() {
  const benefits = [
    'Controles y seguimiento de tratamientos',
    'Revisión de resultados de exámenes',
    'Apoyo en salud mental desde tu casa',
    'Si vives lejos o fuera de la región',
    'Evaluar si necesitas atención presencial',
  ];

  return (
    <section id="telemedicina" className="py-16 sm:py-24 bg-[#E6F7F6] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Block Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#00807C] rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Video className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Atención Online en Todo Chile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2A2E] tracking-tight">
            Atiéndete por videollamada desde $4.050 de copago Fonasa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0F2A2E]/80 leading-relaxed">
            Sin traslados ni salas de espera. Te conectas desde el celular, tablet o computador y las indicaciones te llegan al correo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
          
          {/* Left Column: When to use checklist & devices */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#00AFAA]/20">
              <h3 className="text-lg font-bold text-[#0F2A2E] mb-4 flex items-center gap-2">
                <span>¿Cuándo sirve la telemedicina?</span>
              </h3>
              
              <ul className="space-y-3.5" role="list">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#E6F7F6] text-[#00807C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-[#0F2A2E]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-[#4A6366]">
                <span className="inline-flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-[#00AFAA]" /> Celular, tablet o PC
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#00AFAA]" /> Recetas al email
                </span>
              </div>
            </div>

            {/* Missing image placeholder for telemedicina */}
            <div className="p-4 bg-white/70 border border-dashed border-[#00AFAA]/40 rounded-2xl">
              <span className="text-[11px] font-semibold text-amber-900 block mb-1">
                [FALTA: 1 foto de una sesión de telemedicina o profesional en videollamada]
              </span>
              <p className="text-xs text-[#4A6366]">
                Espacio reservado para fotografía de telemedicina real con profesional de Formed.
              </p>
            </div>
          </div>

          {/* Right Column: Mini Table of Online Prices */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-sm border border-[#00AFAA]/20 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0F2A2E]">
                    Valores referenciales telemedicina
                  </h3>
                  <p className="text-xs text-[#4A6366]">
                    Copago Fonasa vs. Arancel Particular
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00807C] bg-[#E6F7F6] px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5" /> Confirmación inmediata
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-[#4A6366] bg-slate-50/40">
                      <th scope="col" className="py-3 px-5 sm:px-6">Especialidad</th>
                      <th scope="col" className="py-3 px-4 text-right">Copago Fonasa</th>
                      <th scope="col" className="py-3 px-5 sm:px-6 text-right">Particular</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {ONLINE_PRICES.map((item, index) => (
                      <tr 
                        key={index}
                        className="hover:bg-[#E6F7F6]/30 transition-colors"
                      >
                        <td className="py-3.5 px-5 sm:px-6 font-semibold text-[#0F2A2E]">
                          {item.specialty}
                        </td>
                        <td className="py-3.5 px-4 text-right font-bold text-[#00807C] font-mono tabular-nums text-sm sm:text-base">
                          {item.fonasaCopay}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-right font-medium text-[#4A6366] font-mono tabular-nums">
                          {item.particularPrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50/60 border-t border-slate-100 text-xs text-[#4A6366]">
                El copago Fonasa se cancela al reservar y el bono llega directamente a tu correo electrónico.
              </div>
            </div>
          </div>

        </div>

        {/* Section Primary WhatsApp Button */}
        <div className="flex justify-center">
          <WhatsAppButton location="telemedicina_section">
            Reservar hora por WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
