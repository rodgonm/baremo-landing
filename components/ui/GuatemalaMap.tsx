"use client";

const dots = [
  { x: 35, y: 30, color: "#00d4a0", label: "Guatemala City" },
  { x: 28, y: 45, color: "#00d4a0", label: "Escuintla" },
  { x: 50, y: 25, color: "#f59e0b", label: "Cobán" },
  { x: 20, y: 35, color: "#00d4a0", label: "Quetzaltenango" },
  { x: 60, y: 55, color: "#ef4444", label: "Jutiapa" },
  { x: 45, y: 40, color: "#00d4a0", label: "Antigua" },
  { x: 70, y: 35, color: "#f59e0b", label: "Zacapa" },
  { x: 55, y: 15, color: "#00d4a0", label: "Petén" },
  { x: 15, y: 25, color: "#a855f7", label: "Huehuetenango" },
  { x: 40, y: 50, color: "#00d4a0", label: "Santa Rosa" },
];

export function GuatemalaMap() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-bg-surface/50">
      {/* Simplified country outline */}
      <svg viewBox="0 0 100 70" className="h-full w-full opacity-10">
        <path
          d="M10,15 L25,10 L40,8 L55,10 L70,15 L80,20 L85,30 L80,40 L75,50 L65,58 L55,60 L45,58 L35,55 L25,50 L15,45 L10,35 L8,25 Z"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="0.5"
        />
      </svg>

      {/* Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
        >
          {/* Pulse */}
          <div
            className="absolute -inset-2 animate-ping rounded-full opacity-20"
            style={{ background: dot.color, animationDuration: `${2 + i * 0.3}s` }}
          />
          {/* Dot */}
          <div
            className="relative h-2.5 w-2.5 rounded-full shadow-lg"
            style={{ background: dot.color, boxShadow: `0 0 8px ${dot.color}40` }}
          />
        </div>
      ))}
    </div>
  );
}
