import React from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import LandingHero from "./Component/LandingHero.jsx";
import Navbar from "./Component/Navbar.jsx";
import SocialSidebar from "./Component/SocialSidebar.jsx";
import muhaLogo from "/logo/muha-logo.png";
import SGAGROUPE from "/logo/PSAGROUPE.png";
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

/** Icon mapper */
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
    firebase: `${base}logo/firebase.svg`,
    "power bi": `${base}logo/powerbi.svg`,
    "business central": `${base}logo/BusinessCentral.svg`,
    glpi: `${base}logo/glpi.png`,
    eleader: `${base}logo/eleader.svg`,
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
    image: "logo/sensibilisation.jpg",
  },
  {
    title: "Silk & Sugar eCommerce",
    role: "Web Developer",
    description:
      "Responsive storefront for a Moroccan cosmetics brand with curated collections and streamlined checkout flows.",
    url: "https://www.silkandsugar.ma/",
    stack: ["openai", "CSS", "react", "Firebase"],
    impact:
      "Improved mobile conversions by delivering a refined UX across breakpoints.",
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
      "Rolled out Production module data: article codification (MP, PF, EMBALLAGE), routings (gammes), BOMs (nomenclatures), and raw-material variants in ERP and Eleader.",
    ],
  },
  // (You can still use this data elsewhere if needed)
];

