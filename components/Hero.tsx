"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ScoreRing } from "./ui/ScoreRing";
import { FloatingCard } from "./ui/FloatingCard";

const zones = [
  { name: "Enfriador", score: 94 },
  { name: "Estantería", score: 88 },
  { name: "Exhibición", score: 79 },
  { name: "Señalización", score: 72 },
];

function ZoneScore({ name, score }: { name: string; score: number }) {
  const color = score >= 85 ? "#00d4a0" : score >= 70 ? "#f59e0b" : "#ef4444";
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-text-secondary">{name}</span>
      <span className="text-sm font-semibold font-outfit" style={{ color }}>
        {score}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background layers */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left column — text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary-dim px-4 py-1.5 text-sm text-brand-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
              </span>
              Plataforma AI para retail
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-outfit text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight"
          >
            Cada tienda tiene un{" "}
            <span className="text-gradient">baremo</span>.
            <br />
            Ahora puedes medirlo.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[480px] text-lg leading-relaxed text-text-secondary"
          >
            Auditorías digitales, puntajes en tiempo real y análisis
            inteligente para equipos de trade marketing y distribución.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#demo"
              className="inline-flex items-center rounded-lg bg-brand-primary px-7 py-3.5 font-outfit text-base font-semibold text-bg-deep transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,212,160,0.3)]"
            >
              Solicitar Demo
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right column — ScoreCard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-10 rounded-full bg-brand-primary/5 blur-3xl" />

          {/* Score card */}
          <div className="relative w-full max-w-[380px] rounded-2xl border border-border-default bg-bg-card p-6 shadow-2xl">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-text-muted">Tienda #247</p>
                <p className="font-outfit text-sm font-semibold text-text-primary">
                  Super 24 — Zona 10
                </p>
              </div>
              <span className="rounded-full bg-brand-primary-dim px-2.5 py-0.5 text-xs font-medium text-brand-primary">
                Hoy
              </span>
            </div>

            {/* Score ring */}
            <div className="flex justify-center py-4">
              <ScoreRing score={86} size={160} strokeWidth={10} />
            </div>

            {/* Zone grid */}
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {zones.map((z) => (
                <ZoneScore key={z.name} name={z.name} score={z.score} />
              ))}
            </div>
          </div>

          {/* Floating notification cards */}
          <FloatingCard
            icon="✓"
            title="Auditoría completada"
            subtitle="Hace 2 minutos"
            color="#00d4a0"
            className="absolute -left-6 top-8 animate-float shadow-xl lg:-left-12"
          />
          <FloatingCard
            icon="⚡"
            title="Puntaje +12 vs ayer"
            subtitle="Tendencia positiva"
            color="#a855f7"
            className="absolute -right-4 bottom-12 animate-float-delayed shadow-xl lg:-right-10"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-text-muted/30 p-1"
        >
          <div className="h-1.5 w-1 rounded-full bg-text-muted" />
        </motion.div>
      </div>
    </section>
  );
}
