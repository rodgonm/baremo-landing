"use client";

import { useEffect, useState } from "react";

export function ScoreRing({
  score = 86,
  size = 140,
  strokeWidth = 6,
}: {
  score?: number;
  size?: number;
  strokeWidth?: number;
}) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(eased * score));
      if (progress < 1) requestAnimationFrame(animate);
    }

    const timer = setTimeout(() => requestAnimationFrame(animate), 300);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E5E5"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#00A87A"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.05s ease-out" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span
          className="font-display font-bold text-text"
          style={{ fontSize: size * 0.26 }}
        >
          {animatedScore}
        </span>
        <span
          className="text-text-muted font-body"
          style={{ fontSize: size * 0.085 }}
        >
          Cumplimiento
        </span>
      </div>
    </div>
  );
}
