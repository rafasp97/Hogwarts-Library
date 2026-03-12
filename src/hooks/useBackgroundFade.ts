"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

export function useBackgroundFade(
  images: string[],
  intervalMs: number = 3000,
  fadeDuration: number = 1.2
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);

  const bgRef0 = useRef<HTMLDivElement>(null);
  const bgRef1 = useRef<HTMLDivElement>(null);

  const bgRefs = [bgRef0, bgRef1] as const;

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      const topLayer = bgRefs[activeLayer].current;
      if (!topLayer) return;

      topLayer.style.backgroundImage = `url(${images[nextIndex]})`;
      topLayer.style.opacity = "0";

      animate(0, 1, {
        duration: fadeDuration,
        onUpdate(value) {
          topLayer.style.opacity = value.toString();
        },
        onComplete() {
          setCurrentIndex(nextIndex);
          setActiveLayer(activeLayer === 0 ? 1 : 0);
        },
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, activeLayer, images, intervalMs, fadeDuration, bgRefs]);

  return { currentIndex, activeLayer, bgRefs };
}