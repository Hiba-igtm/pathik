import { useEffect, useState } from "react";
import type { Character } from "@/components/game/types";

export function useCharacter() {
  const [character, setCharacter] =
    useState<Partial<Character> | null>(null);

  useEffect(() => {
    const saved =
      localStorage.getItem("selectedCharacter");

    if (saved) {
      setCharacter(JSON.parse(saved));
    }
  }, []);

  return character;
}