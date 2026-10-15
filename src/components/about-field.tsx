import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

/** About hero artwork: drifting topographic contour rings with a travelling pulse. */
export function AboutField() {
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

    // Distorted concentric contours, like a topographic survey of a signal source.
    const draw = () => {
      context.clearRect(0, 0, width, height);
      const mobile = width < 768;
      const cx = width * (mobile ? .82 : .74), cy = height * (mobile ? .2 : .5);
      const rings = mobile ? 14 : 24;
      const maxR = Math.max(width, height) * (mobile ? .55 : .62);
      const steps = mobile ? 90 : 160;
      const pulse = (phase * .08) % 1;
      for (let i = 1; i <= rings; i++) {
        const t = i / rings;
        const r = maxR * Math.pow(t, 1.15);
        const glow = Math.max(0, 1 - Math.abs(t - pulse) * 10);
        context.beginPath();
        for (let k = 0; k <= steps; k++) {
          const a = (k / steps) * Math.PI * 2;
          const wobble = Math.sin(a * 3 + phase * .2 + t * 4) * .06 + Math.sin(a * 5 - phase * .14 + t * 7) * .035;
          const rr = r * (1 + wobble * (.4 + t));
          const x = cx + Math.cos(a) * rr * 1.25, y = cy + Math.sin(a) * rr * .82;
          if (k === 0) context.moveTo(x, y); else context.lineTo(x, y);
        }
        context.strokeStyle = glow > .05 ? lime : i % 6 === 0 ? blue : teal;
        context.globalAlpha = (.42 - t * .3) * (1 + glow * 1.4);
        context.lineWidth = i % 6 === 0 ? 1.1 : .75;
        context.stroke();
      }
      // A slow orbiting marker on a mid contour.
      const oa = phase * .15;
      context.globalAlpha = .7; context.fillStyle = lime;
      context.beginPath(); context.arc(cx + Math.cos(oa) * maxR * .45 * 1.25, cy + Math.sin(oa) * maxR * .45 * .82, 2.4, 0, Math.PI * 2); context.fill();
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
