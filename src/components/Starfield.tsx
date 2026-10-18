import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  a: number;
  tw: number;
  ph: number;
}

interface Shooter {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  len: number;
}

const TAU = Math.PI * 2;

/* Paint a large offscreen nebula once, then blit it each frame. */
function paintNebula(w: number, h: number) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d");
  if (!g) return c;
  const big = Math.max(w, h);
  const blobs: [number, number, number, string][] = [
    [0.2, 0.82, 0.52, "rgba(58,96,172,0.30)"],
    [0.82, 0.18, 0.46, "rgba(118,86,168,0.17)"],
    [0.58, 0.6, 0.42, "rgba(40,84,124,0.26)"],
    [0.1, 0.24, 0.36, "rgba(86,120,164,0.16)"],
    [0.94, 0.72, 0.3, "rgba(46,74,132,0.2)"],
  ];
  for (const [bx, by, br, col] of blobs) {
    const grad = g.createRadialGradient(bx * w, by * h, 0, bx * w, by * h, br * big);
    grad.addColorStop(0, col);
    grad.addColorStop(0.55, col.replace(/[\d.]+\)$/, "0.05)"));
    grad.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);
  }
  return c;
}

function paintBloom(size: number) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  if (!g) return c;
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.16, "rgba(255,255,255,0.5)");
  grad.addColorStop(0.42, "rgba(196,216,255,0.13)");
  grad.addColorStop(1, "rgba(150,180,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return c;
}

