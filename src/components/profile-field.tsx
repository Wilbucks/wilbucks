import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Profile hero artwork: a slow perspective contour terrain crossed by a scanning band. */
export function ProfileField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const styles = getComputedStyle(canvas);
    const teal = styles.getPropertyValue("--signal-teal").trim();
    const blue = styles.getPropertyValue("--signal-blue").trim();
    const lime = styles.getPropertyValue("--signal-lime").trim();
    let width = 0, height = 0, frame = 0, phase = phaseRef.current, lastTime = 0;
    let visible = true;

    const elevation = (u: number, v: number) =>
      Math.sin(u * 3.1 + phase * .18) * .5 + Math.sin(v * 4.3 - phase * .13 + u * 1.7) * .35 + Math.cos((u - v) * 5.2 + phase * .09) * .2;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const mobile = width < 768;
      const rows = mobile ? 22 : 38;
      const cols = mobile ? 48 : 90;
      const left = width * (mobile ? .05 : .38);
      const span = width - left;
      const horizon = height * (mobile ? .12 : .1);
      const base = height * 1.02;
      const amp = height * (mobile ? .05 : .065);
      const scan = (phase * .06) % 1.3 - .15;
      for (let r = 0; r < rows; r++) {
        const depth = r / (rows - 1);
        const persp = Math.pow(depth, 1.6);
        const y0 = horizon + (base - horizon) * persp;
        const glow = Math.max(0, 1 - Math.abs(depth - scan) * 9);
        context.beginPath();
        for (let c = 0; c <= cols; c++) {
          const u = c / cols;
          const x = left + span * (u - .5) * (.55 + persp * .9) + span * .5;
          const y = y0 - elevation(u * 2, depth * 2) * amp * (.35 + persp);
          if (c === 0) context.moveTo(x, y); else context.lineTo(x, y);
        }
        context.strokeStyle = glow > .05 ? lime : r % 5 === 0 ? blue : teal;
        context.globalAlpha = (.08 + .32 * persp) * (1 + glow * 1.6);
        context.lineWidth = r % 5 === 0 ? 1.1 : .8;
        context.stroke();
      }
      // Sparse vertical survey ticks give a measured, instrument-like rhythm.
      for (let c = 0; c <= (mobile ? 6 : 12); c++) {
        const u = c / (mobile ? 6 : 12);
        const x = left + span * u;
        context.globalAlpha = .07;
        context.strokeStyle = teal;
        context.beginPath(); context.moveTo(x, horizon); context.lineTo(x, horizon + 10); context.stroke();
      }
      context.globalAlpha = 1;
    };
    const tick = (time: number) => {
      frame = 0;
      if (paused || media.matches || !visible || document.hidden) return;
      if (time - lastTime >= (width < 768 ? 1000 / 24 : 1000 / 30)) {
        phase += Math.min(time - lastTime, 80) / 1000;
        phaseRef.current = phase;
        lastTime = time;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      setReducedMotion(media.matches);
      cancelAnimationFrame(frame); frame = 0; lastTime = performance.now();
      draw();
      if (!paused && !media.matches && visible && !document.hidden) frame = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(entries => {
      const box = entries[0]?.contentRect;
      if (!box) return;
      width = box.width; height = box.height;
      const ratio = Math.min(window.devicePixelRatio || 1, width < 768 ? 1.25 : 1.5);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      sync();
    });
    const intersection = new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting ?? false; sync(); });
    resize.observe(canvas); intersection.observe(canvas);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame); resize.disconnect(); intersection.disconnect();
      media.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  return <>
    <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />
    {!reducedMotion && <Button variant="ghost" size="icon" className="motion-toggle" aria-label={paused ? "Play background animation" : "Pause background animation"} title={paused ? "Play background animation" : "Pause background animation"} onClick={() => setPaused(value => !value)}>{paused ? <Play /> : <Pause />}</Button>}
  </>;
}
