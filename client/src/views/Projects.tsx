import { projects } from "../data/cards";
import FeatureCard from "../components/FeatureCard";

const Projects = () => (
  <div className="layout-grid">
    {projects.map((p) => (
      <FeatureCard key={p.title}>
        <h3>{p.title}</h3>
        <p style={{ fontStyle: "italic" }}>{p.subtitle}</p>
        <p>{p.blurb}</p>
        <a href={p.link} target="_blank" rel="noreferrer" className="button selectButton">
          Details →
        </a>
      </FeatureCard>
    ))}
  </div>
);

export default Projects;
