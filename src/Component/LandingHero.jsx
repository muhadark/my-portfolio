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

  // Canvas background
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
            const k = (c * 0.2 + r * 7.6) * 0.15;
            const yy = y + Math.sin(k + t * 3) * amp;
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
          style={{ width: "100%", height: 600 }}
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
          style={{ width: "100%", height: 450 }}
          className="md:hidden opacity-20"
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

        {/* Rotating circular text + logo (desktop / tablet only) */}
        <div className="w-full items-center mt-8 mb-4 relative h-[220px] md:h-[260px] hidden md:block">
          <RotatingTextDisk
            text="SCROLL-DOWN*SCROLL-DOWN*"
            className="absolute left-10 md:left-24 lg:left-44 bottom-6 md:bottom-10"
          />
          <img
            alt="Lauv Logo"
            src={muhaLogo}
            className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 absolute left-[80px] md:left-[120px] lg:left-[140px] bottom-[0px] md:bottom-[6px]"
            width={80}
            height={80}
          />
        </div>

        {/* Socials (right rail on large screens, bottom bar on mobile) */}
        {/* Desktop / large: right side rail */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <SocialIcon
            href="https://github.com/"
            label="GitHub"
            Icon={Github}
          />
          <SocialIcon
            href="https://www.linkedin.com/"
            label="LinkedIn"
            Icon={Linkedin}
          />
          <SocialIcon
            href="mailto:simoamour18@gmail.com"
            label="Email"
            Icon={Mail}
          />
        </div>

        {/* Mobile / tablet: bottom centered bar */}
        <div className="mt-10 flex lg:hidden gap-4 justify-center">
          <SocialIcon
            href="https://github.com/"
            label="GitHub"
            Icon={Github}
          />
          <SocialIcon
            href="https://www.linkedin.com/"
            label="LinkedIn"
            Icon={Linkedin}
          />
          <SocialIcon
            href="mailto:simoamour18@gmail.com"
            label="Email"
            Icon={Mail}
          />
        </div>
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

function SocialIcon({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group"
      aria-label={label}
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
        <Icon className="h-5 w-5 text-white/80 transition group-hover:text-white" />
      </div>
    </a>
  );
}
