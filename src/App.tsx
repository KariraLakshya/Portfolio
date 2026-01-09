import { useState } from 'react';
import { BootSequence } from './components/BootSequence';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-black text-cyber-cyan overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scanline Effect */}
      <div className="scanline"></div>

      {/* Boot Sequence */}
      {!bootComplete && (
        <BootSequence onComplete={() => setBootComplete(true)} />
      )}

      {/* Main Content */}
      {bootComplete && (
        <>
          {/* Background Effects */}
          <ParticleBackground />

          {/* Navigation */}
          <Navbar />

          {/* Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="bg-cyber-dark/50 border-t border-cyber-cyan/20 flex items-center justify-center py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-400">
                © 2026 Lakshya Karira.
              </p>
              <p className="text-cyber-cyan mt-2 text-sm">
                <span className="text-cyber-magenta">&lt;</span>
                Code with passion
                <span className="text-cyber-magenta"> /&gt;</span>
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
