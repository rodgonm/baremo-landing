import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Baremo — Inteligencia Retail para Latinoamérica",
  description:
    "Plataforma AI para ejecución en punto de venta. Auditorías digitales, puntajes en tiempo real y análisis inteligente para distribución en Latinoamérica.",
  openGraph: {
    title: "Baremo — Inteligencia Retail para Latinoamérica",
    description: "Plataforma AI para ejecución en punto de venta.",
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
    <html lang="es" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
