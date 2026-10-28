"use client";

import { useState } from "react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/siteData";
import { ZoomIn, X, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#a37237] font-semibold mb-2 block">
            MOMENTOS REAIS DAS NOSSAS FESTAS
          </span>
          <h2 className="serif-display text-4xl sm:text-5xl font-normal text-[#171513] tracking-tight uppercase mb-2">
            MURAL NO INSTAGRAM
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase text-[#73675a] hover:text-[#a37237] transition-colors inline-flex items-center gap-1.5 font-medium"
          >
            <InstagramIcon className="w-4 h-4 text-[#a37237]" />
            <span>@LUXEEVENTOS.OFICIAL</span>
          </a>
        </div>

        {/* Large, Beautiful Photo Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden bg-[#f0eae1] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 border border-[#e5d9ca]"
            >
              {/* Big High-Res Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient Bottom Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Bottom Details Always Readable */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3 text-white">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfbe83] block mb-1">
                    Festa Real
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                <div className="w-11 h-11 rounded-full bg-white/95 text-[#171513] flex items-center justify-center shrink-0 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-5 h-5 text-[#a37237]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Follow Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#d9ccba] text-xs uppercase tracking-widest text-[#574d41] hover:text-[#171513] hover:border-[#a37237] transition-all bg-[#faf6f0] shadow-sm font-semibold"
          >
            <InstagramIcon className="w-4 h-4 text-[#a37237]" />
            <span>Siga @luxeeventos.oficial para ver mais festas ao vivo</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#a37237]" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] bg-[#171513] rounded-3xl overflow-hidden border border-[#4d4233] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-black/75 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative overflow-hidden flex items-center justify-center bg-black max-h-[78vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[78vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 bg-[#171513] border-t border-[#362f25] flex items-center justify-between text-white">
              <div>
                <h4 className="serif-display text-lg sm:text-xl text-[#f7f2ea]">
                  {selectedImage.title}
                </h4>
                <span className="text-xs text-[#a39482] uppercase tracking-wider">
                  LUXE Eventos & Produções
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-xs uppercase tracking-widest text-[#dfbe83] hover:underline cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
