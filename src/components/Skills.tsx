"use client";

import { Wrench, CheckCircle, ShieldCheck, Cloud, Activity, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Test Automation & Quality Engineering",
    icon: ShieldCheck,
    color: "text-emerald-400",
    skills: [
      "Playwright (TypeScript)",
      "Page Object Model (POM)",
      "Selenium WebDriver",
      "Appium (Mobile)",
      "PyTest",
      "TestNG",
      "Allure Reporting",
      "API Testing (Postman)",
      "Cross-Browser Execution",
      "Root Cause Defect Triage",
      "Performance Testing (JMeter)",
      "Black-Box & Exploratory Testing",
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: Cloud,
    color: "text-cyan-400",
    skills: [
      "AWS (EKS, EC2, IAM)",
      "Terraform (IaC)",
      "Kubernetes & Pod Lifecycle",
      "Docker & Containerization",
      "GitHub Actions Workflows",
      "Jenkins CI/CD",
      "Automated Rollback Systems",
      "Linux Shell Scripting",
      "Git & Trunk-Based Delivery",
    ],
  },
  {
    title: "Observability & System Reliability",
    icon: Activity,
    color: "text-amber-400",
    skills: [
      "Prometheus Metrics",
      "Grafana Dashboards",
      "OpenTelemetry Tracing",
      "p95 / p99 Latency Auditing",
      "SRE Best Practices",
      "Incident Reproduction",
      "Jira & Sprint Defect Lifecycle",
      "System Health Checks",
    ],
  },
  {
    title: "Languages, Backends & Data",
    icon: Code2,
    color: "text-violet-400",
    skills: [
      "TypeScript",
      "Python",
      "Java",
      "JavaScript (ES6+ / async)",
      "SQL (PostgreSQL, MySQL)",
      "FastAPI",
      "Redis Caching",
      "Django",
      "MongoDB",
      "C#",
      "C++",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <Wrench className="w-3.5 h-3.5" />
          <span>TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Skills & Technologies
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-xl">
          Core technical competencies grouped by engineering domain. No artificial percentage bars—only tools and frameworks I use in production.
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
