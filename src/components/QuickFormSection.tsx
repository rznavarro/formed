import React, { useState } from 'react';
import { SPECIALTIES } from '../data/formedData';
import { trackFormSubmit } from '../utils/analytics';
import { WhatsAppSvg } from './common/WhatsAppButton';
import { Send, CheckCircle2, User, PhoneCall, Sparkles } from 'lucide-react';

export function QuickFormSection() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [specialty, setSpecialty] = useState(SPECIALTIES[0].name);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const formatChilePhone = (val: string) => {
    // Keep only numbers
    const clean = val.replace(/\D/g, '');
    // If starts with 569, keep as is, otherwise format
    if (clean.length <= 8) {
      return clean.replace(/(\d{4})(\d{0,4})/, '$1 $2').trim();
    }
    return clean.slice(0, 8).replace(/(\d{4})(\d{4})/, '$1 $2');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Extract user part after +56 9
    const formatted = formatChilePhone(raw);
    setWhatsapp(formatted);
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor ingresa tu nombre');
      return;
    }
    const cleanPhone = whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 8) {
      setErrorMsg('Por favor ingresa los 8 dígitos de tu número celular');
      return;
    }

    const fullPhone = `+56 9 ${whatsapp}`;
    const message = encodeURIComponent(
      `Hola, soy ${name.trim()}. Quiero reservar una hora de ${specialty}. Mi número es ${fullPhone}.`
    );
    const targetUrl = `https://wa.me/56956065805?text=${message}`;

    // Track GTM dataLayer
    trackFormSubmit(specialty);

    // Inline success state
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#E6F7F6]/60 border-y border-[#00AFAA]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-[#00AFAA]/25">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00807C] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Te asistimos al instante</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A2E] tracking-tight">
              ¿Prefieres que te contactemos?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4A6366]">
              Déjanos tus datos y te abriremos una conversación directa por WhatsApp con todo preparado para confirmar tu cita.
            </p>
          </div>

          {submitted ? (
            <div 
              className="p-6 sm:p-8 bg-[#E6F7F6] border border-[#00AFAA]/30 rounded-2xl text-center flex flex-col items-center"
              role="alert"
            >
              <CheckCircle2 className="w-12 h-12 text-[#00807C] mb-3" aria-hidden="true" />
              <h3 className="text-xl font-bold text-[#0F2A2E] mb-2">
                ¡Solicitud lista!
              </h3>
              <p className="text-sm text-[#4A6366] max-w-md mb-4">
                Se abrió WhatsApp con tu mensaje prellenado para <strong>{specialty}</strong>. Nuestro equipo de admisión médica te responderá a la brevedad.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#00807C] hover:underline"
              >
                Enviar otra solicitud &rarr;
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
              {/* Field 1: Nombre */}
              <div>
                <label htmlFor="patient-name" className="block text-xs font-bold text-[#0F2A2E] uppercase tracking-wider mb-1.5">
                  Nombre completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <input
                    id="patient-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="Ej: Carolina Morales"
                    className="w-full pl-10 pr-4 py-3 bg-[#F7FAFA] border border-slate-200/80 rounded-xl text-sm text-[#0F2A2E] focus:outline-none focus:ring-2 focus:ring-[#00AFAA] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Field 2: WhatsApp (+56 9 ...) */}
              <div>
                <label htmlFor="patient-phone" className="block text-xs font-bold text-[#0F2A2E] uppercase tracking-wider mb-1.5">
                  Número de WhatsApp
                </label>
                <div className="relative flex rounded-xl border border-slate-200/80 overflow-hidden bg-[#F7FAFA] focus-within:ring-2 focus-within:ring-[#00AFAA] focus-within:border-transparent">
                  <span className="inline-flex items-center px-3 text-xs sm:text-sm font-semibold text-[#00807C] bg-[#E6F7F6] border-r border-slate-200/80">
                    +56 9
                  </span>
                  <input
                    id="patient-phone"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={handlePhoneChange}
                    placeholder="1234 5678"
                    maxLength={9}
                    className="w-full px-3.5 py-3 text-sm text-[#0F2A2E] bg-transparent focus:outline-none"
                  />
                </div>
                <span className="text-[11px] text-[#4A6366] mt-1 block">
                  Ingresa los 8 dígitos restantes de tu celular chileno
                </span>
              </div>

              {/* Field 3: Especialidad */}
              <div>
                <label htmlFor="patient-specialty" className="block text-xs font-bold text-[#0F2A2E] uppercase tracking-wider mb-1.5">
                  Especialidad requerida
                </label>
                <div className="relative">
                  <select
                    id="patient-specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F7FAFA] border border-slate-200/80 rounded-xl text-sm text-[#0F2A2E] focus:outline-none focus:ring-2 focus:ring-[#00AFAA] focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    {SPECIALTIES.map((spec) => (
                      <option key={spec.id} value={spec.name}>
                        {spec.name} ({spec.professionalsCount} prof.)
                      </option>
                    ))}
                    <option value="Medicina general">Medicina general</option>
                    <option value="Nutrición">Nutrición</option>
                    <option value="Reumatología">Reumatología</option>
                    <option value="Traumatología">Traumatología</option>
                    <option value="Ecografías y procedimientos">Ecografías y procedimientos</option>
                    <option value="Evaluación ADOS-2 (neurodiversidad)">Evaluación ADOS-2 (neurodiversidad)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {errorMsg && (
                <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                  {errorMsg}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-lg font-bold text-white bg-[#00AFAA] hover:bg-[#00807C] rounded-2xl shadow-sm transition-all duration-200 cursor-pointer min-h-[48px] btn-shine active:scale-[0.98]"
                >
                  <WhatsAppSvg className="w-5 h-5" />
                  <span>Quiero mi hora</span>
                  <Send className="w-4 h-4 ml-1 opacity-80" />
                </button>
              </div>

              <p className="text-[11px] text-[#4A6366] text-center">
                Al hacer clic se abrirá tu WhatsApp oficial directamente con nuestro equipo de atención.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
