"use client";

import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#12100e] text-[#d4cbbe] pt-20 pb-12 border-t border-[#29231d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Monogram Banner - Honoring Image 2 Bottom */}
        <div className="flex flex-col items-center justify-center pb-16 border-b border-[#26201a] text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#c5a059] flex items-center justify-center text-[#dfbe83] font-serif font-bold text-2xl mb-4 bg-[#1f1a16] shadow-xl">
            L
          </div>
          <h3 className="serif-display text-2xl tracking-[0.25em] font-normal text-white uppercase mb-1">
            LUXE
          </h3>
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c5a059]">
            Alta Gastronomia & Catering para Eventos
          </span>
          <p className="sans-body text-xs text-[#8c8072] max-w-md mt-3 font-light">
            Elevando celebrações a experiências memoráveis com gastronomia de padrão internacional desde 2012.
          </p>
        </div>

        {/* 4 Columns from Image 1 Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-[#26201a]">
          {/* Col 1: About */}
          <div>
            <h4 className="serif-display text-base font-semibold text-white uppercase tracking-wider mb-4">
              Sobre Nós
            </h4>
            <p className="sans-body text-xs text-[#9c8f80] leading-relaxed mb-4 font-light">
              Especialistas em alta gastronomia francesa e contemporânea para casamentos suntuosos, galas corporativas e experiências Chef's Table sob medida.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#3d3429] flex items-center justify-center text-[#c5a059] hover:border-[#dfbe83] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#3d3429] flex items-center justify-center text-[#c5a059] hover:border-[#dfbe83] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@luxecatering.com.br"
                className="w-8 h-8 rounded-full border border-[#3d3429] flex items-center justify-center text-[#c5a059] hover:border-[#dfbe83] hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Menu & Experiences */}
          <div>
            <h4 className="serif-display text-base font-semibold text-white uppercase tracking-wider mb-4">
              Cardápios & Serviços
            </h4>
            <ul className="space-y-2 text-xs text-[#9c8f80]">
              <li>
                <a href="#packages" className="hover:text-[#dfbe83] transition-colors">
                  Pacotes Prontos (Tudo Incluso)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfbe83] transition-colors">
                  Buffet Completo para Festas
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfbe83] transition-colors">
                  Decoração & Mesa do Bolo
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#dfbe83] transition-colors">
                  Cardápio de Salgados & Churrasco
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#dfbe83] transition-colors">
                  Simulador de Festa Online
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours (from Image 1) */}
          <div>
            <h4 className="serif-display text-base font-semibold text-white uppercase tracking-wider mb-4">
              Horários de Atendimento
            </h4>
            <div className="space-y-3 text-xs text-[#9c8f80]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Segunda a Quinta:</span>
                  <span>10:00 - 20:00 (Atendimento Concierge)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Sexta e Sábado:</span>
                  <span>10:00 - 22:00</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Domingo:</span>
                  <span>Plantão de Eventos Agendados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Address (from Image 1) */}
          <div>
            <h4 className="serif-display text-base font-semibold text-white uppercase tracking-wider mb-4">
              Endereço & Atendimento
            </h4>
            <div className="space-y-3 text-xs text-[#9c8f80]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi, São Paulo - SP
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>(11) 99999-8888 / (11) 3045-8000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>concierge@luxecatering.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Sub-links from Image 2 */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#786c5e]">
          <div className="flex flex-wrap items-center justify-center gap-6 uppercase tracking-widest">
            <a href="#hero" className="hover:text-[#dfbe83] transition-colors">Mapa do Site</a>
            <a href="#menu" className="hover:text-[#dfbe83] transition-colors">Encomendas</a>
            <a href="#experiences" className="hover:text-[#dfbe83] transition-colors">Dúvidas Frequentes</a>
            <a href="#hero" className="hover:text-[#dfbe83] transition-colors">Termos & Condições</a>
          </div>

          <div className="text-center md:text-right">
            <span>© 2012-2026 LUXE Catering & Eventos. Todos os direitos reservados.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#1e1915] border border-[#3b3227] flex items-center justify-center text-[#c5a059] hover:text-white hover:border-[#dfbe83] transition-colors"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
