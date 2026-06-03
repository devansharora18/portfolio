import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export default function StardustClick() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
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

    const colors = [
      "rgba(233, 195, 73,",
      "rgba(233, 195, 73,",
      "rgba(150, 123, 182,",
      "rgba(168, 207, 185,",
    ];

    const onClick = (e: MouseEvent) => {
      const count = 8 + Math.floor(Math.random() * 8);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 25 + Math.random() * 25,
          size: 1 + Math.random() * 2.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    window.addEventListener("click", onClick);

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;

        if (p.life >= p.maxLife) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = p.color + String(alpha * 0.8) + ")";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
    />
  );
}
