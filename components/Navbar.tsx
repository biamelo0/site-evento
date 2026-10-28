"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Pacotes", href: "#packages" },
    { label: "Serviços", href: "#services" },
    { label: "Cardápio", href: "#menu" },
    { label: "Simulador", href: "#calculator" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#171513]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#3d362d]"
            : "bg-gradient-to-b from-[#171513]/85 via-[#171513]/50 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center text-[#dfbe83] font-serif font-bold text-xl transition-transform duration-300 group-hover:scale-105 group-hover:border-[#dfbe83] bg-[#221e1a]/80 shadow-md">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-lg font-bold text-white group-hover:text-[#dfbe83] transition-colors">
                LUXE
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#c5a059] font-medium">
                Eventos & Buffet Completo
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on XL screens to prevent overlap) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.14em] text-[#e8e2d8] hover:text-[#dfbe83] transition-colors font-medium py-1 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20a%20minha%20festa."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#dfbe83] hover:text-white flex items-center gap-1.5 border border-[#c5a059]/40 hover:border-[#dfbe83] px-3.5 py-2 rounded-full transition-all duration-300 bg-[#241f19]/40 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="tracking-wide">WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-luxe text-xs !py-2.5 !px-4 shadow-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Simular Festa</span>
            </button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenBooking}
              className="btn-luxe text-[10px] !py-2 !px-3 sm:hidden whitespace-nowrap"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e8e2d8] hover:text-[#dfbe83] rounded-lg transition-colors cursor-pointer"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#171513] border-l border-[#3d362d] p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#302a24]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-[#c5a059] flex items-center justify-center text-[#dfbe83] font-serif font-bold text-lg bg-[#221e1a]">
                    L
                  </div>
                  <div>
                    <span className="font-serif tracking-[0.2em] text-base font-bold text-white block">
                      LUXE
                    </span>
                    <span className="text-[8px] tracking-[0.25em] uppercase text-[#c5a059]">
                      Eventos & Buffet Completo
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#dfbe83] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] text-[#d6cdbf] hover:text-[#dfbe83] py-2 border-b border-[#24201c] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#302a24] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-luxe w-full justify-center !py-3"
              >
                <Sparkles className="w-4 h-4" />
                <span>Pedir Proposta Gratuita</span>
              </button>
              <a
                href="tel:+5511999998888"
                className="text-center text-xs tracking-wider text-[#c5a059] hover:underline py-2"
              >
                (11) 99999-8888 • Atendimento Rápido
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
