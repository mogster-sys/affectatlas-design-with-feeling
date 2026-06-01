import { createContext, useContext, useState, type ReactNode } from "react";
import type { EmotionKey } from "@/lib/emotions";

interface ActiveEmotion {
  key: EmotionKey;
  setKey: (k: EmotionKey) => void;
}

const ActiveEmotionContext = createContext<ActiveEmotion>({ key: "joy", setKey: () => {} });

/** Shares the hero's currently-active emotion so the nav can follow it. */
export const ActiveEmotionProvider = ({ children }: { children: ReactNode }) => {
  const [key, setKey] = useState<EmotionKey>("joy");
  return <ActiveEmotionContext.Provider value={{ key, setKey }}>{children}</ActiveEmotionContext.Provider>;
};

export const useActiveEmotion = () => useContext(ActiveEmotionContext);
