"use client";

import { useState } from "react";
import { EVENT_SERVICES, ServiceItem } from "@/data/siteData";
import { Users, Award, Check, X, Sparkles, Calendar } from "lucide-react";

interface ExperiencesProps {
  onSelectExperience?: (exp: ServiceItem) => void;
  onOpenBooking: () => void;
}

export default function Experiences({ onOpenBooking }: ExperiencesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#ffffff] relative">
      {/* Top Section Header - Honoring Layout 1 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-[#a37237] font-semibold mb-3 block">
          ESTRUTURA COMPLETA
        </span>
        <h2 className="serif-display text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight mb-6">
          Nossos Serviços para Sua Festa
        </h2>
        <p className="sans-body text-sm sm:text-base text-[#61594f] leading-relaxed font-light max-w-2xl mx-auto">
          Cuidamos de tudo o que sua celebração precisa para ser inesquecível: da comida quentinha e saborosa até a decoração, o som da pista e o bar de coquetéis.
        </p>
      </div>

      {/* Alternating Editorial Rows - Exact Match to Layout 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {EVENT_SERVICES.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Column */}
              <div
                className={`img-luxe-frame rounded-2xl shadow-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#f0eae1] ${
                  isEven ? "lg:col-start-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Column */}
              <div
                className={`flex flex-col items-start ${
                  isEven ? "lg:col-start-1" : ""
                }`}
              >
                <span className="text-xs uppercase tracking-[0.25em] text-[#a37237] font-semibold mb-3">
                  {service.tag}
                </span>

                <h3 className="serif-display text-3xl sm:text-4xl text-[#171513] font-normal tracking-tight mb-5">
                  {service.title}
                </h3>

                <p className="sans-body text-sm sm:text-base text-[#575046] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlight Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f2ec] text-[#705e4c] text-xs font-medium border border-[#e3d8cb]">
                    <Users className="w-3.5 h-3.5 text-[#a37237]" />
                    {service.capacity}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f2ec] text-[#705e4c] text-xs font-medium border border-[#e3d8cb]">
                    <Award className="w-3.5 h-3.5 text-[#a37237]" />
                    {service.idealFor}
                  </span>
                </div>

                {/* Bronze Action Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="btn-luxe cursor-pointer"
                >
                  SAIBA MAIS
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl bg-[#fdfbf7] rounded-3xl shadow-2xl overflow-hidden border border-[#d8ccbc] max-h-[90vh] flex flex-col">
            <div className="relative h-48 sm:h-64 shrink-0 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/40 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#dfbe83] font-semibold mb-1 block">
                  {selectedService.tag}
                </span>
                <h3 className="serif-display text-2xl sm:text-3xl font-normal text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="serif-display text-lg text-[#171513] font-semibold mb-2">
                  Como Funciona Este Serviço
                </h4>
                <p className="sans-body text-sm sm:text-base text-[#575046] leading-relaxed font-light">
                  {selectedService.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="serif-display text-lg text-[#171513] font-semibold mb-3">
                  Itens inclusos na contratação:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f5ede2] border border-[#e2d4c2] text-xs sm:text-sm text-[#4b4339]"
                    >
                      <Check className="w-4 h-4 text-[#a37237] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#faf5ed] border border-[#e8ddcd] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#7e7365] uppercase tracking-wider block">
                    Capacidade Recomendada
                  </span>
                  <span className="text-sm font-semibold text-[#171513]">
                    {selectedService.capacity}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#7e7365] uppercase tracking-wider block">
                    Perfil de Evento
                  </span>
                  <span className="text-sm font-semibold text-[#171513]">
                    {selectedService.idealFor}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e5d9ca] flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#cfbea9] text-xs font-semibold text-[#5a5044] hover:bg-[#eae0d1] transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenBooking();
                  }}
                  className="btn-luxe w-full sm:w-auto text-xs !py-3 !px-7 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Incluir no Meu Orçamento</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
