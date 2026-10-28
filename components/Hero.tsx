"use client";

import { Sparkles, ArrowRight, Utensils, HeartHandshake, CheckCircle2 } from "lucide-react";
import { TRUST_BADGES } from "@/data/siteData";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#141210]">
      {/* Background with layered gradients and event atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85"
          alt="Celebração e Festa Inesquecível"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/60 to-[#141210]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#25201b]/80 backdrop-blur-md mb-6 animate-fade-in shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#dfbe83]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#dfbe83] font-semibold">
            Tudo Para a Sue Evento em um Só Lugar • Buffet, Decoração & Som
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#fbf8f2] tracking-tight max-w-4xl leading-[1.15] mb-6">
          O evento dos Seus Sonhos,{" "}
          <span className="italic font-serif gold-gradient-text font-normal block sm:inline">
            com Perfeição e Total Tranquilidade
          </span>
        </h1>

        {/* Subtitle */}
        <p className="sans-body text-base sm:text-lg md:text-xl text-[#d4cbbe] max-w-2xl font-light leading-relaxed mb-8">
          Buffet farto e saboroso, decoração acolhedora, som, iluminação e equipe dedicada para aniversários, casamentos e eventos corporativos.
        </p>

        {/* Bullet points of ease */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e5ddcf] mb-10">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#dfbe83]" />
            <span>Salgados fritos na hora</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#dfbe83]" />
            <span>Mesa de bolo decorada</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#dfbe83]" />
            <span>Parcelamento em até 12x</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#packages"
            className="btn-luxe w-full sm:w-auto text-sm !py-3.5 !px-8 shadow-2xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Ver Pacotes Prontos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#calculator"
            className="w-full sm:w-auto text-sm uppercase tracking-[0.16em] font-semibold text-[#f0e9dc] hover:text-[#dfbe83] border border-[#c5a059]/50 hover:border-[#dfbe83] py-3.5 px-7 rounded-full transition-all duration-300 bg-[#25201a]/60 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#c5a059]" />
            <span>Simulador de Orçamento</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto text-xs uppercase tracking-widest text-[#dfbe83] hover:text-white underline underline-offset-4 font-semibold py-2"
          >
            Agendar Degustação Grátis
          </button>
        </div>

        {/* Live Metrics Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl border border-[#3b342b] bg-[#1a1714]/85 backdrop-blur-md shadow-2xl">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-2 border-r last:border-r-0 border-[#2f2922]"
            >
              <span className="serif-display text-2xl sm:text-3xl font-bold text-[#dfbe83] tracking-wide mb-1">
                {badge.number}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#a89d8f] text-center font-medium leading-tight">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Mask */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fbf9f5] to-transparent pointer-events-none" />
    </section>
  );
}
