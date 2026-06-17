import React, { useEffect, useMemo, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import muhaLogo from "/logo/muha-logo.png";

const NAME_TEXT = "Mohamed Omor";
const ROLES = ["Developer", "Creator", "CONSULT • ERP (Business Central)"];

export default function LandingHero() {
  const desktopCanvasRef = useRef(null);
  const mobileCanvasRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(2);

  const chipRefs = useRef([]);
  const boxRef = useRef(null);

  // Canvas animated wave grid
  useEffect(() => {
    let raf = 0;
    const init = (canvas) => {
      if (!canvas) return () => {};
      const ctx = canvas.getContext("2d");
      if (!ctx) return () => {};

      const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      let width = canvas.clientWidth | 0;
      let height = canvas.clientHeight | 0;
      canvas.width = Math.max(400, width * DPR);
      canvas.height = Math.max(300, height * DPR);
      if (ctx.resetTransform) ctx.resetTransform();
      ctx.scale(DPR, DPR);

      let t = 0;

      // Total number of wave lines emanating from the origin point
      const TOTAL_LINES = 22;
      // Origin point: where all lines converge (left edge, vertically centered)
      const ORIGIN_X_RATIO = 0;       // start at the very left edge
      const ORIGIN_Y_RATIO = 0.55;   // 55% from top

      const draw = () => {
        t += 0.009;
        width = canvas.clientWidth | 0;
        height = canvas.clientHeight | 0;
        if (canvas.width !== width * DPR || canvas.height !== height * DPR) {
          canvas.width = Math.max(400, width * DPR);
          canvas.height = Math.max(300, height * DPR);
          if (ctx.resetTransform) ctx.resetTransform();
          ctx.scale(DPR, DPR);
        }
        ctx.clearRect(0, 0, width, height);

        // Subtle radial glow near the origin
        const originX = width * ORIGIN_X_RATIO;
        const originY = height * ORIGIN_Y_RATIO;
        const g = ctx.createRadialGradient(
          originX + width * 0.3, originY, 0,
          originX + width * 0.3, originY, Math.max(width, height) * 0.7
        );
        g.addColorStop(0, "rgba(175, 164, 255, 0.04)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);

        // === 3D perspective wave surface ===
        // Draw back-to-front for correct layering
        // Lines at the "back" (top) are compressed, dim, thin
        // Lines at the "front" (bottom) are spread, bright, thick

        // Perspective parameters
        const vanishY = height * 0.42;  // vanishing horizon line
        const frontY = height * 0.85;   // bottom of the 3D surface
        const perspectiveDepth = 0.35;  // how much foreshortening (0=flat, 1=extreme)

        for (let l = 0; l < TOTAL_LINES; l++) {
          // depth: 0 = back (far), 1 = front (near)
          const depth = l / (TOTAL_LINES - 1);

          // Perspective Y position: lines bunch up near vanishY (back), spread toward frontY
          const perspY = vanishY + (frontY - vanishY) * Math.pow(depth, 1 + perspectiveDepth);

          // Depth-based properties for 3D feel
          const depthOpacity = 0.06 + depth * 0.28;       // back=dim, front=bright
          const depthLineWidth = 0.4 + depth * 1.0;       // back=thin, front=thick
          const depthWaveAmp = 0.3 + depth * 0.7;         // back=small waves, front=big

          // Subtle color shift: cool blue at back → warm white at front
          const r = Math.round(180 + depth * 75);
          const g = Math.round(190 + depth * 65);
          const b = Math.round(220 + depth * 35);

          ctx.beginPath();
          ctx.lineWidth = depthLineWidth;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${depthOpacity})`;

          // Small per-line offset so each line is slightly unique
          const phaseOffset = l * 0.15;
          const ampVariation = 1 + (l % 5 - 2) * 0.06;

          const segments = Math.max(120, Math.floor(width / 4));
          for (let s = 0; s <= segments; s++) {
            const progress = s / segments;
            const x = originX + progress * (width - originX + 40);
            const normalX = progress;

            // Fan-out from origin with perspective compression for back lines
            const fanOut = Math.pow(normalX, 1.8);
            const maxSpread = height * 0.06 * (1 + depth * 3.5); // back lines fan less
            const ratio = (depth - 0.5) * 2; // -1 to 1
            const baseOffset = (perspY - originY) * fanOut;

            // === SHARED base wave — irrational freq ratios ===
            const baseWave1 = Math.sin(normalX * Math.PI * 2 * 1.4142 - t * 2.3) * (42 + Math.sin(t * 0.13) * 8);
            const baseWave2 = Math.sin(normalX * Math.PI * 2 * 0.7071 - t * 1.732) * (20 + Math.sin(t * 0.09 + 1.7) * 5);
            const baseWave3 = Math.sin(normalX * Math.PI * 2 * 2.6180 - t * 1.047) * (9 + Math.sin(t * 0.17 + 3.1) * 3);
            const baseWave4 = Math.sin(normalX * Math.PI * 2 * 0.3927 - t * 0.68) * (12 + Math.sin(t * 0.07) * 4);
            const sharedWave = (baseWave1 + baseWave2 + baseWave3 + baseWave4) * ampVariation;

            // === Small per-line variation ===
            const personalRipple =
              Math.sin(normalX * Math.PI * 2 * (1.8284 + l * 0.271) - t * 1.618 + phaseOffset) * 6 +
              Math.sin(normalX * Math.PI * 2 * (3.3166 + l * 0.137) - t * 0.867 + phaseOffset * 1.414) * 3;

            // Wave grows with distance from origin, scaled by depth
            const waveEnvelope = Math.pow(normalX, 1.5) * depthWaveAmp;

            // Taper at right edge
            const rightTaper = normalX > 0.85 ? 1 - ((normalX - 0.85) / 0.15) : 1;

            const totalWave = (sharedWave + personalRipple) * waveEnvelope * rightTaper;
            const y = originY + baseOffset + totalWave;

            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Glow highlight at origin convergence point
        const glowGrad = ctx.createRadialGradient(originX, originY, 0, originX, originY, 60);
        glowGrad.addColorStop(0, "rgba(255, 255, 255, 0.08)");
        glowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glowGrad;
        ctx.fillRect(originX - 60, originY - 60, 120, 120);

        raf = requestAnimationFrame(draw);
      };

      draw();
      return () => cancelAnimationFrame(raf);
    };

    const stopDesktop = init(desktopCanvasRef.current);
    const stopMobile = init(mobileCanvasRef.current);
    return () => {
      if (stopDesktop) stopDesktop();
      if (stopMobile) stopMobile();
    };
  }, []);

  // Cyan bracket follows active role
  useEffect(() => {
    const el = chipRefs.current[activeIndex];
    const box = boxRef.current;
    if (!el || !box) return;

    const place = () => {
      const rect = el.getBoundingClientRect();
      const parent = el.offsetParent || document.body;
      const baseLeft = parent.getBoundingClientRect().left;
      const left = rect.left - baseLeft;
      box.style.width = rect.width + "px";
      box.style.height = rect.height + "px";
      box.style.transform = `translateX(${left}px)`;
      box.style.opacity = "1";
    };

    place();
    const ro = new ResizeObserver(place);
    ro.observe(document.body);
    window.addEventListener("resize", place);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", place);
    };
  }, [activeIndex]);

  const letters = useMemo(
    () => NAME_TEXT.split("").map((ch, i) => ({ ch, i })),
    []
  );

  return (
    <main className="relative flex-grow flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background canvases */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
        {/* Desktop canvas */}
        <div
          style={{ width: "100%", height: 700 }}
          className="hidden md:block"
        >
          <div className="w-full h-full relative">
            <canvas
              ref={desktopCanvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Mobile canvas (dimmed) */}
        <div
          style={{ width: "100%", height: 500 }}
          className="md:hidden opacity-30"
        >
          <div className="w-full h-full relative">
            <canvas
              ref={mobileCanvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center">
        {/* Big name */}
        <div className="w-full flex justify-center items-center my-4 text-center font-bold">
          <p className="blur-text text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center flex flex-wrap justify-center leading-tight">
            {letters.map(({ ch, i }) => (
              <span
                key={i}
                className="inline-block will-change-[transform,filter,opacity] animate-letter"
                style={{ filter: "blur(0px)", opacity: 1 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </p>
        </div>

        {/* Roles row + cyan bracket highlight */}
        <div className="font-bold text-center opacity-0 animate-fadeIn mt-2 sm:mt-3">
          <div className="relative flex gap-3 sm:gap-4 justify-center items-center flex-wrap">
            {ROLES.map((label, i) => (
              <span
                key={label}
                ref={(el) => (chipRefs.current[i] = el)}
                onMouseEnter={() => setActiveIndex(i)}
                onPointerEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                tabIndex={0}
                role="button"
                aria-pressed={activeIndex === i}
                className={`relative text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl cursor-pointer select-none transition-all duration-300 will-change-[filter,transform,opacity]
                  ${activeIndex === i ? "chip-active" : "chip-dim"}`}
              >
                {label}
              </span>
            ))}

            {/* moving bracket box
                ➜ hidden on very small screens (where lines wrap badly)
            */}
            <div
              ref={boxRef}
              className="absolute top-0 left-0 pointer-events-none box-border hidden sm:block"
              style={{
                width: 180,
                height: 48,
                opacity: 0,
                transition:
                  "transform 350ms cubic-bezier(.2,.9,.1,1), width 200ms, height 200ms",
              }}
            >
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
            </div>
          </div>
        </div>

        {/* Spacer to preserve vertical centering */}
        <div className="w-full mt-8 mb-4 h-[220px] md:h-[260px] hidden md:block"></div>
      </div>

      {/* Rotating circular text + logo (absolute bottom-left of viewport) */}
      <div className="absolute left-4 lg:left-8 bottom-1 lg:bottom-2 z-20 hidden md:flex items-center justify-center w-[120px] h-[120px]">
        <RotatingTextDisk
          text="SCROLL-DOWN*SCROLL-DOWN*"
          className="absolute"
        />
        <img
          alt="Muha Logo"
          src={muhaLogo}
          className="absolute z-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125"
          style={{ width: "30px", height: "30px", objectFit: "contain" }}
        />
      </div>

      {/* Local styles */}
      <style>{`
        .animate-letter { animation: letterIn 700ms ease forwards; }
        @keyframes letterIn {
          0% { opacity: 0; transform: translateY(12px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fadeIn { animation: fadeIn .8s ease .2s forwards; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }

        .chip-dim { filter: blur(5px); opacity: .7; transform: translateY(0); }
        .chip-active { filter: blur(0); opacity: 1; transform: translateY(-2px); }
        .chip-dim:hover, .chip-dim:focus { filter: blur(0); opacity: 1; transform: translateY(-2px); }

        .corner { position: absolute; width: 16px; height: 16px; border: 3px solid cyan; filter: drop-shadow(0 0 4px cyan); border-radius: 3px; }
        .corner.tl { top: -10px; left: -10px; border-right: 0; border-bottom: 0; }
        .corner.tr { top: -10px; right: -10px; border-left: 0; border-bottom: 0; }
        .corner.bl { bottom: -10px; left: -10px; border-right: 0; border-top: 0; }
        .corner.br { bottom: -10px; right: -10px; border-left: 0; border-top: 0; }

        /* tiny breakpoint helper (if you don't already have xs in Tailwind, ignore) */
      `}</style>
    </main>
  );
}

function RotatingTextDisk({ text, className = "" }) {
  const chars = useMemo(() => text.split("").filter(Boolean), [text]);
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      setDeg((d) => (d + 0.8) % 360);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`mx-auto rounded-full w-[90px] h-[90px] text-white font-black text-center cursor-pointer origin-center ${className}`}
      style={{ transform: `rotate(${deg}deg)` }}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          className="absolute inline-block inset-0 text-[10px] md:text-xs transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
          style={{ transform: `rotate(${i * 15}deg) translate3d(0,0,0)` }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}
