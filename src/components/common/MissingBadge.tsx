import { AlertCircle } from 'lucide-react';

interface MissingBadgeProps {
  label: string;
  className?: string;
  compact?: boolean;
}

/**
 * Visual badge for client placeholders [FALTA: ...]
 * Kept clearly visible, unmistakable, and easy to replace.
 */
export function MissingBadge({ label, className = "", compact = false }: MissingBadgeProps) {
  if (compact) {
    return (
      <span 
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-200/80 rounded-lg ${className}`}
        title="Dato pendiente de confirmación por el cliente"
      >
        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
        <span className="font-mono text-[11px]">{label}</span>
      </span>
    );
  }

  return (
    <div 
      className={`p-3 bg-amber-50/90 border border-dashed border-amber-300 rounded-xl text-amber-900 text-xs flex items-start gap-2.5 ${className}`}
      role="note"
      aria-label="Información pendiente del cliente"
    >
      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex-1">
        <span className="font-semibold text-amber-950 block text-[11px] uppercase tracking-wider mb-0.5">
          Marcador de cliente
        </span>
        <span className="font-mono font-medium text-amber-900">{label}</span>
      </div>
    </div>
  );
}

/**
 * Image placeholder for missing images with #E6F7F6 background
 */
export function MissingImagePlaceholder({
  label,
  aspectRatio = "aspect-video",
  className = "",
}: {
  label: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div 
      className={`w-full ${aspectRatio} bg-[#E6F7F6] border-2 border-dashed border-[#00AFAA]/40 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-[#0F2A2E] ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-white/80 shadow-sm flex items-center justify-center mb-3 text-[#00807C]">
        <AlertCircle className="w-6 h-6" />
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-[#00807C] mb-1">
        Espacio para fotografía
      </span>
      <p className="text-sm font-semibold text-[#0F2A2E] max-w-sm">
        {label}
      </p>
      <span className="mt-2 inline-block text-[11px] font-mono text-[#4A6366] bg-white/70 px-2 py-0.5 rounded">
        Fondo #E6F7F6 · Placeholder configurable
      </span>
    </div>
  );
}
