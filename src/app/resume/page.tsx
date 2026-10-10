"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Download, Mail, Globe, MapPin } from "lucide-react";
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
                Software Development Engineer in Test (SDET) & Cloud Reliability / DevOps Engineer
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 print:text-gray-600 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
              <span>Dublin, Ireland 🇮🇪</span>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-300 print:text-gray-700">
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
              <span>linkedin.com/in/jenil-patel-409902211</span>
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
              <span>jenil-patel.vercel.app</span>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 print:text-gray-900">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
            Software Development Engineer in Test (SDET) with 2 years of quality engineering experience and an MSc in Computing Science in Dublin. Proven track record architecting automated test frameworks in TypeScript (Playwright with Page Object Model, fixtures, parallel cross-browser execution) and Selenium/Appium that reduced regression cycles by 65%. Expanding into Cloud Reliability and DevOps with hands-on AWS (EKS), Terraform, Kubernetes, Docker, and CI/CD pipelines with sub-40ms API p95 latency and automated recovery.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 print:text-gray-900">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-1.5 text-xs text-slate-300 print:text-gray-800">
            <div>
              <strong className="text-white print:text-black">Test Automation & QA:</strong> Playwright, TypeScript, Selenium, Appium, TestNG, PyTest, Page Object Model (POM), Allure Reporting, Postman, REST API Testing, JMeter.
            </div>
            <div>
              <strong className="text-white print:text-black">Cloud & DevOps:</strong> AWS (EKS, EC2, IAM), Terraform, Docker, Kubernetes, Jenkins, GitHub Actions CI/CD, Automated Rollback Systems.
            </div>
            <div>
              <strong className="text-white print:text-black">Observability & Practices:</strong> Prometheus, Grafana, OpenTelemetry, Defect Triage, Root Cause Analysis, Agile/Scrum, Jira.
            </div>
            <div>
              <strong className="text-white print:text-black">Languages & Databases:</strong> TypeScript, Python, Java, JavaScript (async/await), SQL, PostgreSQL, MySQL, Redis, FastAPI, Django, C#.
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 print:text-gray-900">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-5">
            {/* Experience 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>Test Engineer — Kode Creators Pvt. Ltd.</span>
                <span className="font-mono text-slate-400 print:text-gray-600 font-normal">Jun 2024 – Aug 2025</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>
                  Engineered an end-to-end Selenium and Appium test automation framework covering functional, regression, smoke, and sanity suites, cutting regression execution time by <strong>65%</strong> and automating <strong>80%</strong> of critical user flows across 8 releases.
                </li>
                <li>
                  Spearheaded defect investigation, reproduction, and root-cause analysis in Agile/Scrum sprints, managing the defect lifecycle in Jira and verifying fixes with developers, reducing escaped production defects by <strong>35%</strong> and resolution time by 2 days.
                </li>
                <li>
                  Strengthened release readiness by contributing to sprint planning and validating requirements and change requests with developers and stakeholders across 12 sprints, catching <strong>25+</strong> requirement gaps before development began.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>Software QA Engineer Intern — Healthcare Informatics Pvt Ltd.</span>
                <span className="font-mono text-slate-400 print:text-gray-600 font-normal">Jan 2024 – Apr 2024</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>
                  Validated 27 user workflows of an enterprise multi-tenant SaaS healthcare platform through functional, usability, and regression testing, supporting 6 iterative releases.
                </li>
                <li>
                  Designed, documented, and executed 140 test cases that uncovered <strong>91 defects</strong> before release, strengthening regression coverage and release confidence across sprints.
                </li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>Software Developer Intern — Sannibh Technologies</span>
                <span className="font-mono text-slate-400 print:text-gray-600 font-normal">Jun 2022 – Jul 2022</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>
                  Delivered a PHP-based GYM Slot Booking System from requirements through deployment in 2 months, including automated functional testing and client-driven modifications.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 print:text-gray-900">
            TECHNICAL PROJECTS
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>Payment Authorization & Reliability Platform | <span className="font-normal text-slate-400 print:text-gray-600">FastAPI, Redis, PostgreSQL, AWS EKS, Terraform, Jenkins, OpenTelemetry</span></span>
              </div>
              <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>Engineered real-time authorization API enforcing velocity and blocklist rules, sustaining 20 req/sec at p95 latency under 40ms.</li>
                <li>Automated PyTest API & integration suites reaching 65% coverage and validating 28 concurrent threads.</li>
                <li>Configured Jenkins CI/CD with Prometheus/Grafana and OpenTelemetry tracing with automated rollback under 7 minutes on AWS EKS.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>E-Commerce Test Automation Framework | <span className="font-normal text-slate-400 print:text-gray-600">Playwright, TypeScript, Node.js, GitHub Actions, Allure</span></span>
              </div>
              <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>Architected end-to-end suite covering login, search, cart, and checkout with Page Object Model, cutting duplicate code by 60%.</li>
                <li>Accelerated execution by 90% via parallel cross-browser runs across 4 workers with video, screenshot, and trace debugging.</li>
                <li>Maintained green regression suites in GitHub Actions on every pull request, auto-publishing Allure reports.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-semibold text-white print:text-black">
                <span>ImageGuard: AI-Generated Image Detection | <span className="font-normal text-slate-400 print:text-gray-600">Python, TensorFlow, ResNet50, Django, OpenCV</span></span>
              </div>
              <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-outside ml-4 print:text-gray-800">
                <li>Benchmarked 4 CNN architectures with transfer learning on 118K CIFAKE images, achieving 98.17% accuracy and 0.9976 ROC-AUC.</li>
                <li>Deployed classifier into Django web application with custom Keras preprocessing for real-time predictions.</li>
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
                <strong className="text-white print:text-black">MSc in Computing Science</strong> — Griffith College Dublin, Ireland
              </div>
              <span className="font-mono text-slate-400 print:text-gray-600">Sep 2025 – Sep 2026</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <strong className="text-white print:text-black">Bachelor of Technology in Computer Science & Engineering</strong> — GSFC University
              </div>
              <span className="font-mono text-slate-400 print:text-gray-600">Jul 2020 – May 2024</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
