import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import muhaLogo from "/logo/muha-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRefs = useRef([]);
  const location = useLocation();

  /* ── measure the active pill position ── */
  const updatePill = useCallback(() => {
    const el = navRefs.current[activeIndex];
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPillStyle({
      left: elRect.left - parentRect.left,
      width: elRect.width,
    });
  }, [activeIndex]);

  useEffect(() => {
    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  /* ── Sync active index with location ── */
  useEffect(() => {
    if (location.pathname === '/contact') {
      const contactIndex = navLinks.findIndex(link => link.label === "Contact");
      setActiveIndex(contactIndex !== -1 ? contactIndex : 0);
    } else {
      // Home page scroll logic handled by scroll-spy below
      if (location.hash) {
        const hashIndex = navLinks.findIndex(link => link.href === `/${location.hash}`);
        if (hashIndex !== -1) setActiveIndex(hashIndex);
      } else {
        setActiveIndex(0);
      }
    }
  }, [location]);

  /* ── scroll-spy: highlight the nav item closest to the viewport ── */
  useEffect(() => {
    if (location.pathname === '/contact') return;

    const handleScroll = () => {
      const offsets = navLinks.map((link) => {
        if (link.href === '/contact' || link.href === '/') {
           return { top: link.href === '/' ? Math.abs(document.body.getBoundingClientRect().top) : Infinity };
        }
        const id = link.href.replace("/#", "");
        const section = document.getElementById(id);
        if (!section) return { top: Infinity };
        return { top: Math.abs(section.getBoundingClientRect().top - 120) };
      });
      const closest = offsets.reduce(
        (best, cur, i) => (cur.top < best.top ? { top: cur.top, i } : best),
        { top: Infinity, i: 0 }
      );
      if (closest.top !== Infinity) {
         setActiveIndex(closest.i);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header className="lauv-header">
      {/* ── Logo ── */}
      <Link to="/" className="lauv-logo-link">
        <img
          alt="Muha Logo"
          src={muhaLogo}
          className="lauv-logo-img"
          width={100}
          height={100}
        />
      </Link>

      {/* ── Desktop pill nav ── */}
      <div className="lauv-nav-wrap">
        <nav className="lauv-nav" style={{ transform: "translate3d(0,0,0.01px)" }}>
          <ul className="lauv-nav-list">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                ref={(el) => (navRefs.current[i] = el)}
                className={`lauv-nav-item ${i === activeIndex ? "active" : ""}`}
              >
                <Link
                  to={link.href}
                  onClick={() => {
                    setActiveIndex(i);
                    if (link.href.startsWith("/#")) {
                      const id = link.href.replace("/#", "");
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    } else if (link.href === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* animated pill behind the active item */}
          <span
            className="lauv-pill"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
            }}
          />

          {/* glow effect behind pill  */}
          <span
            className="lauv-pill-glow"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
            }}
          />
        </nav>
      </div>

      {/* ── Hamburger (mobile) ── */}
      <button
        className="lauv-hamburger"
        aria-label="Toggle mobile menu"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className={`lauv-hamburger-line ${mobileOpen ? "open-1" : ""}`} />
        <span className={`lauv-hamburger-line ${mobileOpen ? "open-2" : ""}`} />
        <span className={`lauv-hamburger-line ${mobileOpen ? "open-3" : ""}`} />
      </button>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="lauv-mobile-drawer">
          <nav className="lauv-mobile-nav">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  setActiveIndex(i);
                  setMobileOpen(false);
                  if (link.href.startsWith("/#")) {
                    const id = link.href.replace("/#", "");
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  } else if (link.href === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`lauv-mobile-link ${i === activeIndex ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

