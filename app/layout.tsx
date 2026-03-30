import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Baremo — Inteligencia Retail para Latinoamérica",
  description:
    "Plataforma AI para ejecución en punto de venta. Auditorías digitales, puntajes en tiempo real y análisis inteligente para distribución en Latinoamérica.",
  openGraph: {
    title: "Baremo — Inteligencia Retail para Latinoamérica",
    description:
      "Plataforma AI para ejecución en punto de venta. Auditorías digitales, puntajes en tiempo real y análisis inteligente.",
    url: "https://baremo.ai",
    siteName: "Baremo",
    locale: "es_GT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
