import React from 'react';
import work1Image1 from "../assets/work1.png";
import work1Image2 from "../assets/work2.png";
import work1Image3 from "../assets/work3.png";
const projects = [
  {
    title: 'NGO Website',
    description: 'A responsive website for an NGO to showcase their work, accept donations, and connect with volunteers.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: work1Image1,
    link:''
  },
  {
    title: 'Banking Dashboard',
    description: 'A comprehensive dashboard for banking operations, including transaction history, account management, and analytics.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'Chart.js'],
    image:work1Image2, // Placeholder image URL
  },
  {
    title: 'MyDrive Maps',
    description: 'A mapping application for tracking and managing delivery routes, optimized for logistics companies.',
    technologies: ['React.js', 'Google Maps API', 'Node.js', 'Express.js'],
    image: work1Image3, // Placeholder image URL
    link: '' // Add the website link here
  },
];

const Works = () => {
  return (
    <section id="works" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Works
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Add the clickable link to MyDrive Maps */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-400 hover:underline"
                >
                  {/* Visit */}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
