"use client";

import { useState, useMemo } from "react";
import { Calculator, Users, Sparkles, Send, Wine, Disc, Heart, Palette, Info, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface BudgetCalculatorProps {
  onOpenBooking: () => void;
}

export default function BudgetCalculator({ onOpenBooking }: BudgetCalculatorProps) {
  const [eventType, setEventType] = useState<string>("aniversario");
  const [guestCount, setGuestCount] = useState<number>(60);
  const [selectedTier, setSelectedTier] = useState<string>("boteco-churrasco");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "bar-drinks",
    "bolo-doces",
  ]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const eventTypes = [
    { id: "aniversario", label: "Aniversário & Festa", multiplier: 1.0 },
    { id: "casamento", label: "Casamento & Noivado", multiplier: 1.15 },
    { id: "15-anos", label: "Festa de 15 Anos", multiplier: 1.1 },
    { id: "corporativo", label: "Corporativo / Confraternização", multiplier: 1.0 },
    { id: "churrasco", label: "Churrasco com Amigos", multiplier: 0.95 },
  ];

  const tiers = [
    {
      id: "coquetel-salgados",
      name: "Coquetel de Salgadinhos",
      basePrice: 68,
      description: "Salgados fritos na hora, folhados assados, refrigerantes, sucos, água e garçons.",
      popular: false,
    },
    {
      id: "boteco-churrasco",
      name: "Churrasco ou Comida de Boteco",
      basePrice: 98,
      description: "Churrasco na brasa ou mesa de boteco farta com petiscos quentes, guarnições e bebidas.",
      popular: true,
    },
    {
      id: "jantar-completo",
      name: "Banquete Jantar & Massas",
      basePrice: 138,
      description: "Entradas volantes, massas ao vivo ou prato principal nobre com acompanhamentos.",
      popular: false,
    },
  ];

  const addons = [
    {
      id: "bar-drinks",
      name: "Bar de Caipirinhas & Coquetéis de Frutas",
      pricePerPerson: 28,
      icon: Wine,
    },
    {
      id: "decor-completa",
      name: "Decoração da Mesa do Bolo & Painel",
      pricePerPerson: 22,
      icon: Palette,
    },
    {
      id: "som-dj",
      name: "Som Profissional, Luz de LED & DJ de Pista",
      pricePerPerson: 16,
      icon: Disc,
    },
    {
      id: "bolo-doces",
      name: "Mesa de Docinhos Gourmet & Bolo Recheado",
      pricePerPerson: 14,
      icon: Heart,
    },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculation = useMemo(() => {
    const currentType = eventTypes.find((t) => t.id === eventType) || eventTypes[0];
    const currentTier = tiers.find((t) => t.id === selectedTier) || tiers[1];

    const addonsCostPerPerson = selectedAddons.reduce((acc, addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      return acc + (addon ? addon.pricePerPerson : 0);
    }, 0);

    const pricePerPerson = Math.round(
      (currentTier.basePrice + addonsCostPerPerson) * currentType.multiplier
    );
    const totalEstimate = pricePerPerson * guestCount;

    return {
      pricePerPerson,
      totalEstimate,
      tierName: currentTier.name,
      eventTypeName: currentType.label,
    };
  }, [eventType, guestCount, selectedTier, selectedAddons]);

  const handleSendToWhatsApp = () => {
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

    const message = `Olá! Fiz uma simulação de estimativa no site da LUXE Eventos:%0A%0A` +
      `• *Tipo de Evento:* ${calculation.eventTypeName}%0A` +
      `• *Convidados:* ${guestCount} pessoas%0A` +
      `• *Cardápio Selecionado:* ${calculation.tierName}%0A` +
      `• *Adicionais:* ${selectedAddons.length} selecionados%0A` +
      `• *Estimativa:* R$ ${calculation.totalEstimate.toLocaleString("pt-BR")} (Média de R$ ${calculation.pricePerPerson}/pessoa)%0A%0A` +
      `Entendo que é um valor estimado de referência. Gostaria de agendar uma conversa/degustação para receber a proposta final!`;

    window.open(`https://wa.me/5511999998888?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-[#fbf9f5] text-[#171513] relative overflow-hidden border-y border-[#ede3d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d8c5b0] bg-[#f5ede2] text-[#8f5f27] text-xs font-semibold mb-2.5">
            <Calculator className="w-3.5 h-3.5 text-[#a37237]" />
            <span>SIMULADOR DE ESTIMATIVA ONLINE</span>
          </div>

          <h2 className="serif-display text-3xl sm:text-4xl font-normal tracking-tight text-[#171513] mb-2">
            Simule o Valor Estimado da Sua Festa
          </h2>

          {/* Explicit Clarification Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium text-center">
            <Info className="w-4 h-4 text-[#a37237] shrink-0" />
            <span>
              <strong>Atenção:</strong> Os valores abaixo são <u>meramente estimados</u> para referência. O orçamento final é personalizado conforme data, local e cardápio.
            </span>
          </div>
        </div>

        {/* Main Grid: Controls + Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Column (8 Cols) - Light and Crisp Container */}
          <div className="lg:col-span-8 space-y-5 bg-white p-5 sm:p-7 rounded-3xl border border-[#e8ded2] shadow-sm">
            {/* Step 1: Event Type */}
            <div>
              <label className="font-serif text-sm sm:text-base font-bold text-[#171513] block mb-2">
                1. Qual celebração você vai realizar?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEventType(type.id)}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all duration-150 border cursor-pointer ${
                      eventType === type.id
                        ? "bg-[#fbf4ea] border-[#a37237] text-[#171513] font-bold shadow-sm ring-1 ring-[#a37237]"
                        : "bg-[#faf7f2] border-[#e8ded2] text-[#6b6053] hover:bg-[#f3ece0]"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-serif text-sm sm:text-base font-bold text-[#171513] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#a37237]" />
                  <span>2. Quantos convidados você espera?</span>
                </label>
                <span className="font-serif text-lg font-bold text-[#a37237] bg-[#fbf4ea] px-3.5 py-0.5 rounded-lg border border-[#e5d4c0]">
                  {guestCount} pessoas
                </span>
              </div>

              <input
                type="range"
                min="20"
                max="350"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-[#e8ded2] rounded-lg appearance-none cursor-pointer accent-[#a37237]"
              />

              <div className="flex justify-between text-[11px] text-[#8c8072] mt-1">
                <span>20 convidados</span>
                <span>100 convidados</span>
                <span>350+ convidados</span>
              </div>
            </div>

            {/* Step 3: Menu Tiers */}
            <div>
              <label className="font-serif text-sm sm:text-base font-bold text-[#171513] block mb-2">
                3. Escolha o Padrão do Cardápio
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`relative p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      selectedTier === tier.id
                        ? "bg-[#fbf5ed] border-[#a37237] shadow-md ring-1 ring-[#a37237]"
                        : "bg-[#faf7f2] border-[#e8ded2] hover:border-[#cfbea9]"
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-2.5 left-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#a37237] text-white shadow-sm">
                        Mais Escolhido ★
                      </span>
                    )}

                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#171513] mb-1">
                        {tier.name}
                      </h4>
                      <p className="text-[11px] text-[#6b6053] leading-relaxed mb-3">
                        {tier.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#ebdccb] flex items-center justify-between">
                      <span className="text-[10px] text-[#8c8072]">Estimado em</span>
                      <span className="text-xs font-bold text-[#a37237]">
                        R$ {tier.basePrice}/pessoa
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Experiences */}
            <div>
              <label className="font-serif text-sm sm:text-base font-bold text-[#171513] block mb-2">
                4. Quer adicionar atrações complementares?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const Icon = addon.icon;

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-2.5 rounded-xl border flex items-center justify-between gap-2.5 transition-all duration-150 cursor-pointer ${
                        isChecked
                          ? "bg-[#fbf4ea] border-[#a37237] shadow-sm"
                          : "bg-[#faf7f2] border-[#e8ded2] text-[#6e6356] hover:bg-[#f3ece0]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isChecked
                              ? "bg-[#a37237] text-white"
                              : "bg-[#ebe2d5] text-[#7d7162]"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium text-[#171513]">
                          {addon.name}
                        </span>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-[#a37237] block">
                          +R$ {addon.pricePerPerson}
                        </span>
                        <span className="text-[9px] text-[#8c8072]">/pessoa</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (4 Cols) - Clean, High Contrast & Compact */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-[#171513] text-white p-5 sm:p-6 rounded-3xl shadow-xl border border-[#3b3329] relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-widest text-[#dfbe83] font-bold block mb-1">
                Estimativa Instantânea
              </span>
              <h3 className="serif-display text-xl font-normal text-white mb-4">
                Resumo da Sua Simulação
              </h3>

              {/* Items Breakdown */}
              <div className="space-y-2 pb-4 border-b border-[#362f25] text-xs">
                <div className="flex justify-between text-[#c4b9aa]">
                  <span>Evento:</span>
                  <span className="text-white font-medium">{calculation.eventTypeName}</span>
                </div>
                <div className="flex justify-between text-[#c4b9aa]">
                  <span>Convidados:</span>
                  <span className="text-white font-medium">{guestCount} pessoas</span>
                </div>
                <div className="flex justify-between text-[#c4b9aa]">
                  <span>Cardápio:</span>
                  <span className="text-white font-medium truncate max-w-[140px] text-right">{calculation.tierName}</span>
                </div>
                <div className="flex justify-between text-[#c4b9aa]">
                  <span>Adicionais:</span>
                  <span className="text-[#dfbe83] font-medium">{selectedAddons.length} selecionados</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="py-4 border-b border-[#362f25]">
                <div className="text-[10px] uppercase tracking-wider text-[#9e907f] mb-0.5">
                  Valor Médio Estimado por Pessoa
                </div>
                <div className="serif-display text-2xl font-bold text-[#dfbe83] mb-3">
                  R$ {calculation.pricePerPerson}{" "}
                  <span className="text-xs font-normal text-[#9e907f]">/ pessoa</span>
                </div>

                <div className="text-[10px] uppercase tracking-wider text-[#9e907f] mb-0.5">
                  Total Estimado da Festa
                </div>
                <div className="serif-display text-3xl font-bold text-white tracking-tight">
                  R$ {calculation.totalEstimate.toLocaleString("pt-BR")}
                </div>
                <span className="text-[10px] text-[#9c8e7e] block mt-1 leading-snug">
                  *Valor puramente estimado de referência. Não substitui o orçamento formal com cardápio detalhado.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-2.5">
                <button
                  onClick={handleSendToWhatsApp}
                  className="btn-luxe w-full !py-3 text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar no WhatsApp</span>
                </button>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-full border border-[#443a2d] text-xs font-semibold text-[#d4c8b8] hover:text-white hover:border-[#dfbe83] transition-colors bg-white/5 cursor-pointer"
                >
                  Agendar Degustação sem Compromisso
                </button>
              </div>

              {submitted && (
                <div className="mt-3 p-2.5 rounded-xl bg-[#2a3826] border border-[#4e7542] text-[11px] text-[#bce8b0] text-center">
                  ✓ Estimativa enviada! Em breve entraremos em contato.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
