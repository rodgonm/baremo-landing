"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { STORES, LIVE_FEED, scoreColor, type Store } from "@/lib/store-data";

// Disable scroll zoom until user clicks the map
function ScrollZoomControl() {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();

    const enable = () => map.scrollWheelZoom.enable();
    const disable = () => map.scrollWheelZoom.disable();

    const container = map.getContainer();
    container.addEventListener("click", enable);
    container.addEventListener("mouseleave", disable);

    return () => {
      container.removeEventListener("click", enable);
      container.removeEventListener("mouseleave", disable);
    };
  }, [map]);

  return null;
}

// ── Mobile Filter (collapsible) ──
function MobileFilter({
  threshold,
  onChange,
  visible,
  hidden,
}: {
  threshold: number;
  onChange: (v: number) => void;
  visible: number;
  hidden: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="flex cursor-pointer items-center gap-2 rounded-full bg-bg-muted px-3 py-1.5 text-[0.6875rem] font-medium text-text-secondary min-h-[44px]"
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4h18M3 12h12M3 20h6"
            />
          </svg>
          Filtrar {threshold > 0 && `(≥${threshold})`}
        </button>
        <span className="text-[0.625rem] text-text-muted">
          {visible} visibles · {hidden} ocultas
        </span>
      </div>
      {open && (
        <div className="mt-2 flex items-center gap-3 rounded-lg bg-bg-muted p-3">
          <label className="text-[0.625rem] text-text-muted shrink-0">
            Umbral
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={threshold}
            onChange={(e) => onChange(Number(e.target.value))}
            className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-border accent-brand"
          />
          <span className="text-[0.75rem] font-semibold text-text w-8 text-right">
            {threshold}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Store Detail Panel ──
function StorePanel({ store, onClose }: { store: Store; onClose: () => void }) {
  const color = scoreColor(store.score);
  const zoneEntries = Object.entries(store.zones) as [string, number][];
  const zoneLabels: Record<string, string> = {
    enfriador: "Enfriador",
    estanteria: "Estantería",
    exhibicion: "Exhibición",
    senalizacion: "Señalización",
    limpieza: "Limpieza",
  };

  // Trend chart values
  const trendMin = Math.min(...store.trend) - 5;
  const trendMax = Math.max(...store.trend) + 5;
  const trendRange = trendMax - trendMin;
  const chartH = 60;
  const chartW = 200;
  const visitLabels = ["V1", "V2", "V3", "V4", "V5", "V6"];

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <button
        onClick={onClose}
        className="mb-4 min-h-[44px] min-w-[44px] flex items-center cursor-pointer self-start text-[0.75rem] text-[#666] transition-colors hover:text-text"
      >
        ← Cerrar
      </button>

      <h3 className="font-display text-[1.125rem] font-bold text-text">
        {store.name}
      </h3>
      <p className="mt-1 text-[0.75rem] text-text-muted">
        {store.type} · {store.territory}
      </p>
      <p className="text-[0.6875rem] text-text-muted">{store.address}</p>

      {/* Score ring */}
      <div className="my-5 flex justify-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#E8E8E8"
              strokeWidth="5"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke={color}
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 42}
              strokeDashoffset={2 * Math.PI * 42 * (1 - store.score / 100)}
            />
          </svg>
          <span className="font-display text-[1.375rem] font-bold text-text">
            {store.score}
          </span>
        </div>
      </div>

      {/* Zone bars */}
      <p className="mb-2 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-text-muted">
        Zonas
      </p>
      <div className="space-y-2">
        {zoneEntries.map(([key, val]) => (
          <div key={key} className="flex items-center gap-2">
            <span className="w-20 text-[0.75rem] text-text-secondary">
              {zoneLabels[key]}
            </span>
            <div className="h-1.5 flex-1 rounded-full bg-bg-muted">
              <div
                className="h-full rounded-full"
                style={{ width: `${val}%`, background: scoreColor(val) }}
              />
            </div>
            <span className="w-7 text-right text-[0.75rem] font-semibold text-text">
              {val}
            </span>
          </div>
        ))}
      </div>

      {/* Trend chart with labels */}
      <p className="mb-2 mt-5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-text-muted">
        Tendencia (6 visitas)
      </p>
      <div className="rounded-lg border border-border bg-bg-soft p-3">
        <svg viewBox={`0 0 ${chartW} ${chartH + 20}`} className="w-full">
          {/* Y-axis labels */}
          <text
            x="0"
            y="10"
            className="fill-[#999]"
            fontSize="7"
            fontFamily="Inter, sans-serif"
          >
            {trendMax}
          </text>
          <text
            x="0"
            y={chartH + 2}
            className="fill-[#999]"
            fontSize="7"
            fontFamily="Inter, sans-serif"
          >
            {trendMin}
          </text>

          {/* Grid lines */}
          {[0, 0.5, 1].map((p) => (
            <line
              key={p}
              x1="22"
              y1={5 + p * chartH}
              x2={chartW}
              y2={5 + p * chartH}
              stroke="#E8E8E8"
              strokeWidth="0.5"
            />
          ))}

          {/* Line */}
          <polyline
            points={store.trend
              .map((v, i) => {
                const x = 22 + (i / 5) * (chartW - 30);
                const y = 5 + ((trendMax - v) / trendRange) * chartH;
                return `${x},${y}`;
              })
              .join(" ")}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {store.trend.map((v, i) => {
            const x = 22 + (i / 5) * (chartW - 30);
            const y = 5 + ((trendMax - v) / trendRange) * chartH;
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r="3"
                  fill="white"
                  stroke={color}
                  strokeWidth="1.5"
                />
                {/* Value label on last point */}
                {i === store.trend.length - 1 && (
                  <text
                    x={x + 6}
                    y={y + 3}
                    fontSize="7"
                    fontFamily="Inter, sans-serif"
                    className="fill-text font-semibold"
                  >
                    {v}
                  </text>
                )}
              </g>
            );
          })}

          {/* X-axis visit labels */}
          {visitLabels.map((label, i) => {
            const x = 22 + (i / 5) * (chartW - 30);
            return (
              <text
                key={i}
                x={x}
                y={chartH + 16}
                fontSize="6"
                textAnchor="middle"
                className="fill-[#999]"
                fontFamily="Inter, sans-serif"
              >
                {label}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Actions */}
      {store.actions.length > 0 && (
        <>
          <p className="mb-2 mt-5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-text-muted">
            Acciones pendientes
          </p>
          <ul className="space-y-1.5">
            {store.actions.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[0.75rem] text-text-secondary"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border-hover" />
                {a}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Meta */}
      <div className="mt-6 border-t border-border pt-4 text-[0.6875rem] text-text-muted">
        <p>Última visita: {store.lastVisit}</p>
        <p>Auditor/a: {store.auditor}</p>
      </div>
    </div>
  );
}

// ── Live Feed ──
function LiveFeed({
  entries,
  alertVisible,
}: {
  entries: typeof LIVE_FEED;
  alertVisible: boolean;
}) {
  return (
    <div className="flex h-full flex-col">
      <p className="mb-4 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-text-muted">
        Actividad en tiempo real
      </p>
      <div className="space-y-2">
        {entries.map((e, i) => (
          <div key={i} className="flex items-start gap-2.5 rounded-lg p-2">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              style={{ background: scoreColor(e.score) }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-[0.75rem] text-text">
                <span className="font-medium">{e.auditor}</span> completó
                auditoría
              </p>
              <p className="text-[0.6875rem] text-text-muted">
                {e.store} — {e.territory}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span
                className="font-display text-[0.75rem] font-semibold"
                style={{ color: scoreColor(e.score) }}
              >
                {e.score}
              </span>
              <p className="text-[0.5625rem] text-text-muted">{e.time}</p>
            </div>
          </div>
        ))}

        {alertVisible && (
          <div className="rounded-lg bg-red-50 p-2">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-[0.75rem]">⚠</span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.75rem] font-medium text-red-600">
                  ALERTA
                </p>
                <p className="text-[0.6875rem] text-red-500">
                  Mini-Super La Bendición — V. Nueva
                </p>
                <p className="text-[0.5625rem] text-red-400">
                  Cumplimiento en descenso por 6 semanas
                </p>
              </div>
              <span className="font-display text-[0.75rem] font-bold text-red-600">
                52
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Stats Bar ──
function StatsBar({ animate }: { animate: boolean }) {
  const stats = [
    { label: "Tiendas auditadas", value: 847, suffix: "" },
    { label: "Cumplimiento promedio", value: 86, suffix: "%" },
    { label: "Auditorías hoy", value: 124, suffix: "" },
    { label: "Alertas activas", value: 12, suffix: "", warn: true },
  ];

  return (
    <div className="grid grid-cols-2 border-t border-border lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="border-r border-border px-5 py-4 last:border-r-0"
        >
          <p
            className={`font-display text-[1.125rem] font-bold ${s.warn ? "text-amber-500" : "text-text"}`}
          >
            <Counter target={animate ? s.value : 0} suffix={s.suffix} />
          </p>
          <p className="text-[0.625rem] text-text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const counted = useRef(false);

  useEffect(() => {
    if (target === 0 || counted.current) return;
    counted.current = true;
    const duration = 1500;
    const start = performance.now();
    function tick(now: number) {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target]);

  return (
    <>
      {val}
      {suffix}
    </>
  );
}

// ── Main Interactive Map ──
export function InteractiveMap() {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [visibleStores, setVisibleStores] = useState<Set<string>>(new Set());
  const [alertVisible, setAlertVisible] = useState(false);
  const [statsAnimate, setStatsAnimate] = useState(false);
  const [autoPlayDone, setAutoPlayDone] = useState(false);
  const [threshold, setThreshold] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRan = useRef(false);

  // Auto-play sequence
  useEffect(() => {
    if (autoPlayRan.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || autoPlayRan.current) return;
        autoPlayRan.current = true;

        const storeIds = STORES.map((s) => s.id);
        storeIds.forEach((id, i) => {
          setTimeout(
            () => {
              setVisibleStores((prev) => new Set([...prev, id]));
            },
            1000 + i * 180,
          );
        });

        setTimeout(() => setStatsAnimate(true), 7000);
        setTimeout(() => setAlertVisible(true), 8000);
        setTimeout(() => setAutoPlayDone(true), 9000);
      },
      { threshold: 0.3 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredStores = STORES.filter(
    (s) => visibleStores.has(s.id) && s.score >= threshold,
  );

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-2xl border border-border bg-bg shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 520 }}>
        {/* Map — light tiles */}
        <div className="relative flex-1">
          <MapContainer
            center={[14.613, -90.535]}
            zoom={12}
            className="h-[280px] sm:h-[350px] w-full lg:h-full"
            style={{ background: "#f2f2f0", minHeight: 350 }}
            zoomControl={false}
            attributionControl={false}
          >
            <ScrollZoomControl />
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            {filteredStores.map((store) => (
              <CircleMarker
                key={store.id}
                center={[store.lat, store.lng]}
                radius={store.id === "vn-alert" && alertVisible ? 10 : 7}
                pathOptions={{
                  fillColor: scoreColor(store.score),
                  fillOpacity: 0.85,
                  color: "#fff",
                  weight: 2,
                  opacity: 1,
                }}
                eventHandlers={{
                  click: () => setSelectedStore(store),
                }}
              />
            ))}
          </MapContainer>

          {autoPlayDone && !selectedStore && (
            <div className="absolute bottom-4 left-4 rounded-lg bg-bg/90 px-3 py-2 text-[0.6875rem] text-text-muted shadow-sm backdrop-blur-sm ring-1 ring-border">
              Explora el mapa — haz clic en cualquier tienda
            </div>
          )}
        </div>

        {/* Side panel */}
        <div className="w-full border-t border-border bg-bg p-5 lg:w-[320px] lg:border-l lg:border-t-0">
          {selectedStore ? (
            <StorePanel
              store={selectedStore}
              onClose={() => setSelectedStore(null)}
            />
          ) : (
            <LiveFeed entries={LIVE_FEED} alertVisible={alertVisible} />
          )}
        </div>
      </div>

      {/* Controls bar */}
      {autoPlayDone && (
        <div className="border-t border-border px-5 py-3">
          {/* Desktop: inline */}
          <div className="hidden sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <label className="text-[0.6875rem] text-text-muted">
                Umbral de cumplimiento
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="h-1 w-32 cursor-pointer appearance-none rounded-full bg-bg-muted accent-brand"
              />
              <span className="text-[0.6875rem] font-medium text-text-secondary">
                {threshold}
              </span>
            </div>
            <p className="text-[0.6875rem] text-text-muted">
              {filteredStores.length} tiendas visibles ·{" "}
              {STORES.filter((s) => visibleStores.has(s.id)).length -
                filteredStores.length}{" "}
              ocultas
            </p>
          </div>

          {/* Mobile: compact expandable filter */}
          <div className="sm:hidden">
            <MobileFilter
              threshold={threshold}
              onChange={setThreshold}
              visible={filteredStores.length}
              hidden={
                STORES.filter((s) => visibleStores.has(s.id)).length -
                filteredStores.length
              }
            />
          </div>
        </div>
      )}

      {/* Stats bar */}
      <StatsBar animate={statsAnimate} />
    </div>
  );
}
