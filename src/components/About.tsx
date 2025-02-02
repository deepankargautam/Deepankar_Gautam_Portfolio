import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a Senior Software Engineer with over 3.6 years of experience in developing robust and
            scalable applications. My expertise lies in Java, Spring Boot, React.js, and microservices
            architecture.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Throughout my career, I have demonstrated strong problem-solving abilities and a keen eye
            for detail. I excel in both independent work and team collaboration, consistently
            delivering high-quality solutions that meet business requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;