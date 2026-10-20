"use client";

import { Compass, GraduationCap, MapPin, Sparkles, BookOpen, Terminal, ShieldAlert } from "lucide-react";

export default function Principles() {
  return (
    <section id="principles" className="py-20 bg-[#070b12] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>PRODUCTION PHILOSOPHY &amp; ITSM PRACTICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Support Enterprise Systems
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Operating principles I adhere to when monitoring live transactions, mitigating incidents, and maintaining 24/7 service availability.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-semibold">
              // PRINCIPLE 01
            </div>
            <h3 className="text-lg font-bold text-white">
              Proactive monitoring beats reactive fire-fighting.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The highest quality incident is the one caught on a Splunk or APM dashboard before a customer files a ticket. Proactive alerting on latency anomalies and error rate spikes prevents major service disruptions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono text-xs font-semibold">
              // PRINCIPLE 02
            </div>
            <h3 className="text-lg font-bold text-white">
              Every major incident must yield a permanent SOP.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Incident resolution doesn&apos;t end when the service restores. Running disciplined Root Cause Analysis (RCA) with development teams, updating Standard Operating Procedures (SOPs), and verifying CRQs reduces repeat alerts across releases.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-amber-400 font-mono text-xs font-semibold">
              // PRINCIPLE 03
            </div>
            <h3 className="text-lg font-bold text-white">
              Automate manual toil with scripts &amp; batch gates.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Routine diagnostic checks shouldn&apos;t consume valuable support hours. I automate repetitive tasks using Linux shell scripts and scheduled batch workflows, protecting engineering capacity for critical incident bridges.
            </p>
          </div>
        </div>

        {/* Dublin Life & Academic Card */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/20 via-slate-900/60 to-cyan-950/20 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>BASED IN DUBLIN, IRELAND 🇮🇪</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              MSc in Computing Science @ Griffith College Dublin
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Holding an MSc in Computing Science in Dublin, with strong hands-on expertise across application support, cloud observability, and payment systems reliability. Available for 24/7 rotational shifts, TRT incident bridges, and hybrid on-site roles in Dublin.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-black/40 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
            <div className="text-slate-300 font-bold">Eligibility &amp; Availability:</div>
            <div className="text-emerald-400">• Full Clean Driving Licence</div>
            <div>• Open to 24/7 Shift Schedules</div>
            <div>• Dublin, Ireland On-Site / Hybrid</div>
            <div className="text-slate-300 pt-1">Sep 2025 – Sep 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
