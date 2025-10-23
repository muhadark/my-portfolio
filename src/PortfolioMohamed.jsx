import React from "react";
import { motion as Motion, useScroll, useTransform, useSpring } from "framer-motion";
import LandingHero from "./Component/LandingHero.jsx";
import muhaLogo from "/logo/muha-logo.png";
import SGAGROUPE from "/logo/PSAGROUPE.png";
import Carrefour from "/logo/Carrefourlogo.png";
import KENZMAROC from "/logo/KENZMAROC.jpeg";

import {
  ArrowRight,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Briefcase,
  GraduationCap,
  Languages as LanguagesIcon,
  Code2,
  Cog,
  Rocket,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Languages", href: "#languages" },
  { label: "Contact", href: "#contact" },
];

/** -------------------------------------------------------
 * Icon mapper: maps stack strings -> /public/logo icons
 * Falls back to a text badge when an icon isn't available.
 * Extend the map with any icons you add to /public/logo
 * ------------------------------------------------------ */
function stackIconPath(name) {
  const key = (name || "").toLowerCase();
  const base = import.meta.env.BASE_URL;

 const map = {
    css: `${base}logo/css.svg`,
    openai: `${base}logo/openai.svg`,
    javascript: `${base}logo/javascript.svg`,
    react: `${base}logo/react.svg`,
    next: `${base}logo/nextjs.svg`,
    nextjs: `${base}logo/nextjs.svg`,
    tailwind: `${base}logo/tailwind.svg`,
    "tailwind css": `${base}logo/tailwind.svg`,

    // Your stacks
    firebase: `${base}logo/firebase.svg`,
    "power bi": `${base}logo/powerbi.svg`,             // add file if missing
    "business central": `${base}logo/BusinessCentral.svg`, // add file if missing
    glpi: `${base}logo/glpi.png`,                       // add file if missing
    eleader: `${base}logo/eleader.svg`,                 // add file if missing
  };

  return map[key] || null;
}

const projects = [
  {
    title: "Sensibilisation Platform",
    role: "Web Developer",
    description:
      "Inclusive awareness platform hosted on Firebase with modular content blocks and accessibility-first UI.",
    url: "https://sensibilisation-927ab.web.app/",
    stack: ["openai", "CSS", "react", "Firebase"],
    impact: "Reached 1k+ unique visitors in the first launch month.",
    image: "logo/sensibilisation.jpg", // put an image here or keep placeholder
  },
  {
    title: "Silk & Sugar eCommerce",
    role: "Web Developer",
    description:
      "Responsive storefront for a Moroccan cosmetics brand with curated collections and streamlined checkout flows.",
    url: "https://www.silkandsugar.ma/",
    stack: ["openai", "CSS", "react",, "Firebase"],
    impact: "Improved mobile conversions by delivering a refined UX across breakpoints.",
    image: "logo/silkandsugar.jpg",
  },
  {
    title: "Operations Support Toolkit",
    role: "Functional Consultant",
    description:
      "Internal dashboard concept aligning Business Central entities with Eleader field operations for faster resolutions.",
    url: "https://GLPI",
    stack: ["Business Central", "Power BI", "GLPI"],
    impact: "Accelerated ticket diagnosis and team visibility at Kenz Maroc.",
    image: "logo/dynamicsnav.jpg",
  },
];

