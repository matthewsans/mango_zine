import Section from "./components/Section";
import FeatureCard from "./components/FeatureCard";
import Background from "./components/Background";

import Home from "./views/Home";
import Projects from "./views/Projects";
import Playground from "./views/Playground";
import Resume from "./views/Resume";
import Contact from "./views/Contact";

function App() {
  return (
    <>
      <Background />
      

      <main>
        <Section id="home">
          <Home />
        </Section>

        <Section id="projects">
          <div className="layout-grid">
            <FeatureCard style={{ width: "100%", height: "4rem" }}>T
              <h3>Let me introduce myself.</h3>
            </FeatureCard>
            <div className="bottom-row" style={{width: "100%"}}>
            <FeatureCard style={{ width: "50%", height: "30vh" }}><button className="button selectButton"> asdf</button></FeatureCard>
            <FeatureCard style={{ width: "50%", height: "30vh" }}>Right</FeatureCard>

            </div>
          </div>
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

