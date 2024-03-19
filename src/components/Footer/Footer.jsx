// Footer.jsx
import React from 'react';
import styles from './Footer.module.css'; // Assuming you're using CSS Modules

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>© 2024 My Personal Website</p>
      <div className={styles.socialIcons}>
        {/* Social icons can be added here using images or icon fonts */}
        <span className={styles.socialIcon}>👍</span> {/* Example Emoji */}
        {/* Add more social icons as needed */}
      </div>
    </footer>
  );
};
export default Footer;
