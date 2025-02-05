import React, { useState } from "react";
import { Code2, Layers, GitBranch, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { 
        name: "Java", 
        icon: "☕",
        details: "• Developed microservices using Spring Boot\n• Implemented RESTful APIs\n• Created banking applications\n• Worked with Java 8+ features"
      },
      { 
        name: "MySQL", 
        icon: "🗄️",
        details: "• Designed database schemas\n• Wrote complex SQL queries\n• Optimized database performance\n• Implemented data migrations"
      },
      { 
        name: "React.js", 
        icon: "⚛️",
        details: "• Built responsive web applications\n• State management with Redux\n• Created reusable components\n• Implemented custom hooks"
      },
      { 
        name: "HTML", 
        icon: "🌐",
        details: "• Semantic markup\n• Accessibility best practices\n• Cross-browser compatibility\n• Modern HTML5 features"
      },
      { 
        name: "CSS", 
        icon: "🎨",
        details: "• Responsive design\n• CSS animations\n• Flexbox and Grid\n• CSS-in-JS solutions"
      }
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      { 
        name: "Spring", 
        icon: "🍃",
        details: "• Dependency Injection\n• AOP Programming\n• Spring Security\n• Spring Data JPA"
      },
      { 
        name: "Spring Boot", 
        icon: "🚀",
        details: "• Microservices development\n• RESTful APIs\n• Spring Cloud\n• Application monitoring"
      },
      { 
        name: "Microservices", 
        icon: "🔗",
        details: "• Service discovery\n• API Gateway\n• Circuit breakers\n• Distributed systems"
      },
      { 
        name: "React.js", 
        icon: "⚛️",
        details: "• Component lifecycle\n• React Router\n• Context API\n• Performance optimization"
      }
    ],
  },
  {
    title: "Development & Operations",
    icon: GitBranch,
    skills: [
      { 
        name: "Git", 
        icon: "🔧",
        details: "• Version control\n• Branch management\n• Code review\n• Git flow"
      },
      { 
        name: "GitHub", 
        icon: "🐙",
        details: "• CI/CD pipelines\n• Pull requests\n• GitHub Actions\n• Repository management"
      },
      { 
        name: "Agile", 
        icon: "📈",
        details: "• Scrum methodology\n• Sprint planning\n• Daily standups\n• Retrospectives"
      },
      { 
        name: "Jira", 
        icon: "📊",
        details: "• Task management\n• Agile boards\n• Issue tracking\n• Sprint management"
      },
      { 
        name: "Scrum", 
        icon: "🔄",
        details: "• Sprint planning\n• Backlog grooming\n• Team collaboration\n• Agile ceremonies"
      },
      { 
        name: "JUnit", 
        icon: "🧪",
        details: "• Unit testing\n• Integration tests\n• Test coverage\n• Mockito integration"
      },
      { 
        name: "AWS", 
        icon: "☁️",
        details: "• EC2 instances\n• S3 storage\n• Lambda functions\n• CloudWatch monitoring"
      }
    ],
  },
];

const Tooltip = ({ content, isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute left-full ml-4 top-0 z-50 w-64 p-4 bg-[#1e1e1e] rounded-lg border border-[#464646] shadow-xl"
      >
        <div className="absolute left-0 top-4 -ml-2 w-0 h-0 border-t-8 border-r-8 border-b-8 border-l-0 border-transparent border-r-[#464646]" />
        <pre className="text-sm font-mono whitespace-pre-wrap text-[#a9b7c6]">
          {content.split('\n').map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="line-effect"
            >
              {line}
            </motion.div>
          ))}
        </pre>
      </motion.div>
    )}
  </AnimatePresence>
);

const SkillTag = ({ skill, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onHoverStart={() => setShowTooltip(true)}
      onHoverEnd={() => setShowTooltip(false)}
    >
      <div className="skill-tag px-3 py-1 bg-[#2b2b2b] text-[#cc7832] rounded-full text-sm flex items-center gap-1 shadow-sm cursor-pointer">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
      </div>
      <Tooltip content={skill.details} isVisible={showTooltip} />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-[#0d0d0d] text-[#abb2bf] font-mono relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-blue-400">{`<Skills & Expertise />`}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="relative bg-[#1e1e1e] p-6 rounded-lg border border-gray-700 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <category.icon className="text-blue-400 mr-2" size={24} />
                <h3 className="text-lg font-semibold text-[#56b6c2]">
                  {`<${category.title} />`}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <SkillTag key={idx} skill={skill} index={idx} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shimmering effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {skillCategories.flatMap((category, index) =>
          category.skills.map((skill, idx) => (
            <motion.div
              key={`${index}-${idx}`}
              className="absolute text-gray-600 text-sm font-mono opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [Math.random() * -50, Math.random() * window.innerHeight],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {`<${skill.name} />`}
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Skills;