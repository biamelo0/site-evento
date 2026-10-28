"use client";

import { PACKAGES, EventPackage } from "@/data/siteData";
import { Check, Sparkles, HeartHandshake, ArrowRight, Star } from "lucide-react";

interface EventPackagesProps {
  onSelectPackage: (pkg: EventPackage) => void;
  onOpenBooking: () => void;
}

export default function EventPackages({ onSelectPackage, onOpenBooking }: EventPackagesProps) {
  return (
    <section id="packages" className="py-24 sm:py-32 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6eee4] border border-[#e0cbba] text-[#9c6a30] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PACOTES TUDO INCLUSO • SEM SURPRESAS</span>
          </div>

          <h2 className="serif-display text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight mb-4">
            Escolha o Pacote Ideal para o Seu Evento
          </h2>

          <p className="sans-body text-sm sm:text-base text-[#665c52] font-light leading-relaxed">
            Economize tempo e dinheiro contratando buffet, decoração, som e equipe em um único pacote com condições de pagamento facilitadas.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border ${
                pkg.popular
                  ? "bg-[#171513] text-white border-[#b88646] shadow-2xl scale-[1.02] ring-2 ring-[#dfbe83]/50"
                  : "bg-[#fcfaf7] text-[#171513] border-[#e8ded2] hover:border-[#b88646] hover:shadow-xl"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      pkg.popular
                        ? "bg-[#b88646] text-white shadow-md"
                        : "bg-[#e8ded2] text-[#4d4439]"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <h3
                  className={`serif-display text-2xl font-bold mb-1 mt-2 ${
                    pkg.popular ? "text-white" : "text-[#171513]"
                  }`}
                >
                  {pkg.name}
                </h3>

                <p
                  className={`text-xs mb-4 line-clamp-2 ${
                    pkg.popular ? "text-[#cfc4b4]" : "text-[#6b6155]"
                  }`}
                >
                  {pkg.subtitle}
                </p>

                {/* Price Display */}
                <div
                  className={`p-3.5 rounded-2xl mb-6 ${
                    pkg.popular ? "bg-[#25201a] border border-[#443829]" : "bg-[#f5ede0] border border-[#e5d5c0]"
                  }`}
                >
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider block ${
                      pkg.popular ? "text-[#c5a059]" : "text-[#8a5d26]"
                    }`}
                  >
                    Investimento
                  </span>
                  <span
                    className={`serif-display text-lg font-bold block ${
                      pkg.popular ? "text-[#dfbe83]" : "text-[#171513]"
                    }`}
                  >
                    {pkg.priceStart}
                  </span>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2.5 mb-6 text-xs">
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider block mb-2 ${
                      pkg.popular ? "text-[#c5a059]" : "text-[#8a5d26]"
                    }`}
                  >
                    O que está incluso:
                  </span>
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          pkg.popular ? "text-[#dfbe83]" : "text-[#a37237]"
                        }`}
                      />
                      <span
                        className={`leading-tight ${
                          pkg.popular ? "text-[#dcd3c5]" : "text-[#4d4439]"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-inherit/20 mt-4">
                <span
                  className={`text-[10px] block mb-3 font-medium ${
                    pkg.popular ? "text-[#9e9180]" : "text-[#807262]"
                  }`}
                >
                  💡 Recomendado para: {pkg.recommendedFor}
                </span>

                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                    pkg.popular
                      ? "btn-luxe !py-3 w-full"
                      : "bg-[#171513] text-white hover:bg-[#a37237]"
                  }`}
                >
                  <span>Pedir Orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

