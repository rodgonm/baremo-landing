"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
});

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Oversized headline — centered, owns the viewport */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-[clamp(3rem,7.5vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
        >
          Cada tienda tiene
          <br />
          un <span className="text-gradient">baremo</span>.
          <br />
          <span className="text-text-muted">Ahora puedes medirlo.</span>
        </motion.h1>

        {/* Subtitle + CTA — offset right for asymmetry */}
        <div className="mt-12 flex flex-col gap-10 lg:ml-auto lg:max-w-[520px]">
          <motion.p
            {...fadeUp(0.3)}
            className="text-[1.125rem] leading-[1.7] text-text-secondary"
          >
            Auditorías digitales, puntajes en tiempo real y análisis
            inteligente para equipos de trade marketing y distribución
            en Latinoamérica.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="flex items-center gap-6">
            <a
              href="#contacto"
              className="cursor-pointer rounded-[6px] bg-accent px-7 py-3 text-[0.9375rem] font-medium text-white transition-all duration-300 hover:opacity-85"
            >
              Solicitar Demo
            </a>
            <a
              href="#como-funciona"
              className="link-hover cursor-pointer text-[0.9375rem] text-text-secondary transition-colors duration-300 hover:text-text"
            >
              Conocer más
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — thin line, bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-8 flex items-center gap-3 lg:left-12"
      >
        <span className="text-[0.6875rem] uppercase tracking-[0.15em] text-text-muted">
          Scroll
        </span>
        <div className="h-px w-12 bg-border" />
      </motion.div>
    </section>
  );
}
