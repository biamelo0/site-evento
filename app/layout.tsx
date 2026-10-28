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
  title: "Celebre & Encante | Buffet Completo, Decoração & Eventos Inesquecíveis",
  description: "Buffet completo, salgadinhos fritos na hora, doces finos, churrasco, bar de drinks e decoração para aniversários, casamentos e confraternizações.",
  keywords: ["buffet para festas", "organização de eventos", "festa de aniversário", "buffet completo", "salgadinhos para festa", "decoração de festas"],
  openGraph: {
    title: "Celebre & Encante | Buffet Completo, Decoração & Eventos Inesquecíveis",
    description: "A celebração dos seus sonhos com fartura, sabor e total tranquilidade.",
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
