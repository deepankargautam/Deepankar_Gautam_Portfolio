import React from 'react';

const experiences = [
  {
    company: 'Newgen Software',
    position: 'Senior Software Engineer',
    period: 'Jan 2024 - Present',
    responsibilities: [
      'Designed and developed microservices architecture for banking applications',
      'Created and maintained RESTful APIs',
      'Developed "Admin Portal" banking dashboard using React and Spring Boot',
      'Participated in release processes and debugging',
    ],
  },
  {
    company: 'Cyient Limited',
    position: 'Software Engineer',
    period: 'Jun 2021 - Jan 2024',
    responsibilities: [
      'Designed and developed REST APIs',
      'Created grooming sheets and collaborated using Agile methodologies',
      'Implemented CI/CD using Git, GitHub, and Jenkins',
      'Managed documentation using Confluence',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">{exp.company}</h3>
                <span className="text-gray-400">{exp.period}</span>
              </div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">{exp.position}</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;