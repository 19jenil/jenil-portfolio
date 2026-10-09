"use client";

import { useState } from "react";
import { Terminal, Shield, Cpu, Play, CheckCircle2, Activity, Server, RefreshCw } from "lucide-react";

export default function InteractiveConsole() {
  const [activeTab, setActiveTab] = useState<"playwright" | "cloud" | "cli">("playwright");
  const [cliOutput, setCliOutput] = useState<string | null>(null);

  const runCommand = (cmd: string) => {
    if (cmd === "stack") {
      setCliOutput(
        JSON.stringify(
          {
            automation: ["Playwright", "TypeScript", "Selenium", "Appium", "PyTest"],
            cloud_devops: ["AWS (EKS)", "Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
            observability: ["Prometheus", "Grafana", "OpenTelemetry"],
            backend: ["FastAPI", "Python", "PostgreSQL", "Redis", "Django"],
            location: "Dublin, Ireland",
            status: "Open for Opportunities",
          },
          null,
          2
        )
      );
    } else if (cmd === "health") {
      setCliOutput(
        "HTTP/1.1 200 OK\nDate: " +
          new Date().toUTCString() +
          "\nCluster: aws-eu-west-1 (Dublin)\np95_latency: 38ms\nerror_rate: 0.00%\nstatus: ALL_SERVICES_HEALTHY"
      );
    } else if (cmd === "tests") {
      setCliOutput(
        "Running Playwright Test Engine v1.45...\n✓ smoke-test-suite (4 passed, 0 failed)\n✓ payment-authorization-spec (15 passed)\n✓ cross-browser-matrix: Chromium [PASS], Firefox [PASS], WebKit [PASS]\nTotal Time: 1.84s | Parallel Workers: 4"
      );
    }
  };

  return (
    <section id="console" className="py-16 bg-[#070b12] border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE OBSERVABILITY & AUTOMATION RUNTIME</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Interactive Test & Infrastructure Console
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Inspect how I architect end-to-end test execution pipelines and monitor Kubernetes telemetry.
            </p>
          </div>

          {/* Console Mode Selector */}
          <div className="inline-flex p-1 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs">
            <button
              onClick={() => setActiveTab("playwright")}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "playwright"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Play className="w-3 h-3" />
              <span>Playwright Runner</span>
            </button>
            <button
              onClick={() => setActiveTab("cloud")}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "cloud"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>EKS & Telemetry</span>
            </button>
            <button
              onClick={() => setActiveTab("cli")}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "cli"
                  ? "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>Live Terminal</span>
            </button>
          </div>
        </div>

        {/* Console Window */}
        <div className="rounded-xl bg-[#0b0f19] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
          {/* Console Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-slate-400 text-[11px] ml-2">
                {activeTab === "playwright" && "e2e/e-commerce-checkout.spec.ts — npx playwright test"}
                {activeTab === "cloud" && "aws-eu-west-1 / k8s-cluster / payment-auth-api"}
                {activeTab === "cli" && "jenil@dublin-devbox:~ (bash)"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE
              </span>
              <span>HOST: Dublin, IE</span>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-5 sm:p-6 text-slate-300 leading-relaxed overflow-x-auto min-h-[280px]">
            {activeTab === "playwright" && (
              <div className="space-y-2">
                <p className="text-slate-400">
                  <span className="text-emerald-400">$</span> npx playwright test --config=playwright.config.ts --project=chromium,firefox,webkit
                </p>
                <p className="text-slate-400">
                  Running <span className="text-white font-bold">15 tests</span> using <span className="text-white font-bold">4 parallel workers</span>
                </p>
                <div className="pt-2 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400">[chromium]</span>
                    <span>auth.setup.ts:14:5 › authenticate customer session</span>
                    <span className="text-slate-400 ml-auto text-[11px]">284ms</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400">[chromium]</span>
                    <span>catalog.spec.ts:28:9 › search product, apply category filters & verify inventory</span>
                    <span className="text-slate-400 ml-auto text-[11px]">412ms</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-cyan-400">[firefox]</span>
                    <span>cart.spec.ts:51:7 › add item to cart & validate POM cart state with custom fixture</span>
                    <span className="text-slate-400 ml-auto text-[11px]">530ms</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-purple-400">[webkit]</span>
                    <span>checkout.spec.ts:92:5 › complete card authorization & parse receipt assertions</span>
                    <span className="text-slate-400 ml-auto text-[11px]">710ms</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400">[allure]</span>
                    <span>artifact-sync › compiled traces, DOM screenshots & video attachments</span>
                    <span className="text-slate-400 ml-auto text-[11px]">110ms</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold">
                    ✓ 15 passed across 3 browser engines (2.1s)
                  </span>
                  <span className="text-slate-400">
                    Exit Code: 0 • 0 Flaky Tests
                  </span>
                </div>
              </div>
            )}

            {activeTab === "cloud" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">EKS Cluster Status</div>
                    <div className="text-emerald-400 font-bold text-sm mt-0.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      ACTIVE (eu-west-1)
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">3/3 Nodes Ready • Terraform managed</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">p95 API Latency</div>
                    <div className="text-cyan-400 font-bold text-sm mt-0.5">38.4 ms</div>
                    <div className="text-[10px] text-slate-400 mt-1">Sustained @ 20 req/sec via Redis cache</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Automated Rollback</div>
                    <div className="text-slate-200 font-bold text-sm mt-0.5">&lt; 7 minutes MTTR</div>
                    <div className="text-[10px] text-slate-400 mt-1">Jenkins + Prometheus trigger active</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-slate-800/80 space-y-1.5 text-[11px]">
                  <div className="text-slate-400">// OpenTelemetry Trace Sampler</div>
                  <div className="text-slate-300">
                    TRACE_ID: <span className="text-cyan-400">4bf92f3577b34da6a3ce929d0e0e4736</span>
                  </div>
                  <div className="text-slate-300">
                    span[0] /auth/pay: <span className="text-emerald-400">38ms</span> | span[1] redis.velocity_check: <span className="text-emerald-400">4ms</span> | span[2] postgres.audit_insert: <span className="text-emerald-400">12ms</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "cli" && (
              <div className="space-y-3">
                <p className="text-slate-400">
                  Click a command below to query live profile metadata:
                </p>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => runCommand("stack")}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    $ cat tech-stack.json
                  </button>
                  <button
                    onClick={() => runCommand("health")}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    $ curl /api/health
                  </button>
                  <button
                    onClick={() => runCommand("tests")}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    $ ./run-e2e-matrix.sh
                  </button>
                </div>

                <div className="mt-3 p-3 rounded-lg bg-black/60 border border-slate-800 text-emerald-400 whitespace-pre-wrap font-mono text-[11px]">
                  {cliOutput ||
                    `jenil@dublin-devbox:~$ echo "Ready for SDET & DevOps challenges. Click a preset command above to inspect."`}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
