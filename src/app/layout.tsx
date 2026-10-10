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
  title: "Jenil Patel | Software Engineer (SDE, Cloud, AI)",
  description:
    "Software Engineer with strong hands-on experience in full-stack development, AI architectures, cloud reliability, and automated testing. Dublin, Ireland.",
  keywords: [
    "Jenil Patel",
    "SDET",
    "Software Development Engineer in Test",
    "Cloud Reliability Engineer",
    "DevOps",
    "SRE",
    "Playwright",
    "TypeScript",
    "Kubernetes",
    "Terraform",
    "Dublin Ireland",
  ],
  authors: [{ name: "Jenil Patel", url: "https://github.com/19jenil" }],
  openGraph: {
    title: "Jenil Patel | SDET & Cloud Reliability Engineer",
    description:
      "Automated test frameworks that don't flake and cloud infrastructure that doesn't page you at 3 AM. Dublin, Ireland.",
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
