export const portfolioData = {
    name: "Lakshya Karira",
    title: "Full Stack Developer & ML Enthusiast",
    tagline: "Turning ideas into intelligent solutions",

    contact: {
        email: "kariralakshya68@gmail.com",
        phone: "+91 7505747564",
        location: "Agra, Uttar Pradesh, 282005",
        instagram: "karira_lakshya",
        linkedin: "lakshya_karira",
        github: "KariraLakshya",
        githubUrl: "https://github.com/KariraLakshya",
        linkedinUrl: "https://www.linkedin.com/in/lakshya-karira-6151a5316"
    },

    education: {
        degree: "Bachelor of Engineering: Computer Science",
        institution: "DSCE",
        expected: "08/2028",
        school: "Jim Corbett Public School - Agra, India"
    },

    professionalSummary: `Proactive and goal-oriented professional with excellent time management and problem-solving skills. Known for reliability and adaptability, with swift capacity to learn and apply new skills. Committed to leveraging these qualities to drive team success and contribute to organizational growth.

Whether it's crafting fun projects, experimenting with new tools, or learning from my mistakes, I'm all about growing and making coding an adventure.`,

    skills: {
        languages: ["Java", "Python", "JavaScript"],
        fullStack: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML/CSS", "JWT", "REST API"],
        machineLearning: ["PyTorch", "Scikit-learn", "NumPy", "Pandas", "NLP", "MLOps", "FastAPI"],
        tools: ["Git", "GitHub Actions", "Postman"],
        concepts: ["Data Structures and Algorithms"]
    },

    projects: [
        {
            name: "Apex — MLOps Auto-Trainer",
            description: "A configuration-driven MLOps platform that orchestrates the entire ML lifecycle. Leveraged GitHub Actions as a serverless engine to automate training pipelines and Docker for containerizing 'Champion' models. Built a React/Node.js dashboard to manage triggers and monitor Data Drift, effectively bridging the gap between development and deployment.",
            tech: ["React.js", "Node.js", "GitHub Actions", "Docker", "MLOps", "Data Drift Monitoring"],
            link: "https://github.com/KariraLakshya/mlops-auto-trainer"
        },
        {
            name: "Smart Park",
            description: "Real-time parking reservation backend built with Node.js/Express and MongoDB, featuring concurrency handling and secure API endpoints.",
            tech: ["Node.js", "Express.js", "MongoDB", "REST API", "Concurrency Handling"],
            link: "https://github.com/KariraLakshya/Smart-Park"
        },
        {
            name: "Image Captioning Model",
            description: "Deep learning model for automatic image caption generation using encoder-decoder architecture. Implemented with PyTorch, featuring CNN-based image encoder and LSTM-based text decoder for generating descriptive captions from images.",
            tech: ["PyTorch", "CNN", "LSTM", "Encoder-Decoder", "Deep Learning", "Computer Vision"],
            link: "https://www.kaggle.com/code/lakshyakarira/notebooke521c76dec"
        }
    ],

    achievements: [
        {
            title: "3rd Place - Inter-College Hackathon",
            organization: "DSCE",
            date: "December 2024",
            description: "Developed an AI-based (OpenCV) driver assistance system using YOLO that detects dizziness and obstacles, issuing real-time warnings."
        }
    ],

    asciiArt: `
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ██╗      █████╗ ██╗  ██╗███████╗██╗  ██╗██╗   ██╗ █████╗  ║
║   ██║     ██╔══██╗██║ ██╔╝██╔════╝██║  ██║╚██╗ ██╔╝██╔══██╗ ║
║   ██║     ███████║█████╔╝ ███████╗███████║ ╚████╔╝ ███████║ ║
║   ██║     ██╔══██║██╔═██╗ ╚════██║██╔══██║  ╚██╔╝  ██╔══██║ ║
║   ███████╗██║  ██║██║  ██╗███████║██║  ██║   ██║   ██║  ██║ ║
║   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ║
║                                                               ║
║              Full Stack Developer & ML Enthusiast            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
  `,

    welcomeMessage: `Welcome to LakshyaOS v1.0

Type 'help' to see available commands.
Type 'about' to learn more about me.
Type 'projects' to see my work.

Let's build something amazing together! 🚀
`
};

export type PortfolioData = typeof portfolioData;
