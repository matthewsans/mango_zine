import Section from "./components/Section";
import Background from "./components/Background";

import Introduction from "./views/Introduction";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Topbar from "./views/Topbar";
import Contact from "./views/Contact";

function App() {
  return (
    <>
      <Background />
      <Topbar/>
      <main>
              

        <Section id="home">
          <Home />
        </Section>

        <Section id="introduction">
          <Introduction/>
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>
      

    </>
  );
}

export default App;

