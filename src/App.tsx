
import { useCallback, useEffect, useRef, useState } from "react";
import Topbar from "./components/Topbar";
import HomeSection from "./components/HomeSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import StarsBackground from "./components/StarsBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const [warpEnabled, setWarpEnabled] = useState(false);

  const onMouse = useCallback((e: MouseEvent) => {
    if (!warpEnabled) return;
    const el = mainRef.current;
    if (!el) return;
    const rx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ry = (e.clientY / window.innerHeight - 0.5) * 2;
    el.style.transform = `perspective(1200px) rotateX(${-ry * 2}deg) rotateY(${rx * 2}deg)`;
  }, [warpEnabled]);

  const onLeave = useCallback(() => {
    const el = mainRef.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [onMouse, onLeave]);

  useEffect(() => {
    if (!warpEnabled && mainRef.current) {
      mainRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    }
  }, [warpEnabled]);

  return (
    <>
      <CustomCursor />
      <StarsBackground warpEnabled={warpEnabled} />
      <Topbar
        warpEnabled={warpEnabled}
        onToggleWarp={() => setWarpEnabled((v) => !v)}
      />
      <main
        ref={mainRef}
        className="relative z-10 transition-transform duration-200 ease-out origin-center"
        style={{ transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)" }}
      >
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
