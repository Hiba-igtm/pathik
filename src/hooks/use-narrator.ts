import { useCallback, useState } from "react";

export function useNarrator() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stop = useCallback(() => {
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(async (_text: string) => {
    return;
  }, []);

  return {
    speak,
    stop,
    isSpeaking,
    isLoading: false,
  };
}