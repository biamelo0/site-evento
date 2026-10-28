"use client";

import { TESTIMONIALS } from "@/data/siteData";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#a37237] font-semibold mb-3 block">
            HISTÓRIAS DE SUCESSO
          </span>
          <h2 className="serif-display text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight uppercase mb-4">
            A Opinião dos Nossos Anfitriões
          </h2>
          <p className="sans-body text-sm sm:text-base text-[#61574d] font-light leading-relaxed">
            A satisfação absoluta dos nossos noivos, executivos e convidados é o nosso maior testemunho de excelência e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl border border-[#e5d9ca] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-[#ebdcc9] group-hover:text-[#dfbe83] transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#c5a059] text-[#c5a059]"
                    />
                  ))}
                </div>

                <p className="sans-body text-sm text-[#4d4439] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#f0e6d8]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#c5a059]"
                />
                <div>
                  <h4 className="serif-display text-base font-semibold text-[#171513] leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-[11px] text-[#807262] block">
                    {t.role}
                  </span>
                  <span className="text-[10px] text-[#a37237] font-medium block">
                    {t.event}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

