import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ROUTE_LIST, type RouteId} from "@/lib/routes-data";
import indiaMap from "@/assets/glowing route map.mp4";
import beginWalkingBtn from "@/assets/Start journey!button.png";
import { stopBackgroundMusic } from "@/lib/backgroundMusic";
import indiaRoutePath from "@/assets/glowing route map.mp4";
export const Route = createFileRoute("/select")({
  head: () => ({
    meta: [
      { title: "Choose Your Route — Yatra" },
      {
        name: "description",
        content:
          "Pick one of four illustrated routes across ancient India and begin your journey.",
      },
      { property: "og:title", content: "Choose Your Route — Yatra" },
      {
        property: "og:description",
        content: "Four glowing trade routes across ancient India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/select" },
    ],
    links: [{ rel: "canonical", href: "/select" }],
  }),
  component: SelectRoute,
});

function SelectRoute() {
  const navigate = useNavigate();
  const [active, setActive] = useState<RouteId | null>(null);
  const current=
    ROUTE_LIST.find((r) => r.id === active) ?? null;

const start = () => {
  if (!active) return;

  // Stop the intro background music
  stopBackgroundMusic();

  navigate({
    to: "/journey/$routeId",
    params: { routeId: active },
  });
};

  return (
    <main className="fixed inset-0 overflow-hidden">
      <div className="relative z-20 mx-auto max-w-5xl text-center shrink-0">
        <h1 className="whitespace-nowrap text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
          Choose your route across ancient India
        </h1>
<p className="mt-1 text-xs md:text-sm text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">          Tap a glowing stop on the map to open its story.
        </p>
      </div>

      {/* Map + pulsing stops */}
<div className="absolute inset-0 h-full w-full object-fill"> 
      <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed inset-0 w-screen h-screen object-fill"
>
  <source src={indiaRoutePath} type="video/mp4" />
</video>

        {ROUTE_LIST.map((r) => {
          const isActive = active === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              aria-label={`Open ${r.name}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
style={{
  left:
    r.id === "uttarapath"
      ? "45%"
      : r.id === "dakshinapath"
      ? "58%"
      : r.id === "pubbantapath"
      ? "81%"
      : r.id === "aparantapath"
      ? "48%"
      : "50%",

  top:
    r.id === "uttarapath"
      ? "10%"
      : r.id === "dakshinapath"
      ? "40%"
      : r.id === "pubbantapath"
      ? "56%"
      : r.id === "aparantapath"
      ? "43%"
      : "50%",
}}>
              {/* pulsing halo */}
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full animate-ping"
                style={{ backgroundColor: `${r.glow}66` }}
              />
              {/* core dot */}
              <span
                className={`relative block rounded-full border-2 border-white transition-transform ${
                  isActive ? "h-6 w-6 scale-110" : "h-5 w-5 group-hover:scale-110"
                }`}
                style={{
                  backgroundColor: r.glow,
                  boxShadow: `0 0 0 4px ${r.glow}33, 0 0 22px 6px ${r.glow}bb`,
                }}
              />
              <span
                className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold shadow"
                style={{
                  backgroundColor: "#fbf3df",
                  color: "#3a1e08",
                  border: `1.5px solid ${r.glow}`,
                }}
              >
                {r.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Popup overlay */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl bg-[#fbf3df] p-6 shadow-2xl animate-scale-in"
            style={{
              border: `2px solid ${current.glow}`,
              boxShadow: `0 20px 60px ${current.glow}66`,
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-[0.15em]"
                  style={{ color: current.glow }}
                >
                  {current.tagline}
                </div>
                <h2 className="mt-1 text-2xl font-black text-[#3a1e08]">
                  {current.name}
                </h2>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="rounded-full px-2 py-1 text-[#3a1e08]/60 hover:text-[#3a1e08]"
              >
                ✕
              </button>
            </div>
            
            <button
              onClick={start}
              className="mt-5 w-full rounded-full py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95"
              style={{
                backgroundColor: current.glow,
                boxShadow: `0 8px 24px ${current.glow}88`,
              }}
            >
              Begin the {current.name} →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
