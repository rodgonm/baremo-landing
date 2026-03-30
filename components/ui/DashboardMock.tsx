"use client";

import { GuatemalaMap } from "./GuatemalaMap";

const leaderboard = [
  { rank: 1, name: "Zona 10 — Capital", score: 94, change: "+3" },
  { rank: 2, name: "Mixco Centro", score: 91, change: "+5" },
  { rank: 3, name: "Escuintla Sur", score: 87, change: "+1" },
  { rank: 4, name: "Quetzaltenango", score: 84, change: "-2" },
  { rank: 5, name: "Cobán Norte", score: 79, change: "+4" },
];

const stats = [
  { label: "Tiendas auditadas", value: "847" },
  { label: "Cumplimiento promedio", value: "86%" },
  { label: "Auditorías hoy", value: "124" },
  { label: "Alertas activas", value: "12" },
];

export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-default bg-bg-card shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-border-default px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-bg-surface px-3 py-1">
          <span className="text-xs text-text-muted">app.baremo.ai/dashboard</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="grid gap-4 p-4 lg:grid-cols-[1fr_280px]">
        {/* Map */}
        <div className="space-y-4">
          <GuatemalaMap />

          {/* Trend chart */}
          <div className="rounded-xl border border-border-default bg-bg-surface/50 p-4">
            <p className="mb-3 text-xs font-medium text-text-muted">
              Cumplimiento — Últimas 8 semanas
            </p>
            <svg viewBox="0 0 400 80" className="w-full">
              {/* Grid lines */}
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 25}
                  x2="400"
                  y2={i * 25}
                  stroke="rgba(148,163,184,0.06)"
                  strokeWidth="1"
                />
              ))}
              {/* Line */}
              <polyline
                points="0,55 57,50 114,42 171,45 228,35 285,28 342,22 400,15"
                fill="none"
                stroke="#00d4a0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Area */}
              <polygon
                points="0,55 57,50 114,42 171,45 228,35 285,28 342,22 400,15 400,80 0,80"
                fill="url(#tealGrad)"
                opacity="0.15"
              />
              <defs>
                <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00d4a0" />
                  <stop offset="100%" stopColor="#00d4a0" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border-default bg-bg-surface/50 p-4">
            <p className="mb-3 text-xs font-medium text-text-muted">
              Rankings por territorio
            </p>
            <div className="space-y-2.5">
              {leaderboard.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-bg-card text-xs font-semibold text-text-muted">
                    {item.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-text-primary">
                      {item.name}
                    </p>
                  </div>
                  <span className="text-sm font-semibold font-outfit text-text-primary">
                    {item.score}
                  </span>
                  <span
                    className={`text-xs ${
                      item.change.startsWith("+")
                        ? "text-brand-primary"
                        : "text-red-400"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="grid grid-cols-2 gap-px border-t border-border-default bg-border-default lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-bg-card px-4 py-3">
            <p className="text-lg font-bold font-outfit text-text-primary">{s.value}</p>
            <p className="text-xs text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
