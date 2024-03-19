// src/components/About/About.jsx
import React from 'react';
import styles from './About.module.css'; // We'll create this CSS module next

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2>About Me</h2>
        <p>
        I'm a full-stack developer based in Ontario, with a passion for building digital services that improve everyday life for people. My journey in tech started over 3 ago, and I have since worked on numerous projects ranging from enterprise solutions to small business websites. I specialize in web application development, and I'm currently learning machine learning techniques to further expand my skills.
        </p>
        <p>
        When I'm not coding, you'll find me outdoors excercising, cooking with family, or exploring the latest in Artficial Intelligence.
        </p>

      {/* Add more content as needed */}
    </section>
  );
};
export default About;