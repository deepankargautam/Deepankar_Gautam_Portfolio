import React from 'react';

const educationData = [
  {
    institution: 'AKTU University - United College Of Engineering and Research',
    degree: 'Computer Science And Engineering',
    period: '2016 - 2020',
  },
  {
    institution: 'CDAC- Bangalore',
    degree: 'Postgraduate Diploma in Advanced Computing',
    period: '2020 - 2021',
  },
];

const certifications = [
  'Java Spring Boot Full Stack Cloud Developer - Udemy',
  'Web Development - Internshala',
];

const achievements = [
  'Four times Most Valued Performer Bronze awarded by Cyient',
  'Received retention bonus during the first year at Cyient',
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education & Achievements
          </span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-400">Education</h3>
            {educationData.map((edu, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h4 className="text-lg font-semibold text-gray-300">{edu.institution}</h4>
                <p className="text-gray-400">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Certifications</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Achievements</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;