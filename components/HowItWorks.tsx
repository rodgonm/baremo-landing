"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Configura los criterios de tu operación",
    description:
      "Define zonas, checklists y puntajes para cada tipo de tienda. Se adapta a tu proceso, no al revés.",
    device: "laptop",
    placeholder: "Captura de pantalla — configuración de baremos",
  },
  {
    number: "02",
    title: "Tu equipo audita en campo",
    description:
      "Abren la app, seleccionan la tienda, completan la auditoría en menos de 5 minutos. Funciona sin internet.",
    device: "phone",
    placeholder: "Captura de pantalla — app móvil en auditoría",
  },
  {
    number: "03",
    title: "Puntaje instantáneo en cada visita",
    description:
      "Al terminar, el vendedor ve el resultado al instante. Sabe exactamente qué mejorar antes de salir.",
    device: "phone",
    placeholder: "Captura de pantalla — resultado de auditoría",
  },
  {
    number: "04",
    title: "Monitorea todo desde cualquier lugar",
    description:
      "Mapas en tiempo real, tendencias por semana, rankings por territorio. Detecta problemas antes de que escalen.",
    device: "laptop",
    placeholder: "Captura de pantalla — dashboard ejecutivo",
  },
];

function DeviceFrame({
  type,
  placeholder,
}: {
  type: "phone" | "laptop";
  placeholder: string;
}) {
  if (type === "phone") {
    return (
      <div className="mx-auto w-[220px] lg:w-[260px]">
        <div className="rounded-[2rem] border-2 border-border bg-bg shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <div className="flex justify-center py-2.5">
            <div className="h-4 w-16 rounded-full bg-bg-muted" />
          </div>
          <div className="placeholder-media mx-2 mb-2 aspect-[9/17] rounded-[1.25rem]">
            <div className="flex h-full items-center justify-center px-4">
              <span className="text-center text-[0.625rem] uppercase tracking-[0.1em] text-text-muted">
                {placeholder}
              </span>
            </div>
          </div>
          <div className="flex justify-center pb-2">
            <div className="h-1 w-12 rounded-full bg-bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-t-[12px] border-2 border-b-0 border-border bg-bg shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="placeholder-media aspect-[16/9]">
          <div className="flex h-full items-center justify-center px-4">
            <span className="text-[0.6875rem] uppercase tracking-[0.1em] text-text-muted">
              {placeholder}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto h-2.5 w-[102%] rounded-b-lg bg-gradient-to-b from-border to-border-hover" />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-36 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-text-muted">
            Cómo funciona
          </p>
          <h2 className="mt-5 max-w-lg font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            De la tienda al dashboard en 4 pasos.
          </h2>
        </ScrollReveal>

        <div className="mt-24 space-y-32 lg:space-y-40">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number}>
              <div
                className={`flex flex-col items-center gap-12 lg:gap-20 ${
                  i % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <span className="font-display text-[4rem] font-extrabold leading-none text-text-faint lg:text-[5rem]">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-[1.5rem] font-semibold leading-[1.2] text-text lg:text-[1.75rem]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[1rem] leading-[1.75] text-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Device mock */}
                <div className={`flex-1 ${step.device === "phone" ? "max-w-[300px]" : ""}`}>
                  <DeviceFrame type={step.device as "phone" | "laptop"} placeholder={step.placeholder} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
