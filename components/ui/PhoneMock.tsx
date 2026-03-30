import { ReactNode } from "react";

export function PhoneMock({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[240px]">
      {/* Phone frame */}
      <div className="overflow-hidden rounded-[2rem] border-2 border-border-hover bg-bg-card shadow-2xl">
        {/* Notch */}
        <div className="flex justify-center bg-bg-deep py-2">
          <div className="h-4 w-20 rounded-full bg-bg-surface" />
        </div>
        {/* Screen */}
        <div className="aspect-[9/16] p-3">{children}</div>
        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1">
          <div className="h-1 w-16 rounded-full bg-text-muted/20" />
        </div>
      </div>
    </div>
  );
}
