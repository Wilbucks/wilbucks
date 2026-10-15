import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Projected ribbons of signals, without textures or a WebGL context. */
export function SignalField() {
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
    const coral = styles.getPropertyValue("--signal-coral").trim();
    let width = 0, height = 0, frame = 0, phase = phaseRef.current, lastTime = 0;
    let visible = true;
    let pointerX = 0, pointerY = 0, driftX = 0, driftY = 0;

    const point = (u: number, strand: number) => {
      const v = strand * Math.PI * 2;
      const twist = u * 1.5 + phase * .12;
      const spread = .047 * Math.cos(v + twist);
      const x = .27 * Math.sin(u) + .115 * Math.sin(2 * u + .3) + spread * Math.sin(u);
      const y = .30 * Math.cos(u) + spread * Math.cos(u);
      const z = .16 * Math.cos(2 * u) + .06 * Math.sin(v + twist);
      const angle = -.28 + Math.sin(phase * .16) * .09;
      const scale = Math.min(width * .92, height * 1.18);
      return { x: width * (width < 768 ? .79 : .76) + (x * Math.cos(angle) - y * Math.sin(angle) + z * .35 + driftX) * scale, y: height * (width < 768 ? .25 : .47) + (x * Math.sin(angle) + y * Math.cos(angle) + driftY) * scale };
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      driftX += (pointerX - driftX) * .025;
      driftY += (pointerY - driftY) * .025;
      const mobile = width < 768;
      const strands = mobile ? 28 : 64;
      const steps = mobile ? 100 : 180;
      for (let strand = 0; strand < strands; strand++) {
        for (let section = 0; section < 4; section++) {
          context.beginPath();
          for (let i = 0; i <= steps / 4; i++) {
            const p = point((section / 4 + i / steps) * Math.PI * 2, strand / strands);
            if (i === 0) context.moveTo(p.x, p.y); else context.lineTo(p.x, p.y);
          }
          context.strokeStyle = section === 2 && strand % 9 === 0 ? lime : section === 3 && strand % 13 === 0 ? coral : strand < strands * .52 ? teal : blue;
          context.globalAlpha = .22 + .45 * (strand / strands);
          context.lineWidth = mobile ? .8 : 1;
          context.stroke();
        }
      }
      // Packets travel along the same paths rather than becoming a star field.
      for (let i = 0; i < (mobile ? 9 : 20); i++) {
        const p = point(i * 2.399 + phase * .11, (i * .618) % 1);
        context.globalAlpha = .65;
        context.fillStyle = i % 7 === 0 ? lime : teal;
        context.beginPath(); context.arc(p.x, p.y, i % 5 === 0 ? 2.3 : 1.4, 0, Math.PI * 2); context.fill();
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
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || media.matches || paused) return;
      const bounds = canvas.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / width - .5) * .025;
      pointerY = ((event.clientY - bounds.top) / height - .5) * .025;
    };
    resize.observe(canvas); intersection.observe(canvas);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    const parent = canvas.parentElement;
    parent?.addEventListener("pointermove", move);
    return () => {
      cancelAnimationFrame(frame); resize.disconnect(); intersection.disconnect();
      media.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync);
      parent?.removeEventListener("pointermove", move);
    };
  }, [paused]);

  return <>
    <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />
    {!reducedMotion && <Button variant="ghost" size="icon" className="motion-toggle" aria-label={paused ? "Play background animation" : "Pause background animation"} title={paused ? "Play background animation" : "Pause background animation"} onClick={() => setPaused(value => !value)}>{paused ? <Play /> : <Pause />}</Button>}
  </>;
}