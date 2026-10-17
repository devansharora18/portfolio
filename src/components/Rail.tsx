import { useEffect, useRef, useState } from "react";
import { sections } from "../lib/data";

const RUNNING_HEAD = "Devansh Arora — Software Engineer — Portfolio";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export default function Rail() {
  const [active, setActive] = useState("cover");
  const fillRef = useRef<HTMLDivElement>(null);
  const time = useClock();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      io.observe(el);
      observers.push(io);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = fillRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.height = `${(ratio * 100).toFixed(2)}%`;
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="rail" aria-hidden="true">
      <span className="regmark text-[var(--ink-3)]" />

      <div className="flex flex-1 items-center justify-center py-6">
        <span className="vertical mono-sm dim" style={{ letterSpacing: "0.32em" }}>
          {RUNNING_HEAD}
        </span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="mono-sm" style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          {time}
        </span>
        <span className="mono-sm dim" style={{ fontSize: "0.58rem", letterSpacing: "0.24em" }}>
          IST
        </span>
        <span className="mono-sm dim" style={{ fontSize: "0.58rem", letterSpacing: "0.2em" }}>
          {sections.find((s) => s.id === active)?.no ?? "01"}
        </span>
      </div>

      <div className="rail__track">
        <div className="rail__fill" ref={fillRef} />
      </div>
    </aside>
  );
}
