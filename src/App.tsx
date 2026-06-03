import { useCallback, useEffect, useRef, useState } from "react";
import Topbar from "./components/Topbar";
import HomeSection from "./components/HomeSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import StarsBackground from "./components/StarsBackground";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import ParallaxWrapper from "./components/ParallaxWrapper";
import ScrollProgress from "./components/ScrollProgress";
import MoonPhase from "./components/MoonPhase";
import StardustClick from "./components/StardustClick";
import FireflySwarm from "./components/FireflySwarm";
import Footer from "./components/Footer";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const [warpEnabled, setWarpEnabled] = useState(false);

  const onMouse = useCallback(
    (e: MouseEvent) => {
      const el = mainRef.current;
      if (!el) return;
      const rx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ry = (e.clientY / window.innerHeight - 0.5) * 2;

      if (warpEnabled) {
        const px = (e.clientX / window.innerWidth - 0.5) * 40;
        const py = (e.clientY / window.innerHeight - 0.5) * 40;
        el.style.setProperty("--warp-x", px + "px");
        el.style.setProperty("--warp-y", py + "px");
        el.style.transform = `perspective(1200px) rotateX(${-ry * 2}deg) rotateY(${rx * 2}deg)`;
      } else {
        el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
        el.style.setProperty("--warp-x", "0px");
        el.style.setProperty("--warp-y", "0px");
      }
    },
    [warpEnabled]
  );

  const onLeave = useCallback(() => {
    const el = mainRef.current;
    if (!el) return;
    el.style.setProperty("--warp-x", "0px");
    el.style.setProperty("--warp-y", "0px");
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
      <ScrollProgress />
      <MoonPhase />
      <StardustClick />
      <FireflySwarm />
      <SmoothScroll />
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
        <ParallaxWrapper depth={0.6}>
          <HomeSection />
        </ParallaxWrapper>
        <ParallaxWrapper depth={0.3}>
          <ExperienceSection />
        </ParallaxWrapper>
        <ParallaxWrapper depth={0.15}>
          <ProjectsSection />
        </ParallaxWrapper>
        <ParallaxWrapper depth={0.05}>
          <ContactSection />
        </ParallaxWrapper>
      </main>
      <Footer />
    </>
  );
}

export default App;
