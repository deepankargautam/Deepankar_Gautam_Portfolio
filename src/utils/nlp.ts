import { GoogleGenerativeAI } from '@google/generative-ai';

// Expanded personal data for interview questions
const RESUME_DATA = {
  introduction: [
    "I am a Senior Software Engineer with over 3.6 years of experience specializing in Java, Spring Boot, React.js, and microservices architecture. I have a proven ability to design and implement high-performance applications for banking and financial domains.",
    "With extensive experience in full-stack development, I have built scalable solutions using React.js for frontend and Spring Boot for backend. My expertise includes API development, microservices, and system design.",
    "I am highly skilled in problem-solving and performance optimization, ensuring seamless application functionality and user experience."
  ],
  skills: [
    "Proficient in Java, Spring Boot, and Microservices architecture",
    "Experienced in frontend technologies like React.js, Material-UI, and Tailwind CSS",
    "Strong knowledge of database management using MySQL, PostgreSQL, and Oracle DB",
    "Expert in API development, integration, and security best practices",
    "Skilled in DevOps tools like Git, Jenkins, and AWS cloud services",
    "Familiar with Agile methodologies, Scrum, and Jira project management",
    "Experienced in banking applications, trade finance engineering, and real-time systems"
  ],
  experience: [
    "Designed and developed microservices-based banking applications at Newgen Software",
    "Built and maintained RESTful APIs for seamless financial transactions",
    "Developed the 'Admin Portal' banking dashboard using React.js and Spring Boot",
    "Implemented user management features like authentication, role updates, and password recovery",
    "Worked on trade finance engineering solutions, optimizing banking workflows",
    "Contributed to database optimization, improving performance and query execution",
    "Implemented CI/CD pipelines for efficient deployment and release management"
  ],
  projects: [
    "Developed a banking dashboard with real-time analytics and transaction tracking",
    "Created a group vehicle booking app with live tracking and booking management",
    "Built a land mapping application for real estate listings with price analytics",
    "Integrated analytics charts into banking dashboards for data-driven insights",
    "Developed an Uber clone with a free map API for location detection and ride booking"
  ],
  personality: [
    "Highly analytical and detail-oriented, ensuring clean and optimized code",
    "Strong problem-solving skills, capable of debugging complex issues efficiently",
    "Excellent team collaborator, fostering knowledge sharing and teamwork",
    "Quick learner and adaptable to emerging technologies and frameworks",
    "Proactive in delivering high-quality solutions with a focus on user experience"
  ],
  jobPreferences: [
    "Looking for challenging roles in fintech, banking applications, and large-scale systems",
    "Prefer positions that involve full-stack development with Java, React.js, and cloud platforms",
    "Interested in opportunities that offer innovation and scalability in software architecture"
  ],
  availability: [
    "Available for new opportunities with a notice period of 90 days",
    "Open to freelance projects, including Upwork contracts involving Java, Spring Boot, and React.js"
  ],
  location: [
    "Currently based in Noida, India, open to remote and hybrid work models",
  ],
  salary: [
    "for salary dicussion connect with deepankar phone 8400869600",
    "Looking for competitive compensation based on industry standards for senior software engineers",
    "Salary expectations align with experience in banking, fintech, and microservices architecture"
  ],
  strengths: [
    "Deep understanding of Java, Spring Boot, and API development",
    "Proficiency in frontend frameworks like React.js with responsive UI design",
    "Ability to optimize applications for performance and scalability",
    "Strong communication skills for effective collaboration with cross-functional teams"
  ],
  weaknesses: [
    "Sometimes focus too much on perfection, but learning to balance speed and quality",
    "Working on improving documentation skills to enhance project clarity and maintenance",
    "Continuously enhancing expertise in DevOps and cloud infrastructure for better deployments"
  ]
};

const API_KEY = 'AIzaSyCaQ9WzmKwej7XhJKooyWWCrjmfsxknnxI'; // Replace with your actual Gemini API key
const genAI = new GoogleGenerativeAI(API_KEY);

const CACHE_KEY = 'chatbot_cache';

interface ChatCache {
  [key: string]: string;
}

export class NLPProcessor {
  private cache: ChatCache = {};
  private resumeContext: string = '';

  constructor() {
    this.initializeCache();
    this.createResumeContext();
  }

  private initializeCache() {
    const savedCache = localStorage.getItem(CACHE_KEY);
    this.cache = savedCache ? JSON.parse(savedCache) : {};
  }

  private createResumeContext() {
    this.resumeContext = `Act as Deepankar's career assistant. Use this resume data:
${JSON.stringify(RESUME_DATA, null, 2)}
   Act as Deepankar's assistant give answer to recuiter on behalf of me like treat you as me giving answers. Answer questions professionally yet conversationally. If unsure or personal question and if you did not want to give answer say that contact wit deepankar number 8400869600, respond:
"I'm not certain about that, but you can connect with Deepankar directly at 8400869600."`;
  }

  private async queryGemini(prompt: string): Promise<string> {
    try {
      // Initialize the model with the system instructions from the resume context
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: this.resumeContext,
      });

      // Generate the content using the user's prompt
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I'm technical difficulties. Please try again later.." + error;
    }
  }

  async processQuery(query: string): Promise<string> {
    const cleanQuery = query.trim().toLowerCase();

    // Return cached answer if available
    if (this.cache[cleanQuery]) {
      return this.cache[cleanQuery];
    }

    try {
      const response = await this.queryGemini(query);

      // Cache the response for future queries
      this.cache[cleanQuery] = response;
      localStorage.setItem(CACHE_KEY, JSON.stringify(this.cache));

      return response;
    } catch (error) {
      console.error('Processing Error:', error);
      return "I apologize, but I encountered an error processing your . Please try again.";
    }
  }
}

export const nlpProcessor = new NLPProcessor();