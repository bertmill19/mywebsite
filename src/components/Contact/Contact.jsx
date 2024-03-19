// Example: Contact.jsx
import React from 'react';
import styles from './Contact.module.css'; // Your CSS module for styling

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
        <p>Interested in working together? I'd love to hear from you:</p>
        <p>Email: rmill@uwo.ca</p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/bertomill/'>LinkedIn</a></p>
        // Optionally, add a simple contact form here
    </section>
  );
};
export default Contact;