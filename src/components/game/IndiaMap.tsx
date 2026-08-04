import { motion } from "framer-motion";
import type { RouteId } from "@/lib/routes-data";
import indiaRouteVideo from "@/assets/glowing route map.mp4";
// Stylized India outline (approximate, friendly shape)

export function IndiaMap({
  onPick,
  picked,
  highlight,
  showCharacter,
  characterPos,
  glowOnly,
}: {
  onPick?: (k: RouteId) => void;
picked?: RouteId | null;
highlight?: RouteId | null;
  showCharacter?: React.ReactNode;
  characterPos?: { x: number; y: number };
glowOnly?: RouteId;
}) {
  
  const points = [
  {
    id: "taxila",
    x: 24,
    y: 31,
    color: "#FFD700",
  },
  {
    id: "mathura",
    x: 38,
    y: 38,
    color: "#FFD700",
  },
  {
    id: "kausambi",
    x: 51,
    y: 44,
    color: "#FFD700",
  },
  {
    id: "pataliputra",
    x: 64,
    y: 48,
    color: "#FFD700",
  },
  {
    id: "tamralipti",
    x: 77,
    y: 58,
    color: "#FFD700",
  },
];
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={indiaRouteVideo} type="video/mp4" />
  </video>

  {points.map((point) => (
    <motion.div
      key={point.id}
      className="absolute rounded-full"
      style={{
        left: `${point.x}%`,
        top: `${point.y}%`,
        width: 18,
        height: 18,
        background: point.color,
        transform: "translate(-50%, -50%)",
        boxShadow: `0 0 20px ${point.color}`,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.6, 1],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
      }}
    />
  ))}

  {showCharacter && characterPos && (
    <motion.div
      className="absolute"
      style={{
        left: `${characterPos.x}%`,
        top: `${characterPos.y}%`,
      }}
      animate={{
        left: `${characterPos.x}%`,
        top: `${characterPos.y}%`,
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="-translate-x-1/2 -translate-y-full">
        {showCharacter}
      </div>
    </motion.div>
  )}
</div>
  );
}