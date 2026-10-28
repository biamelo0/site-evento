"use client";

import { PartyPopper, ArrowRight, Sparkles } from "lucide-react";

interface OrderOnlineBannerProps {
  onOpenBooking: () => void;
}

export default function OrderOnlineBanner({ onOpenBooking }: OrderOnlineBannerProps) {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2000&q=85"
          alt="Kit Festa e Comemoração em Casa"
          className="w-full h-full object-cover object-center filter brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Floating Centered White Card from Layout 1 */}
        <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/60 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#f6eee4] flex items-center justify-center text-[#a37237] mb-4 shadow-sm">
            <PartyPopper className="w-6 h-6" />
          </div>

          <span className="text-[10px] uppercase font-bold tracking-widest text-[#a37237] mb-1">
            KITS FESTA & SOB ENCOMENDA
          </span>

          <h3 className="serif-display text-2xl sm:text-3xl font-bold text-[#171513] mb-3">
            Vai Comemorar em Casa?
          </h3>

          <p className="sans-body text-xs sm:text-sm text-[#61574d] font-light leading-relaxed mb-6">
            Peça nossos Kits de Festa Prontos: centos de salgadinhos crocantes fritos na hora, bolo fofinho recheado, docinhos tradicionais e descartáveis entregues no seu endereço com todo carinho.
          </p>

          <button
            onClick={onOpenBooking}
            className="btn-luxe w-full !py-3.5 !px-8 text-xs cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Pedir Kit Festa / Encomenda</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
