// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import About from './components/About/About'; // Import the About component
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <About /> {/* Include the About component here */}
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

