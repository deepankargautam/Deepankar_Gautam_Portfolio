import React from "react";
import { GraduationCap, Award, Languages } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "AKTU University - United College Of Engineering and Research",
    degree: "Computer Science And Engineering",
    period: "2016 - 2020",
    icon: GraduationCap,
  },
  {
    institution: "CDAC- Bangalore",
    degree: "Postgraduate Diploma in Advanced Computing",
    period: "2020 - 2021",
    icon: GraduationCap,
  },
];

const certifications = [
  "Java Spring Boot Full Stack Cloud Developer - Udemy",
  "Web Development - Internshala",
];

const achievements = [
  "Four times Most Valued Performer Bronze awarded by Cyient",
  "Received retention bonus during the first year at Cyient",
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#0d0d0d] text-[#abb2bf] font-mono relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">{`<Education & Achievements />`}</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 text-[#56b6c2] flex items-center">
              <GraduationCap className="mr-2" /> {`<Education />`}
            </h3>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-[#1e1e1e] p-6 rounded-lg border border-gray-700 shadow-lg hover:scale-105 transform transition"
              >
                <h4 className="text-lg font-semibold text-[#cc7832]">{`const Institution = "${edu.institution}";`}</h4>
                <p className="text-[#c678dd]">{`const Degree = "${edu.degree}";`}</p>
                <p className="text-sm text-[#61afef]">{`const Period = "${edu.period}";`}</p>
                <div className="absolute top-4 right-4 text-blue-400 opacity-50">
                  <edu.icon size={24} className="animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 text-[#56b6c2] flex items-center">
                <Award className="mr-2" /> {`<Certifications />`}
              </h3>
              <div className="bg-[#1e1e1e] p-6 rounded-lg border border-gray-700">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center text-[#98c379] hover:translate-x-2 transition"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {`const Certification_${index + 1} = "${cert}";`}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#56b6c2] flex items-center">
                <Languages className="mr-2" /> {`<Achievements />`}
              </h3>
              <div className="bg-[#1e1e1e] p-6 rounded-lg border border-gray-700">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center text-[#e06c75] hover:translate-x-2 transition"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {`const Achievement_${index + 1} = "${achievement}";`}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
