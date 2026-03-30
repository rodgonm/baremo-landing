"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { PhoneMock } from "./ui/PhoneMock";
import { LaptopMock } from "./ui/LaptopMock";

const steps = [
  {
    number: "01",
    title: "Configura tus baremos",
    description:
      "Define las zonas, criterios y puntajes que importan para tu operación. Cada categoría de producto, cada tipo de tienda, cada región.",
    device: "laptop",
    mockContent: (
      <div className="space-y-2">
        <div className="h-3 w-24 rounded bg-brand-primary/20" />
        <div className="space-y-1.5">
          {["Enfriador", "Estantería", "Exhibición", "Señalización"].map((z) => (
            <div key={z} className="flex items-center justify-between rounded-lg bg-bg-surface p-2">
              <span className="text-[10px] text-text-secondary">{z}</span>
              <div className="h-1.5 w-12 rounded bg-brand-primary/30" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Audita con la app",
    description:
      "Tu equipo en campo abre la app, selecciona la tienda y completa la auditoría en menos de 5 minutos. Funciona sin internet.",
    device: "phone",
    mockContent: (
      <div className="space-y-2">
        <div className="rounded-lg bg-brand-primary/10 p-2 text-center">
          <span className="text-[10px] text-brand-primary">Auditoría activa</span>
        </div>
        <div className="space-y-1.5">
          {[94, 88, 79, 72].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-bg-surface" />
              <div className="h-1.5 flex-1 rounded bg-bg-surface">
                <div className="h-full rounded bg-brand-primary/40" style={{ width: `${s}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Puntaje instantáneo",
    description:
      "Al terminar, el vendedor ve el puntaje de la tienda al instante. Sabe exactamente qué mejorar antes de irse.",
    device: "phone",
    mockContent: (
      <div className="flex flex-col items-center space-y-3 pt-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-primary">
          <span className="font-outfit text-lg font-bold text-brand-primary">86</span>
        </div>
        <span className="text-[9px] text-text-muted">Cumplimiento</span>
        <div className="w-full space-y-1">
          <div className="flex justify-between text-[8px] text-text-secondary">
            <span>Enfriador</span><span className="text-brand-primary">94</span>
          </div>
          <div className="flex justify-between text-[8px] text-text-secondary">
            <span>Señalización</span><span className="text-amber-400">72</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Monitorea el progreso",
    description:
      "HQ ve todo en tiempo real. Mapas, tendencias, rankings por territorio. Detecta problemas antes de que escalen.",
    device: "laptop",
    mockContent: (
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-bg-surface p-2">
            <div className="text-[10px] text-text-muted">Promedio</div>
            <div className="font-outfit text-sm font-bold text-brand-primary">86%</div>
          </div>
          <div className="flex-1 rounded-lg bg-bg-surface p-2">
            <div className="text-[10px] text-text-muted">Tiendas</div>
            <div className="font-outfit text-sm font-bold text-text-primary">847</div>
          </div>
        </div>
        <svg viewBox="0 0 200 40" className="w-full">
          <polyline points="0,30 30,28 60,22 90,25 120,18 150,14 180,10 200,8" fill="none" stroke="#00d4a0" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block font-outfit text-sm font-semibold uppercase tracking-wider text-brand-primary">
            Cómo funciona
          </span>
          <h2 className="max-w-2xl font-outfit text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight">
            De la tienda al dashboard en 4 pasos.
          </h2>
        </ScrollReveal>

        <div className="mt-20 space-y-24">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number}>
              <div
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <span className="font-outfit text-[4rem] font-extrabold leading-none text-brand-primary/20">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-outfit text-2xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Device mock */}
                <div className="flex-1">
                  {step.device === "phone" ? (
                    <PhoneMock>{step.mockContent}</PhoneMock>
                  ) : (
                    <LaptopMock>{step.mockContent}</LaptopMock>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
