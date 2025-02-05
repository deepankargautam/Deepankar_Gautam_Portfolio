// import React from 'react';
import { Download } from 'lucide-react'; // Import the Download icon
import profileImage from "../assets/photo.png";
import resume from "../assets/Deepankar Gautam.pdf"; // Import the resume file

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center pt-16">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col items-center text-center">
//           <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
//             <img
//               src={profileImage}
//               alt="Deepankar Gautam"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h1 className="text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Deepankar Gautam
//             </span>
//           </h1>
//           <h2 className="text-2xl text-gray-300 mb-6">Senior Software Engineer</h2>
//           <p className="max-w-2xl text-gray-400 mb-8">
//             Experienced software engineer specializing in Java, Spring Boot, and React.js with a focus on
//             microservices architecture and full-stack development.
//           </p>
//           <div className="flex gap-4">
//             <a
//               href="#contact"
//               className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
//             >
//               Get in touch <ArrowRight className="ml-2" size={20} />
//             </a>
//             <a
//               href={resume}
//               download="Deepankar_Gautam_Resume.pdf"
//               className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
//             >
//               Download Resume <Download className="ml-2" size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Hero;
import React from 'react';
import { ArrowRight, Code, Terminal, Braces, Database, Server, Github as Git, Cloud } from 'lucide-react';
const CodeEffect = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    <div className="code-block absolute top-1/4 left-1/4 transform -rotate-12 animate-code-float">
      <div className="code-line" style={{ animationDelay: '0.2s' }}>const developer = {`{`}</div>
      <div className="code-line" style={{ animationDelay: '0.4s' }}>  name: "Deepankar",</div>
      <div className="code-line" style={{ animationDelay: '0.6s' }}>  role: "Senior Dev",</div>
      <div className="code-line" style={{ animationDelay: '0.8s' }}>  skills: ["Java", "Spring"]</div>
      <div className="code-line" style={{ animationDelay: '1s' }}>{`}`};</div>
    </div>
    <div className="code-block absolute top-1/3 right-1/4 transform rotate-12 animate-code-float" style={{ animationDelay: '1s' }}>
      <div className="code-line" style={{ animationDelay: '1.2s' }}>@SpringBootApplication</div>
      <div className="code-line" style={{ animationDelay: '1.4s' }}>class MicroService {`{`}</div>
      <div className="code-line" style={{ animationDelay: '1.6s' }}>  @Autowired</div>
      <div className="code-line" style={{ animationDelay: '1.8s' }}>  private Service service;</div>
      <div className="code-line" style={{ animationDelay: '2s' }}>{`}`}</div>
    </div>
  </div>
);
const FloatingIcons = () => (
  <>
    <div className="absolute top-40 left-1/4">
      <Code size={32} className="animate-float text-blue-400 opacity-20" style={{ animationDelay: '0.5s' }} />
    </div>
    <div className="absolute top-60 right-1/4">
      <Terminal size={32} className="animate-float text-purple-400 opacity-20" style={{ animationDelay: '1s' }} />
    </div>
    <div className="absolute bottom-40 left-1/3">
      <Braces size={32} className="animate-float text-green-400 opacity-20" style={{ animationDelay: '1.5s' }} />
    </div>
    <div className="absolute bottom-60 right-1/3">
      <Database size={32} className="animate-float text-yellow-400 opacity-20" style={{ animationDelay: '2s' }} />
    </div>
    <div className="absolute top-1/3 left-1/5">
      <Server size={32} className="animate-float text-red-400 opacity-20" style={{ animationDelay: '2.5s' }} />
    </div>
    <div className="absolute bottom-1/3 right-1/5">
      <Git size={32} className="animate-float text-orange-400 opacity-20" style={{ animationDelay: '3s' }} />
    </div>
    <div className="absolute top-1/2 right-1/6">
      <Cloud size={32} className="animate-float text-indigo-400 opacity-20" style={{ animationDelay: '3.5s' }} />
    </div>
  </>
);
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 gradient-bg relative overflow-hidden">
      <CodeEffect />
      <FloatingIcons />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-48 h-48 mb-8 animate-float">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <div className="w-48 h-48 rounded-full overflow-hidden relative z-10 glow-on-hover">
              <img
                src={profileImage}
                alt="Deepankar Gautam"
                className="w-full h-full object-cover transform transition-transform hover:scale-110"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 typing-effect">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Deepankar Gautam
            </span>
          </h1>
          <h2 className="text-2xl text-gray-300 mb-6 typing-effect typing-effect-line" style={{ animationDelay: '1s' }}>
            Senior Software Engineer
          </h2>
          <div className="max-w-2xl text-gray-400 mb-8">
            <p className="typing-effect-line" style={{ animationDelay: '2s' }}>
              Experienced software engineer specializing in Java, Spring Boot, and React.js
            </p>
            <p className="typing-effect-line" style={{ animationDelay: '3s' }}>
              with a focus on microservices architecture and full-stack development.
            </p>
            <p className="typing-effect-line" style={{ animationDelay: '4s' }}>
              Proven ability to design and implement high-performance applications
            </p>
            <p className="typing-effect-line" style={{ animationDelay: '5s' }}>
              while collaborating effectively in cross-functional teams.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all transform hover:scale-105 hover:shadow-lg glow-on-hover"
            >
              Get in touch <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href={resume}
              download="Deepankar_Gautam_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
            >
              Download Resume <Download className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;