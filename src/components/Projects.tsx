"use client";

import { ExternalLink, CheckCircle2, Shield, Activity, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const projects = [
  {
    id: "payment-platform",
    title: "Payment Authorization & Reliability Platform",
    tagline: "High-throughput authorization API with automated rollbacks and p95 latency under 40ms on AWS EKS.",
    category: "Cloud Reliability & Backend",
    categoryColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    metrics: [
      { label: "p95 Latency", value: "<40ms" },
      { label: "Throughput", value: "20 req/s" },
      { label: "MTTR Rollback", value: "<7 mins" },
      { label: "Concurrency", value: "28 threads" },
    ],
    summary:
      "Architected a real-time payment authorization engine enforcing amount, velocity, and card blocklist rules. Built with FastAPI and audited in PostgreSQL, using Redis for high-speed velocity caching. Provisioned on AWS EKS with Terraform and guarded by Jenkins CI/CD with Prometheus, Grafana, and OpenTelemetry instrumentation.",
    keyArchitectures: [
      "FastAPI microservice integrated with Redis for sub-millisecond per-card velocity checks",
      "Terraform-managed AWS EKS infrastructure with automated Jenkins rollback pipelines",
      "Distributed tracing with OpenTelemetry and continuous alerting via Prometheus/Grafana",
      "PyTest unit and integration test suite with 65% coverage validating 28 concurrent requests",
    ],
    stack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "AWS EKS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "PyTest",
    ],
    github: "https://github.com/19jenil",
  },
  {
    id: "playwright-framework",
    title: "E-Commerce Test Automation Framework",
    tagline: "Enterprise Playwright & TypeScript test framework with Page Object Model and parallel cross-browser execution.",
    category: "SDET & Test Engineering",
    categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    metrics: [
      { label: "Code Duplication", value: "-60%" },
      { label: "Execution Speed", value: "+90%" },
      { label: "Browser Coverage", value: "Chromium, Firefox, WebKit" },
      { label: "CI Pipeline", value: "GitHub Actions" },
    ],
    summary:
      "Engineered an industrial-grade end-to-end testing framework in TypeScript for modern e-commerce platforms. Covers user authentication, catalog search, faceted filtering, cart persistence, and checkout transactions. Uses custom fixtures, strict assertions, and automated artifact capture to eliminate flaky tests.",
    keyArchitectures: [
      "Page Object Model (POM) architecture reducing framework maintenance by 60%",
      "Cross-browser parallel execution across 4 workers accelerating test completion by 90%",
      "Automated trace viewers, failure video recording, and DOM snapshot debugging",
      "GitHub Actions CI integration triggering smoke and regression suites on every pull request with Allure reporting",
    ],
    stack: [
      "Playwright",
      "TypeScript",
      "Node.js",
      "GitHub Actions",
      "REST APIs",
      "Allure Reports",
      "Page Object Model",
      "CI/CD",
    ],
    github: "https://github.com/19jenil",
  },
  {
    id: "imageguard-ai",
    title: "ImageGuard: AI-Generated Image Classification",
    tagline: "Deep learning computer vision system detecting synthetic vs. authentic media with 98.17% accuracy.",
    category: "Machine Learning & Python",
    categoryColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    metrics: [
      { label: "Model Accuracy", value: "98.17%" },
      { label: "ROC-AUC Score", value: "0.9976" },
      { label: "Dataset Size", value: "118K Images" },
      { label: "Top Model", value: "ResNet50" },
    ],
    summary:
      "Benchmarked four deep convolutional architectures (ResNet50, MobileNetV2, EfficientNetB0, and custom CNN) utilizing two-stage transfer learning on a deduplicated 118,000-image CIFAKE dataset. Fine-tuned ResNet50 achieved state-of-the-art detection accuracy and was deployed in a full-stack Django application for real-time inference.",
    keyArchitectures: [
      "Two-stage transfer learning with customized Keras preprocessing pipeline and data augmentation",
      "Benchmarking matrix across 4 architectures reaching 0.9976 ROC-AUC on unseen data",
      "Full-stack Django web app storing classification history and confidence intervals in SQLite",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "ResNet50",
      "OpenCV",
      "Django",
      "Scikit-learn",
      "SQLite",
    ],
    github: "https://github.com/19jenil",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>PROOF OF TECHNICAL CRAFT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Flagship Engineering Projects
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Detailed case studies with real architectures, measurable outcomes, and production-tested code.
          </p>
        </div>

        <a
          href="https://github.com/19jenil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <span>View all repositories on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl group"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${project.categoryColor}`}
              >
                {project.category}
              </span>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-medium">
              {project.tagline}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 p-4 rounded-xl bg-black/40 border border-slate-800/70">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-[10px] font-mono uppercase text-slate-400">
                    {metric.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Description Narrative */}
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {project.summary}
            </p>

            {/* Key Architectural Bullets */}
            <div className="mb-6 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                // Architecture Highlights
              </div>
              {project.keyArchitectures.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Technology Pill Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/50 text-slate-300 font-mono text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
