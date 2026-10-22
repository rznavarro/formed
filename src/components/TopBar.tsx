import { Phone } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

export function TopBar() {
  return (
    <div className="hidden lg:block bg-[#F7FAFA] border-b border-slate-200/70 text-xs text-[#4A6366] py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="tel:+56229148748"
            onClick={() => trackPhoneClick('+56 2 2914 8748')}
            className="inline-flex items-center gap-1.5 hover:text-[#00807C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFAA]"
          >
            <Phone className="w-3.5 h-3.5 text-[#00AFAA]" aria-hidden="true" />
            <span>Mesa central <strong>+56 2 2914 8748</strong></span>
          </a>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <a
            href="tel:+56999208368"
            onClick={() => trackPhoneClick('+56 9 9920 8368')}
            className="inline-flex items-center gap-1.5 hover:text-[#00807C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFAA]"
          >
            <Phone className="w-3.5 h-3.5 text-[#00AFAA]" aria-hidden="true" />
            <span>Concepción <strong>+56 9 9920 8368</strong></span>
          </a>
        </div>
        <div className="flex items-center gap-2 font-medium text-[#0F2A2E]">
          <span>Fonasa, Isapre y particular</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-[#00807C]">Providencia · Santiago Centro · Concepción · Online</span>
        </div>
      </div>
    </div>
  );
}
