import { useEffect, useRef } from "react";

interface Fly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulsePhase: number;
  pulseSpeed: number;
  active: boolean;
}

const IDLE_DELAY = 2000;
const FLY_COUNT = 8;

export default function FireflySwarm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const idleRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const flies: Fly[] = [];
    const colors = [
      "rgba(233, 195, 73,",
      "rgba(233, 195, 73,",
      "rgba(150, 123, 182,",
    ];

    for (let i = 0; i < FLY_COUNT; i++) {
      flies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        size: 1.5 + Math.random() * 2,
        opacity: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.04,
        active: false,
      });
    }

    const resetIdle = () => {
      idleRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        idleRef.current = true;
      }, IDLE_DELAY);
    };

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      resetIdle();
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", resetIdle);
    window.addEventListener("touchmove", resetIdle, { passive: true });
    resetIdle();

    let time = 0;
    const draw = () => {
      time++;
      const { x: mx, y: my } = mouseRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const f of flies) {
        const targetOpacity = idleRef.current ? 0.7 : 0;
        f.opacity += (targetOpacity - f.opacity) * 0.03;

        if (idleRef.current && mx > 0) {
          const dx = mx - f.x;
          const dy = my - f.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const targetDist = 40 + Math.random() * 60;

          if (dist > targetDist + 5) {
            f.vx += (dx / dist) * 0.3;
            f.vy += (dy / dist) * 0.3;
          }

          f.vx += (Math.random() - 0.5) * 0.6;
          f.vy += (Math.random() - 0.5) * 0.6;
        } else if (!idleRef.current) {
          f.vx += (Math.random() - 0.5) * 1.5;
          f.vy += (Math.random() - 0.5) * 1.5;
        }

        f.vx *= 0.92;
        f.vy *= 0.92;
        f.x += f.vx;
        f.y += f.vy;

        if (f.x < -20) f.x = canvas.width + 20;
        if (f.x > canvas.width + 20) f.x = -20;
        if (f.y < -20) f.y = canvas.height + 20;
        if (f.y > canvas.height + 20) f.y = -20;

        if (f.opacity < 0.01) continue;

        const pulse = Math.sin(time * f.pulseSpeed + f.pulsePhase) * 0.4 + 0.6;
        const alpha = f.opacity * pulse;

        const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 4);
        gradient.addColorStop(0, f.color + String(alpha) + ")");
        gradient.addColorStop(0.5, f.color + String(alpha * 0.2) + ")");
        gradient.addColorStop(1, f.color + "0)");

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = f.color + String(alpha) + ")";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    let animId: number;
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", resetIdle);
      window.removeEventListener("touchmove", resetIdle);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[55]"
    />
  );
}
