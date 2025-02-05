import React from 'react';
import { ArrowRight, Download } from 'lucide-react'; // Import the Download icon
import profileImage from "../assets/photo.png";
import resume from "../assets/Deepankar Gautam.pdf"; // Import the resume file

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
            <img
              src={profileImage}
              alt="Deepankar Gautam"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Deepankar Gautam
            </span>
          </h1>
          <h2 className="text-2xl text-gray-300 mb-6">Senior Software Engineer</h2>
          <p className="max-w-2xl text-gray-400 mb-8">
            Experienced software engineer specializing in Java, Spring Boot, and React.js with a focus on
            microservices architecture and full-stack development.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
            >
              Get in touch <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href={resume}
              download="Deepankar_Gautam_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
            >
              Download Resume <Download className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;