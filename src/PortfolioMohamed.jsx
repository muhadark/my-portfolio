import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Github, Linkedin, Mail, Phone, Award, Briefcase, GraduationCap, Languages as LangIcon, Code2, MapPin } from "lucide-react";

/**
 * Clubhouse‑inspired portfolio, now merged with ALL info from your first portfolio:
 * - Projects (live links)
 * - Skills (grouped)
 * - Experience (Kenz Maroc, McDonald's, Ministry)
 * - Education
 * - Languages
 * - Contact
 * TailwindCSS + Framer Motion only. Single-file component.
 */

const people = [
  // Replace with your own headshots later
  "https://api.dicebear.com/9.x/thumbs/svg?seed=A",
  "https://api.dicebear.com/9.x/thumbs/svg?seed=B",
  "https://api.dicebear.com/9.x/thumbs/svg?seed=C",
  "https://api.dicebear.com/9.x/thumbs/svg?seed=D",
  "https://api.dicebear.com/9.x/thumbs/svg?seed=E",
];

const projects = [
  {
    title: "Sensibilisation Platform",
    sub: "Firebase Hosting · Accessible UI",
    url: "https://sensibilisation-927ab.web.app/",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
  {
    title: "Silk & Sugar – E‑commerce",
    sub: "Responsive storefront",
    url: "https://www.silkandsugar.ma/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const skills = [
  { group: "Core", items: ["ERP : Business Central 365 Dynamics NAV","React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", ] },
  { group: "Tools", items: ["Git", "GitHub", "Figma", "power BI","Firebase","canva","notion"] },
];

const experiences = [
  {
    role: "Technicien Support Applicatif et Systèmes",
    company: "Kenz Maroc",
    period: "Apr 2024 – Sept 2024",
    location: "Skhirat, Morocco",
    bullets: [
      "GLPI ticketing: troubleshooting for Navision/Business Central, eLeader, hardware & software.",
      "ERP D365 Business Central: items, customers, pricing, warehouses, and analytical dimensions.",
      "Eleader ↔ ERP integration: order tracking and data consistency.",
    ],
  },
  {
    role: "Crew Member",
    company: "McDonald’s",
    period: "Apr 2022 – Sept 2022",
    location: "Rabat, Morocco",
    bullets: ["Customer service, cashier, drive‑thru operations, and cross‑functional teamwork."],
  },
  {
    role: "IT Equipment Inventory (Contract)",
    company: "Ministry of Economy and Finance",
    period: "Sep 2021 – Nov 2021",
    location: "Rabat, Morocco",
    bullets: ["Inventory and auditing across multiple annexes with high accuracy."],
  },
];

const education = [
  { title: "Specialized Technician Diploma in IT Development", org: "ECOLE ITAG", year: "2020", location: "Rabat, Morocco" },
  { title: "Scientific Baccalaureate (Biology) – Independent", org: "Lalla Aisha", year: "2022", location: "Rabat, Morocco" },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "B2 (TCF Canada)" },
  { name: "German", level: "B1 (telc, in progress)" },
];

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl bg-white/80 border border-black/10 shadow ${className}`}>{children}</div>
);

export default function PortfolioClubhouseFull() {
  return (
    <div className="min-h-screen text-slate-900" style={{ backgroundColor: "#F4F1E9" }}>
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-[#F4F1E9]/80 backdrop-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">Mohamed Omor</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#languages" className="hover:underline">Languages</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <a href="mailto:simoamour18@gmail.com" className="px-3 py-1.5 rounded-full bg-black text-white text-xs">Get in touch</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        {/* Blobs */}
        <div className="absolute -z-10 inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl"/>
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl"/>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-teal-300/30 blur-3xl"/>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
              <p className="text-sm">Aspiring Software Developer</p>
              <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] mt-2">
                I build friendly web experiences
                <span className="block">with React & modern CSS.</span>
              </h1>
              <p className="mt-4 text-lg text-slate-700 max-w-xl">
                Based in Rabat <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4"/>Morocco</span>. Preparing for an Ausbildung in Germany (telc B1 in progress). I focus on clean UI, performance and accessibility.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white shadow hover:translate-y-[-1px] transition">
                  See projects <ArrowRight className="w-4 h-4"/>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 border border-black/10 shadow">
                  Contact
                </a>
              </div>
              {/* social proof avatars */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {people.map((src,i)=> (
                    <img key={i} src={src} alt="avatar" className="w-9 h-9 rounded-full ring-2 ring-[#F4F1E9] shadow"/>
                  ))}
                </div>
                <span className="text-sm text-slate-600">Trusted by mentors & teammates</span>
              </div>
            </motion.div>

            {/* Demo card */}
            <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{duration:0.6}} className="relative">
              <Card className="p-6">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-rose-400"/>
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400"/>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"/>
                  <span className="ml-2">/projects</span>
                </div>
                <div className="mt-5 grid gap-3">
                  {projects.map((p, idx) => (
                    <a key={idx} href={p.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-black/10 p-4 bg-white/80 hover:bg-white transition block">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium tracking-tight">{p.title}</div>
                          <div className="text-sm text-slate-600">{p.sub}</div>
                        </div>
                        <Globe className="w-5 h-5 opacity-60 group-hover:opacity-100"/>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.tech?.map(t => (
                          <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5">{t}</span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-2"><Code2 className="w-6 h-6"/> Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <Card key={idx} className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-slate-600">{p.sub}</div>
                </div>
                <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm underline">
                  Live <Globe className="w-4 h-4"/>
                </a>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech?.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5">{t}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-2"><Award className="w-6 h-6"/> Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <Card key={s.group} className="p-5">
              <h3 className="font-medium mb-3">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map(i => <span key={i} className="text-xs px-2 py-1 rounded-full bg-black/5">{i}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-2"><Briefcase className="w-6 h-6"/> Experience</h2>
        <div className="grid gap-6">
          {experiences.map((e, idx) => (
            <Card key={idx} className="p-5">
              <div className="flex flex-wrap items-center gap-2 justify-between">
                <h3 className="font-medium">{e.role} · {e.company}</h3>
                <span className="text-xs text-slate-600">{e.period}</span>
              </div>
              <div className="text-sm text-slate-700 mt-1">{e.location}</div>
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-700">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Education & Languages */}
      <section id="education" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-2"><GraduationCap className="w-6 h-6"/> Education</h2>
            <div className="grid gap-4">
              {education.map((ed, i) => (
                <Card key={i} className="p-5">
                  <div className="font-medium">{ed.title}</div>
                  <div className="text-sm text-slate-700">{ed.org} · {ed.location}</div>
                  <div className="text-xs text-slate-600 mt-1">{ed.year}</div>
                </Card>
              ))}
            </div>
          </div>
          <div id="languages">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-2"><LangIcon className="w-6 h-6"/> Languages</h2>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((l, i) => (
                <Card key={i} className="p-5">
                  <div className="font-medium">{l.name}</div>
                  <div className="text-sm text-slate-700">{l.level}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer / Contact */}
      <footer id="contact" className="relative overflow-hidden border-t border-black/10">
        <div className="absolute -z-10 inset-0 pointer-events-none">
          <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-amber-300/40 blur-3xl"/>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Card className="p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">Let’s build something people love</h3>
            <p className="mt-2 text-slate-700">Available for Ausbildung contracts, internships, and junior roles.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:simoamour18@gmail.com" className="px-6 py-3 rounded-full bg-black text-white inline-flex items-center gap-2">Email me <ArrowRight className="w-4 h-4"/></a>
              <a href="tel:+212673941554" className="px-6 py-3 rounded-full bg-white border border-black/10 inline-flex items-center gap-2">Call <Phone className="w-4 h-4"/></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white border border-black/10 inline-flex items-center gap-2">GitHub <Github className="w-4 h-4"/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white border border-black/10 inline-flex items-center gap-2">LinkedIn <Linkedin className="w-4 h-4"/></a>
              <a href="https://sensibilisation-927ab.web.app/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white border border-black/10 inline-flex items-center gap-2">Project <Globe className="w-4 h-4"/></a>
            </div>
            <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Mohamed Omor</div>
          </Card>
        </div>
      </footer>
    </div>
  );
}
