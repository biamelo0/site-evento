"use client";

import { useState } from "react";
import { X, Calendar, Sparkles, Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Casamento de Luxo",
    guests: "80",
    date: "",
    location: "São Paulo / SP",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#b58342", "#dfbe83", "#ffffff", "#8c6227"],
      });
    } catch (err) {
      // safe fallback
    }

    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `Olá LUXE Catering! Gostaria de solicitar um orçamento formal:%0A%0A` +
      `• *Nome:* ${formData.name}%0A` +
      `• *Contato:* ${formData.phone} / ${formData.email}%0A` +
      `• *Tipo de Evento:* ${formData.eventType}%0A` +
      `• *Convidados:* ${formData.guests} pessoas%0A` +
      `• *Data Prevista:* ${formData.date || "A definir"}%0A` +
      `• *Local:* ${formData.location}%0A` +
      `• *Observações:* ${formData.notes || "Nenhuma"}%0A%0A` +
      `Aguardo o retorno do concierge!`;

    window.open(`https://wa.me/5511999998888?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#fdfbf7] rounded-3xl shadow-2xl border border-[#d6c7b3] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#171513] text-white p-6 sm:p-8 flex items-center justify-between border-b border-[#3b3227]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-bold block mb-1">
              Atendimento Concierge VIP
            </span>
            <h3 className="serif-display text-2xl sm:text-3xl font-normal text-white">
              Solicitar Orçamento Exclusivo
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f4ede2] border border-[#c5a059] flex items-center justify-center text-[#a37237] mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="serif-display text-2xl font-bold text-[#171513]">
                Solicitação Recebida com Sucesso!
              </h4>

              <p className="sans-body text-sm text-[#5c5245] max-w-md mx-auto leading-relaxed">
                Nosso Maître e equipe de Sommeliers entrarão em contato em até 4 horas úteis com a minuta personalizada do seu menu e opções de datas para degustação.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="btn-luxe w-full sm:w-auto text-xs !py-3 !px-6 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Acelerar Atendimento via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#cfbea9] text-xs font-semibold text-[#5a5044] hover:bg-[#eae0d1] transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#4d4439] font-semibold block mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Dra. Mariana Albuquerque"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8ccbc] bg-white text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#4d4439] font-semibold block mb-1.5">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 98765-4321"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8ccbc] bg-white text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#4d4439] font-semibold block mb-1.5">
                    E-mail Corporativo ou Pessoal *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contato@exemplo.com.br"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8ccbc] bg-white text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#4d4439] font-semibold block mb-1.5">
                    Tipo de Evento
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8ccbc] bg-white text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                  >
                    <option value="Aniversário / Festa de Família">Aniversário / Festa de Família</option>
                    <option value="Casamento dos Sonhos">Casamento dos Sonhos</option>
                    <option value="Festa de 15 Anos / Debutante">Festa de 15 Anos / Debutante</option>
                    <option value="Churrasco com a Turma">Churrasco com a Turma</option>
                    <option value="Confraternização de Empresa">Confraternização de Empresa</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#4d4439] font-semibold block mb-1.5">
                    Qtd. Convidados
                  </label>
                  <input
                    type="number"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="80"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8ccbc] bg-white text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#4d4439] font-semibold block mb-1.5">
                    Data Estimada
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8ccbc] bg-white text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#4d4439] font-semibold block mb-1.5">
                    Cidade / Espaço
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="São Paulo ou Interior"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8ccbc] bg-white text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#4d4439] font-semibold block mb-1.5">
                  Desejos Especiais ou Restrições Alimentares
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ex: Preferência por harmonização de vinhos franceses, convidados com intolerância a lactose, montagem de ilha de ostras..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d8ccbc] bg-white text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-[#807262] text-center sm:text-left">
                  🔒 Garantia de confidencialidade e atendimento discreto.
                </span>
                <button
                  type="submit"
                  className="btn-luxe w-full sm:w-auto text-xs !py-3 !px-8 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Enviar Solicitação VIP</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

