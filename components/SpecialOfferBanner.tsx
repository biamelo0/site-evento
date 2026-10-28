"use client";

import { Sparkles, Gift, ArrowRight } from "lucide-react";

interface SpecialOfferBannerProps {
  onOpenBooking: () => void;
}

export default function SpecialOfferBanner({ onOpenBooking }: SpecialOfferBannerProps) {
  return (
    <div className="bg-gradient-to-r from-[#915f24] via-[#b88646] to-[#804e18] text-white py-3 px-4 shadow-md relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 animate-pulse">
            <Gift className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-bold text-xs sm:text-sm tracking-wide block">
              🎁 PROMOÇÃO DESTE MÊS: Fechando seu evento com a nossa equipe, GANHE a Ilha de Caipirinhas ou a Mesa de Café de saída de cortesia!
            </span>
            <span className="text-[11px] text-[#fbebd0] opacity-90 hidden md:inline">
              Válido para eventos de 2026/2027 contratados este mês. Vagas limitadas por data.
            </span>
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[#171513] hover:bg-black text-[#dfbe83] hover:text-white text-xs font-bold tracking-wider transition-all duration-200 flex items-center gap-1.5 shrink-0 shadow-lg cursor-pointer"
        >
          <span>Garantir Meu Bônus</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

