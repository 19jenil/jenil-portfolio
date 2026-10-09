"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Test Engineer",
    company: "Kode Creators Pvt. Ltd.",
    period: "Jun 2024 – Aug 2025",
    location: "Full-Time",
    highlights: [
      "Engineered an end-to-end Selenium and Appium test automation framework covering functional, regression, smoke, and sanity suites, cutting regression execution time by 65% and automating 80% of critical user flows across 8 releases.",
      "Spearheaded defect investigation, reproduction, and root-cause analysis in Agile/Scrum sprints, managing defect lifecycle in Jira and verifying fixes with developers, reducing escaped production defects by 35% and resolution time by 2 days.",
      "Strengthened release readiness by contributing to sprint planning and validating requirements and change requests with developers and stakeholders across 12 sprints, catching 25+ requirement gaps before development began.",
    ],
    skills: ["Selenium", "Appium", "Java", "TestNG", "Jira", "Root Cause Analysis", "Agile/Scrum", "Defect Triage"],
  },
  {
    role: "Software QA Engineer Intern",
    company: "Healthcare Informatics Pvt Ltd.",
    period: "Jan 2024 – Apr 2024",
    location: "Internship",
    highlights: [
      "Validated 27 user workflows of an enterprise multi-tenant SaaS healthcare platform through functional, usability, and regression testing, supporting 6 iterative releases.",
      "Designed, documented, and executed 140 test cases that uncovered 91 defects before release, strengthening regression coverage and release confidence across sprints.",
      "Conducted API validation and exploratory testing to ensure compliance with healthcare tenant segregation requirements.",
    ],
    skills: ["Test Case Design", "SaaS QA", "Functional Testing", "Defect Tracking", "API Testing", "Regression"],
  },
  {
    role: "Software Developer Intern",
    company: "Sannibh Technologies",
    period: "Jun 2022 – Jul 2022",
    location: "Internship",
    highlights: [
      "Delivered a PHP-based GYM Slot Booking System from requirements gathering through live client deployment in 2 months.",
      "Implemented database schemas, user authentication, booking logic, and client-driven UI modifications.",
      "Conducted end-to-end functional verification to ensure booking conflict prevention and data consistency.",
    ],
    skills: ["PHP", "MySQL", "Full-Stack Development", "Manual Testing", "Client Delivery"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#070b12] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD & INDUSTRY IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Where I engineered test automation frameworks, triaged production defects, and protected release velocity.
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
