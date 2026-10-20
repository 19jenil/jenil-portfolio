"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Shield, Activity, Layers, ArrowUpRight, Server, FileText } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const projects = [
  {
    id: "payment-reconciliation",
    title: "Multi-Provider Payment Reconciliation & Fraud-Detection Pipeline",
    tagline: "Automated transaction reconciliation engine across 3 payment providers with scheduled Prefect DAGs and anomaly detection.",
    category: "Payment Systems & Batch Operations",
    categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    metrics: [
      { label: "Providers Unified", value: "3 Gateways" },
      { label: "Test Coverage", value: "93% Pytest" },
      { label: "Data Quality Gate", value: "Automated DAG" },
      { label: "Batch Scheduling", value: "Prefect / Docker" },
    ],
    summary:
      "Engineered an automated data pipeline normalizing high-volume transaction feeds from three distinct payment providers with heterogeneous schemas into an audited single source of truth. Built custom fraud detection rules evaluating per-card velocity thresholds and amount anomalies against rolling averages, with an automated data-quality gate stopping downstream ingestion if reconciliation variance exceeds tolerances.",
    keyArchitectures: [
      "Normalizes heterogeneous transaction streams into a unified financial ledger schema",
      "Velocity & anomaly detection algorithms catching fraudulent payment patterns in near real-time",
      "Scheduled Prefect DAG with circuit-breaking quality gates preventing corrupted data propagation",
      "Fully containerized with Docker and automated via GitHub Actions with 93% Pytest suite coverage",
    ],
    stack: [
      "Python",
      "Pytest",
      "Docker",
      "Prefect",
      "GitHub Actions",
      "Payment Gateways",
      "Data Reconciliation",
      "Linux",
    ],
    github: "https://github.com/19jenil",
  },
  {
    id: "payment-authorization",
    title: "Payment Authorization & Reliability Platform",
    tagline: "High-throughput authorization microservice with sub-40ms p95 latency and automated 7-minute rollback recovery on AWS EKS.",
    category: "High-Availability Infrastructure",
    categoryColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    metrics: [
      { label: "p95 Latency", value: "<40ms" },
      { label: "Throughput", value: "20 req/s" },
      { label: "Recovery MTTR", value: "<7 mins" },
      { label: "Concurrency", value: "28 threads" },
    ],
    summary:
      "Engineered a real-time payment authorization engine enforcing amount limits, velocity rules, and card blocklists. Integrated Redis for sub-millisecond velocity lookups and PostgreSQL for audited transaction trails. Deployed to AWS EKS using Terraform and monitored with Grafana and OpenTelemetry, with automated Jenkins rollbacks restoring service during deployment degradation.",
    keyArchitectures: [
      "FastAPI service enforcing strict card authorization policies with Redis in-memory cache",
      "Audited transactional ledger in PostgreSQL ensuring financial consistency and compliance",
      "Grafana dashboards and OpenTelemetry tracing monitoring latency and error spikes",
      "Jenkins CI/CD with automated rollback recovering failed deployments in under 7 minutes",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes (EKS)",
      "AWS",
      "Terraform",
      "Jenkins",
      "Grafana",
      "OpenTelemetry",
      "Pytest",
    ],
    github: "https://github.com/19jenil",
  },
  {
    id: "imageguard-ai",
    title: "ImageGuard: AI-Generated Image Classification",
    tagline: "Deep learning computer vision system detecting synthetic media vs. authentic imagery with 98.17% accuracy.",
    category: "Machine Learning & Python",
    categoryColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    metrics: [
      { label: "Model Accuracy", value: "98.17%" },
      { label: "ROC-AUC Score", value: "0.9976" },
      { label: "Dataset Size", value: "118K Images" },
      { label: "Architecture", value: "ResNet50" },
    ],
    summary:
      "Benchmarked four deep convolutional architectures (ResNet50, MobileNetV2, EfficientNetB0, custom CNN) using transfer learning on 118,000 CIFAKE images. Fine-tuned ResNet50 achieved 98.17% accuracy and was integrated into a Django web platform with real-time inference preprocessing and SQLite audit logs.",
    keyArchitectures: [
      "Two-stage transfer learning with customized Keras preprocessing pipeline and data augmentation",
      "Benchmarked 4 architectures reaching 0.9976 ROC-AUC on unseen test datasets",
      "Deployed into a full-stack Django app with real-time prediction history and confidence scoring",
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
            <span>PAYMENT SYSTEMS &amp; RELIABILITY ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Flagship Engineering &amp; Data Projects
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Real production architectures highlighting financial transaction reconciliation, automated recovery, and high-throughput reliability.
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
        {projects.map((project) => (
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
