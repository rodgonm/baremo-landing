"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
});

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-between px-8 pt-[72px] lg:px-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center">
        {/* Text */}
        <div>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-[clamp(3rem,7.5vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
          >
            Inteligencia retail
            <br />
            para <span className="text-gradient">Latinoamérica</span>.
          </motion.h1>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <motion.p
              {...fadeUp(0.25)}
              className="max-w-[480px] text-[1.125rem] leading-[1.7] text-text-secondary"
            >
              Auditorías digitales en punto de venta, puntajes en tiempo real
              y análisis inteligente. Tu equipo de campo mide, compara y mejora
              — desde cualquier tienda.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex items-center gap-6">
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

        {/* Hero image/video placeholder — large, full-width, below the fold line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-20"
        >
          <div className="placeholder-media aspect-[21/9] w-full rounded-[12px]">
            <div className="flex h-full items-center justify-center">
              <span className="text-[0.75rem] uppercase tracking-[0.2em] text-text-muted">
                Video / imagen del producto
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="flex items-center gap-3 pb-8"
      >
        <span className="text-[0.6875rem] uppercase tracking-[0.15em] text-text-muted">
          Scroll
        </span>
        <div className="h-px w-12 bg-border" />
      </motion.div>
    </section>
  );
}
