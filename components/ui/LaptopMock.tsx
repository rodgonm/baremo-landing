import { ReactNode } from "react";

export function LaptopMock({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Screen */}
      <div className="overflow-hidden rounded-t-xl border-2 border-b-0 border-border-hover bg-bg-card shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-1.5 border-b border-border-default bg-bg-deep px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <div className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        {/* Content */}
        <div className="aspect-[16/10] p-3">{children}</div>
      </div>
      {/* Base */}
      <div className="relative h-3 rounded-b-lg bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
        <div className="absolute inset-x-[30%] top-0 h-px bg-border-hover" />
      </div>
      <div className="mx-auto h-1 w-[110%] -translate-x-[5%] rounded-b-xl bg-[#1a1a1a] shadow-lg" />
    </div>
  );
}
