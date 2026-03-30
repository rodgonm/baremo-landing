"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

function AnimatedChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <svg ref={ref} viewBox="0 0 500 80" className="mt-4 w-full" preserveAspectRatio="none">
      {[20, 40, 60].map((y) => (
        <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#E8E8E8" strokeWidth="0.5" />
      ))}
      <polygon
        points="0,58 72,52 144,40 216,44 288,32 360,24 432,18 500,12 500,80 0,80"
        fill="#00A87A"
        opacity={inView ? 0.06 : 0}
        style={{ transition: "opacity 0.8s ease 0.5s" }}
      />
      <motion.polyline
        points="0,58 72,52 144,40 216,44 288,32 360,24 432,18 500,12"
        fill="none"
        stroke="#00A87A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      {[[0, 58], [72, 52], [144, 40], [216, 44], [288, 32], [360, 24], [432, 18], [500, 12]].map(
        ([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#fff"
            stroke="#00A87A"
            strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.3 }}
          />
        )
      )}
    </svg>
  );
}

export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-border bg-bg shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      {/* Browser chrome */}
      <div className="flex items-center border-b border-border px-5 py-3">
        <div className="flex gap-2">
          <div className="h-[10px] w-[10px] rounded-full bg-[#FF5F56]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD2E]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#27C93F]" />
        </div>
        <div className="ml-6 flex-1">
          <div className="mx-auto max-w-[280px] rounded-full bg-bg-muted px-4 py-1.5 text-center">
            <span className="text-[0.6875rem] text-text-muted">app.baremo.ai</span>
          </div>
        </div>
        <div className="w-[54px]" />
      </div>

      <div className="grid lg:grid-cols-[1fr_280px]">
        {/* Main */}
        <div className="border-r border-border">
          {/* Map */}
          <div className="border-b border-border p-6 lg:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-text-muted">
                Mapa de cumplimiento
              </span>
              <span className="text-[0.6875rem] text-text-muted">Guatemala</span>
            </div>
            <div className="relative aspect-[2/1] rounded-[8px] bg-bg-muted">
              {[
                { x: 33, y: 32, o: 1 }, { x: 27, y: 52, o: 0.7 }, { x: 50, y: 24, o: 0.85 },
                { x: 18, y: 40, o: 0.6 }, { x: 60, y: 56, o: 0.5 }, { x: 44, y: 44, o: 0.9 },
                { x: 70, y: 36, o: 0.65 }, { x: 54, y: 16, o: 0.75 }, { x: 14, y: 28, o: 0.55 },
                { x: 38, y: 60, o: 0.8 }, { x: 76, y: 48, o: 0.45 }, { x: 22, y: 18, o: 0.7 },
              ].map((d, i) => (
                <div
                  key={i}
                  className="absolute h-[6px] w-[6px] rounded-full bg-teal"
                  style={{ left: `${d.x}%`, top: `${d.y}%`, opacity: d.o }}
                />
              ))}
            </div>
          </div>

          {/* Chart with line-draw animation */}
          <div className="p-6 lg:p-8">
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-text-muted">
              Tendencia — 8 semanas
            </span>
            <AnimatedChart />
          </div>
        </div>

        {/* Sidebar */}
        <div className="p-6 lg:p-8">
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-text-muted">
            Rankings por territorio
          </span>
          <div className="mt-5 space-y-4">
            {leaderboard.map((item) => (
              <div key={item.rank} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bg-muted font-display text-[0.6875rem] font-semibold text-text-muted">
                  {item.rank}
                </span>
                <span className="flex-1 truncate text-[0.8125rem]">{item.name}</span>
                <span className="font-display text-[0.8125rem] font-semibold">{item.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 border-t border-border lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 py-5 lg:px-8 ${i < stats.length - 1 ? "border-r border-border" : ""}`}
          >
            <p className="font-display text-[1.25rem] font-bold">{s.value}</p>
            <p className="mt-0.5 text-[0.6875rem] text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