const experiences = [
  {
    role: "Technicien Support Applicatif et Systèmes",
    company: "Kenz Maroc",
    period: "Apr 2024 – Present",
    location: "Skhirat, Morocco",
    bullets: [
      "Owned GLPI complaint tracking across Navision/Business Central, eLeader, hardware, and software; produced service-level syntheses in Power BI.",
      "Performed preventive inventory declarations and ensured audit-ready documentation.",
      "Administered D365 Business Central: analytical dimensions, customer setup (discounts, price groups, payment & delivery terms), item master data, and tariffs/price discounts.",
      "Configured stock warehouses (raw materials, finished goods, packaging) and maintained manufacturing/accounting settings.",
      "Monitored Eleader (PDA) order flows and ERP integrations to keep data and deliveries accurate.",
      "Launched a cyber-awareness platform (phishing, fake supplier fraud, etc.) with explainer videos, quizzes, and educational blog posts.",
      "Automated Fleet (Parc Automobile) spare-parts management in ERP and delivered a custom purchase-order form.",
      "Rolled out Production module data: article codification (MP, PF, EMBALLAGE), routings (gammes), BOMs (nomenclatures), and raw-material variants in ERP and Eleader."
    ],
  },
  {
    role: "Crew Member",
    company: "McDonald's",
    period: "Apr 2022 – Sept 2022",
    location: "Rabat, Morocco",
    bullets: [
      "Delivered excellent drive-thru service while balancing cashier and kitchen responsibilities."
    ],
  },
  {
    role: "IT Equipment Inventory (Contract)",
    company: "Ministry of Economy and Finance",
    period: "Sep 2021 – Nov 2021",
    location: "Rabat, Morocco",
    bullets: [
      "Inventoried IT equipment and furniture across Bab Rouah, Agdal, and Temara annexes.",
      "Completed a full multi-site inventory in under two months with high accuracy and detailed reporting."
    ],
  },
  {
    role: "Merchandiser",
    company: "Carrefour",
    period: "Apr 2021 – May 2021",
    location: "Rabat, Morocco",
    bullets: [
      "Prepared product markups and maintained planogram compliance across aisles.",
      "Managed cheese & charcuterie departments; supported cashier duties during peak hours.",
      "Contributed to strong Ramadan-period sales and delivered consistent customer service."
    ],
  },
  {
    role: "Traineeship",
    company: "Company Group SGA",
    period: "Oct 2020 – Dec 2020",
    location: "Rabat, Morocco",
    bullets: [
      "Completed office tasks using Word, Excel, and Access; analyzed sales with pivot tables.",
      "Developed adaptability in a rapidly changing work environment."
    ],
  },
];

const skillGroups = [
  {
    name: "Core Stack",
    icon: <Code2 className="w-5 h-5" />,
    items: ["ERP Business Central 365", "React", "JavaScript", "CSS3", "Tailwind CSS"],
  },
  {
    name: "Tooling",
    icon: <Cog className="w-5 h-5" />,
    items: ["Git", "GitHub", "Figma", "Power BI", "Firebase", "Canva", "Notion"],
  },
  {
    name: "What I'm exploring",
    icon: <Rocket className="w-5 h-5" />,
    items: ["Ausbildung in Germany", "Advanced Power Platform", "Automation for support teams"],
  },
];

const education = [
  { title: "Specialized Technician Diploma in IT Development", org: "ECOLE ITAG", year: "2020", location: "Rabat, Morocco" },
  { title: "Scientific Baccalaureate (Biology) – Independent", org: "Lycée Lalla Aicha", year: "2022", location: "Rabat, Morocco" },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "B2 (TCF Canada)" },
  { name: "German", level: "B1 (telc, in progress)" },
];

const contactChannels = [
  { label: "Email", value: "simoamour18@gmail.com", href: "mailto:simoamour18@gmail.com", icon: Mail },
  { label: "Phone", value: "+212 673 941 554", href: "tel:+212673941554", icon: Phone },
  { label: "LinkedIn", value: "linkedin.com/in/mohamed-omor", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "GitHub", value: "github.com/muhadark", href: "https://github.com/muhadark", icon: Github },
];

