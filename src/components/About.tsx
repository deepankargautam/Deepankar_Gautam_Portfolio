import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const aboutText = `I am a Senior Software Engineer with over 3.6 years of experience in developing robust and scalable applications. My expertise lies in Java, Spring Boot, React.js, and microservices architecture. Throughout my career, I have demonstrated strong problem-solving abilities and a keen eye for detail. I excel in both independent work and team collaboration, consistently delivering high-quality solutions that meet business requirements.`;
  const [displayedText, setDisplayedText] = useState('');
  const textRef = useRef(aboutText);

  useEffect(() => {
    let timeout;
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < textRef.current.length) {
        setDisplayedText(textRef.current.substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeText, 30); 
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-300 font-mono">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-neon-blue tracking-wider">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <motion.div
          className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg overflow-hidden terminal-loader"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="terminal-header">
            <div className="terminal-title">About Me</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <motion.div
            className="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {displayedText}
            <span className="cursor">|</span>
          </motion.div>
        </motion.div>
      </div>
      <style jsx>{`
        .text-neon-blue {
          color: #00E0FF;
          text-shadow: 0px 0px 10px #00E0FF;
        }
        .text-neon-green {
          color: #39FF14;
          text-shadow: 0px 0px 8px #39FF14;
        }
        .terminal-loader {
          border: 0.1em solid #333;
          background-color: #1a1a1a;
          color: #0f0;
          font-family: "Courier New", Courier, monospace;
          font-size: 1em;
          padding: 1.5em 1em;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 90%;
          max-width: 48rem;
          margin: 0 auto;
        }

        .terminal-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1.5em;
          background-color: #333;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          padding: 0 0.4em;
          box-sizing: border-box;
        }

        .terminal-controls {
          float: right;
        }

        .control {
          display: inline-block;
          width: 0.6em;
          height: 0.6em;
          margin-left: 0.4em;
          border-radius: 50%;
          background-color: #777;
        }

        .control.close {
          background-color: #e33;
        }

        .control.minimize {
          background-color: #ee0;
        }

        .control.maximize {
          background-color: #0b0;
        }

        .terminal-title {
          float: left;
          line-height: 1.5em;
          color: #eee;
        }

        .text {
          white-space: pre-wrap;
          overflow-wrap: break-word;
          margin-top: 1.5em;
          padding-bottom: 1em;
          display: inline-block; /* Important for cursor positioning */
          color: #0f0; /* Green text */
        }

        .cursor {
          animation: blink 1s infinite step-start;
          color: #0f0; /* Green cursor */
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default About;