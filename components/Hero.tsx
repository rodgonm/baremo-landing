"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden px-8 pt-[72px] lg:px-12">
      {/* Abstract decorative shapes — Sketch-inspired organic elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-bg-teal opacity-60 blur-[2px] lg:h-[700px] lg:w-[700px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-bg-blue opacity-50 blur-[2px] lg:h-[500px] lg:w-[500px]"
        />
        <div className="animate-slow-spin absolute right-[15%] top-[20%] h-32 w-32 rounded-[40%] border border-teal/15 lg:h-48 lg:w-48" />
        <div className="animate-float absolute left-[10%] top-[60%] h-3 w-3 rounded-full bg-teal/30" />
        <div className="animate-float-delayed absolute right-[25%] top-[75%] h-2 w-2 rounded-full bg-accent/20" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100dvh-72px)] max-w-[1400px] flex-col justify-center">
        {/* Headline */}
        <motion.p
          {...fadeUp(0.05)}
          className="mb-5 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-text-muted"
        >
          Retail intelligence platform
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="max-w-[900px] font-display text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
        >
          Tu equipo de campo,
          <br />
          midiendo en <span className="text-gradient">tiempo real</span>.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-8 max-w-[520px] text-[1.125rem] leading-[1.7] text-text-secondary"
        >
          Auditorías de punto de venta que tu equipo completa en 5 minutos.
          Puntajes instantáneos. Dashboards que muestran todo tu territorio
          — sin esperar el reporte del viernes.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            className="cursor-pointer rounded-full bg-text px-7 py-3.5 text-[0.9375rem] font-medium text-bg transition-all duration-300 hover:bg-text/85"
          >
            Solicitar Demo
          </a>
          <a
            href="#como-funciona"
            className="cursor-pointer rounded-full border border-border px-7 py-3.5 text-[0.9375rem] font-medium text-text transition-all duration-300 hover:bg-bg-muted"
          >
            Ver cómo funciona
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-16 flex items-center gap-6"
        >
          <span className="text-[0.75rem] text-text-muted">Diseñado para</span>
          <div className="flex items-center gap-5">
            {["CPG", "Bebidas", "Farma", "Retail"].map((cat) => (
              <span key={cat} className="text-[0.75rem] font-medium tracking-wide text-text-faint">
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
