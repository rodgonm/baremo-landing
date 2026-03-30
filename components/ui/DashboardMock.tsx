"use client";

const leaderboard = [
  { rank: 1, name: "Zona 10 — Capital", score: 94 },
  { rank: 2, name: "Mixco Centro", score: 91 },
  { rank: 3, name: "Escuintla Sur", score: 87 },
  { rank: 4, name: "Quetzaltenango", score: 84 },
  { rank: 5, name: "Cobán Norte", score: 79 },
];

const stats = [
  { label: "Tiendas auditadas", value: "847" },
  { label: "Cumplimiento promedio", value: "86%" },
  { label: "Auditorías hoy", value: "124" },
  { label: "Alertas activas", value: "12" },
];

export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-bg shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-border-hover" />
          <div className="h-2.5 w-2.5 rounded-full bg-border-hover" />
          <div className="h-2.5 w-2.5 rounded-full bg-border-hover" />
        </div>
        <div className="ml-4 flex-1 rounded bg-bg-muted px-3 py-1">
          <span className="text-[0.6875rem] text-text-muted">app.baremo.ai/dashboard</span>
        </div>
      </div>

      <div className="grid gap-px bg-border lg:grid-cols-[1fr_260px]">
        {/* Main area */}
        <div className="space-y-px bg-border">
          {/* Map placeholder */}
          <div className="relative bg-bg-soft p-6">
            <p className="mb-3 text-[0.6875rem] font-medium uppercase tracking-wider text-text-muted">
              Guatemala — Mapa de cumplimiento
            </p>
            <div className="relative aspect-[16/9] overflow-hidden rounded bg-bg-muted">
              {/* Simplified dots */}
              {[
                { x: 35, y: 30 }, { x: 28, y: 50 }, { x: 52, y: 25 },
                { x: 20, y: 38 }, { x: 62, y: 55 }, { x: 45, y: 42 },
                { x: 72, y: 35 }, { x: 55, y: 15 }, { x: 15, y: 28 },
              ].map((d, i) => (
                <div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-accent"
                  style={{ left: `${d.x}%`, top: `${d.y}%`, opacity: 0.4 + (i % 3) * 0.2 }}
                />
              ))}
            </div>
          </div>

          {/* Trend chart */}
          <div className="bg-bg p-6">
            <p className="mb-3 text-[0.6875rem] font-medium uppercase tracking-wider text-text-muted">
              Tendencia — 8 semanas
            </p>
            <svg viewBox="0 0 400 60" className="w-full">
              <polyline
                points="0,42 57,38 114,30 171,33 228,24 285,18 342,14 400,10"
                fill="none"
                stroke="#00A87A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="0,42 57,38 114,30 171,33 228,24 285,18 342,14 400,10"
                fill="none"
                stroke="#00A87A"
                strokeWidth="0"
              />
              <polygon
                points="0,42 57,38 114,30 171,33 228,24 285,18 342,14 400,10 400,60 0,60"
                fill="#00A87A"
                opacity="0.06"
              />
            </svg>
          </div>
        </div>

        {/* Sidebar — leaderboard */}
        <div className="bg-bg p-6">
          <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-wider text-text-muted">
            Rankings por territorio
          </p>
          <div className="space-y-3">
            {leaderboard.map((item) => (
              <div key={item.rank} className="flex items-center gap-3">
                <span className="font-display text-[0.75rem] font-semibold text-text-muted">
                  {item.rank}
                </span>
                <span className="flex-1 truncate text-[0.8125rem] text-text">
                  {item.name}
                </span>
                <span className="font-display text-[0.8125rem] font-semibold text-text">
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="grid grid-cols-2 gap-px border-t border-border bg-border lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-bg px-5 py-4">
            <p className="font-display text-[1.125rem] font-bold text-text">{s.value}</p>
            <p className="text-[0.6875rem] text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
