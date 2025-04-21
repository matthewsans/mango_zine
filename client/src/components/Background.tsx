import { useEffect } from "react";
import "./Background.css";

const RADIUS = 5;
const MAX_DIST = 150;
const N_DOTS = 50;
const SPEED = 15;           // pixels per second

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("dots") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx  = canvas.getContext("2d")!;
    const dpr  = window.devicePixelRatio || 1;

    /* ---------- world state ---------- */
    const dots: [number, number][] = [];
    const vel : [number, number][] = [];

    /* ---------- helpers ---------- */
    function resize() {
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      /* reset the transform then apply dpr‑scale once */
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function spawnDots() {
      for (let i = 0; i < N_DOTS; i++) {
        dots.push([
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight,
        ]);

        const angle = Math.random() * Math.PI * 2;
        vel.push([
          Math.cos(angle) * SPEED,
          Math.sin(angle) * SPEED,
        ]);
      }
    }

    /* ---------- animation loop ---------- */
    let lastTime = performance.now();

    function tick(now: number) {
      let dt = (now - lastTime) / 1000; // seconds since last frame
      dt = Math.min(dt, 0.05);
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* move dots & bounce */
      for (let i = 0; i < N_DOTS; i++) {
        dots[i][0] += vel[i][0] * dt;
        dots[i][1] += vel[i][1] * dt;

        const width  = canvas.width  / dpr;
        const height = canvas.height / dpr;

        if (dots[i][0] < RADIUS || dots[i][0] > width - RADIUS) {
          vel[i][0] *= -1;
          dots[i][0] = Math.max(RADIUS, Math.min(width - RADIUS, dots[i][0]));
        }
        if (dots[i][1] < RADIUS || dots[i][1] > height - RADIUS) {
          vel[i][1] *= -1;
          dots[i][1] = Math.max(RADIUS, Math.min(height - RADIUS, dots[i][1]));
}

      }

      /* draw lines */
      for (let i = 0; i < N_DOTS; i++) {
        for (let j = i + 1; j < N_DOTS; j++) {
          const dx = dots[j][0] - dots[i][0];
          const dy = dots[j][1] - dots[i][1];
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(dots[i][0], dots[i][1]);
            ctx.lineTo(dots[j][0], dots[j][1]);
            ctx.lineWidth = 2 * (1 - dist / MAX_DIST);
            ctx.stroke();
          }
        }
      }

      /* draw dots */
      ctx.fillStyle = "black";
      for (const [x, y] of dots) {
        ctx.beginPath();
        ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(tick);
    }

    /* ---------- boot ---------- */
    resize();
    spawnDots();
    requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas id="dots" className="dots" />;
}
