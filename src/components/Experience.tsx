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
    projects: [
      {
        name: 'ITRADE Dashboard',
        technologies: ['Java', 'JSP'],
        databases: ['Oracle SQL'],
        webServer: 'WebLogic',
        tools: ['Eclipse', 'Git', 'SVN'],
        description: [
          'Enhanced the User Interface (UI) and User Experience (UX) of the ITRADE Dashboard, ensuring a seamless and efficient user interaction.',
          'Integrated ApexCharts for dynamic and interactive transaction visualizations, allowing users to analyze trade finance data in real-time.',
          'Developed and optimized RESTful APIs to improve data communication and ensure smooth data rendering for the dashboard, significantly enhancing user experience.',
          'Collaborated closely with cross-functional teams to align dashboard features with business objectives and end-user requirements.'
        ],
      },
      {
        name: 'Admin Portal',
        technologies: ['Java', 'Spring Boot'],
        tools: ['Eclipse', 'VSCode', 'SVN'],
        description: [
          'Developed the "Admin Portal" banking dashboard using React and Spring Boot for the trade finance sector, enabling efficient management and monitoring of transactions.',
          'Implemented secure user authentication and role-based access control to ensure data protection and user-specific interface customization.',
          'Designed and developed responsive and intuitive front-end interfaces using React to enhance user engagement and streamline administrative tasks.',
          'Integrated various banking APIs and data visualizations to provide actionable insights, helping stakeholders make informed decisions based on real-time data.'
        ],
      },
      {
        name: 'Customer Onboarding Portal Module',
        technologies: ['Java', 'Spring Boot'],
        webServer: 'WebSphere',
        tools: ['Eclipse', 'SVN'],
        description: [
          'Developed a robust customer onboarding module as part of the trade finance service, automating and streamlining the customer registration and approval process.',
          'Leveraged Java and Spring Boot for backend development, ensuring scalability, reliability, and efficient data processing for high-volume user registrations.',
          'Integrated real-time data validation and verification checks, reducing manual intervention and improving operational efficiency.',
          'Implemented secure login and user data management systems, ensuring compliance with regulatory standards for banking applications.',
          'Worked with stakeholders to tailor the onboarding process, providing a seamless user experience and accelerating the customer service workflow.'
        ],
      },
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
    projects: [
      {
        name: 'Data Normalization',
        technologies: ['Java','Spring Boot', 'RESTful web services','AWS–EC2', 'AWS–EMR'],
        databases: ['PostgreSQL with PostGIS'],
        webServer: 'Apache Tomcat',
        tools: ['Eclipse', 'IntelliJ', 'Git', 'Confluence', 'Docker'],
        description: [
          'Created rules to detect violations in features (e.g., Road Elements, Normal Intersections) using Apache Crunch for bulk data processing from HBase.',
          'Developed REST APIs in the MDS-Content-Refresher module to handle feature creation, modification, and deletion based on PDS Query violations.',
          'Developed Java-based QA rules for proactive detection and correction of data anomalies in real-time production environments.',
          'Conducted comprehensive unit testing using JUnit and Mocking to guarantee the reliability of software solutions.'
        ],
      },
      {
        name: 'Cascade',
        technologies: ['Java'],
        tools: ['IntelliJ', 'Git', 'GitHub', 'Confluence'],
        description: [
          'Designed a Java-based Handler to autonomously rectify inaccurately populated data, enhancing efficiency in addressing operator errors across various applications.'
        ],
      },
      {
        name: 'Speedily Tool',
        technologies: ['React', 'TypeScript', 'NodeJS'],
        tools: ['IntelliJ', 'Git', 'GitHub', 'Confluence'],
        description: [
          'Developed a web-based speed limit information editor using React and Node.js.',
          'Optimized tool performance and user interface while implementing automation features for enhanced efficiency in the speed limit moderation process.'
        ],
      },
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
      <h3 className="company-name text-xl font-bold text-[#cc7832]">
            <span className="text-[#ffc66d]">Projects Done In</span> {experience.company}
          </h3>
          {experience.projects.map((project, idx) => (
  <div key={idx} className="mt-4">
    <span className="text-[#cc7832] font-bold">{project.name}</span>
    <p className="text-lg font-semibold text-[#56b6c2]"><strong  className="text-[#9876aa]">Technologies:</strong> {project.technologies.join(", ")}</p>
              {project.databases && <p className="text-lg font-semibold text-[#56b6c2]"><strong  className="text-[#9876aa]">Databases:</strong> {project.databases.join(", ")}</p>}
              {project.webServer && <p className="text-lg font-semibold text-[#56b6c2]"><strong  className="text-[#9876aa]">Web Server:</strong> {project.webServer}</p>}
              <p className="text-lg font-semibold text-[#56b6c2]"><strong  className="text-[#9876aa]">Tools:</strong> {project.tools.join(", ")}</p>
    <ul className="list-disc pl-5 text-[#a9b7c6]">
      {project.description.map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>
  </div>
))}
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