"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Software Support Engineer",
    company: "Kode Creators Pvt. Ltd.",
    period: "May 2024 – Aug 2025",
    location: "Full-Time",
    highlights: [
      "Detected production-impacting web application issues approximately 20% sooner and reduced investigation time from an average of 60 minutes to 40 minutes by monitoring Splunk dashboards and application performance.",
      "Triaged incidents by severity and business impact in Jira following ITSM best practices, extracting Splunk log data and writing SQL queries to pinpoint errors and correlate user-reported problems with supporting evidence.",
      "Improved application stability across multiple releases and reduced repeat alerts and incidents by approximately 30% by analyzing Splunk and APM data for recurring failure patterns and driving root-cause analysis (RCA) with developers.",
      "Reduced manual support effort by approximately 4 hours per week by writing automated Linux shell scripts for routine maintenance, kept 8 scheduled batch jobs running, and authored technical SOP documentation for 10 commonly encountered problems.",
    ],
    skills: [
      "Splunk",
      "Jira ITSM",
      "Incident Triage",
      "SQL Querying",
      "Root Cause Analysis (RCA)",
      "Linux Shell Scripting",
      "Batch Job Scheduling",
      "SOP Authoring",
    ],
  },
  {
    role: "Application Support Engineer",
    company: "Healthcare Informatics Pvt Ltd.",
    period: "Oct 2023 – Apr 2024",
    location: "Contract / Internship",
    highlights: [
      "Detected and resolved user-impacting incidents approximately 30% faster on an enterprise multi-tenant SaaS healthcare platform by monitoring Splunk dashboards, APM metrics, and Microsoft Azure Monitor alerts.",
      "Performed structured incident triage and troubleshooting, assessing issue severity and business impact, and tracking each issue to resolution in Azure Boards alongside development teams.",
      "Sped up root-cause analysis by approximately 15% through extracting Splunk log data and search queries to investigate failure patterns, documenting technical findings, and escalating complex defects with evidence.",
      "Maintained clear technical documentation and standardized runbooks, improving knowledge sharing and mean-time-to-repair (MTTR) across support and engineering organizations.",
    ],
    skills: [
      "Application Support",
      "Splunk",
      "Azure Monitor",
      "Azure Boards",
      "APM Metrics",
      "SaaS Multi-Tenancy",
      "Incident Management",
      "Technical Documentation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#070b12] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>ENTERPRISE APPLICATION &amp; PRODUCTION SUPPORT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Track record monitoring enterprise systems, resolving critical user-impacting incidents, and maintaining high availability across production releases.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-emerald-400 font-medium text-sm">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 my-4 text-xs sm:text-sm text-slate-300">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
