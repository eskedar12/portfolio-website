// App.jsx - Without Skills Section
import React from 'react';
import './App.css';

// Import your components (adjust imports based on your actual components)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
       <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

    
  );
}

export default App;