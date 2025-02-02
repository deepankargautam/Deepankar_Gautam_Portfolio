import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'MySQL', 'React.js', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    skills: ['Spring', 'Spring Boot', 'Microservices', 'React.js'],
  },
  {
    title: 'Development & Operations',
    skills: ['Git', 'GitHub', 'Agile', 'Jira', 'Scrum', 'JUnit', 'AWS'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;