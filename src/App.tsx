
import Topbar from "./components/Topbar";
import HomeSection from "./components/HomeSection";

function App() {
  return (
    <>
      <Topbar />
      <main>
        <HomeSection />
        <section id="experience" className="h-screen flex items-center justify-center border-b border-white/5">
          <h1 className="font-display text-5xl md:text-7xl font-medium">Experience</h1>
        </section>
        <section id="projects" className="h-screen flex items-center justify-center border-b border-white/5">
          <h1 className="font-display text-5xl md:text-7xl font-medium">Projects</h1>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center border-b border-white/5">
          <h1 className="font-display text-5xl md:text-7xl font-medium">Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;
