import React, { useEffect, useMemo, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import muhaLogo from "/logo/muha-logo.png";

const NAME_TEXT = "Mohamed Omor";
const ROLES = ["Developer", "Creator", "CONSULT • ERP (Business Central)"];

export default function LandingHero() {
  const desktopCanvasRef = useRef(null);
  const mobileCanvasRef = useRef(null);

  // ⬇️ make it real state so we can change it on hover / tap
  const [activeIndex, setActiveIndex] = useState(2);

  const chipRefs = useRef([]);
  const boxRef = useRef(null);

  // Canvas background (unchanged)
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
      const cols = 26;
      const rows = 10;

      const draw = () => {
        t += 0.008;
        width = canvas.clientWidth | 0;
        height = canvas.clientHeight | 0;
        if (canvas.width !== width * DPR || canvas.height !== height * DPR) {
          canvas.width = Math.max(400, width * DPR);
          canvas.height = Math.max(300, height * DPR);
          if (ctx.resetTransform) ctx.resetTransform();
          ctx.scale(DPR, DPR);
        }
        ctx.clearRect(0, 0, width, height);

        const g = ctx.createRadialGradient(
          width * 0.5,
          height * 0.8,
          0,
          width * 0.5,
          height * 0.8,
          Math.max(width, height)
        );
        g.addColorStop(0, "rgba(175, 164, 255, 0.06)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);

        ctx.lineWidth = 1;
        for (let r = 0; r < rows; r++) {
          const y = 40 + r * ((height - 100) / rows);
          ctx.beginPath();
          for (let c = 0; c <= cols; c++) {
            const x = (c / cols) * width;
            const amp = 29 + r * 1.2;
            const k = (c * 0.9 + r * 7.6) * 0.15;
            const yy = y + Math.sin(k + t * 5.2) * amp;
            if (c === 0) ctx.moveTo(x, yy);
            else ctx.lineTo(x, yy);
          }
          ctx.strokeStyle = "rgba(255, 255, 255, 0.42)";
          ctx.stroke();
        }

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

  // Cyan bracket follows active role (updates on hover/tap because activeIndex changes)
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
    <main className="flex-grow flex flex-col items-center h-full relative pt-20 text-white bg-black overflow-hidden">
      {/* Desktop canvas */}
      <div
        style={{ width: "100%", height: 600, position: "absolute", bottom: 50 }}
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
        style={{ width: "100%", height: 600, position: "absolute", bottom: 50 }}
        className="md:hidden opacity-10"
      >
        <div className="w-full h-full relative">
          <canvas
            ref={mobileCanvasRef}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      {/* Big name */}
      <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
        <p className="blur-text lg:text-9xl md:text-7xl text-4xl text-center flex flex-wrap">
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
      <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
        <div className="relative flex gap-4 justify-center items-center flex-wrap">
          {ROLES.map((label, i) => (
            <span
              key={label}
              ref={(el) => (chipRefs.current[i] = el)}
              // ⬇️ interactive hover/focus/tap
              onMouseEnter={() => setActiveIndex(i)}
              onPointerEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)} // mobile tap
              tabIndex={0}
              role="button"
              aria-pressed={activeIndex === i}
              className={`relative lg:text-[2rem] md:text-[1.7rem] text-[1rem] cursor-pointer select-none transition-all duration-300 will-change-[filter,transform,opacity]
                ${activeIndex === i ? "chip-active" : "chip-dim"}`}
            >
              {label}
            </span>
          ))}

          {/* moving bracket box */}
          <div
            ref={boxRef}
            className="absolute top-0 left-0 pointer-events-none box-border"
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

      {/* Rotating circular text + logo */}
      <div className="w-full items-center mt-8 mb-4 relative h-[300px] hidden md:block">
        <RotatingTextDisk
          text="SCROLL-DOWN*SCROLL-DOWN*"
          className="absolute left-44 bottom-10"
        />
        <img
          alt="Lauv Logo"
          src={muhaLogo}
          className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 absolute left-[140px] bottom-[6px]"
          width={80}
          height={80}
        />
      </div>

      {/* Right social rail */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="group"
          aria-label="GitHub"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
            <Github className="h-5 w-5 text-white/80 transition group-hover:text-white" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="group"
          aria-label="LinkedIn"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
            <Linkedin className="h-5 w-5 text-white/80 transition group-hover:text-white" />
          </div>
        </a>
        <a href="mailto:simoamour18@gmail.com" className="group" aria-label="Email">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
            <Mail className="h-5 w-5 text-white/80 transition group-hover:text-white" />
          </div>
        </a>
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

        /* ⬇️ hover/focus animations for roles */
        .chip-dim { filter: blur(5px); opacity: .7; transform: translateY(0); }
        .chip-active { filter: blur(0); opacity: 1; transform: translateY(-2px); }
        .chip-dim:hover, .chip-dim:focus { filter: blur(0); opacity: 1; transform: translateY(-2px); }

        .corner { position: absolute; width: 16px; height: 16px; border: 3px solid cyan; filter: drop-shadow(0 0 4px cyan); border-radius: 3px; }
        .corner.tl { top: -10px; left: -10px; border-right: 0; border-bottom: 0; }
        .corner.tr { top: -10px; right: -10px; border-left: 0; border-bottom: 0; }
        .corner.bl { bottom: -10px; left: -10px; border-right: 0; border-top: 0; }
        .corner.br { bottom: -10px; right: -10px; border-left: 0; border-top: 0; }
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
          className="absolute inline-block inset-0 text-xs transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
          style={{ transform: `rotate(${i * 15}deg) translate3d(0,0,0)` }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}
