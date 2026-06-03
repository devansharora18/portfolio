import { useEffect, useRef } from "react";

interface Star {
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface Props {
  warpEnabled: boolean;
}

export default function StarsBackground({ warpEnabled }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const warpRef = useRef(warpEnabled);
  warpRef.current = warpEnabled;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseleave", onLeave);

    const count = Math.floor((canvas.width * canvas.height) / 4000);
    stars = Array.from({ length: count }, () => ({
      baseX: Math.random() * canvas.width,
      baseY: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    const gravityRadius = 200;
    const maxDisplacement = 60;
    const maxScale = 3;

    let time = 0;
    const draw = () => {
      time++;
      const { x: mx, y: my } = mouseRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        let px = star.baseX;
        let py = star.baseY;
        let scale = 1;

        if (warpRef.current) {
          const dx = star.baseX - mx;
          const dy = star.baseY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < gravityRadius && dist > 0) {
            const strength = 1 - dist / gravityRadius;
            const pull = strength * maxDisplacement;
            const angle = Math.atan2(dy, dx);
            px += Math.cos(angle) * pull;
            py += Math.sin(angle) * pull;
            scale = 1 + strength * (maxScale - 1);
          }
        }

        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(px, py, star.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 226, 225, ${star.opacity * twinkle})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
