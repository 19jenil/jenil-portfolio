import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveConsole from "@/components/InteractiveConsole";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Principles from "@/components/Principles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      <Navbar />
      <Hero />
      <InteractiveConsole />
      <Projects />
      <Experience />
      <Skills />
      <Principles />
      <Footer />
    </main>
  );
}
