import { useEffect, useState } from "react";
import { TAGLINE } from "../lib/data";

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

/** 24fps running timecode, counted from the moment the page mounted. */
function useTimecode() {
  const [tc, setTc] = useState("00:00:00:00");
  useEffect(() => {
    const started = performance.now();
    const tick = () => {
      const elapsed = performance.now() - started;
      const totalFrames = Math.floor(elapsed / (1000 / 24));
      const frames = totalFrames % 24;
      const totalSeconds = Math.floor(totalFrames / 24);
      setTc(
        `${pad(Math.floor(totalSeconds / 3600))}:${pad(
          Math.floor((totalSeconds % 3600) / 60)
        )}:${pad(totalSeconds % 60)}:${pad(frames)}`
      );
    };
    tick();
    const id = window.setInterval(tick, 42);
    return () => window.clearInterval(id);
  }, []);
  return tc;
}

export default function Hud() {
  const tc = useTimecode();

  return (
    <div className="hud" aria-hidden="true">
      <span className="hud__corner hud__corner--tl" />
      <span className="hud__corner hud__corner--tr" />
      <span className="hud__corner hud__corner--bl" />
      <span className="hud__corner hud__corner--br" />

      <span className="hud__strip hud__strip--tc">
        <span className="tc" style={{ letterSpacing: "0.42em" }}>
          {TAGLINE} — a portfolio in four acts
        </span>
      </span>

      <span className="hud__strip hud__strip--bl">
        <span className="tc">
          TC <span style={{ color: "var(--ice-2)" }}>{tc}</span>
        </span>
        <span className="tc" style={{ color: "var(--steel-2)" }}>
          ISO 3200 · f/1.2 · 24fps
        </span>
      </span>

      <span className="hud__strip hud__strip--br">
        <span className="rec" />
        <span className="tc" style={{ color: "var(--ice-2)" }}>
          REC
        </span>
        <span className="tc" style={{ color: "var(--steel-2)" }}>
          4K ANAMORPHIC
        </span>
      </span>
    </div>
  );
}
