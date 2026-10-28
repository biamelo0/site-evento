"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  UtensilsCrossed,
  Palette,
  Music,
  Wine,
  Cake,
  GlassWater,
  Users,
  ClipboardCheck,
  Check,
  PartyPopper
} from "lucide-react";
import confetti from "canvas-confetti";

interface ChecklistItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  iconBorder: string;
}

export default function EventPlannerChecklist() {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "buffet",
    "decor",
    "drinks",
    "staff",
  ]);

  const items: ChecklistItem[] = [
    {
      id: "buffet",
      title: "Buffet Farto & Saboroso",
      subtitle: "Salgadinhos fritos na hora, churrasco ou jantar completo",
      icon: UtensilsCrossed,
      iconBg: "bg-[#fcf4e8]",
      iconColor: "text-[#a37237]",
      iconBorder: "border-[#e8d5be]",
    },
    {
      id: "decor",
      title: "Decoração & Mesa do Bolo",
      subtitle: "Painel para fotos, flores, suportes finos e iluminação cênica",
      icon: Palette,
      iconBg: "bg-[#fdf2ef]",
      iconColor: "text-[#b85d43]",
      iconBorder: "border-[#f5d5cc]",
    },
    {
      id: "som",
      title: "Som, Luz & DJ de Pista",
      subtitle: "Música animada, repertório personalizado e microfones",
      icon: Music,
      iconBg: "bg-[#f0f3fd]",
      iconColor: "text-[#4a63be]",
      iconBorder: "border-[#d4ddfb]",
    },
    {
      id: "bar",
      title: "Bar de Caipirinhas & Drinks",
      subtitle: "Bartenders preparando coquetéis com frutas e sem álcool",
      icon: Wine,
      iconBg: "bg-[#edf8f2]",
      iconColor: "text-[#2e7d56]",
      iconBorder: "border-[#ccebda]",
    },
    {
      id: "doces",
      title: "Bolo Recheado & Docinhos",
      subtitle: "Brigadeiros gourmet, beijinhos e bolo molhadinho",
      icon: Cake,
      iconBg: "bg-[#fef4ec]",
      iconColor: "text-[#bf672b]",
      iconBorder: "border-[#fadbc7]",
    },
    {
      id: "drinks",
      title: "Bebidas Servidas à Vontade",
      subtitle: "Refrigerantes de primeira linha, sucos naturais e água",
      icon: GlassWater,
      iconBg: "bg-[#eff8fd]",
      iconColor: "text-[#267396]",
      iconBorder: "border-[#cee8f7]",
    },
    {
      id: "staff",
      title: "Garçons, Copeiros & Equipe",
      subtitle: "Profissionais uniformizados servindo seus convidados",
      icon: Users,
      iconBg: "bg-[#f4f2ee]",
      iconColor: "text-[#54493e]",
      iconBorder: "border-[#dfd8cd]",
    },
    {
      id: "assessoria",
      title: "Assessoria & Coordenação",
      subtitle: "Organização do cronograma para você apenas curtir a festa",
      icon: ClipboardCheck,
      iconBg: "bg-[#fbf4df]",
      iconColor: "text-[#997426]",
      iconBorder: "border-[#eedbaa]",
    },
  ];

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSendChecklist = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#b58342", "#dfbe83", "#ffffff", "#8c6227"],
      });
    } catch (e) {
      // safe fallback
    }

    const selectedTitles = items
      .filter((i) => selectedItems.includes(i.id))
      .map((i) => `• ${i.title}`)
      .join("%0A");

    const message = `Olá! Montei o checklist do meu evento pelo site:%0A%0A` +
      `*Itens que preciso para a minha festa:*%0A${selectedTitles}%0A%0A` +
      `Total de itens selecionados: ${selectedItems.length}. Gostaria de solicitar uma proposta detalhada para a minha data!`;

    window.open(`https://wa.me/5511999998888?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 sm:py-28 bg-[#f5ede0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#dfbe83] text-[#8c5e26] text-xs font-semibold mb-3 shadow-sm">
            <PartyPopper className="w-4 h-4 text-[#a37237]" />
            <span>FERRAMENTA INTERATIVA • MONTE EM 1 MINUTO</span>
          </div>

          <h2 className="serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171513] mb-4">
            O que você precisa para o seu evento?
          </h2>

          <p className="sans-body text-sm sm:text-base text-[#615547] font-light leading-relaxed">
            Clique e marque os serviços que você deseja para a sua festa. Cuidamos de cada etapa com pontualidade e dedicação.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {items.map((item) => {
            const isChecked = selectedItems.includes(item.id);
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`group p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isChecked
                    ? "bg-white border-[#b88646] shadow-lg ring-2 ring-[#b88646]/20 -translate-y-0.5"
                    : "bg-[#fcfaf7] border-[#e2d5c3] hover:border-[#b88646]/60 hover:bg-white text-[#7a6f62]"
                }`}
              >
                {/* Top Row: Refined Vector Icon Badge + Custom Checkbox */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shadow-sm ${item.iconBg} ${item.iconColor} ${item.iconBorder}`}
                  >
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Modern Circular Checkbox */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isChecked
                        ? "bg-[#a37237] text-white shadow-sm scale-105"
                        : "border-2 border-[#cfbea9] group-hover:border-[#a37237] bg-white/70"
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h4
                    className={`font-serif text-base font-bold mb-1 transition-colors ${
                      isChecked ? "text-[#171513]" : "text-[#5e5345] group-hover:text-[#171513]"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#7d7162] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary Bar */}
        <div className="bg-[#171513] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3d3326]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#b88646]/20 border border-[#b88646]/40 flex items-center justify-center text-[#dfbe83] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-[#c5a059] font-bold uppercase tracking-wider block">
                {selectedItems.length} de {items.length} itens selecionados
              </span>
              <h3 className="serif-display text-xl sm:text-2xl font-normal text-white">
                {selectedItems.length >= 4
                  ? "Tudo pronto! Sua seleção compõe uma estrutura completa e sem preocupações."
                  : "Selecione os itens desejados para montar a estrutura ideal da sua celebração."}
              </h3>
            </div>
          </div>

          <button
            onClick={handleSendChecklist}
            className="btn-luxe whitespace-nowrap text-xs !py-3.5 !px-8 shadow-xl flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Consultar Valor no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
