import Section from "./components/Section";
import FeatureCard from "./components/FeatureCard";
import BackgroundDots from "./components/Background";

import Home from "./views/Home";
import Projects from "./views/Projects";
import Playground from "./views/Playground";
import Resume from "./views/Resume";
import Contact from "./views/Contact";

function App() {
  return (
    <>
      <BackgroundDots />

      <main>
        <Section id="home">
          <Home />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="playground">
          <Playground />
        </Section>

        <Section id="resume">
          <Resume />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>
    </>
  );
}

export default App;

