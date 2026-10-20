"use client";

import { useState } from "react";
import { Terminal, Shield, Cpu, Play, CheckCircle2, Activity, Server, AlertTriangle, Search, FileText } from "lucide-react";

export default function InteractiveConsole() {
  const [activeTab, setActiveTab] = useState<"splunk" | "incident" | "batch">("splunk");
  const [splunkFilter, setSplunkFilter] = useState("all");

  return (
    <section id="console" className="py-16 bg-[#070b12] border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE PRODUCTION SUPPORT &amp; OBSERVABILITY RUNTIME</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise Incident Triage &amp; Splunk Forensics
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Inspect how I monitor live transaction health, execute Standard Operating Procedures (SOPs), and triage critical production alerts.
            </p>
          </div>

          {/* Console Mode Selector */}
          <div className="inline-flex p-1 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs">
            <button
              onClick={() => setActiveTab("splunk")}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "splunk"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Search className="w-3 h-3" />
              <span>Splunk SPL Query</span>
            </button>
            <button
              onClick={() => setActiveTab("incident")}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "incident"
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <AlertTriangle className="w-3 h-3" />
              <span>ITSM Incident Bridge</span>
            </button>
            <button
              onClick={() => setActiveTab("batch")}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "batch"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Server className="w-3 h-3" />
              <span>Batch Job Monitor</span>
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
                {activeTab === "splunk" && "splunk-enterprise-search: index=payments sourcetype=card_auth"}
                {activeTab === "incident" && "jira-itsm-console: INC-9281 (P2 - Payment Gateway Timeout)"}
                {activeTab === "batch" && "cron-batch-scheduler: /usr/local/bin/batch_monitor.sh"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                24x7 MONITORING ACTIVE
              </span>
              <span>REGION: EU-WEST-1 (Dublin)</span>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-5 sm:p-6 text-slate-300 leading-relaxed overflow-x-auto min-h-[290px]">
            {activeTab === "splunk" && (
              <div className="space-y-3">
                <div className="p-2.5 rounded bg-black/60 border border-slate-800 text-slate-300">
                  <span className="text-emerald-400">SPL &gt;</span> search index=payments sourcetype=api_gateway status_code&gt;=500 | stats count by error_code, payment_provider, host | sort -count
                </div>

                <div className="pt-2 space-y-2">
                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-amber-400 font-semibold">[EVENT: 12:44:02 UTC]</span>
                      <span className="text-rose-400">HTTP 504 Gateway Timeout</span>
                    </div>
                    <div className="text-slate-300">
                      host=dublin-pay-node-03 | provider=mastercard_gateway_v2 | tx_id=TX_8819401 | latency=890ms
                    </div>
                    <div className="text-slate-400">
                      Error: Connection pool exhausted during settlement spike. SQL query execution &gt; 450ms.
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-emerald-400 font-semibold">[CORRELATION &amp; MITIGATION]</span>
                      <span className="text-emerald-400">SOP Executed</span>
                    </div>
                    <div className="text-slate-300">
                      Action: Executed Linux script to recycle idle connections; escalated CRQ verification to database DBA team via Jira.
                    </div>
                    <div className="text-slate-400">
                      Outcome: p95 latency returned to &lt; 40ms; alert resolved within 8 minutes.
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Queried: 24,190 events in 180ms</span>
                  <span className="text-emerald-400">0 Critical Unresolved Exceptions</span>
                </div>
              </div>
            )}

            {activeTab === "incident" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Incident Severity</div>
                    <div className="text-amber-400 font-bold text-sm mt-0.5 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      P2 - MAJOR INCIDENT
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Payment Provider Response Spike</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">ITSM Triage Process</div>
                    <div className="text-emerald-400 font-bold text-sm mt-0.5">SOP-PAY-014 Followed</div>
                    <div className="text-[10px] text-slate-400 mt-1">Escalation matrix engaged</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Bridge / TRT Status</div>
                    <div className="text-slate-200 font-bold text-sm mt-0.5">Call Active (12 mins)</div>
                    <div className="text-[10px] text-slate-400 mt-1">Support, Dev &amp; Ops aligned</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-slate-800/80 space-y-2 text-[11px]">
                  <div className="text-slate-400 font-semibold">// Incident Timeline &amp; Communication Log</div>
                  <div className="text-slate-300">
                    • <span className="text-amber-400">12:35 UTC:</span> Dynatrace / Azure Monitor alert triggered for transaction latency threshold breach (&gt;500ms).
                  </div>
                  <div className="text-slate-300">
                    • <span className="text-emerald-400">12:37 UTC:</span> L1 Support initiated incident ticket in Jira; correlated logs in Splunk to identify affected payment provider endpoint.
                  </div>
                  <div className="text-slate-300">
                    • <span className="text-cyan-400">12:40 UTC:</span> Initiated Technical Resolution Team (TRT) bridge call; notified customer support leads per SLA guidelines.
                  </div>
                  <div className="text-slate-300">
                    • <span className="text-emerald-400">12:48 UTC:</span> Fix deployed; monitored post-change telemetry; validated zero customer transactions dropped.
                  </div>
                </div>
              </div>
            )}

            {activeTab === "batch" && (
              <div className="space-y-3">
                <p className="text-slate-400">
                  Real-time status of 8 scheduled batch jobs managed and monitored via Linux automation:
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-200 font-semibold">eod-payment-reconciliation-job</span>
                      <span className="text-slate-500 font-mono">(Prefect / Docker)</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">SUCCESS (0.00% ledger variance)</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-200 font-semibold">card-velocity-cache-refresh</span>
                      <span className="text-slate-500 font-mono">(Redis / Python)</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">ACTIVE (Every 5 mins)</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-200 font-semibold">automated-hung-process-cleaner</span>
                      <span className="text-slate-500 font-mono">(Linux Bash)</span>
                    </div>
                    <span className="text-cyan-400 font-semibold">Saves 4 hrs/week manual toil</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-200 font-semibold">mastercard-settlement-audit-feed</span>
                      <span className="text-slate-500 font-mono">(SQL Cron)</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">COMPLETED (8/8 Suites Passing)</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                  <span>Batch Schedule Status: All 8 Jobs Healthy</span>
                  <span className="text-emerald-400">99.98% Batch Execution Reliability</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
