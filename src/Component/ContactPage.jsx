import React from "react";
import Navbar from "./Navbar.jsx";
import SocialSidebar from "./SocialSidebar.jsx";
import { Mail, Github, Linkedin, Smartphone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      {/* Grid background */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <Navbar />
      <SocialSidebar />

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 tracking-wide">
          Get In Touch
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-16">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors w-fit">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:Omormohamed@outlook.com" className="text-sm md:text-base">
                  Omormohamed@outlook.com
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Connect with Me</h2>
              <div className="flex items-center gap-6">
                <a href="https://github.com/muhadark" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com/in/mohamed-omor" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                {/* Medium Icon (custom SVG or simple text if missing from lucide) */}
                <a href="#" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors font-bold text-2xl font-serif">
                  M
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Send a Message</h2>
            <form action="https://formsubmit.co/Omormohamed@outlook.com" method="POST" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-gray-400 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="bg-[#111] border border-gray-800 rounded-md p-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-gray-400 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="bg-[#111] border border-gray-800 rounded-md p-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs text-gray-400 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="_subject"
                  className="bg-[#111] border border-gray-800 rounded-md p-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-gray-400 font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="bg-[#111] border border-gray-800 rounded-md p-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="mt-2 bg-[#00bcd4] hover:bg-[#00a3b8] text-white font-medium py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
