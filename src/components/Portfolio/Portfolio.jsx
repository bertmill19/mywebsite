// Example: Portfolio.jsx
import React from 'react';
import styles from './Portfolio.module.css'; // Your CSS module for styling

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h2>CAD Drawing Sharing Application</h2>
      <div className={styles.project}>
        <h3>Project Name</h3>
        <p>This project is a web application designed to HNH Technoligies. Built with Google Appscript and OpenAI.</p>
        <a href="[Project Link]">View Project</a> | <a href="[Repo Link]">View Code</a>
        </div>
    </section>
  );
};
export default Portfolio;