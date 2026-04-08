"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MapContainer, TileLayer, CircleMarker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { STORES, LIVE_FEED, scoreColor, type Store } from "@/lib/store-data";

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

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <button
        onClick={onClose}
        className="mb-4 cursor-pointer self-start text-[0.75rem] text-[#888] transition-colors hover:text-white"
      >
        ← Cerrar
      </button>

      <h3 className="font-display text-[1.125rem] font-bold text-white">{store.name}</h3>
      <p className="mt-1 text-[0.75rem] text-[#666]">
        {store.type} · {store.territory}
      </p>
      <p className="text-[0.6875rem] text-[#555]">{store.address}</p>

      {/* Score ring */}
      <div className="my-6 flex justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#222" strokeWidth="6" />
            <circle
              cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 42}
              strokeDashoffset={2 * Math.PI * 42 * (1 - store.score / 100)}
            />
          </svg>
          <span className="font-display text-[1.5rem] font-bold text-white">{store.score}</span>
        </div>
      </div>

      {/* Zone bars */}
      <p className="mb-2 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-[#666]">Zonas</p>
      <div className="space-y-2">
        {zoneEntries.map(([key, val]) => (
          <div key={key} className="flex items-center gap-2">
            <span className="w-20 text-[0.75rem] text-[#888]">{zoneLabels[key]}</span>
            <div className="h-1.5 flex-1 rounded-full bg-[#222]">
              <div className="h-full rounded-full" style={{ width: `${val}%`, background: scoreColor(val) }} />
            </div>
            <span className="w-7 text-right text-[0.75rem] font-semibold text-[#ccc]">{val}</span>
          </div>
        ))}
      </div>

      {/* Sparkline */}
      <p className="mb-2 mt-5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-[#666]">
        Tendencia (6 visitas)
      </p>
      <svg viewBox="0 0 120 40" className="w-full">
        <polyline
          points={store.trend.map((v, i) => `${i * 24},${40 - (v / 100) * 38}`).join(" ")}
          fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
        {store.trend.map((v, i) => (
          <circle key={i} cx={i * 24} cy={40 - (v / 100) * 38} r="2.5" fill="#0d1117" stroke={color} strokeWidth="1.5" />
        ))}
      </svg>

      {/* Actions */}
      {store.actions.length > 0 && (
        <>
          <p className="mb-2 mt-5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-[#666]">
            Acciones pendientes
          </p>
          <ul className="space-y-1.5">
            {store.actions.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-[0.75rem] text-[#999]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#444]" />
                {a}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Meta */}
      <div className="mt-6 border-t border-[#1a1a1a] pt-4 text-[0.6875rem] text-[#555]">
        <p>Última visita: {store.lastVisit}</p>
        <p>Auditor/a: {store.auditor}</p>
      </div>
    </div>
  );
}

// ── Live Feed ──
function LiveFeed({ entries, alertVisible }: { entries: typeof LIVE_FEED; alertVisible: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <p className="mb-4 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-[#666]">
        Actividad en tiempo real
      </p>
      <div className="space-y-3">
        {entries.map((e, i) => (
          <div key={i} className="flex items-start gap-2.5 rounded-lg p-2 transition-colors">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: scoreColor(e.score) }} />
            <div className="min-w-0 flex-1">
              <p className="text-[0.75rem] text-[#ccc]">
                <span className="font-medium">{e.auditor}</span> completó auditoría
              </p>
              <p className="text-[0.6875rem] text-[#666]">
                {e.store} — {e.territory}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="font-display text-[0.75rem] font-semibold" style={{ color: scoreColor(e.score) }}>
                {e.score}
              </span>
              <p className="text-[0.5625rem] text-[#555]">{e.time}</p>
            </div>
          </div>
        ))}

        {alertVisible && (
          <div className="rounded-lg bg-red-500/10 p-2">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-[0.75rem]">⚠</span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.75rem] font-medium text-red-400">ALERTA</p>
                <p className="text-[0.6875rem] text-red-300/70">
                  Mini-Super La Bendición — V. Nueva
                </p>
                <p className="text-[0.5625rem] text-red-300/50">
                  Cumplimiento en descenso por 6 semanas
                </p>
              </div>
              <span className="font-display text-[0.75rem] font-bold text-red-400">52</span>
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
    <div className="grid grid-cols-2 border-t border-[#1a1a1a] lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="border-r border-[#1a1a1a] px-5 py-4 last:border-r-0">
          <p className={`font-display text-[1.125rem] font-bold ${s.warn ? "text-amber-400" : "text-white"}`}>
            <Counter target={animate ? s.value : 0} suffix={s.suffix} />
          </p>
          <p className="text-[0.625rem] text-[#555]">{s.label}</p>
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

  return <>{val}{suffix}</>;
}

// ── Map auto-zoom helper ──
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.2 });
  }, [center, zoom, map]);
  return null;
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

  // Auto-play sequence on scroll into view
  useEffect(() => {
    if (autoPlayRan.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || autoPlayRan.current) return;
        autoPlayRan.current = true;

        // Stagger store appearance
        const storeIds = STORES.map((s) => s.id);
        storeIds.forEach((id, i) => {
          setTimeout(() => {
            setVisibleStores((prev) => new Set([...prev, id]));
          }, 1000 + i * 180);
        });

        // Stats counter at T=7s
        setTimeout(() => setStatsAnimate(true), 7000);

        // Alert at T=8s
        setTimeout(() => setAlertVisible(true), 8000);

        // Auto-play done at T=9s
        setTimeout(() => setAutoPlayDone(true), 9000);
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredStores = STORES.filter(
    (s) => visibleStores.has(s.id) && s.score >= threshold
  );

  return (
    <div ref={containerRef} className="overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.08)] bg-[#0d1117]">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 520 }}>
        {/* Map */}
        <div className="relative flex-1">
          <MapContainer
            center={[14.613, -90.535]}
            zoom={12}
            className="h-[350px] w-full lg:h-full"
            style={{ background: "#0d1117", minHeight: 350 }}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {filteredStores.map((store) => (
              <CircleMarker
                key={store.id}
                center={[store.lat, store.lng]}
                radius={store.id === "vn-alert" && alertVisible ? 8 : 5}
                pathOptions={{
                  fillColor: scoreColor(store.score),
                  fillOpacity: 0.9,
                  color: "#fff",
                  weight: 1.5,
                  opacity: 0.8,
                }}
                eventHandlers={{
                  click: () => setSelectedStore(store),
                }}
              />
            ))}
          </MapContainer>

          {/* Tooltip after autoplay */}
          {autoPlayDone && !selectedStore && (
            <div className="absolute bottom-4 left-4 rounded-lg bg-[#1a1a1a]/90 px-3 py-2 text-[0.6875rem] text-[#888] backdrop-blur-sm">
              Explora el mapa — haz clic en cualquier tienda
            </div>
          )}
        </div>

        {/* Side panel */}
        <div className="w-full border-t border-[#1a1a1a] p-5 lg:w-[320px] lg:border-l lg:border-t-0">
          {selectedStore ? (
            <StorePanel store={selectedStore} onClose={() => setSelectedStore(null)} />
          ) : (
            <LiveFeed entries={LIVE_FEED} alertVisible={alertVisible} />
          )}
        </div>
      </div>

      {/* Controls bar */}
      {autoPlayDone && (
        <div className="flex flex-col gap-3 border-t border-[#1a1a1a] px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <label className="text-[0.6875rem] text-[#666]">Umbral de cumplimiento</label>
            <input
              type="range"
              min={0}
              max={100}
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="h-1 w-32 cursor-pointer appearance-none rounded-full bg-[#222] accent-[#00B386]"
            />
            <span className="text-[0.6875rem] font-medium text-[#888]">{threshold}</span>
          </div>
          <p className="text-[0.6875rem] text-[#555]">
            {filteredStores.length} tiendas visibles · {STORES.filter((s) => visibleStores.has(s.id)).length - filteredStores.length} ocultas
          </p>
        </div>
      )}

      {/* Stats bar */}
      <StatsBar animate={statsAnimate} />
    </div>
  );
}
