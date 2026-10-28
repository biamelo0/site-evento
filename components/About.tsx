"use client";

import { useState } from "react";
import { CheckCircle2, Award, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#fbf9f5] relative overflow-hidden">
      {/* Decorative Subtle Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#a37237] font-semibold mb-3">
              NOSSA HISTÓRIA & DEDICAÇÃO
            </span>

            <h2 className="serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171513] tracking-tight uppercase mb-8">
              SOBRE NÓS
            </h2>

            <p className="sans-body text-sm sm:text-base text-[#575046] leading-relaxed mb-6 font-light max-w-xl">
              Nascemos com um sonho simples e poderoso: <strong>fazer com que você aproveite a sua própria festa como um verdadeiro convidado</strong>. Somos uma empresa de eventos jovem, ágil e em pleno crescimento, que une o amor pela culinária farta e saborosa a uma produção visualmente encantadora.
            </p>

            <p className="sans-body text-sm sm:text-base text-[#575046] leading-relaxed mb-8 font-light max-w-xl">
              Seja um aniversário descontraído com churrasco ou comida de boteco, uma festa de 15 anos cheia de brilho, ou um casamento emocionante, tratamos cada comemoração com dedicação total e carinho em cada detalhe.
            </p>

            {/* Key Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mb-8">
              <div className="flex items-center gap-2.5 text-xs text-[#2b2722] font-medium">
                <HeartHandshake className="w-4 h-4 text-[#a37237] shrink-0" />
                <span>Atendimento Próximo e Humanizado</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#2b2722] font-medium">
                <Sparkles className="w-4 h-4 text-[#a37237] shrink-0" />
                <span>Tudo em um Único Pacote Completo</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#2b2722] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#a37237] shrink-0" />
                <span>Comida Quentinha e Farta Servida à Vontade</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#2b2722] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#a37237] shrink-0" />
                <span>Contrato Claro e Pagamento Facilitado</span>
              </div>
            </div>

            {/* Read More button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="btn-luxe-outline cursor-pointer"
              >
                {showFullStory ? "MENOS DETALHES" : "SAIBA MAIS"}
              </button>

              <button
                onClick={onOpenBooking}
                className="text-xs uppercase tracking-widest text-[#a37237] hover:text-[#784d1a] font-semibold underline underline-offset-4 cursor-pointer"
              >
                Agendar Degustação
              </button>
            </div>

            {/* Expandable Story Section */}
            {showFullStory && (
              <div className="mt-8 p-6 rounded-2xl bg-[#f4ede2] border border-[#d9ccba] text-xs sm:text-sm text-[#4b443c] leading-relaxed animate-fade-in">
                <h4 className="serif-display text-base font-bold text-[#171513] mb-2 uppercase">
                  O Que Nos Move
                </h4>
                <p className="mb-3">
                  Sabemos o quanto uma família ou empresa poupa e planeja para celebrar um marco especial. Por isso, não somos apenas fornecedores frios: somos os parceiros que chegam cedo para montar tudo com cuidado, testar o som, fritar os salgados no momento certo e garantir que a pista de dança esteja animada.
                </p>
                <p>
                  Convidamos você a vir nos visitar, provar nossos salgados, doces e conhecer de perto o carinho com que preparamos cada celebração.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Visual Presentation */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 border border-[#c5a059]/30 rounded-3xl -z-10 translate-x-2 translate-y-2 pointer-events-none" />

              <div className="img-luxe-frame rounded-2xl shadow-2xl overflow-hidden aspect-[4/5] bg-[#e8e2d8]">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80"
                  alt="Decoração de Evento Encantadora"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Seal */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 bg-white/95 backdrop-blur-md border border-[#d4c5b3] rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f4ede2] flex items-center justify-center text-[#a37237]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="serif-display font-bold text-sm text-[#171513] block">
                    Mais de 500 Eventos
                  </span>
                  <span className="text-[11px] text-[#7a6f63]">
                    100% de clientes satisfeitos e recomendando
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
