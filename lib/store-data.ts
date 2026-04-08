export interface Store {
  id: string;
  name: string;
  type: "tienda" | "abarroteria" | "minisuper" | "conveniencia";
  address: string;
  territory: string;
  lat: number;
  lng: number;
  score: number;
  lastVisit: string;
  auditor: string;
  zones: {
    enfriador: number;
    estanteria: number;
    exhibicion: number;
    senalizacion: number;
    limpieza: number;
  };
  trend: number[];
  actions: string[];
}

export const STORES: Store[] = [
  // ── ZONA 10 ──
  { id: "z10-01", name: "Tienda Doña Carmen", type: "tienda", address: "6a Avenida 12-45, Zona 10", territory: "Zona 10 — Capital", lat: 14.5943, lng: -90.5133, score: 92, lastVisit: "2026-04-07", auditor: "María García", zones: { enfriador: 95, estanteria: 90, exhibicion: 94, senalizacion: 88, limpieza: 93 }, trend: [84, 86, 88, 90, 91, 92], actions: ["Renovar señalización exterior"] },
  { id: "z10-02", name: "Abarrotería El Centro", type: "abarroteria", address: "2a Calle 8-20, Zona 10", territory: "Zona 10 — Capital", lat: 14.5961, lng: -90.5098, score: 88, lastVisit: "2026-04-07", auditor: "María García", zones: { enfriador: 92, estanteria: 85, exhibicion: 90, senalizacion: 82, limpieza: 91 }, trend: [80, 82, 84, 85, 87, 88], actions: ["Mejorar exhibición en estante 2", "Actualizar precio en snacks"] },
  { id: "z10-03", name: "Mini-Super La Reforma", type: "minisuper", address: "14 Calle 3-51, Zona 10", territory: "Zona 10 — Capital", lat: 14.5990, lng: -90.5165, score: 94, lastVisit: "2026-04-07", auditor: "María García", zones: { enfriador: 96, estanteria: 93, exhibicion: 95, senalizacion: 91, limpieza: 95 }, trend: [88, 90, 91, 92, 93, 94], actions: [] },
  { id: "z10-04", name: "Tienda Don Julio", type: "tienda", address: "10a Calle 5-12, Zona 10", territory: "Zona 10 — Capital", lat: 14.5918, lng: -90.5070, score: 79, lastVisit: "2026-04-06", auditor: "María García", zones: { enfriador: 82, estanteria: 76, exhibicion: 80, senalizacion: 74, limpieza: 83 }, trend: [72, 74, 75, 76, 78, 79], actions: ["Reacomodar producto en enfriador", "Limpiar estante inferior", "Colocar precio visible"] },
  { id: "z10-05", name: "Conveniencia Rápido", type: "conveniencia", address: "Avenida Reforma 12-01, Zona 10", territory: "Zona 10 — Capital", lat: 14.6005, lng: -90.5120, score: 91, lastVisit: "2026-04-07", auditor: "María García", zones: { enfriador: 94, estanteria: 89, exhibicion: 92, senalizacion: 88, limpieza: 92 }, trend: [85, 87, 88, 89, 90, 91], actions: ["Renovar material POP en entrada"] },
  // ── ZONA 14 ──
  { id: "z14-01", name: "Tienda Doña Marta", type: "tienda", address: "3a Avenida 14-22, Zona 14", territory: "Zona 14", lat: 14.5862, lng: -90.5230, score: 90, lastVisit: "2026-04-07", auditor: "Carlos López", zones: { enfriador: 93, estanteria: 88, exhibicion: 91, senalizacion: 87, limpieza: 91 }, trend: [83, 85, 87, 88, 89, 90], actions: ["Actualizar planograma de bebidas"] },
  { id: "z14-02", name: "Abarrotería Las Américas", type: "abarroteria", address: "10a Calle 1-60, Zona 14", territory: "Zona 14", lat: 14.5835, lng: -90.5189, score: 85, lastVisit: "2026-04-06", auditor: "Carlos López", zones: { enfriador: 88, estanteria: 83, exhibicion: 86, senalizacion: 80, limpieza: 88 }, trend: [78, 80, 81, 83, 84, 85], actions: ["Colocar señalización de marca en puerta", "Verificar temperatura de enfriador"] },
  { id: "z14-03", name: "Mini-Super Oakland", type: "minisuper", address: "Diagonal 6 15-40, Zona 14", territory: "Zona 14", lat: 14.5878, lng: -90.5260, score: 93, lastVisit: "2026-04-07", auditor: "Carlos López", zones: { enfriador: 95, estanteria: 92, exhibicion: 94, senalizacion: 90, limpieza: 94 }, trend: [87, 89, 90, 91, 92, 93], actions: [] },
  // ── MIXCO ──
  { id: "mx-01", name: "Tienda Doña Luisa", type: "tienda", address: "Calzada Roosevelt 15-80, Mixco", territory: "Mixco Centro", lat: 14.6305, lng: -90.5685, score: 83, lastVisit: "2026-04-06", auditor: "Roberto Méndez", zones: { enfriador: 86, estanteria: 80, exhibicion: 84, senalizacion: 78, limpieza: 87 }, trend: [75, 77, 79, 80, 82, 83], actions: ["Reorganizar estante de snacks", "Limpiar interior de enfriador"] },
  { id: "mx-02", name: "Abarrotería El Paisano", type: "abarroteria", address: "4a Calle 2-15, Mixco", territory: "Mixco Centro", lat: 14.6332, lng: -90.5720, score: 78, lastVisit: "2026-04-07", auditor: "Roberto Méndez", zones: { enfriador: 81, estanteria: 75, exhibicion: 79, senalizacion: 73, limpieza: 82 }, trend: [70, 72, 73, 75, 76, 78], actions: ["Verificar exclusividad de enfriador", "Colocar precios visibles", "Mejorar iluminación"] },
  { id: "mx-03", name: "Tienda La Bendición", type: "tienda", address: "9a Avenida 5-33, Mixco", territory: "Mixco Centro", lat: 14.6280, lng: -90.5650, score: 91, lastVisit: "2026-04-07", auditor: "Roberto Méndez", zones: { enfriador: 94, estanteria: 89, exhibicion: 92, senalizacion: 88, limpieza: 92 }, trend: [82, 85, 87, 88, 90, 91], actions: ["Actualizar material promocional"] },
  { id: "mx-04", name: "Mini-Super El Naranjo", type: "minisuper", address: "Col. El Naranjo, Lote 12, Mixco", territory: "Mixco Centro", lat: 14.6350, lng: -90.5780, score: 76, lastVisit: "2026-04-05", auditor: "Roberto Méndez", zones: { enfriador: 79, estanteria: 73, exhibicion: 77, senalizacion: 70, limpieza: 81 }, trend: [68, 70, 71, 73, 74, 76], actions: ["Reacomodar todo el enfriador", "Instalar señalización nueva", "Limpiar estantes"] },
  { id: "mx-05", name: "Conveniencia La Roosy", type: "conveniencia", address: "Calzada Roosevelt 22-50, Mixco", territory: "Mixco Centro", lat: 14.6290, lng: -90.5600, score: 87, lastVisit: "2026-04-07", auditor: "Roberto Méndez", zones: { enfriador: 90, estanteria: 85, exhibicion: 88, senalizacion: 83, limpieza: 89 }, trend: [80, 82, 83, 84, 86, 87], actions: ["Verificar fecha de material POP"] },
  // ── VILLA NUEVA ──
  { id: "vn-01", name: "Tienda Don Pedro", type: "tienda", address: "Avenida Petapa 42-10, Villa Nueva", territory: "Villa Nueva", lat: 14.5285, lng: -90.5910, score: 74, lastVisit: "2026-04-06", auditor: "Ana Ramírez", zones: { enfriador: 77, estanteria: 71, exhibicion: 75, senalizacion: 68, limpieza: 79 }, trend: [65, 67, 69, 70, 72, 74], actions: ["Corregir posición de producto", "Instalar señalización completa", "Limpiar puerta de enfriador"] },
  { id: "vn-02", name: "Abarrotería La Esperanza", type: "abarroteria", address: "2a Calle 4-15, Villa Nueva", territory: "Villa Nueva", lat: 14.5250, lng: -90.5870, score: 81, lastVisit: "2026-04-07", auditor: "Ana Ramírez", zones: { enfriador: 84, estanteria: 79, exhibicion: 82, senalizacion: 76, limpieza: 84 }, trend: [73, 75, 77, 78, 80, 81], actions: ["Mejorar visibilidad de marca desde entrada"] },
  { id: "vn-03", name: "Mini-Super Villa Linda", type: "minisuper", address: "Centro Comercial Villa Linda, Local 8", territory: "Villa Nueva", lat: 14.5320, lng: -90.5950, score: 68, lastVisit: "2026-04-05", auditor: "Ana Ramírez", zones: { enfriador: 71, estanteria: 65, exhibicion: 69, senalizacion: 60, limpieza: 75 }, trend: [58, 60, 62, 64, 66, 68], actions: ["Urgente: reorganizar enfriador completo", "Instalar planograma nuevo", "Capacitar al encargado"] },
  { id: "vn-04", name: "Tienda Doña Rosario", type: "tienda", address: "6a Avenida 8-22, Villa Nueva", territory: "Villa Nueva", lat: 14.5300, lng: -90.5830, score: 86, lastVisit: "2026-04-07", auditor: "Ana Ramírez", zones: { enfriador: 89, estanteria: 84, exhibicion: 87, senalizacion: 82, limpieza: 88 }, trend: [78, 80, 82, 83, 85, 86], actions: ["Actualizar precios en estante superior"] },
  // ── ESCUINTLA ──
  { id: "es-01", name: "Tienda El Buen Precio", type: "tienda", address: "4a Calle 2-30, Escuintla", territory: "Escuintla Sur", lat: 14.2980, lng: -90.7870, score: 82, lastVisit: "2026-04-06", auditor: "Luis Hernández", zones: { enfriador: 85, estanteria: 79, exhibicion: 83, senalizacion: 77, limpieza: 86 }, trend: [74, 76, 78, 79, 81, 82], actions: ["Verificar temperatura — sensor reportó 8°C"] },
  { id: "es-02", name: "Abarrotería Central", type: "abarroteria", address: "1a Avenida 6-15, Escuintla", territory: "Escuintla Sur", lat: 14.3010, lng: -90.7900, score: 77, lastVisit: "2026-04-05", auditor: "Luis Hernández", zones: { enfriador: 80, estanteria: 74, exhibicion: 78, senalizacion: 72, limpieza: 81 }, trend: [69, 71, 73, 74, 76, 77], actions: ["Retirar producto de competencia del enfriador", "Mejorar limpieza general"] },
  { id: "es-03", name: "Tienda Doña Gloria", type: "tienda", address: "3a Calle y 2a Av esquina, Escuintla", territory: "Escuintla Sur", lat: 14.2955, lng: -90.7835, score: 89, lastVisit: "2026-04-07", auditor: "Luis Hernández", zones: { enfriador: 92, estanteria: 87, exhibicion: 90, senalizacion: 85, limpieza: 91 }, trend: [81, 83, 85, 86, 88, 89], actions: [] },
  // ── QUETZALTENANGO ──
  { id: "qz-01", name: "Tienda El Altiplano", type: "tienda", address: "4a Calle 15-20, Zona 1, Xela", territory: "Quetzaltenango", lat: 14.8350, lng: -91.5180, score: 80, lastVisit: "2026-04-06", auditor: "Fernando Xicay", zones: { enfriador: 83, estanteria: 78, exhibicion: 81, senalizacion: 75, limpieza: 83 }, trend: [72, 74, 76, 77, 79, 80], actions: ["Mejorar visibilidad de producto en estante", "Actualizar precios"] },
  { id: "qz-02", name: "Abarrotería La Democracia", type: "abarroteria", address: "14 Avenida 3-45, Zona 3, Xela", territory: "Quetzaltenango", lat: 14.8380, lng: -91.5220, score: 85, lastVisit: "2026-04-07", auditor: "Fernando Xicay", zones: { enfriador: 88, estanteria: 83, exhibicion: 86, senalizacion: 80, limpieza: 88 }, trend: [77, 79, 81, 82, 84, 85], actions: ["Colocar material POP en mostrador"] },
  { id: "qz-03", name: "Mini-Super Xelahú", type: "minisuper", address: "12 Avenida 5-60, Zona 1, Xela", territory: "Quetzaltenango", lat: 14.8320, lng: -91.5150, score: 72, lastVisit: "2026-04-05", auditor: "Fernando Xicay", zones: { enfriador: 75, estanteria: 69, exhibicion: 73, senalizacion: 66, limpieza: 78 }, trend: [64, 66, 67, 69, 70, 72], actions: ["Urgente: enfriador con productos ajenos", "Reorganizar exhibición completa", "Solicitar visita de mantenimiento"] },
  // ── COBÁN ──
  { id: "cb-01", name: "Tienda Doña Isabel", type: "tienda", address: "1a Calle 4-20, Zona 1, Cobán", territory: "Cobán Norte", lat: 15.4710, lng: -90.3710, score: 75, lastVisit: "2026-04-05", auditor: "Diego Caal", zones: { enfriador: 78, estanteria: 72, exhibicion: 76, senalizacion: 70, limpieza: 79 }, trend: [67, 69, 70, 72, 73, 75], actions: ["Mejorar orden general", "Verificar stock de producto principal"] },
  { id: "cb-02", name: "Abarrotería El Q'eqchi'", type: "abarroteria", address: "3a Avenida 2-15, Zona 2, Cobán", territory: "Cobán Norte", lat: 15.4680, lng: -90.3740, score: 70, lastVisit: "2026-04-04", auditor: "Diego Caal", zones: { enfriador: 73, estanteria: 67, exhibicion: 71, senalizacion: 65, limpieza: 74 }, trend: [61, 63, 65, 66, 68, 70], actions: ["Instalar señalización de marca", "Capacitar al tendero sobre acomodo", "Limpiar enfriador"] },
  { id: "cb-03", name: "Mini-Super Las Verapaces", type: "minisuper", address: "5a Calle 8-30, Zona 1, Cobán", territory: "Cobán Norte", lat: 15.4740, lng: -90.3680, score: 82, lastVisit: "2026-04-06", auditor: "Diego Caal", zones: { enfriador: 85, estanteria: 80, exhibicion: 83, senalizacion: 77, limpieza: 85 }, trend: [74, 76, 78, 79, 81, 82], actions: ["Actualizar material promocional de temporada"] },
  // ── RED ALERT STORE ──
  { id: "vn-alert", name: "Mini-Super La Bendición", type: "minisuper", address: "Bulevar Sur 15-90, Villa Nueva", territory: "Villa Nueva", lat: 14.5340, lng: -90.5980, score: 52, lastVisit: "2026-04-07", auditor: "Ana Ramírez", zones: { enfriador: 55, estanteria: 48, exhibicion: 53, senalizacion: 42, limpieza: 62 }, trend: [71, 68, 64, 60, 56, 52], actions: ["URGENTE: Enfriador con más de 40% productos ajenos", "Estantería completamente fuera de planograma", "Señalización de marca removida", "Solicitar reunión con encargado de tienda", "Programar visita de seguimiento en 48 horas"] },
];

