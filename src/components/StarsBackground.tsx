import { useEffect, useRef } from "react";

interface Star {
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  trail: { x: number; y: number }[];
  trailMax: number;
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
    const meteors: Meteor[] = [];

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

    let meteorTimer = 0;
    const meteorInterval = 120 + Math.floor(Math.random() * 200);

    const spawnMeteor = () => {
      const w = canvas.width;
      const h = canvas.height;
      const fromTop = Math.random() < 0.5;

      const x = Math.random() * w;
      const y = fromTop ? 0 : Math.random() * h * 0.5;
      const angle = (Math.random() * 0.5 + 0.25) * Math.PI;
      const speed = 8 + Math.random() * 10;

      meteors.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed * 0.3 + speed * 0.5,
        life: 0,
        maxLife: 60 + Math.random() * 40,
        trail: [],
        trailMax: 15 + Math.floor(Math.random() * 20),
      });
    };

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

      meteorTimer++;
      if (meteorTimer >= meteorInterval) {
        spawnMeteor();
        meteorTimer = 0;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life++;
        m.x += m.vx;
        m.y += m.vy;
        m.trail.push({ x: m.x, y: m.y });
        if (m.trail.length > m.trailMax) m.trail.shift();

        if (m.life > m.maxLife || m.y > canvas.height + 50 || m.x < -50 || m.x > canvas.width + 50) {
          meteors.splice(i, 1);
          continue;
        }

        const progress = m.life / m.maxLife;
        const alpha = progress < 0.3 ? progress / 0.3 : 1 - progress;

        for (let j = 0; j < m.trail.length; j++) {
          const tp = j / m.trail.length;
          const t = m.trail[j];
          ctx.beginPath();
          ctx.arc(t.x, t.y, 1 + tp * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(233, 195, 73, ${alpha * tp * 0.8})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 195, 73, ${alpha})`;
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
