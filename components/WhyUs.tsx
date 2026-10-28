"use client";

import { WHY_CHOOSE_US } from "@/data/siteData";
import { CheckCircle2, ShieldCheck, HeartHandshake, UtensilsCrossed, CreditCard, Sparkles } from "lucide-react";

interface WhyUsProps {
  onOpenBooking: () => void;
}

export default function WhyUs({ onOpenBooking }: WhyUsProps) {
  const icons = [
    HeartHandshake,
    UtensilsCrossed,
    CreditCard,
    Sparkles,
  ];

  return (
    <section className="py-24 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#a37237] font-semibold mb-3 block">
            TRANQUILIDADE PARA O ANFITRIÃO
          </span>
          <h2 className="serif-display text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight mb-4">
            Por que Fazer Sua Festa Conosco?
          </h2>
          <p className="sans-body text-sm sm:text-base text-[#61574d] font-light leading-relaxed">
            Somos uma equipe dedicada e apaixonada por realizar sonhos. Cuidamos de cada detalhe com carinho de quem está crescendo junto com cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[idx] || CheckCircle2;

            return (
              <div
                key={idx}
                className="bg-[#faf6f0] p-7 rounded-3xl border border-[#ebdccb] hover:border-[#b88646] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#dfbe83]/50 flex items-center justify-center text-[#a37237] mb-5 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="serif-display text-xl font-bold text-[#171513] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="sans-body text-xs sm:text-sm text-[#665b4f] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#ede2d2] flex items-center gap-1.5 text-xs text-[#a37237] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Compromisso Garantido</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="btn-luxe text-xs !py-3.5 !px-8 cursor-pointer"
          >
            Agendar Degustação sem Compromisso
          </button>
        </div>
      </div>
    </section>
  );
}

