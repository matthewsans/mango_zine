
import FeatureCard from "../components/FeatureCard";
import { FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';


const Introduction = () => {
  return (
    <div className="layout-grid">
            <FeatureCard>
                <h2>About Me</h2>
                <p>
                    I'm a Computer Science student at UBC and a Red Seal Certified Journeyman Plumber.
                    My passion lies in building innovative software, exploring aerospace engineering,
                    and delivering user-centered applications. I enjoy team-driven environments and love solving real-world problems.
                </p>
            </FeatureCard>

            <div className="bottom-row">
                <FeatureCard>
                    <h3>Profile</h3>
                    <ul>
                    <li><strong>Full Name:</strong> Matthew Sanspareil</li>
                    <li><strong>Email:</strong> sanspareil.m@gmail.com</li>
                    <li><strong>Location:</strong> Vancouver, BC</li>
                    </ul>
                    <div>
                              <h4>Links</h4>
                              <p>
                                <FiLinkedin /> <a href="https://www.linkedin.com/in/matthew-sanspareil-437423297/" target="_blank">LinkedIn</a><br/>
                                <FiGithub   /> <a href="https://github.com/matthewsans" target="_blank">GitHub</a>
                              </p>
                            </div>
                </FeatureCard>

                <FeatureCard>
                <h3>Skills</h3>

                {/* --- Languages --- */}
                <div className="skills-buttons">
                    <button className="button green">Python</button>
                    <button className="button green">Java</button>
                    <button className="button green">C++</button>
                    <button className="button green">TypeScript</button>
                    <button className="button green">JavaScript</button>
                    <button className="button green">Dart</button>
                    <button className="button green">SQL</button>
                    <button className="button orange">React</button>
                    <button className="button orange">Flutter</button>
                    <button className="button orange">Flask</button>
                    <button className="button blue">Git</button>
                    <button className="button blue">Linux</button>
                    <button className="button blue">Firebase</button>
                    <button className="button blue">Supabase</button>
                    <button className="button blue">IntelliJ&nbsp;IDEA</button>
                    <button className="button blue">REST</button>
                    <button className="button blue">Docker</button>
                </div>
                </FeatureCard>

            </div>

          </div>
    
  );
};

export default Introduction;