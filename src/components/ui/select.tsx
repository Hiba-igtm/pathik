import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import indiaMap from "@/assets/india map.jpg";
import { ROUTE_LIST, type RouteId } from "@/lib/routes-data";
import { useNarrator } from "@/hooks/use-narrator";
import indiaRouteVideo from "@/assets/glowing route map.mp4";
import taxilaIntro from "@/assets/audio/taxila intro.mp3";
import startJourneyBtn from "@/assets/Start journey!button.png";
import { stopBackgroundMusic } from "@/lib/backgroundMusic";

export const Route = createFileRoute("/select")({
  head: () => ({
    meta: [
      { title: "Choose Your Route — Yatra" },
      {
        name: "description",
        content: "Pick one of four illustrated routes across ancient India.",
      },
    ],
  }),
  component: SelectRoute,
});

function SelectRoute() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<RouteId | null>(null);
  const { speak } = useNarrator();

  useEffect(() => {
    // Gentle prompt
    const t = setTimeout(() => speak("Pick a route to begin your journey!"), 600);
    return () => clearTimeout(t);
  }, [speak]);

const handlePick = (id: RouteId) => {
  setSelected(id);

  const route = ROUTE_LIST.find((r) => r.id === id)!;

  const routeNames: Record<string, string> = {
    uttarapath: "Uttaraa Path",
    dakshinapath: "Dakshinaa Path",
    pubbantapath: "Pubbantha Path",
    aparantapath: "Aparaantha Path",
  };

  speak(routeNames[id] || route.name);
};
const start = () => {
  if (!selected) return;

  // Stop the intro background music immediately
  stopBackgroundMusic();

  // Navigate to the selected route
  navigate({
    to: "/journey/$routeId",
    params: { routeId: selected },
  });
};

  const current = ROUTE_LIST.find((r) => r.id === selected) ?? null;

  return (
    <main className="fixed inset-0 overflow-hidden">
      

<div className="relative flex h-screen w-screen">        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#3a1e08] whitespace-nowrap">
  Choose your route across ancient India
</h1>
        <p className="mb-6 text-center text-base text-muted-foreground">Tap a glowing path to hear its name</p>

<div className="fixed inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-screen h-screen object-cover"
  >
    <source src={indiaRouteVideo} type="video/mp4" />
  </video>

  {ROUTE_LIST.map((r) => {
    const isActive = selected === r.id;
    return (
      <button
        key={r.id}
        onClick={() => handlePick(r.id)}
        aria-label={`Select ${r.name}`}
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all ${
          isActive ? "scale-110" : "hover:scale-110"
        }`}
        style={{
          left: `${r.mapDot.x}%`,
          top: `${r.mapDot.y}%`,
        }}
      >
        <span
          className="block h-7 w-7 rounded-full border-4 border-card shadow-xl animate-pulse-dot"
          style={{
            backgroundColor: r.hex,
            boxShadow: `0 0 24px ${r.glow}`,
          }}
        />
        <span className="mt-2 block whitespace-nowrap rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-foreground shadow">
          {r.name}
        </span>
      </button>
    );
  })}
</div>
        {/* Legend */}
        <div className="mt-6 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {ROUTE_LIST.map((r) => {
            const active = selected === r.id;
            return (
              <button
                key={r.id}
                onClick={() => handlePick(r.id)}
                className={`flex items-center gap-3 rounded-2xl border-2 bg-card/80 px-4 py-3 text-left shadow-sm transition-all hover:shadow-md ${active ? "scale-[1.02] border-foreground" : "border-border"}`}
                style={active ? { boxShadow: `0 6px 24px ${r.glow}55` } : undefined}
              >
                <span className="block h-5 w-5 flex-shrink-0 rounded-full" style={{ backgroundColor: r.hex }} />
                <span>
                  <span className="block font-bold text-foreground">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.tagline}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Start button */}
        <div className="mt-8 flex min-h-16 items-center justify-center">
          {current && (
            <button
  onClick={start}
  className="animate-float-up transition-transform hover:scale-105"
>
  <img
    src={startJourneyBtn}
    alt="Start Journey"
    className="w-72 h-auto"
  />
</button>
          )}
        </div>
      </div>
    </main>
  );
}