export const TERRITORIES = [
  { name: "Zona 10 — Capital", score: 94, stores: 5, lat: 14.596, lng: -90.512, color: "#22c55e" },
  { name: "Zona 14", score: 89, stores: 3, lat: 14.586, lng: -90.522, color: "#22c55e" },
  { name: "Mixco Centro", score: 83, stores: 5, lat: 14.631, lng: -90.569, color: "#f59e0b" },
  { name: "Villa Nueva", score: 72, stores: 5, lat: 14.530, lng: -90.590, color: "#f59e0b" },
  { name: "Escuintla Sur", score: 83, stores: 3, lat: 14.298, lng: -90.787, color: "#f59e0b" },
  { name: "Quetzaltenango", score: 79, stores: 3, lat: 14.835, lng: -91.518, color: "#f59e0b" },
  { name: "Cobán Norte", score: 76, stores: 3, lat: 15.471, lng: -90.371, color: "#ef4444" },
];

export const LIVE_FEED = [
  { auditor: "María G.", store: "Tienda Don Carlos", territory: "Zona 10", score: 92, time: "2 min", isAlert: false },
  { auditor: "Roberto M.", store: "Abarrotería El Paisano", territory: "Mixco", score: 78, time: "5 min", isAlert: false },
  { auditor: "Ana R.", store: "Mini-Super Villa Linda", territory: "V. Nueva", score: 68, time: "12 min", isAlert: false },
  { auditor: "Carlos L.", store: "Mini-Super Oakland", territory: "Zona 14", score: 93, time: "18 min", isAlert: false },
  { auditor: "Luis H.", store: "Tienda Doña Gloria", territory: "Escuintla", score: 89, time: "25 min", isAlert: false },
];

export function scoreColor(score: number): string {
  if (score >= 85) return "#22c55e";
  if (score >= 70) return "#f59e0b";
  return "#ef4444";
}