const wrap = (v: number, m: number) => ((v % m) + m) % m;

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let stars: Star[] = [];
    let nebula = paintNebula(1600, 1200);
    const bloom = paintBloom(48);

    let scroll = 0;
    let raf = 0;
    let last = 0;
    let shooterTimer = 2600;
    let shooters: Shooter[] = [];
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const build = () => {
      const count = Math.round(Math.min(720, Math.max(190, (W * H) / 5800)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.pow(Math.random(), 1.7),
        r: 0.35 + Math.random() * 1.05,
        a: 0.22 + Math.random() * 0.78,
        tw: 0.4 + Math.random() * 1.7,
        ph: Math.random() * TAU,
      }));
      nebula = paintNebula(Math.max(1200, W + 600), Math.max(900, H + 600));
    };

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (reduce) render(0);
    };

    const spawnShooter = () => {
      const fromLeft = Math.random() > 0.45;
      const speed = 0.22 + Math.random() * 0.3;
      const angle = (18 + Math.random() * 16) * (Math.PI / 180);
      shooters.push({
        x: fromLeft ? -60 : W * (0.3 + Math.random() * 0.7),
        y: -40 + Math.random() * H * 0.45,
        vx: Math.cos(angle) * speed * (fromLeft ? 1 : -1),
        vy: Math.sin(angle) * speed,
        life: 0,
        max: 1500 + Math.random() * 1400,
        len: 90 + Math.random() * 130,
      });
    };

    const render = (now: number) => {
      const dt = last ? Math.min(48, now - last) : 16;
      last = now;

      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      ctx.clearRect(0, 0, W, H);

      /* ---- nebula (two offsets, very slow drift) ---- */
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.9;
      const nx = Math.sin(now * 0.000045) * 28 - (nebula.width - W) / 2 + pointer.x * -14;
      const ny = Math.cos(now * 0.000037) * 24 - (nebula.height - H) / 2 + pointer.y * -10;
      ctx.drawImage(nebula, nx, ny);

      /* ---- planet limb ---- */
      const planetAlpha = Math.max(0.22, 1 - 0.78 * Math.min(1, scroll / (H * 0.85)));
      const R = Math.max(W, H) * 1.35;
      const cx = W * 0.5;
      const cy = H + R - Math.max(64, H * 0.095) - scroll * 0.02;
      const limbY = cy - R;
      if (limbY < H + 40) {
        const body = ctx.createRadialGradient(cx, cy - R * 0.12, R * 0.25, cx, cy, R);
        body.addColorStop(0, "#05070c");
        body.addColorStop(0.7, "#06090f");
        body.addColorStop(0.982, "#0d1524");
        body.addColorStop(1, "#16233b");
        ctx.globalAlpha = planetAlpha;
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, TAU);
        ctx.fill();

        ctx.globalCompositeOperation = "lighter";
        const rims: [number, number, string][] = [
          [1, 0.75, "255,228,186"],
          [2.4, 0.3, "186,206,255"],
          [6, 0.12, "120,150,220"],
        ];
        for (const [lw, alpha, rgb] of rims) {
          ctx.globalAlpha = planetAlpha * alpha;
          ctx.lineWidth = lw;
          ctx.strokeStyle = `rgba(${rgb},0.85)`;
          ctx.beginPath();
          ctx.arc(cx, cy, R - 0.4, 0, TAU);
          ctx.stroke();
        }

        // haze rising off the limb
        const haze = ctx.createLinearGradient(0, limbY - 130, 0, limbY + 6);
        haze.addColorStop(0, "rgba(90,130,200,0)");
        haze.addColorStop(0.72, "rgba(120,160,225,0.05)");
        haze.addColorStop(1, "rgba(244,180,85,0.09)");
        ctx.globalAlpha = planetAlpha;
        ctx.fillStyle = haze;
        ctx.fillRect(0, limbY - 130, W, 140);
      }

      /* ---- sun + anamorphic streak ---- */
      ctx.globalCompositeOperation = "lighter";
      const sx = W * 0.755 - pointer.x * 20;
      const sy = H * 0.2 - pointer.y * 14 - scroll * 0.03;
      const glowR = Math.max(W, H) * 0.3;
      const sun = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowR);
      sun.addColorStop(0, "rgba(255,226,178,0.5)");
      sun.addColorStop(0.16, "rgba(244,180,85,0.14)");
      sun.addColorStop(0.45, "rgba(210,150,80,0.04)");
      sun.addColorStop(1, "rgba(244,180,85,0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = sun;
      ctx.fillRect(sx - glowR, sy - glowR, glowR * 2, glowR * 2);

      ctx.globalAlpha = 0.95;
      ctx.fillStyle = "#fff4e2";
      ctx.beginPath();
      ctx.arc(sx, sy, 1.7, 0, TAU);
      ctx.fill();

      const streakW = W * 0.62;
      const sg = ctx.createLinearGradient(sx - streakW / 2, 0, sx + streakW / 2, 0);
      sg.addColorStop(0, "rgba(244,180,85,0)");
      sg.addColorStop(0.5, "rgba(255,236,205,0.42)");
      sg.addColorStop(1, "rgba(244,180,85,0)");
      ctx.globalAlpha = 0.75;
      ctx.fillStyle = sg;
      ctx.fillRect(sx - streakW / 2, sy - 0.6, streakW, 1.3);

      /* ---- stars ---- */
      for (const s of stars) {
        const par = 0.05 + s.z * 0.42;
        const px = wrap(s.x + pointer.x * 62 * s.z + now * 0.0035 * s.z, W);
        const py = wrap(s.y - scroll * par + pointer.y * 44 * s.z, H);
        const tw = 0.6 + 0.4 * Math.sin(now * 0.0011 * s.tw + s.ph);
        const alpha = Math.min(1, s.a * tw);
        if (s.z > 0.56) {
          const size = s.r * (1 + s.z * 1.8) * 3.4;
          ctx.globalAlpha = alpha * 0.85;
          ctx.drawImage(bloom, px - size / 2, py - size / 2, size, size);
        } else {
          const d = Math.max(0.8, s.r * (0.7 + s.z * 0.8));
          ctx.globalAlpha = alpha;
          ctx.fillStyle = "#dbe6ff";
          ctx.fillRect(px, py, d, d);
        }
      }

      /* ---- shooting stars ---- */
      if (!reduce) {
        shooterTimer -= dt;
        if (shooterTimer <= 0) {
          spawnShooter();
          shooterTimer = 5200 + Math.random() * 9000;
        }
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        sh.life += dt;
        if (sh.life > sh.max) {
          shooters.splice(i, 1);
          continue;
        }
        sh.x += sh.vx * dt;
        sh.y += sh.vy * dt;
        const p = sh.life / sh.max;
        const fade = p < 0.2 ? p / 0.2 : 1 - (p - 0.2) / 0.8;
        const tx = sh.x - sh.vx * sh.len;
        const ty = sh.y - sh.vy * sh.len;
        const lg = ctx.createLinearGradient(tx, ty, sh.x, sh.y);
        lg.addColorStop(0, "rgba(255,240,215,0)");
        lg.addColorStop(1, `rgba(255,244,224,${(0.85 * fade).toFixed(3)})`);
        ctx.globalAlpha = 1;
        ctx.strokeStyle = lg;
        ctx.lineWidth = 1.15;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(sh.x, sh.y);
        ctx.stroke();
        ctx.globalAlpha = fade * 0.9;
        ctx.fillStyle = "#fff6e6";
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 1.25, 0, TAU);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      render(now);
    };

    const onScroll = () => {
      scroll = window.scrollY || 0;
    };
    const onPointer = (e: PointerEvent) => {
      pointer.tx = (e.clientX / Math.max(1, W) - 0.5) * 2;
      pointer.ty = (e.clientY / Math.max(1, H) - 0.5) * 2;
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    onScroll();

    if (reduce) {
      render(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="scene" aria-hidden="true" />;
}
