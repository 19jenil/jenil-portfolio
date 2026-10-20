"use client";

import { Wrench, ShieldCheck, Cloud, Activity, Code2, AlertTriangle, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Monitoring & Observability",
    icon: Activity,
    color: "text-emerald-400",
    skills: [
      "Splunk (SPL & Log Search)",
      "Grafana Dashboards",
      "Application Performance Monitoring (APM)",
      "Microsoft Azure Monitor",
      "Alert Handling & Thresholds",
      "Prometheus Metrics",
      "OpenTelemetry Tracing",
      "Dynatrace & Omnibus awareness",
      "Transaction Latency Auditing",
    ],
  },
  {
    title: "Incident Triage & ITSM Management",
    icon: AlertTriangle,
    color: "text-amber-400",
    skills: [
      "ITSM Best Practices",
      "Jira Service Management",
      "Incident & Defect Triage",
      "Severity & Impact Assessment (P1-P4)",
      "Technical Resolution (TRT/Bridge Calls)",
      "Root Cause Analysis (RCA)",
      "SOP & Runbook Authoring",
      "Change Request (CRQ) Validation",
      "Escalation Matrix Management",
    ],
  },
  {
    title: "Operating Systems, Scripting & SQL",
    icon: Database,
    color: "text-cyan-400",
    skills: [
      "Linux / UNIX Shell Scripting",
      "SQL Querying & Error Correlation",
      "PostgreSQL",
      "MySQL",
      "Python",
      "JavaScript",
      "Java",
      "C++",
      "Batch Job Scheduling & Monitoring",
    ],
  },
  {
    title: "Cloud Infrastructure & CI/CD",
    icon: Cloud,
    color: "text-violet-400",
    skills: [
      "Docker Containerization",
      "Prefect Scheduled DAGs",
      "Kubernetes",
      "AWS (EKS, EC2)",
      "Microsoft Azure",
      "Jenkins CI/CD",
      "GitHub Actions",
      "Terraform (IaC)",
      "Automated Rollback Systems",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <Wrench className="w-3.5 h-3.5" />
          <span>PRODUCTION ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Technical Skills &amp; Support Tooling
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-xl">
          Core toolset for 24x7 production monitoring, log extraction, incident management, and batch automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700 transition-all shadow-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-lg bg-slate-800 ${cat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
