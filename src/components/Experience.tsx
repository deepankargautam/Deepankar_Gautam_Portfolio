import React, { useEffect } from 'react';
import { Briefcase, Calendar, CheckCircle, Code2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Newgen Software',
    position: 'Senior Software Engineer',
    period: 'Jan 2024 - Present',
    responsibilities: [
      'Designed and developed microservices architecture for banking applications',
      'Created and maintained RESTful APIs for banking services',
      'Developed "Admin Portal" banking dashboard using React and Spring Boot',
      'Integrated customer information and product data via API calls',
      'Worked on user management features like user creation, modification, and password regeneration',
      'Participated in the release process, debugging, and ensuring smooth deployment on WebSphere server',
    ],
  },
  {
    company: 'Cyient Limited',
    position: 'Software Engineer',
    period: 'Jun 2021 - Jan 2024',
    responsibilities: [
      'Designed and developed REST APIs for client projects',
      'Created grooming sheets and collaborated using Agile methodologies',
      'Implemented CI/CD pipelines using Git, GitHub, and Jenkins',
      'Managed project documentation using Confluence',
    ],
  },
];


const ExperienceCard = ({ experience, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const codeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="card-3d mb-12 last:mb-0 p-6 bg-[#1e1e1e] rounded-lg backdrop-blur-lg border border-[#2b2b2b] font-mono"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <motion.div variants={itemVariants} className="flex items-center">
          <Briefcase className="text-[#cc7832] mr-2" size={24} />
          <h3 className="company-name text-xl font-bold text-[#cc7832]">
            <span className="text-[#ffc66d]">class</span> {experience.company}
          </h3>
        </motion.div>
        <motion.div variants={itemVariants} className="flex items-center text-[#6a8759] mt-2 md:mt-0">
          <Calendar className="mr-2" size={18} />
          <span className="text-[#6897bb]">{experience.period}</span>
        </motion.div>
      </div>

      <motion.h4 variants={itemVariants} className="text-lg font-semibold mb-4 text-[#a9b7c6]">
        <span className="text-[#cc7832]">function</span>{' '}
        <span className="text-[#ffc66d]">{experience.position}</span>() {'{'}
      </motion.h4>

      <motion.div variants={codeVariants} className="pl-4 space-y-3">
        {experience.responsibilities.map((resp, idx) => (
          <motion.div
            key={idx}
            variants={lineVariants}
            className="flex items-start group"
          >
            <Code2 className="text-[#cc7832] mr-2 mt-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" size={16} />
            <div className="typing-container text-[#a9b7c6]">
              <span className="text-[#cc7832]">const</span>{' '}
              <span className="text-[#9876aa]">task_{idx + 1}</span>{' '}
              <span className="text-[#cc7832]">=</span>{' '}
              <span className="text-[#6a8759]">'{resp}'</span>;
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="text-[#cc7832] mt-4">{'}'}</motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 bg-[#0d0d0d]"
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center font-mono"
        >
          <span className="text-[#cc7832]">interface</span>{' '}
          <span className="text-[#ffc66d]">ProfessionalExperience</span>{' '}
          <span className="text-[#cc7832]">extends</span>{' '}
          <span className="text-[#a9b7c6]">Career</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Background code effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#cc7832] text-xs font-mono whitespace-nowrap"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {`const experience_${i} = new SoftwareEngineer();`}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;