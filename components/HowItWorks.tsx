"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

// ── Mock UIs for each step ──

function ConfigMock() {
  const zones = [
    { name: "Enfriador", weight: 25 },
    { name: "Estantería", weight: 25 },
    { name: "Exhibición", weight: 20 },
    { name: "Señalización", weight: 15 },
    { name: "Limpieza", weight: 15 },
  ];
  return (
    <div className="space-y-3 p-4">
      <div className="flex items-center justify-between">
        <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-text-muted">
          Zonas de auditoría
        </span>
        <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[0.5625rem] font-medium text-brand">
          5 zonas
        </span>
      </div>
      {zones.map((z) => (
        <div
          key={z.name}
          className="flex items-center gap-2 rounded-lg bg-bg-muted p-2.5"
        >
          <div className="h-2 w-2 rounded-full bg-brand" />
          <span className="flex-1 text-[0.6875rem] font-medium text-text">
            {z.name}
          </span>
          <span className="text-[0.625rem] text-text-muted">{z.weight}%</span>
          <div className="h-1 w-12 rounded-full bg-border">
            <div
              className="h-full rounded-full bg-brand"
              style={{ width: `${z.weight * 4}%` }}
            />
          </div>
        </div>
      ))}
      <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
        <span className="text-[0.5625rem] text-text-muted">Total</span>
        <span className="text-[0.6875rem] font-bold text-brand">100%</span>
      </div>
    </div>
  );
}

function AuditMock() {
  const items = [
    { label: "Producto visible y al frente", checked: true },
    { label: "Planograma correcto", checked: true },
    { label: "Precios actualizados", checked: true },
    { label: "Limpieza del estante", checked: false },
    { label: "Material POP presente", checked: false },
  ];
  return (
    <div className="space-y-2 p-3">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[0.6875rem] font-semibold text-text">Estantería</p>
          <p className="text-[0.5rem] text-text-muted">
            Tienda Doña Carmen · Zona 10
          </p>
        </div>
        <span className="text-[0.5625rem] font-medium text-brand">3/5</span>
      </div>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 rounded-lg bg-bg-muted p-2"
        >
          <div
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded ${item.checked ? "bg-brand" : "border border-border"}`}
          >
            {item.checked && (
              <svg
                className="h-2.5 w-2.5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <span
            className={`text-[0.5625rem] ${item.checked ? "text-text" : "text-text-muted"}`}
          >
            {item.label}
          </span>
        </div>
      ))}
      <div className="mt-2 rounded-lg border border-dashed border-border p-3 text-center">
        <p className="text-[0.5rem] text-text-muted">
          📷 Toca para agregar foto
        </p>
      </div>
    </div>
  );
}

function ScoreMock() {
  const zones = [
    { name: "Enfriador", score: 95 },
    { name: "Estantería", score: 88 },
    { name: "Exhibición", score: 92 },
    { name: "Señalización", score: 84 },
    { name: "Limpieza", score: 90 },
  ];
  return (
    <div className="flex flex-col items-center p-3">
      <p className="mb-1 text-[0.5rem] text-text-muted">Puntaje final</p>
      <div className="relative mb-3 flex h-16 w-16 items-center justify-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#E8E8E8"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#22c55e"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 40}
            strokeDashoffset={2 * Math.PI * 40 * 0.1}
          />
        </svg>
        <span className="font-display text-[1.125rem] font-bold text-text">
          90
        </span>
      </div>
      <div className="w-full space-y-1.5">
        {zones.map((z) => (
          <div key={z.name} className="flex items-center gap-1.5">
            <span className="w-16 text-[0.5rem] text-text-muted">{z.name}</span>
            <div className="h-1 flex-1 rounded-full bg-bg-muted">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${z.score}%`,
                  background: z.score >= 85 ? "#22c55e" : "#f59e0b",
                }}
              />
            </div>
            <span className="w-5 text-right text-[0.5rem] font-semibold text-text">
              {z.score}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 w-full rounded-lg bg-brand-soft p-2 text-center">
        <p className="text-[0.5rem] font-medium text-brand">
          ✓ Auditoría completada
        </p>
      </div>
    </div>
  );
}

