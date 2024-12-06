import "./App.css";
import { Navbar, HeroSection, Services } from "./sections";

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <section>
        <HeroSection />
      </section>

      <section>
        <Services />
      </section>
    </>
  );
}

export default App;
