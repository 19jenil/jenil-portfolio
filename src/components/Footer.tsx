"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Check, Copy, FileText, ArrowUp, Terminal, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "jenilpatel.ie@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-10 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for 24/7 Production &amp; Application Support</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to protect 24/7 production uptime and drive down MTTR?
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              I am actively interviewing for Application Support Engineer, Production Support Engineer, and Reliability roles in Dublin, Ireland. Let&apos;s discuss how I can strengthen your operational support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy: {email}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs font-mono transition-all shadow-md shadow-emerald-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Footer Links & Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-900 text-xs font-mono text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span>Jenil Patel • Dublin, Ireland 🇮🇪</span>
            <span>•</span>
            <span className="text-slate-400">+353 89 247 6274</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/19jenil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jenil-patel-409902211"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <Link
              href="/resume"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
