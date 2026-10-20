"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Download, Mail, Globe, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 py-10 px-4 sm:px-6 print:bg-white print:text-black print:p-0">
      {/* Top Bar (Hidden on print) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs font-mono transition-all shadow-md shadow-emerald-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Sheet */}
      <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-xl p-8 sm:p-12 shadow-2xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 print:border-gray-300">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
                JENIL PATEL
              </h1>
              <p className="text-sm sm:text-base font-semibold text-emerald-400 mt-1 print:text-gray-800">
                Application Support Engineer | Production Reliability &amp; Incident Triage
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 print:text-gray-600 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                <span>Dublin, Ireland 🇮🇪</span>
              </div>
              <span className="hidden sm:inline text-slate-600 print:text-gray-400">•</span>
              <span className="text-emerald-400 print:text-black font-medium">Full Clean Driving Licence</span>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-300 print:text-gray-700">
            <a href="tel:+353892476274" className="hover:text-emerald-400 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>+353 89 247 6274</span>
            </a>
            <span>•</span>
            <a href="mailto:jenilpatel.ie@gmail.com" className="hover:text-emerald-400 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>jenilpatel.ie@gmail.com</span>
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/jenil-patel-409902211"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href="https://github.com/19jenil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/19jenil</span>
            </a>
            <span>•</span>
            <a
              href="https://jenil-patel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1 text-emerald-400 font-medium print:text-black"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Technical Skills */}
        <section className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 print:text-gray-900">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-1.5 text-xs text-slate-300 print:text-gray-800">
            <div>
              <strong className="text-white print:text-black">• Monitoring &amp; Observability:</strong> Splunk, Grafana, Monitoring Dashboards, Application Performance Monitoring (APM)
            </div>
            <div>
              <strong className="text-white print:text-black">• Incident &amp; Application Support:</strong> Jira, Azure, Application Support, Alert Monitoring, Incident Triage, Root Cause Analysis, Defect Triage
            </div>
            <div>
              <strong className="text-white print:text-black">• Languages, OS &amp; Databases:</strong> Python, JavaScript, Java, C++, SQL, PostgreSQL, MySQL, Linux
            </div>
            <div>
              <strong className="text-white print:text-black">• CI/CD &amp; Cloud:</strong> Git, GitHub, GitHub Actions, Jenkins, AWS (EKS), Microsoft Azure, Kubernetes, Terraform, Docker
            </div>
            <div>
              <strong className="text-white print:text-black">• API &amp; Performance Testing:</strong> Postman, REST APIs, API Testing, JMeter
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 print:text-gray-900">
            EXPERIENCE
          </h2>

          <div className="space-y-5">
            {/* Experience 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>Software Support Engineer | Kode Creators Pvt. Ltd.</span>
                <span className="font-mono text-slate-400 print:text-gray-600 font-normal">May 2024 – Aug 2025</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>
                  Detected production-impacting web application issues approximately <strong>20% sooner</strong> and reduced investigation time from an average of 60 minutes to <strong>40 minutes</strong> by monitoring Splunk dashboards and application performance, triaging by severity and business impact in Jira following ITSM practices for incident and defect management, extracting Splunk log data and writing SQL queries to pinpoint errors and correlate user-reported problems, and escalating complex issues to the right development teams with supporting evidence.
                </li>
                <li>
                  Improved application stability across multiple releases and reduced repeat alerts and incidents by approximately <strong>30%</strong> by analyzing Splunk and APM data for recurring failure patterns, running root-cause analysis with developers, validating fixes before closure to minimize escaped defects, and identifying recurring alerts to improve troubleshooting approaches.
                </li>
                <li>
                  Reduced manual support effort by approximately <strong>4 hours per week</strong> by writing Linux shell scripts for routine tasks, kept <strong>8 scheduled batch jobs</strong> running through batch scheduling and monitoring, and maintained technical documentation for approximately 10 commonly encountered problems.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>Application Support Engineer | Healthcare Informatics Pvt Ltd.</span>
                <span className="font-mono text-slate-400 print:text-gray-600 font-normal">Oct 2023 – Apr 2024</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>
                  Detected and resolved user-impacting incidents approximately <strong>30% faster</strong> on a multi-tenant SaaS healthcare application by monitoring Splunk dashboards and APM metrics, responding to Microsoft Azure Monitor alerts, and performing incident triage and troubleshooting, assessing issue severity and business impact, and tracking each issue to closure in Azure Boards with developers.
                </li>
                <li>
                  Sped up root-cause analysis by approximately <strong>15%</strong> through extracting Splunk log data and search output to investigate incidents and failure patterns, documenting findings, and escalating complex issues to the appropriate technical teams with supporting evidence, while recommending improvements to reduce repeat incidents and improve application reliability.
                </li>
                <li>
                  Maintained clear technical documentation and troubleshooting information, helping standardize issue-resolution processes and improve knowledge sharing across support and development teams.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 print:text-gray-900">
            PROJECTS
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>Multi-Provider Payment Reconciliation &amp; Fraud-Detection Pipeline | <span className="font-normal text-slate-400 print:text-gray-600">Python, Pytest, Docker, Prefect, GitHub Actions</span></span>
              </div>
              <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>Built a pipeline normalizing transaction data from 3 simulated payment providers with differing schemas into a unified ledger, with fraud rules for velocity checks and amount anomalies against rolling averages; reached 93% test coverage with Pytest.</li>
                <li>Orchestrated it as a scheduled Prefect DAG with a data-quality gate that fails the run when reconciliation mismatches exceed a threshold, containerized with Docker and run via GitHub Actions.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>Payment Authorization &amp; Reliability Platform | <span className="font-normal text-slate-400 print:text-gray-600">Python, FastAPI, PostgreSQL, Redis, Docker, Kubernetes, AWS, Terraform, Jenkins</span></span>
              </div>
              <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>Built a real-time payment authorization API enforcing amount, velocity and blocklist rules, with PostgreSQL auditing and Redis per-card velocity tracking, sustaining 20 requests/second at p95 latency under 40ms.</li>
                <li>Implemented Jenkins CI/CD with Grafana monitoring, OpenTelemetry tracing and automated rollback on AWS EKS (Terraform), restoring failed deployments in under 7 minutes; Pytest suite reached 65% coverage across 28 concurrent requests.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>ImageGuard: AI-Generated Image Detection | <span className="font-normal text-slate-400 print:text-gray-600">Python, TensorFlow, Keras, OpenCV, Django, Scikit-learn, SQLite</span></span>
              </div>
              <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>Benchmarked 4 CNN architectures on a deduplicated 118K-image CIFAKE dataset, reaching 98.17% accuracy and 0.9976 ROC-AUC with fine-tuned ResNet50, and deployed it in a Django app for real-time image classification.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 print:text-gray-900">
            EDUCATION
          </h2>
          <div className="space-y-2 text-xs text-slate-300 print:text-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <strong className="text-white print:text-black">MSc in Computing Science</strong> — Griffith College, Dublin, Ireland
              </div>
              <span className="font-mono text-slate-400 print:text-gray-600">Sep 2025 – Sep 2026</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <strong className="text-white print:text-black">Bachelor of Technology in Computer Science &amp; Engineering</strong> — GSFC University
              </div>
              <span className="font-mono text-slate-400 print:text-gray-600">Jul 2020 – May 2024</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
