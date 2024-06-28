import About from "@/components/about";
import  Intro from "@/components/intro"
import Projects from "@/components/projects";
import SectionDriver from "@/components/section-driver";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDriver />
      <About />
      <Projects />
    </main>
  );
}
