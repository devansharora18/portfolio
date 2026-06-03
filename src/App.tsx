
import Topbar from "./components/Topbar";
import HomeSection from "./components/HomeSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <Topbar />
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
