"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowDown, FileText, CheckCircle2, ShieldCheck, Zap, Activity, Clock, Server } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 radial-glow-cyan pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Availability / Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-mono shadow-sm mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Dublin, Ireland 🇮🇪</span>
          <span className="text-slate-600">•</span>
          <span>Full Clean Driving Licence</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400 font-medium">Available for 24/7 Application Support &amp; Production Roles</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Proactive incident triage,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Splunk observability
            </span>{" "}
            &amp; 24/7{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              production uptime
            </span>.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Hi, I&apos;m <strong className="text-white font-semibold">Jenil Patel</strong>—an Application Support &amp; Production Reliability Engineer with hands-on experience in enterprise incident management, Splunk log forensics, APM transaction tracing, SQL defect correlation, and automated batch scheduling. Holding an MSc in Computing Science from Griffith College Dublin.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs"
        >
          <a
            href="#console"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>Live Incident Console</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Targeted Resume</span>
          </Link>

          <a
            href="https://github.com/19jenil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-slate-400" />
            <span>GitHub (@19jenil)</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jenil-patel-409902211"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Real-time Telemetry Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider">Incident Resolution</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">30% Faster</div>
            <p className="text-xs text-slate-400 mt-0.5">MTTR reduction via Splunk &amp; APM triage</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider">Early Detection</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">20% Sooner</div>
            <p className="text-xs text-slate-400 mt-0.5">Issues detected before user escalations</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider">Batch Operations</span>
              <Server className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">8 Jobs</div>
            <p className="text-xs text-slate-400 mt-0.5">Scheduled batch jobs monitored &amp; kept green</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider">Investigation MTTR</span>
              <Clock className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">40 Mins</div>
            <p className="text-xs text-slate-400 mt-0.5">Reduced from 60 mins via SQL &amp; log queries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
