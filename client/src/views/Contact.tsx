/* Contact.tsx */
import { FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import FeatureCard from '../components/FeatureCard';

export default function Contact() {
  return (
    <FeatureCard>
      <h2>Let's Connect</h2>

      <div className="contact-grid">
        <div>
          <h4><FiMapPin /> Location</h4>
          <p>Vancouver, BC<br/>Canada</p>
        </div>

        <div>
          <h4><FiMail />  Email</h4>
          <p><a href="mailto:sanspareil.m@gmail.com">sanspareil.m@gmail.com</a></p>
        </div>

        <div>
          <h4>Links</h4>
          <p>
            <FiLinkedin /> <a href="https://www.linkedin.com/in/matthew-sanspareil-437423297/" target="_blank">LinkedIn</a><br/>
            <FiGithub   /> <a href="https://github.com/matthewsans" target="_blank">GitHub</a>
          </p>
        </div>
      </div>
    </FeatureCard>
  );
}
