"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const spriteSets = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
} as const;

type SpriteSetKey = keyof typeof spriteSets;

type OneKoProps = {
  speed?: number;
  x?: number;
  y?: number;
  file?: string;
};

export function OneKo({
  speed = 10,
  x = 16,
  y = 16,
  file = "/oneko.gif",
}: OneKoProps) {
  const position = useRef({ x, y });
  const mousePosition = useRef({ x: 0, y: 0 });
  const frameCount = useRef(0);
  const idealTime = useRef(0);
  const idealAnimation = useRef<SpriteSetKey | null>(null);
  const idealAnimationFrame = useRef(0);
  const lastFrameTimestamp = useRef<number | undefined>(undefined);
  const backgroundPosition = useRef({ x: 0, y: 0 });
  const isReducedMotion = useRef(false);

  const oneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(prefers-reduced-motion: reduce)`,
    );

    const onChange = () => {
      isReducedMotion.current = mediaQueryList.matches;
    };

    mediaQueryList.addEventListener("change", onChange);
    onChange();

    if (mediaQueryList.matches) return;

    const one = oneRef.current;
    if (!one) return;

    function setSprite(name: SpriteSetKey, frame: number) {
      if (!one) return;
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      one.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
      backgroundPosition.current = {
        x: sprite[0] * 32,
        y: sprite[1] * 32,
      };
    }

    function resetIdleAnimation() {
      idealAnimation.current = null;
      idealAnimationFrame.current = 0;
    }

    function idle() {
      idealTime.current += 1;

      if (
        idealTime.current > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idealAnimation.current == null
      ) {
        const available: SpriteSetKey[] = ["sleeping", "scratchSelf"];
        if (position.current.x < 32) available.push("scratchWallW");
        if (position.current.y < 32) available.push("scratchWallN");
        if (position.current.x > window.innerWidth - 32)
          available.push("scratchWallE");
        if (position.current.y > window.innerHeight - 32)
          available.push("scratchWallS");

        idealAnimation.current =
          available[Math.floor(Math.random() * available.length)];
      }

      switch (idealAnimation.current) {
        case "sleeping":
          if (idealAnimationFrame.current < 8) {
            setSprite("tired", 0);
          } else {
            setSprite("sleeping", Math.floor(idealAnimationFrame.current / 4));
            if (idealAnimationFrame.current > 192) {
              resetIdleAnimation();
            }
          }
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idealAnimation.current, idealAnimationFrame.current);
          if (idealAnimationFrame.current > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite("idle", 0);
      }
      idealAnimationFrame.current += 1;
    }

    function frame() {
      if (!one) return;
      frameCount.current += 1;

      const diffX = position.current.x - mousePosition.current.x;
      const diffY = position.current.y - mousePosition.current.y;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < speed || distance < 48) {
        idle();
        return;
      }

      resetIdleAnimation();
      if (idealTime.current > 1) {
        setSprite("alert", 0);
        idealTime.current = Math.min(idealTime.current, 7);
        idealTime.current -= 1;
        return;
      }

      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";

      setSprite(direction as SpriteSetKey, frameCount.current);

      const localX = position.current.x - (diffX / distance) * speed;
      const localY = position.current.y - (diffY / distance) * speed;

      position.current = {
        x: Math.min(Math.max(16, localX), window.innerWidth - 16),
        y: Math.min(Math.max(16, localY), window.innerHeight - 16),
      };

      one.style.left = `${position.current.x - 16}px`;
      one.style.top = `${position.current.y - 16}px`;
    }

    function onAnimationFrame(timestamp: number) {
      if (!one || !one.isConnected) return;

      if (
        lastFrameTimestamp.current === undefined ||
        timestamp - lastFrameTimestamp.current > 100
      ) {
        lastFrameTimestamp.current = timestamp;
        frame();
      }

      window.requestAnimationFrame(onAnimationFrame);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.requestAnimationFrame(onAnimationFrame);

    return () => {
      mediaQueryList.removeEventListener("change", onChange);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [speed]);

  if (isReducedMotion.current) return null;

  return (
    <div
      aria-hidden="true"
      ref={oneRef}
      className={cn(
        "pointer-events-none fixed z-2147483647 hidden size-8 sm:block",
      )}
      style={{
        imageRendering: "pixelated",
        backgroundImage: `url(${file})`,
        backgroundPosition: `${backgroundPosition.current.x}px ${backgroundPosition.current.y}px`,
        left: `${position.current.x - 16}px`,
        top: `${position.current.y - 16}px`,
      }}
    />
  );
}
