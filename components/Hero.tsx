"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ScoreRing } from "./ui/ScoreRing";

const zones = [
  { name: "Enfriador", score: 94 },
  { name: "Estantería", score: 88 },
  { name: "Exhibición", score: 79 },
  { name: "Señalización", score: 72 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 text-[0.8125rem] font-medium uppercase tracking-[0.15em] text-accent"
            >
              Plataforma de inteligencia retail
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
            >
              Cada tienda tiene
              <br />
              un <span className="text-gradient">baremo</span>.
              <br />
              Ahora puedes medirlo.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-[440px] text-[1.0625rem] leading-[1.7] text-text-secondary"
            >
              Auditorías digitales, puntajes en tiempo real y análisis
              inteligente para equipos de trade marketing y distribución
              en Latinoamérica.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
              <a
                href="#contacto"
                className="cursor-pointer rounded-md bg-text px-7 py-3 font-display text-[0.9375rem] font-semibold text-bg transition-opacity duration-200 hover:opacity-80"
              >
                Solicitar Demo
              </a>
              <a
                href="#como-funciona"
                className="cursor-pointer text-[0.9375rem] font-medium text-text-secondary transition-colors duration-200 hover:text-text"
              >
                Conocer más →
              </a>
            </motion.div>
          </motion.div>

          {/* Right — score card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[360px] rounded-lg border border-border bg-bg p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-[0.75rem] text-text-muted">Tienda #247</p>
                  <p className="font-display text-[0.875rem] font-semibold text-text">
                    Super 24 — Zona 10
                  </p>
                </div>
                <span className="text-[0.75rem] text-text-muted">
                  Hoy, 10:42
                </span>
              </div>

              {/* Score */}
              <div className="flex justify-center py-7">
                <ScoreRing score={86} size={140} strokeWidth={6} />
              </div>

              {/* Zones */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-border pt-4">
                {zones.map((z) => (
                  <div key={z.name} className="flex items-center justify-between">
                    <span className="text-[0.8125rem] text-text-secondary">
                      {z.name}
                    </span>
                    <span className="font-display text-[0.8125rem] font-semibold text-text">
                      {z.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-7 w-[1px] bg-border"
        />
      </div>
    </section>
  );
}
