import Topbar from "./components/Topbar";
import Diptych from "./components/Diptych";
import Wall from "./components/Wall";
import Ledger from "./components/Ledger";
import Stickers from "./components/Stickers";
import Postcard from "./components/Postcard";
import Placard from "./components/Placard";
import Tape from "./components/Tape";
import SmoothScroll from "./components/SmoothScroll";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <SmoothScroll />
      <Topbar />

      <main className="relative z-10">
        <Diptych />
        <Wall />
        <Ledger />
        <Stickers />
        <Postcard />
      </main>

      <Placard />
      <Tape tone="verm" reverse />

      <div className="grain" aria-hidden="true" />
    </>
  );
}

export default App;
