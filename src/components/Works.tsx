import React, { useState } from 'react';
import { motion } from 'framer-motion';
import work1Image1 from "../assets/work1.png";
import work1Image2 from "../assets/work2.png";
import work1Image3 from "../assets/work3.png";

const projects = [
  {
    title: 'NGO Website',
    description: 'A responsive website for an NGO to showcase their work, accept donations, and connect with volunteers.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: work1Image1,
    link: 'https://buddha-vihar.vercel.app/'
  },
  {
    title: 'Banking Dashboard',
    description: 'A comprehensive dashboard for banking operations, including transaction history, account management, and analytics.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'Chart.js'],
    image: work1Image2,
  },
  {
    title: 'MyDrive Maps',
    description: 'A mapping application for tracking and managing delivery routes, optimized for logistics companies.',
    technologies: ['React.js', 'Google Maps API', 'Node.js', 'Express.js'],
    image: work1Image3,
    link: 'https://plan.tomtom.com/en/?p=28.71309,77.25686,15.5z'
  },
];

const Works = () => {
  return (
    <section id="works" className="py-20 bg-[#0d0d0d] text-[#abb2bf] font-mono">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Works
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#2e2e2e] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105"
              />
              <h3 className="text-xl font-bold mb-2 text-[#82aaff]">{project.title}</h3>
              <p className="text-[#abb2bf] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#3e3e3e] text-[#a9b7c6] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#82aaff] hover:underline"
                >
                  Visit
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;