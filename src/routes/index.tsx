import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Intro } from "@/components/game/Intro";
import { CharacterCreator } from "@/components/game/CharacterCreator";
import type { Character, RouteKey } from "@/components/game/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Heritage Route Traveler — A Journey Across Ancient India" },
      {
        name: "description",
        content:
          "A playful kids' adventure across the four great ancient routes of India: Uttarapath, Dakshinapath, Pubbantapath, and Aparantapath.",
      },
      { property: "og:title", content: "The Heritage Route Traveler" },
      {
        property: "og:description",
        content: "Travel the great heritage routes of ancient India with your own little explorer.",
      },
    ],
  }),
  component: Index,
});

type Phase = "intro" | "create" | "map" | "journey";

function Index() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [character, setCharacter] = useState<Character | null>(null);
  const [route, setRoute] = useState<RouteKey | null>(null);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={phase}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {phase === "intro" && <Intro onStart={() => setPhase("create")} />}
        {phase === "create" && (
          <CharacterCreator
            onDone={(c) => {
              setCharacter(c);
              setPhase("map");
            }}
          />
        )}
        
      </motion.div>
    </AnimatePresence>
  );
}
