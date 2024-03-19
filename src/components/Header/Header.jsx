// Header.jsx
import React from 'react';
import styles from './Header.module.css'; // Make sure you have a Header.module.css file in the same directory.

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>👋 Hi, i'm Bert</h1>
      {/* Add more elements here as needed */}
    </header>
  );
};
export default Header;
