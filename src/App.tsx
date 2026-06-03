
import Topbar from "./components/Topbar";
import HomeSection from "./components/HomeSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <Topbar />
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <section id="contact" className="h-[calc(100vh-64px)] flex items-center justify-center border-b border-white/5">
          <h1 className="font-display text-5xl md:text-7xl font-medium">Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;
