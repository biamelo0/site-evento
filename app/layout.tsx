import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUXE & CO. | Alta Gastronomia & Catering Exclusivo para Eventos",
  description: "Catering de alto padrão, jantares privativos, casamentos elegantes, eventos corporativos e experiências culinárias sob medida com o Chef Executivo.",
  keywords: ["catering de luxo", "eventos exclusivos", "alta gastronomia", "chef table", "casamentos de luxo", "jantar harmonizado"],
  openGraph: {
    title: "LUXE & CO. | Alta Gastronomia & Catering Exclusivo",
    description: "Criamos momentos inesquecíveis através da sofisticação e da alta gastronomia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="sans-body bg-[#fbf9f5] text-[#24211d] antialiased selection:bg-[#dfbe83]/30 selection:text-[#5a3a14]">
        {children}
      </body>
    </html>
  );
}