function DashboardMiniMock() {
  return (
    <div className="p-3">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-brand" />
        <span className="text-[0.5625rem] font-semibold text-text">
          Dashboard — Guatemala
        </span>
      </div>
      {/* Mini map */}
      <div className="relative mb-3 aspect-[2/1] rounded-lg bg-bg-muted">
        {[
          { x: 30, y: 25, c: "#22c55e" },
          { x: 45, y: 35, c: "#22c55e" },
          { x: 55, y: 28, c: "#f59e0b" },
          { x: 35, y: 50, c: "#22c55e" },
          { x: 65, y: 45, c: "#f59e0b" },
          { x: 25, y: 40, c: "#22c55e" },
          { x: 50, y: 55, c: "#ef4444" },
          { x: 40, y: 30, c: "#22c55e" },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{ left: `${d.x}%`, top: `${d.y}%`, background: d.c }}
          />
        ))}
      </div>
      {/* Mini stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Tiendas", value: "847" },
          { label: "Promedio", value: "86%" },
          { label: "Hoy", value: "124" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-bg-muted p-2 text-center">
            <p className="font-display text-[0.625rem] font-bold text-text">
              {s.value}
            </p>
            <p className="text-[0.4375rem] text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Mini trend */}
      <div className="mt-2 rounded-lg bg-bg-muted p-2">
        <svg viewBox="0 0 120 24" className="w-full">
          <polyline
            points="0,18 20,16 40,12 60,14 80,10 100,7 120,4"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

// ── Device Frames ──

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[200px] rounded-[28px] border-2 border-border bg-bg p-2 shadow-[0_8px_40px_rgba(0,0,0,0.06)] lg:w-[240px]">
      <div className="overflow-hidden rounded-[20px]">
        <div className="flex justify-center bg-bg py-2">
          <div className="h-3 w-14 rounded-full bg-bg-muted" />
        </div>
        <div className="bg-bg">{children}</div>
        <div className="flex justify-center bg-bg pb-1.5 pt-1">
          <div className="h-1 w-10 rounded-full bg-bg-muted" />
        </div>
      </div>
    </div>
  );
}

function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="rounded-t-2xl border-2 border-b-0 border-border bg-bg shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <div className="h-2 w-2 rounded-full bg-[#FF5F56]" />
          <div className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
          <div className="h-2 w-2 rounded-full bg-[#27C93F]" />
          <div className="ml-3 flex-1 rounded-full bg-bg-muted px-3 py-1">
            <span className="text-[0.5rem] text-text-muted">app.baremo.ai</span>
          </div>
        </div>
        <div className="bg-bg">{children}</div>
      </div>
      <div className="mx-auto h-2 w-[103%] rounded-b-lg bg-gradient-to-b from-border-hover to-border" />
    </div>
  );
}

// ── Steps ──

const steps = [
  {
    number: "01",
    title: "Configura tu operación",
    description:
      "Define zonas, criterios y puntajes para cada tipo de tienda. Se adapta a tu proceso — no al revés.",
    device: "laptop" as const,
    mock: <ConfigMock />,
  },
  {
    number: "02",
    title: "Tu equipo audita en campo",
    description:
      "5 minutos por tienda. Checklists con fotos, funciona sin internet. Sin capacitación.",
    device: "phone" as const,
    mock: <AuditMock />,
  },
  {
    number: "03",
    title: "Resultados al instante",
    description:
      "El vendedor ve el puntaje antes de salir. Sabe exactamente qué mejorar ahí mismo.",
    device: "phone" as const,
    mock: <ScoreMock />,
  },
  {
    number: "04",
    title: "Todo en un dashboard",
    description:
      "Mapas, tendencias, rankings por territorio. Detecta problemas antes de que escalen.",
    device: "laptop" as const,
    mock: <DashboardMiniMock />,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-bg-soft py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand">
            Cómo funciona
          </p>
          <h2 className="mt-4 max-w-lg font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
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
                <div className="flex-1">
                  <span className="font-display text-[3.5rem] font-extrabold leading-none text-text-faint lg:text-[4.5rem]">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-[1.375rem] font-bold leading-[1.2] text-text">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.9375rem] leading-[1.75] text-text-secondary">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`flex-1 ${step.device === "phone" ? "max-w-[300px]" : ""}`}
                >
                  {step.device === "phone" ? (
                    <PhoneFrame>{step.mock}</PhoneFrame>
                  ) : (
                    <LaptopFrame>{step.mock}</LaptopFrame>
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
