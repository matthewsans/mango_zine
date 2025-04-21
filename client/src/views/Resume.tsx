import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <div className = 'layout-grid'>
      <FeatureCard style = {{width: '90%'}}>
        <h1>click to view my resume</h1>
        <p>click meeeee</p>
      </FeatureCard>
    </div>
  );
};

export default Home;