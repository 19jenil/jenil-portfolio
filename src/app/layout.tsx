import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jenil Patel | Application Support & Production Reliability Engineer",
  description:
    "Application Support Engineer and Production Reliability specialist based in Dublin, Ireland. Hands-on experience with Splunk, Grafana, Azure Monitor, Linux shell scripting, SQL incident triage, and payment systems support.",
  keywords: [
    "Jenil Patel",
    "Application Support Engineer",
    "Production Support Engineer",
    "L1 Support Engineer",
    "Splunk",
    "Grafana",
    "Incident Management",
    "ITSM",
    "SQL",
    "Linux Shell Scripting",
    "Batch Monitoring",
    "Payment Systems",
    "Dublin Ireland",
  ],
  authors: [{ name: "Jenil Patel", url: "https://github.com/19jenil" }],
  openGraph: {
    title: "Jenil Patel | Application Support & Production Reliability Engineer",
    description:
      "Proactive incident triage, Splunk observability, and 24/7 production uptime for payment and enterprise software. Dublin, Ireland.",
    url: "https://jenil-patel.vercel.app",
    siteName: "Jenil Patel Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