const stats = [
  { label: "Tickets resolved", value: "250+" },
  { label: "Projects shipped", value: "5" },
  { label: "ERP modules", value: "8" },
];

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(15,15,45,0.45)] ${className}`}>
    {children}
  </div>
);

export default function PortfolioMohamed() {
  // Scroll-linked animation for the Experience timeline
  const experienceRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: experienceRef, offset: ["start 15%", "end 85%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 18, mass: 1.6 });
  const dotTopRaw = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const dotTop = useSpring(dotTopRaw, { stiffness: 60, damping: 18, mass: 1.6 });

  return (
    <div className="relative min-h-screen bg-[#03040D] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-[#7c6cff]/30 blur-[120px]" />
        <div className="absolute top-1/3 -right-10 h-[26rem] w-[26rem] rounded-full bg-[#00bcd4]/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#ffb347]/20 blur-[160px]" />
      </div>

      <header className="sticky top-0 z-50 bg-black backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <a href="#home" className="flex items-center">
            <img
              alt="Muha Logo"
              src={muhaLogo}
              className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 transition-all duration-300 hover:scale-110 hover:rotate-10 hover:brightness-125"
              width={150}
              height={150}
            />
            <span className="sr-only">Mohamed Omor</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#8a7bff]">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:simoamour18@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-widest transition hover:border-white/40 hover:bg-white/20"
          >
            Let's talk <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <LandingHero />

        {/* ===== Skills (DEVELOP / CREATE) ===== */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-12">
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">WHAT I DO</h2>
          </div>

          <div className="grid gap-14 md:grid-cols-2">
            {/* DEVELOP */}
            <div className="relative">
              <div className="corner-panel rounded-lg p-6 md:p-8 bg-transparent">
                <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide">DEVELOP</h3>
                <p className="text-gray-400 md:text-md text-sm mt-3 leading-relaxed">
                  Started creating mobile applications using Flutter, FlutterFlow, and Firebase and eventually
                  switched to Web Development using React, and Tailwind
                </p>

                <h4 className="text-cyan-300 font-semibold mt-5 mb-3 text-base">Skillset &amp; tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Tailwind", "React", "Javascript", "CSS", "Firebase"].map((item) => (
                    <span key={item} className="bg-transparent text-gray-300 py-1 px-4 rounded-full md:text-sm text-xs font-medium border border-gray-600/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
            </div>

            {/* CREATE */}
            <div className="relative">
              <div className="corner-panel rounded-lg p-6 md:p-8 bg-transparent">
                <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide">CREATE</h3>
                <p className="text-gray-400 md:text-md text-sm mt-3 leading-relaxed">
                  My content creation journey evolved from a side hustle to serving other creators,
                  achieving an average reach of 15 million within 90 days.
                </p>

                <h4 className="text-cyan-300 font-semibold mt-5 mb-3 text-base">Skillset &amp; Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Canva", "Adobe Photoshop", "Notion", "Power BI"].map((item) => (
                    <span key={item} className="bg-transparent text-gray-300 py-1 px-4 rounded-full md:text-sm text-xs font-medium border border-gray-600/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
            </div>

            {/* ===== CONSULT (ERP + GLPI) ===== */}
            <div className="relative md:col-span-2">
              <div className="corner-panel rounded-lg p-6 md:p-8 bg-transparent">
                <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide">
                  CONSULT • ERP (Business Central) & GLPI
                </h3>

                <p className="text-gray-400 md:text-md text-sm mt-3 leading-relaxed">
                  As a Consultant Fonctionnel ERP (Dynamics 365 Business Central) with complaint tracking on the GLPI
                  system, I streamline data integrity, pricing, and warehouse setups.
                </p>

                <h4 className="text-cyan-300 font-semibold mt-5 mb-3 text-base">Skillset &amp; Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Business Central Dynamics NAV 365", "GLPI", "Eleader"].map((item) => (
                    <span key={item} className="bg-transparent text-gray-300 py-1 px-4 rounded-full md:text-sm text-xs font-medium border border-gray-600/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
            </div>
          </div>

          <style>{`
            .corner-panel {
              position: relative;
              background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
              background-size: 12px 12px;
              background-position: -2px -2px;
              border: 1px solid rgba(255,255,255,0.08);
            }
            .corner { position: absolute; width: 18px; height: 18px; border: 2px solid rgba(0,255,255,0.9);
              filter: drop-shadow(0 0 4px rgba(0,255,255,0.7)); border-radius: 3px; pointer-events: none; }
            .corner.tl { top: -9px; left: -9px; border-right: 0; border-bottom: 0; }
            .corner.tr { top: -9px; right: -9px; border-left: 0; border-bottom: 0; }
            .corner.bl { bottom: -9px; left: -9px; border-right: 0; border-top: 0; }
            .corner.br { bottom: -9px; right: -9px; border-left: 0; border-top: 0; }
          `}</style>
        </section>

        {/* ===================== PROJECTS (numbered grid cards) ===================== */}
        <section id="projects" className="mx-auto max-w-[1400px] px-4 py-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">My Projects</h2>
            </div>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              View code <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full mx-auto mt-10 gap-0">
            {projects.map((project, i) => {
              const n = String(i + 1).padStart(2, "0");
              const role = project.role || "Web Developer";
              const image = project.image || "/proj/placeholder.png";

              const alignRight = i % 2 === 0; // 0,2,4... right-aligned like your reference
              const numberPos = ["top-4 left-4", "bottom-4 left-4", "top-4 right-4", "bottom-4 right-4"][i % 4];

              return (
                <div
                  key={project.title}
                  className="relative flex flex-col justify-between py-6 px-6 md:px-15 border border-white/20 bg-transparent overflow-hidden h-full"
                >
                  <div className={`absolute md:text-6xl text-3xl p-6 font-bold text-white/10 ${numberPos}`}>
                    {n}
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div
                      className={`flex flex-col ${alignRight ? "text-right items-end order-1" : "text-left items-start order-2"} z-10 p-6`}
                    >
                      <div>
                        <h3 className="md:text-xl text-md font-semibold text-white">{project.title}</h3>
                        <p className="md:text-sm text-xs text-gray-400">{role}</p>
                      </div>

                      <div className="mt-2">
                        <div className="flex space-x-2">
                          {project.stack?.slice(0, 5).map((tech) => {
                            const icon = stackIconPath(tech);
                            if (icon) {
                              return (
                                <img
                                  key={tech}
                                  alt={`${tech} icon`}
                                  loading="lazy"
                                  width="24"
                                  height="24"
                                  decoding="async"
                                  className="inline-block"
                                  src={icon}
                                />
                              );
                            }
                            return (
                              <span
                                key={tech}
                                className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60"
                              >
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative w-full flex-grow rounded-xl overflow-hidden z-10 ${alignRight ? "order-2" : "order-1"
                        } transition-transform duration-300 hover:scale-[1.01]`}
                      style={{ opacity: 0.9 }}
                    >
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noreferrer">
                          <img
                            alt={`${project.title} image`}
                            loading="lazy"
                            width="500"
                            height="500"
                            decoding="async"
                            src={image}
                            className="w-full h-full object-cover"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      ) : (
                        <img
                          alt={`${project.title} image`}
                          loading="lazy"
                          width="500"
                          height="500"
                          decoding="async"
                          src={image}
                          className="w-full h-full object-cover"
                          style={{ color: "transparent" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== EXPERIENCE SECTION (timeline) ===================== */}
        <section id="experience" className="mx-auto max-w-6xl px-4 py-20" ref={experienceRef}>
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Trajectory</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Experience</h2>
          </div>

          <div className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10">
            <Motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 -translate-x-1/2 origin-top"
              style={{ scaleY: lineScale }}
            />
            <Motion.div
              className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ top: dotTop, marginLeft: '2px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="relative space-y-24">
              {/* ITEM 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
                <div className="flex flex-col md:items-end md:text-right md:order-1">
                  <h3 className="md:text-2xl text-xl font-bold text-gray-100">Traineeship</h3>
                  <p className="text-lg text-cyan-400 mb-1">Company Group SGA</p>
                  <span className="md:text-xl text-md font-regular text-gray-400 mb-2 tracking-[0.4em]">2020</span>
                  <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5">
                    <img alt="Datacom logo" src={SGAGROUPE} className="absolute inset-0 h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-gray-300 md:text-lg text:md text-left md:order-2">
                  <p>
                    "Completed office tasks using Word, Excel, and Access; analyzed sales with pivot tables."
                    "Developed adaptability in a rapidly changing work environment."
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
                <div className="flex flex-col md:items-start md:text-left md:order-2">
                  <h3 className="md:text-2xl text-xl font-bold text-gray-100">Merchandiser</h3>
                  <p className="text-lg text-cyan-400 mb-1">Carrefour</p>
                  <span className="md:text-xl text-md font-regular text-gray-400 mb-2 tracking-[0.4em]">2021</span>
                  <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5">
                    <img alt="Security Bank Corporation logo" src={Carrefour} className="absolute inset-0 h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-gray-300 md:text-lg text:md md:text-right md:order-1">
                  <p>
                    "Prepared product markups and maintained planogram compliance across aisles.",
                    "Managed cheese & charcuterie departments; supported cashier duties during peak hours.",
                    "Contributed to strong Ramadan-period sales and delivered consistent customer service."
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
                <div className="flex flex-col md:items-end md:text-right md:order-1">
                  <h3 className="md:text-2xl text-xl font-bold text-gray-100">IT Equipment Inventory (Contract)</h3>
                  <p className="text-lg text-cyan-400 mb-1">Ministry of Economy and Finance</p>
                  <span className="md:text-xl text-md font-regular text-gray-400 mb-2 tracking-[0.4em]">2021</span>
                </div>
                <div className="text-gray-300 md:text-lg text:md text-left md:order-2">
                  <p>
                    "Inventoried IT equipment and furniture across Bab Rouah, Agdal, and Temara annexes.",
                    "Completed a full multi-site inventory in under two months with high accuracy and detailed reporting."
                  </p>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
                <div className="flex flex-col md:items-end md:text-right md:order-1">
                  <h3 className="md:text-2xl text-xl font-bold text-gray-100">Technicien Support Applicatif et Systèmes</h3>
                  <p className="text-lg text-cyan-400 mb-1">Kenz Maroc</p>
                  <span className="md:text-xl text-md font-regular text-gray-400 mb-2 tracking-[0.4em]">2024</span>
                  <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5">
                    <img alt="Notion logo" src={KENZMAROC} className="absolute inset-0 h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-gray-300 md:text-lg text:md text-left md:order-2 space-y-5">
                  <p><strong>• GLPI Complaint Tracking & Support Systems:</strong></p>
                  <ul className="ml-5 space-y-1">
                    <li>★ Managed GLPI complaint tracking across ERP (Navision/Business Central), eLeader, hardware, and software systems.</li>
                    <li>★ Provided tailored technical solutions and preventive inventory declarations.</li>
                    <li>★ Created Power BI reports summarizing service-level performance by department.</li>
                  </ul>

                  <p><strong>• ERP Data Management (Dynamics 365 Business Central):</strong></p>
                  <ul className="ml-5 space-y-1">
                    <li>★ Administered analytical dimensions for items, customers, and projects.</li>
                    <li>★ Configured customers with discounts, price groups, payment, and delivery terms.</li>
                    <li>★ Created item master data with manufacturing and accounting setups.</li>
                    <li>★ Defined warehouse structures (Raw Materials, Finished Goods, Packaging).</li>
                    <li>★ Maintained tariffs and price discount updates for all stock items.</li>
                  </ul>

                  <p><strong>• Integration eLeader ↔ ERP (Navision / Business Central):</strong></p>
                  <ul className="ml-5 space-y-1">
                    <li>★ Tracked and validated orders from the PDA “eLeader” automatically synchronized with the ERP.</li>
                    <li>★ Ensured data integrity and order flow between field sales and ERP modules.</li>
                  </ul>

                  <p><strong>• Plateforme de Cyber-Sensibilisation:</strong></p>
                  <ul className="ml-5 space-y-1">
                    <li>★ Developed an awareness platform against phishing and supplier fraud.</li>
                    <li>★ Created explainer videos, interactive quizzes, and educational blog content.</li>
                    <li>★ Enhanced employee security awareness through gamified learning.</li>
                  </ul>

                  <p><strong>• Intégration PDR – Parc Automobile:</strong></p>
                  <ul className="ml-5 space-y-1">
                    <li>★ Automated spare-parts and fleet management within ERP (Business Central).</li>
                    <li>★ Implemented custom purchase-order forms specific to automotive operations.</li>
                    <li>★ Improved tracking of vehicle-related consumables and maintenance items.</li>
                  </ul>

                  <p><strong>• Intégration Module Production – Kenz Maroc:</strong></p>
                  <ul className="ml-5 space-y-1">
                    <li>★ Implemented item codification for raw materials (MP), finished goods (PF), and packaging (EMBALLAGE) in ERP and eLeader.</li>
                    <li>★ Created routings (Gammes), Bills of Materials (Nomenclatures), and raw material variants.</li>
                    <li>★ Ensured data alignment between ERP and production management systems.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Path & learning</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Education & continuous growth</h2>
              <div className="mt-10 space-y-6">
                {education.map((item) => (
                  <Card key={item.title} className="p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-white/60">
                      {item.org} · {item.location}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div id="languages">
              <Card className="h-full p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-white/10 bg-white/10 p-2">
                    <LanguagesIcon className="h-5 w-5 text-[#00bcd4]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Languages</p>
                    <h3 className="text-2xl font-semibold">Multilingual collaborator</h3>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  {languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/70">
                      <span>{language.name}</span>
                      <span className="text-white/40">{language.level}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="home" className="mx-auto max-w-6xl px-4 pb-20 pt-16 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.6 }} className="space-y-7">
              <Motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                <Sparkles className="h-4 w-4 text-[#ffb347]" />
                SUPPORT • DEVELOPMENT • ERP
              </Motion.span>

              <Motion.h1 variants={fadeUp} className="text-4xl font-semibold leading-tight md:text-6xl">
                I help teams ship reliable systems and thoughtful web experiences.
              </Motion.h1>

              <Motion.p variants={fadeUp} className="max-w-xl text-base text-white/70 md:text-lg">
                Technicien support applicatif & systèmes based in Rabat, Morocco. I blend ERP Business Central expertise with
                front-end craft to unblock operations and deliver user-friendly tools.
              </Motion.p>

              <Motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#8a7bff] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(138,123,255,0.45)] transition hover:translate-y-[-2px]">
                  View projects <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#experience" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:text-white">
                  My experience
                </a>
              </Motion.div>

              <Motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <Card key={stat.label} className="p-5 text-center">
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{stat.label}</div>
                  </Card>
                ))}
              </Motion.div>

              <Motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#7c6cff]" /> Rabat, Morocco
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-[#ffb347]" /> Preparing Ausbildung in Germany
                </span>
              </Motion.div>
            </Motion.div>

            <Motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="space-y-6">
              <Card className="p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/50">Current focus</p>
                    <h2 className="mt-2 text-2xl font-semibold">Designing calm support experiences</h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 p-3">
                    <Briefcase className="h-6 w-6 text-[#8a7bff]" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70">
                  Building playbooks that connect support tooling, Business Central modules and front-line teams so issues are
                  solved before they escalate.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-white/70">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>ERP ↔ Eleader sync automation</span>
                    <span className="text-white/40">In progress</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>Front-end micro projects</span>
                    <span className="text-white/40">Weekend lab</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>German B1 preparation</span>
                    <span className="text-white/40">Daily</span>
                  </div>
                </div>
              </Card>

              <Card className="p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Connect</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="mailto:simoamour18@gmail.com" className="inline-flex w-full items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10">
                    Email <Mail className="h-4 w-4" />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10">
                    GitHub <Github className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10">
                    LinkedIn <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            </Motion.div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-4 pb-24 pt-10">
          <Card className="relative overflow-hidden p-10 text-center md:text-left">
            <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-[#8a7bff]/40 blur-[120px]" />
            <div className="absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-[#00bcd4]/30 blur-[150px]" />
            <div className="relative z-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Let's collaborate</p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Need someone who understands both users and systems?
                </h2>
                <p className="mt-4 max-w-xl text-sm text-white/70">
                  I'm available for Ausbildung opportunities, junior developer roles or support missions where I can blend ERP
                  operations knowledge with modern web craftsmanship.
                </p>
              </div>
              <div className="space-y-4">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:border-white/30 hover:bg-white/10"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">{channel.label}</p>
                        <p className="mt-1 text-sm text-white/80">{channel.value}</p>
                      </div>
                      <Icon className="h-5 w-5 text-white/60" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Card>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-white/40">
            © {new Date().getFullYear()} Mohamed Omor. Crafted with patience & curiosity.
          </p>
        </section>
      </main>
    </div>
  );
}
