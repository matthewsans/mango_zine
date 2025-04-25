import FeatureCard from "../components/FeatureCard";

const Topbar = () => {
  return (
    <div className = 'topbar'>
      <FeatureCard className="topbar-card">
        <button className="button green" onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}>Home</button>
        <button className="button orange" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
        <button className="button blue" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</button>
    </FeatureCard>

    </div>
  );
};

export default Topbar; 