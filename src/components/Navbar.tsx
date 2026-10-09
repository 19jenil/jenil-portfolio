"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, FileText, Mail, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/60 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-semibold text-sm tracking-tight flex items-center gap-1.5">
              jenil.patel
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-slate-400 font-mono -mt-0.5">
              SDET & Cloud Reliability
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-400">
          <a href="#projects" className="hover:text-emerald-400 transition-colors">
            // projects
          </a>
          <a href="#console" className="hover:text-emerald-400 transition-colors">
            // telemetry
          </a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">
            // experience
          </a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">
            // skills
          </a>
          <a href="#principles" className="hover:text-emerald-400 transition-colors">
            // philosophy
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 hover:border-slate-600 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </Link>

          <a
            href="mailto:jenilpatel.ie@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-sm shadow-emerald-500/20"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Get in Touch</span>
            <span className="sm:hidden">Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
}
