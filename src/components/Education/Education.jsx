import React from 'react';
import styles from './Education.module.css'; // Your CSS module for styling
// Importing images
import school1Logo from '../../assets/ivey.webp';
import school2Logo from '../../assets/Western.png';

const Education = () => {
  return (
    <section className={styles.educationSection}>
      <h2>My Education</h2>
      <div className={styles.schoolsContainer}> {/* Ensure there's a container for flex styling */}
        <div className={styles.school}>
          <img src={school1Logo} alt="Ivey Business School Logo" className={styles.schoolLogo}/>
          <p>Ivey Business School - MSc in Digital Management</p> {/* Adjusted for example content */}
        </div>
        <div className={styles.school}>
          <img src={school2Logo} alt="Western University Logo" className={styles.schoolLogo}/>
          <p>Western University - Bachelors in Management & Legal Studies</p> {/* Adjusted for example content */}
        </div>
        {/* Add more schools as needed */}
      </div>
    </section>
  );
};

export default Education;

