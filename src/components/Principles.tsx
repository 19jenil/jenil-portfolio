"use client";

import { Compass, GraduationCap, MapPin, Sparkles, BookOpen, Terminal } from "lucide-react";

export default function Principles() {
  return (
    <section id="principles" className="py-20 bg-[#070b12] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING POV & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Think & Build
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Technical principles I stick to when designing test frameworks and operating cloud systems.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-semibold">
              // PRINCIPLE 01
            </div>
            <h3 className="text-lg font-bold text-white">
              Flaky tests are architectural debt, not bad luck.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When a test fails intermittently, developers stop trusting CI. I eliminate flakiness by enforcing deterministic test fixtures, isolating database state, and replacing arbitrary sleep timeouts with explicit event-driven wait assertions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono text-xs font-semibold">
              // PRINCIPLE 02
            </div>
            <h3 className="text-lg font-bold text-white">
              Quality engineering doesn&apos;t end at deployment.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Testing pre-release and monitoring post-release are two sides of the same coin. Reliable systems combine automated test coverage with OpenTelemetry distributed tracing, Prometheus alerts, and fast automated rollbacks.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-violet-400 font-mono text-xs font-semibold">
              // PRINCIPLE 03
            </div>
            <h3 className="text-lg font-bold text-white">
              Automate the repetitive, elevate human exploration.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Automated suites exist to handle the tedious regression passes across browsers. This frees up engineering time to investigate high-impact exploratory scenarios, stress test architecture limits, and scrutinize requirement edge cases.
            </p>
          </div>
        </div>

        {/* Dublin Life & Academic Card */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/20 via-slate-900/60 to-cyan-950/20 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>CURRENT CHAPTER: DUBLIN, IRELAND 🇮🇪</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              MSc in Computing Science @ Griffith College Dublin
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Currently deepening my expertise in networking, cloud-native architectures, and cybersecurity. Passionate about Ireland’s thriving technology ecosystem and seeking full-time SDET, QA Automation, or SRE / Cloud DevOps opportunities.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-black/40 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
            <div className="text-slate-300 font-bold">Academic Focus:</div>
            <div>• Cloud-Native Systems</div>
            <div>• Distributed Networks</div>
            <div>• System Observability & SRE</div>
            <div className="text-emerald-400 pt-1 font-semibold">Graduating: 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
