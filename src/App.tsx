import Masthead from "./components/Masthead";
import Rail from "./components/Rail";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Work from "./components/Work";
import Ledger from "./components/Ledger";
import Correspondence from "./components/Correspondence";
import Colophon from "./components/Colophon";
import SmoothScroll from "./components/SmoothScroll";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <div className="paper-fx" aria-hidden="true" />
      <SmoothScroll />
      <Masthead />
      <Rail />

      <main className="relative z-10">
        <Hero />
        <Ticker />
        <Work />
        <Ledger />
        <Correspondence />
      </main>

      <Colophon />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

export default App;
