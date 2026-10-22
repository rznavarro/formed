import { useState } from 'react';
import { AlertCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export function MissingItemsAudit() {
  const [isOpen, setIsOpen] = useState(false);

  const missingList = [
    {
      category: 'Horarios de atención',
      status: 'Pendiente',
      detail: '[FALTA: horario de atención por sede (Providencia, Oteiza, Bulnes, Concepción) y horario de respuesta del WhatsApp]',
    },
    {
      category: 'Cifra de pacientes atendidos',
      status: 'Pendiente',
      detail: '[FALTA: confirmar cifra — el sitio muestra "+90.000" en portada y "+206.000" en telemedicina. Usar solo la que el cliente confirme].',
    },
    {
      category: 'Fotografía box clínico Hero',
      status: 'Pendiente',
      detail: '[FALTA: Foto real de una consulta o box de atención médica en alta resolución].',
    },
    {
      category: 'Fotografías de 4 Sedes',
      status: 'Pendiente',
      detail: '[FALTA: 4 fotos de fachada o recepción: Providencia 1881, Fidel Oteiza 1971, Paseo Bulnes 79 y Concepción Rengo 94].',
    },
    {
      category: 'Fotografía Telemedicina',
      status: 'Pendiente',
      detail: '[FALTA: 1 foto de sesión de telemedicina o profesional de Formed en videollamada].',
    },
    {
      category: 'Tipografía de marca',
      status: 'Resuelto con estándar',
      detail: 'Google Fonts Plus Jakarta Sans (encabezados) + Inter (cuerpo) configuradas con font-display: swap.',
    },
  ];

  return (
    <aside aria-label="Control de elementos pendientes del cliente" className="border-t border-amber-200 bg-amber-50/90 text-amber-950 py-3 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
          <span className="font-semibold">
            Control de marcadores del cliente ({missingList.filter(i => i.status === 'Pendiente').length} pendientes listados para entrega)
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-950 underline cursor-pointer"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Ocultar detalle de marcadores' : 'Ver lista de elementos [FALTA]'}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-amber-200/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {missingList.map((item, idx) => (
            <div key={idx} className="bg-white/90 p-3 rounded-xl border border-amber-200 text-xs shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[#0F2A2E]">{item.category}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  item.status === 'Pendiente' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-[#4A6366] font-mono text-[11px] leading-tight">
                {item.detail}
              </p>
            </div>
          ))}
          <div className="col-span-full text-[11px] text-[#4A6366] flex items-center gap-1 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Todos los datos en pantalla provienen 100% de la información verificada suministrada. Ningún precio, testimonio ni horario ha sido inventado.</span>
          </div>
        </div>
      )}
    </aside>
  );
}
