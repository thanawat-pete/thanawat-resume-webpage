import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-base-100 text-base-content selection:bg-primary selection:text-primary-content">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