const skillGroups = [
  {
    name: "Core Stack",
    icon: <Code2 className="w-5 h-5" />,
    items: [
      "ERP Business Central 365",
      "React",
      "JavaScript",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    name: "Tooling",
    icon: <Cog className="w-5 h-5" />,
    items: ["Git", "GitHub", "Figma", "Power BI", "Firebase", "Canva", "Notion"],
  },
  {
    name: "What I'm exploring",
    icon: <Rocket className="w-5 h-5" />,
    items: [
      "Ausbildung in Germany",
      "Advanced Power Platform",
      "Automation for support teams",
    ],
  },
];

const education = [
  {
    title: "Specialized Technician Diploma in IT Development",
    org: "ECOLE ITAG",
    year: "2020",
    location: "Rabat, Morocco",
  },
  {
    title: "Scientific Baccalaureate (Biology) – Independent",
    org: "Lycée Lalla Aicha",
    year: "2022",
    location: "Rabat, Morocco",
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "German", level: "B1" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "B2 (TCF Canada)" },
];

const contactChannels = [
  {
    label: "Email",
    value: "simoamour18@gmail.com",
    href: "mailto:simoamour18@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+212 673 941 554",
    href: "tel:+212673941554",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-omor",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/muhadark",
    href: "https://github.com/muhadark",
    icon: Github,
  },
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

const AnimatedSectionTitle = ({ text }) => {
  const letters = text.split("");
  return (
    <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-10 mb-10 font-extrabold">
      <h2 className="blur-text md:text-7xl text-3xl font-extrabold flex flex-wrap justify-center text-center">
        {letters.map((ch, i) => (
          <Motion.span
            key={i}
            initial={{ filter: "blur(10px)", opacity: 0, y: -50 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="inline-block will-change-[transform,filter,opacity]"
          >
            {ch === " " ? "\u00A0" : ch}
          </Motion.span>
        ))}
      </h2>
    </div>
  );
};

export default function PortfolioMohamed() {

  const experienceRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start 15%", "end 85%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 18,
    mass: 1.6,
  });
  const dotTopRaw = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const dotTop = useSpring(dotTopRaw, {
    stiffness: 60,
    damping: 18,
    mass: 1.6,
  });

  return (
    <div className="relative min-h-screen bg-[#03040D] text-white overflow-x-hidden">
      {/* blurred background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-[20rem] w-[20rem] rounded-full bg-[#7c6cff]/30 blur-[120px] md:h-[28rem] md:w-[28rem]" />
        <div className="absolute top-1/3 -right-10 h-[18rem] w-[18rem] rounded-full bg-[#00bcd4]/20 blur-[140px] md:h-[26rem] md:w-[26rem]" />
        <div className="absolute bottom-0 left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-[#ffb347]/20 blur-[160px] md:h-[22rem] md:w-[22rem]" />
      </div>

      {/* Lauv-style Navbar */}
      <Navbar />

      {/* Floating social icons */}
      <SocialSidebar />

      <main className="relative z-10">
        {/* Hero */}
        <LandingHero />

        {/* ===== Skills (DEVELOP / CREATE / CONSULT) ===== */}
        <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-5 py-16 sm:py-20">
          <AnimatedSectionTitle text="What I do" />

          <div className="grid gap-10 md:gap-14 md:grid-cols-2">
            {/* DEVELOP */}
            <div className="relative">
              <div className="corner-panel rounded-lg p-5 sm:p-6 md:p-8 bg-transparent">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                  DEVELOP
                </h3>
                <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                  Started creating mobile applications using Flutter, FlutterFlow,
                  and Firebase and eventually switched to web development using
                  React and Tailwind.
                </p>

                <h4 className="mt-5 mb-3 text-xs sm:text-sm font-semibold text-cyan-300">
                  Skillset &amp; tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Tailwind", "React", "Javascript", "CSS", "Firebase"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-600/80 bg-transparent px-3 py-1 text-[11px] sm:text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
            </div>

            {/* CREATE */}
            <div className="relative">
              <div className="corner-panel rounded-lg p-5 sm:p-6 md:p-8 bg-transparent">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                  CREATE
                </h3>
                <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                  My content creation journey evolved from a side hustle to
                  serving other creators, achieving an average reach of 15 million
                  within 90 days.
                </p>

                <h4 className="mt-5 mb-3 text-xs sm:text-sm font-semibold text-cyan-300">
                  Skillset &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Canva", "Adobe Photoshop", "Notion", "Power BI"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-600/80 bg-transparent px-3 py-1 text-[11px] sm:text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
            </div>

            {/* CONSULT */}
            <div className="relative md:col-span-2">
              <div className="corner-panel rounded-lg p-5 sm:p-6 md:p-8 bg-transparent">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                  CONSULT • ERP (Business Central) &amp; GLPI
                </h3>

                <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                  As a Consultant Fonctionnel ERP (Dynamics 365 Business Central)
                  with complaint tracking on the GLPI system, I streamline data
                  integrity, pricing, and warehouse setups.
                </p>

                <h4 className="mt-5 mb-3 text-xs sm:text-sm font-semibold text-cyan-300">
                  Skillset &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Business Central Dynamics NAV 365",
                    "GLPI",
                    "Eleader",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-600/80 bg-transparent px-3 py-1 text-[11px] sm:text-xs text-gray-300"
                    >
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
            .corner {
              position: absolute;
              width: 16px;
              height: 16px;
              border: 2px solid rgba(0,255,255,0.9);
              filter: drop-shadow(0 0 4px rgba(0,255,255,0.7));
              border-radius: 3px;
              pointer-events: none;
            }
            .corner.tl { top: -8px; left: -8px; border-right: 0; border-bottom: 0; }
            .corner.tr { top: -8px; right: -8px; border-left: 0; border-bottom: 0; }
            .corner.bl { bottom: -8px; left: -8px; border-right: 0; border-top: 0; }
            .corner.br { bottom: -8px; right: -8px; border-left: 0; border-top: 0; }
          `}</style>
        </section>

        {/* ===== PROJECTS ===== */}
        <section
          id="projects"
          className="mx-auto max-w-[1400px] px-4 sm:px-5 py-16 sm:py-20"
        >
          <AnimatedSectionTitle text="My Projects" />
          <div className="mb-8 sm:mb-12 flex justify-center">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 sm:px-4 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              View code <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px sm:gap-0 w-full mx-auto mt-6 sm:mt-10">
            {projects.map((project, i) => {
              const n = String(i + 1).padStart(2, "0");
              const role = project.role || "Web Developer";
              const image = project.image || "/proj/placeholder.png";

              const alignRight = i % 2 === 0;
              const numberPos = [
                "top-4 left-4",
                "bottom-4 left-4",
                "top-4 right-4",
                "bottom-4 right-4",
              ][i % 4];

              return (
                <div
                  key={project.title}
                  className="relative flex flex-col justify-between border border-white/15 bg-black/30 sm:bg-transparent overflow-hidden h-full py-5 sm:py-6 px-4 sm:px-6"
                >
                  <div
                    className={`pointer-events-none absolute ${numberPos} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/10`}
                  >
                    {n}
                  </div>

                  <div className="flex flex-col justify-between h-full gap-4 sm:gap-6">
                    <div
                      className={`flex flex-col ${
                        alignRight
                          ? "text-right items-end order-1"
                          : "text-left items-start order-2 md:order-2"
                      } z-10`}
                    >
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {role}
                        </p>
                      </div>

                      <div className="mt-2">
                        <div className="flex flex-wrap gap-2">
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
                      className={`relative w-full flex-grow rounded-xl overflow-hidden z-10 ${
                        alignRight ? "order-2" : "order-1 md:order-1"
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

        {/* ===== EXPERIENCE (timeline) ===== */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-4 sm:px-5 py-16 sm:py-20"
          ref={experienceRef}
        >
          <AnimatedSectionTitle text="My Experience" />

          <div className="relative w-full max-w-5xl mx-auto py-10 sm:py-16 px-2 sm:px-4 md:px-6 lg:px-8 mt-4 sm:mt-10">
            {/* timeline line & dot only visible from md+ to avoid weirdness on tiny screens */}
            <Motion.div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 -translate-x-1/2 origin-top"
              style={{ scaleY: lineScale }}
            />
            <Motion.div
              className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ top: dotTop, marginLeft: "2px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="relative space-y-16 sm:space-y-20">
              {/* ITEM 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-10 md:gap-x-20 gap-y-4 rounded-2xl bg-black/60 md:bg-transparent p-5 sm:p-6 md:p-0 shadow-lg md:shadow-none">
                <div className="flex flex-col md:items-end md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                    Traineeship
                  </h3>
                  <p className="text-base md:text-lg text-cyan-400 mb-1">
                    Company Group SGA
                  </p>
                  <span className="text-sm md:text-base font-normal text-gray-400 mb-2 tracking-[0.25em]">
                    2020
                  </span>
                  <div className="relative my-3 md:my-0 flex h-10 w-10 items-center justify-center">
                    <img
                      alt="SGA Groupe logo"
                      src={SGAGROUPE}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-300 text-left">
                  <p>
                    Completed office tasks using Word, Excel, and Access; analyzed
                    sales with pivot tables and developed adaptability in a
                    rapidly changing work environment.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-10 md:gap-x-20 gap-y-4 rounded-2xl bg-black/60 md:bg-transparent p-5 sm:p-6 md:p-0 shadow-lg md:shadow-none">
                <div className="flex flex-col md:items-end md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                    IT Equipment Inventory (Contract)
                  </h3>
                  <p className="text-base md:text-lg text-cyan-400 mb-1">
                    Ministry of Economy and Finance
                  </p>
                  <span className="text-sm md:text-base font-normal text-gray-400 mb-2 tracking-[0.25em]">
                    2021
                  </span>
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-300 text-left">
                  <p>
                    Inventoried IT equipment and furniture across Bab Rouah,
                    Agdal, and Temara annexes, completing a full multi-site
                    inventory in under two months with high accuracy and detailed
                    reporting.
                  </p>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-10 md:gap-x-20 gap-y-4 rounded-2xl bg-black/60 md:bg-transparent p-5 sm:p-6 md:p-0 shadow-lg md:shadow-none">
                <div className="flex flex-col md:items-end md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                    Technicien Support Applicatif et Systèmes
                  </h3>
                  <p className="text-base md:text-lg text-cyan-400 mb-1">
                    Kenz Maroc
                  </p>
                  <span className="text-sm md:text-base font-normal text-gray-400 mb-2 tracking-[0.25em]">
                    2024
                  </span>
                  <div className="relative my-3 md:my-0 flex h-10 w-10 items-center justify-center">
                    <img
                      alt="Kenz Maroc logo"
                      src={KENZMAROC}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-300 text-left">
                  <p>
                    <strong>GLPI Complaint Tracking &amp; Support Systems:</strong>
                  </p>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>
                      Managed GLPI complaint tracking across ERP (Navision/Business
                      Central), eLeader, hardware, and software systems.
                    </li>
                    <li>
                      Provided tailored technical solutions and preventive
                      inventory declarations.
                    </li>
                    <li>
                      Created Power BI reports summarizing service-level
                      performance by department.
                    </li>
                  </ul>

                  <p>
                    <strong>ERP Data Management (Dynamics 365 Business Central):</strong>
                  </p>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>
                      Administered analytical dimensions for items, customers, and
                      projects.
                    </li>
                    <li>
                      Configured customers with discounts, price groups, payment,
                      and delivery terms.
                    </li>
                    <li>
                      Created item master data with manufacturing and accounting
                      setups.
                    </li>
                    <li>
                      Defined warehouse structures (Raw Materials, Finished Goods,
                      Packaging).
                    </li>
                    <li>
                      Maintained tariffs and price discount updates for all stock
                      items.
                    </li>
                  </ul>

                  <p>
                    <strong>Integration eLeader ↔ ERP:</strong>
                  </p>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>
                      Tracked and validated orders from the PDA “eLeader”
                      synchronized with the ERP.
                    </li>
                    <li>
                      Ensured data integrity and order flow between field sales
                      and ERP modules.
                    </li>
                  </ul>

                  <p>
                    <strong>Plateforme de Cyber-Sensibilisation:</strong>
                  </p>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>
                      Developed an awareness platform against phishing and
                      supplier fraud.
                    </li>
                    <li>
                      Created explainer videos, interactive quizzes, and blog
                      content.
                    </li>
                  </ul>

                  <p>
                    <strong>Intégration PDR – Parc Automobile:</strong>
                  </p>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>
                      Automated spare-parts and fleet management within ERP
                      (Business Central).
                    </li>
                    <li>
                      Implemented custom purchase-order forms for automotive
                      operations.
                    </li>
                  </ul>

                  <p>
                    <strong>Intégration Module Production – Kenz Maroc:</strong>
                  </p>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>
                      Implemented item codification for raw materials (MP),
                      finished goods (PF), and packaging (EMBALLAGE).
                    </li>
                    <li>
                      Created routings (Gammes), Bills of Materials
                      (Nomenclatures), and raw material variants.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EDUCATION & LANGUAGES ===== */}
        <section className="mx-auto max-w-6xl px-4 sm:px-5 py-16 sm:py-20">
          <AnimatedSectionTitle text="Education" />
          <div className="grid gap-10 md:grid-cols-5 md:gap-14">
            {/* EDUCATION */}
            <div id="education" className="md:col-span-3">
              <div className="relative h-full">
                <div className="corner-panel h-full rounded-lg p-5 sm:p-7 bg-transparent flex flex-col justify-center">
                  <div className="flex flex-col">
                    {education.map((item, index) => (
                      <div
                        key={item.title}
                        className={`py-6 sm:py-8 ${
                          index !== education.length - 1 ? "border-b border-white/10" : ""
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="text-lg sm:text-xl font-semibold">
                            {item.title}
                          </h3>
                          <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50">
                            {item.year}
                          </span>
                        </div>
                        <p className="mt-3 text-xs sm:text-sm text-white/60">
                          {item.org} · {item.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="corner tl" />
                <span className="corner tr" />
                <span className="corner bl" />
                <span className="corner br" />
              </div>
            </div>

            <div id="languages" className="md:col-span-2">
              <div className="relative h-full">
                <div className="corner-panel h-full rounded-lg p-5 sm:p-7 bg-transparent">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-white/10 bg-white/10 p-2">
                      <LanguagesIcon className="h-5 w-5 text-[#00bcd4]" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/40">
                        Languages
                      </p>
                      
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                    {languages.map((language) => (
                      <div
                        key={language.name}
                        className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-xs sm:text-sm text-white/70"
                      >
                        <span>{language.name}</span>
                        <span className="text-white/40">{language.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="corner tl" />
                <span className="corner tr" />
                <span className="corner bl" />
                <span className="corner br" />
              </div>
            </div>
          </div>
        </section>



        {/* ===== FOOTER ===== */}
        <section className="mx-auto max-w-6xl px-4 sm:px-5 py-10">
          <p className="mt-8 sm:mt-10 text-center text-[9px] sm:text-xs uppercase tracking-[0.4em] text-white/40">
            © {new Date().getFullYear()} Mohamed Omor. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
}
