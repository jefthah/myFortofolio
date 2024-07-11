import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SectionDriver from "@/components/section-driver"; // Add this import
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDriver /> {/* Ensure this component is imported and used */}
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
