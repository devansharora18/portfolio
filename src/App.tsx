import Nav from "./components/Nav";
import Hud from "./components/Hud";
import Starfield from "./components/Starfield";
import TitleCard from "./components/TitleCard";
import Stills from "./components/Stills";
import ContactSheet from "./components/ContactSheet";
import Credits from "./components/Credits";
import Transmission from "./components/Transmission";
import EndCard from "./components/EndCard";
import SmoothScroll from "./components/SmoothScroll";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <Starfield />
      <SmoothScroll />

      <main className="relative z-10">
        <TitleCard />
        <Stills />
        <ContactSheet />
        <Credits />
        <Transmission />
      </main>

      <EndCard />

      <div className="gate" aria-hidden="true" />
      <Hud />
      <Nav />
      <div className="grain" aria-hidden="true" />
      <div className="shutter" aria-hidden="true" />
    </>
  );
}

export default App;
