"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] px-8 pt-[72px] lg:px-12">
      <div className="mx-auto flex min-h-[calc(100dvh-72px)] max-w-[1400px] flex-col justify-center">
        <motion.p
          {...fadeUp(0.05)}
          className="mb-5 font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand"
        >
          Retail intelligence platform
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="max-w-[850px] font-display text-[clamp(2.75rem,6.5vw,5.25rem)] font-extrabold leading-[1] tracking-[-0.035em]"
        >
          Tu equipo de campo, midiendo en{" "}
          <span className="text-gradient">tiempo real</span>.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-7 max-w-[480px] text-[1rem] leading-[1.7] text-text-secondary"
        >
          Auditorías de punto de venta que tu equipo completa en 5 minutos.
          Puntajes instantáneos. Dashboards que muestran todo tu territorio
          — sin esperar el reporte del viernes.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="cursor-pointer rounded-full bg-text px-7 py-3.5 text-[0.875rem] font-medium text-bg transition-all duration-300 hover:bg-text/85"
          >
            Solicitar Demo
          </a>
          <a
            href="#como-funciona"
            className="cursor-pointer rounded-full border border-border px-7 py-3.5 text-[0.875rem] font-medium text-text transition-all duration-300 hover:bg-bg-muted"
          >
            Ver cómo funciona
          </a>
        </motion.div>

        {/* Hero visual — product placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-20"
        >
          <div className="placeholder-media aspect-[2.2/1] w-full rounded-2xl">
            <div className="flex h-full items-center justify-center">
              <span className="text-[0.6875rem] uppercase tracking-[0.15em] text-text-muted">
                Video / screenshot del producto
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
