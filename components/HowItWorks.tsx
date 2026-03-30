"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Configura tu operación",
    description: "Define zonas, criterios y puntajes. Se adapta a tu proceso — no al revés.",
    device: "laptop",
    bg: "bg-bg-blue",
    placeholder: "Configuración de criterios de auditoría",
  },
  {
    number: "02",
    title: "Tu equipo audita en campo",
    description: "5 minutos por tienda. Funciona sin internet. Sin capacitación.",
    device: "phone",
    bg: "bg-bg-teal",
    placeholder: "App móvil — auditoría en proceso",
  },
  {
    number: "03",
    title: "Resultados al instante",
    description: "El vendedor ve el puntaje antes de salir. Sabe qué mejorar ahí mismo.",
    device: "phone",
    bg: "bg-bg-warm",
    placeholder: "Resultado de auditoría con puntaje",
  },
  {
    number: "04",
    title: "Todo en un dashboard",
    description: "Mapas, tendencias, rankings. Detecta problemas antes de que escalen.",
    device: "laptop",
    bg: "bg-bg-purple",
    placeholder: "Dashboard ejecutivo con mapa",
  },
];

function DeviceFrame({
  type,
  bg,
  placeholder,
}: {
  type: string;
  bg: string;
  placeholder: string;
}) {
  if (type === "phone") {
    return (
      <div className={`mx-auto w-[200px] rounded-[28px] ${bg} p-3 shadow-[0_4px_32px_rgba(0,0,0,0.06)] lg:w-[240px]`}>
        <div className="overflow-hidden rounded-[18px] bg-white">
          <div className="flex justify-center py-2">
            <div className="h-3 w-14 rounded-full bg-bg-muted" />
          </div>
          <div className="placeholder-media aspect-[9/16]">
            <div className="flex h-full items-center justify-center px-3">
              <span className="text-center text-[0.5625rem] uppercase tracking-[0.08em] text-text-muted">
                {placeholder}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-[16px] ${bg} p-3 shadow-[0_4px_32px_rgba(0,0,0,0.06)]`}>
      <div className="overflow-hidden rounded-[10px] bg-white">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-[#FF5F56]" />
          <div className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
          <div className="h-2 w-2 rounded-full bg-[#27C93F]" />
        </div>
        <div className="placeholder-media aspect-[16/9]">
          <div className="flex h-full items-center justify-center px-4">
            <span className="text-[0.625rem] uppercase tracking-[0.1em] text-text-muted">
              {placeholder}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-text-muted">
            Cómo funciona
          </p>
          <h2 className="mt-5 max-w-lg font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Cuatro pasos. Cinco minutos.
          </h2>
        </ScrollReveal>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number}>
              <div
                className={`flex flex-col items-center gap-12 lg:gap-16 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <span className="font-display text-[3.5rem] font-extrabold leading-none text-text-faint lg:text-[4.5rem]">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-[1.5rem] font-semibold leading-[1.2] text-text">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[1rem] leading-[1.75] text-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Device mock with colored backing */}
                <div className={`flex-1 ${step.device === "phone" ? "max-w-[300px]" : ""}`}>
                  <DeviceFrame type={step.device} bg={step.bg} placeholder={step.placeholder} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
