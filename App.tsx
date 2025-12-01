import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import YouTubePlayer from './components/YouTubePlayer';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white selection:bg-neon-blue selection:text-black font-sans relative">
      <div className="bg-mesh" />
      <Navbar />
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <Projects />
        <YouTubePlayer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;