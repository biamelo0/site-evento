"use client";

import { useState } from "react";
import { MENU_ITEMS, MenuItem } from "@/data/siteData";
import { Utensils, Sparkles, X, ChevronRight, UtensilsCrossed } from "lucide-react";

interface MenuSectionProps {
  onOpenBooking: () => void;
}

export default function MenuSection({ onOpenBooking }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: "all", label: "Cardápio Completo" },
    { id: "lanches", label: "Mini Lanches & Sanduíches" },
    { id: "salgados", label: "Salgadinhos Fritos & Assados" },
    { id: "doces", label: "Docinhos & Bolos de Festa" },
    { id: "boteco", label: "Petiscos & Mesa de Boteco" },
    { id: "bebidas", label: "Bar de Caipirinhas & Bebidas" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#f6f2ec] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#a37237] font-semibold mb-3 block">
            CARDÁPIOS FARTOS & DELICIOSOS
          </span>
          <h2 className="serif-display text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight uppercase mb-6">
            NOSSO CARDÁPIO
          </h2>
          <p className="sans-body text-sm sm:text-base text-[#61574d] font-light leading-relaxed">
            Comida saborosa, quentinha e preparada com ingredientes de primeira qualidade. Conheça as opções que fazem sucesso absoluto nas nossas festas e eventos.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#171513] text-[#fbf8f2] shadow-md"
                  : "bg-[#ece4d8] text-[#5c5245] hover:bg-[#ded2c2] hover:text-[#171513]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento / Masonry Grid of Dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#e2d5c5] flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#e8e0d5]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Dietary / Feature Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {item.tags.slice(0, 1).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#171513]/85 text-[#dfbe83] backdrop-blur-sm border border-[#c5a059]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#171513] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <ChevronRight className="w-4 h-4 text-[#a37237]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="serif-display text-lg font-semibold text-[#171513] group-hover:text-[#a37237] transition-colors mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="sans-body text-xs text-[#6e6356] font-light leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0e6d9] flex items-center justify-between text-[11px] text-[#8c7e6e]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Utensils className="w-3.5 h-3.5 text-[#a37237]" />
                    À vontade
                  </span>
                  <span className="text-[#a37237] font-semibold uppercase tracking-wider group-hover:underline">
                    Ver Detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#171513] via-[#241e19] to-[#171513] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-[#3d3429]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#dfbe83] shrink-0">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <div>
              <h3 className="serif-display text-xl sm:text-2xl font-normal text-[#fcf9f4]">
                Quer Provar Nossos Salgados e Pratos Antes de Fechar?
              </h3>
              <p className="sans-body text-xs sm:text-sm text-[#b8ab9a] font-light mt-1">
                Agende uma degustação com a nossa equipe! É sem compromisso e você experimenta o sabor real que seus convidados vão desfrutar.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-luxe text-xs !py-3 !px-7 whitespace-nowrap shadow-lg cursor-pointer"
          >
            Agendar Degustação
          </button>
        </div>
      </div>

      {/* Dish Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#fdfbf7] rounded-3xl shadow-2xl overflow-hidden border border-[#d8ccbc] max-h-[90vh] flex flex-col">
            <div className="relative h-64 shrink-0 overflow-hidden bg-[#e0d6c8]">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/40 to-transparent" />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {selectedItem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#dfbe83] text-[#171513]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="serif-display text-2xl sm:text-3xl font-normal text-white">
                  {selectedItem.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="serif-display text-base font-semibold text-[#171513] mb-2 uppercase tracking-wider">
                  Descrição & Ingredientes
                </h4>
                <p className="sans-body text-sm text-[#544d44] leading-relaxed font-light">
                  {selectedItem.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="p-4 rounded-2xl bg-[#f5ede2] border border-[#e2d5c3] flex items-start gap-3.5">
                <Utensils className="w-5 h-5 text-[#a37237] shrink-0 mt-0.5" />
                <div>
                  <span className="serif-display font-semibold text-xs uppercase tracking-wider text-[#171513] block">
                    Forma de Servir no Evento
                  </span>
                  <span className="text-xs sm:text-sm text-[#5c5245]">
                    {selectedItem.servingStyle}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-[#5c5245] bg-[#faf6ef] p-4 rounded-xl border border-[#ebdccb]">
                <div>
                  <span className="block font-semibold text-[#171513] mb-0.5">Reposição</span>
                  <span>Contínua durante as 4 horas de festa</span>
                </div>
                <div>
                  <span className="block font-semibold text-[#171513] mb-0.5">Equipe</span>
                  <span>Garçons uniformizados e atenciosos</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e5d9ca] flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#cfbea9] text-xs font-semibold text-[#5a5044] hover:bg-[#eae0d1] transition-colors"
                >
                  Voltar ao Cardápio
                </button>
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenBooking();
                  }}
                  className="btn-luxe w-full sm:w-auto text-xs !py-3 !px-7 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Quero Esse no Meu Evento</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
