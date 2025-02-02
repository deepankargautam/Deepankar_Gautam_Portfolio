import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Works from './components/Works';
import photo from './photo.png'
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DG
            </span>
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Works />
        <Education />
        <Contact />
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/deepankargautam" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/deepankar-gautam-22347615b/" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:deepankargautam@1998.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+918400869600" className="hover:text-blue-400 transition-colors">
              <Phone size={24} />
            </a>
          </div>
          <p className="text-center mt-4 text-gray-400">© 2024  Deepankar Gautam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;