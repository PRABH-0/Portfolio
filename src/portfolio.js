/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prabhjot Khalwania",
  title: "Hi all, I'm Prabhjot",
  subTitle: emoji(
    "To me, engineering is not just a job — it's a deep responsibility 🚀. When a single commit impacts thousands of users, ownership, precision, and relentless problem-solving matter most. Full Stack Developer specializing in high-performance .NET Web APIs, scalable database architectures (SQL Server, PostgreSQL), and modern frontend systems (Angular, React). Known for taking full accountability, breaking through complex technical roadblocks, and building resilient, production-ready software."
  ),
  resumeLink: "true", // Enables 'Download my resume' button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PRABH-0",
  linkedin: "https://www.linkedin.com/in/prabhjot-singh-008a0a2aa/",
  gmail: "prabh.khalwania@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER CRAFTING ROBUST & SCALABLE WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Building responsive, interactive web applications using Angular, Next.js, and React"
    ),
    emoji(
      "⚡ Developing high-performance, secure RESTful APIs with C# and .NET Web API"
    ),
    emoji(
      "⚡ Modernizing legacy enterprise systems (.NET WebForms to .NET Core Web API & Angular) for speed and scale"
    ),
    emoji(
      "⚡ Designing and optimizing database architectures using SQL Server and PostgreSQL"
    ),
    emoji(
      "⚡ Designing event-driven workflow automations (n8n) and real-time database synchronizations"
    ),
    emoji(
      "⚡ Deploying containerized microservices and web apps using Docker and Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "ts-icon"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: ".NET / C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "n8n Automation",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharaja Ganga Singh University",
      subHeader: "Master of Computer Science (M.Sc.)",
      duration: "March 2025 – Present",
      desc: "Bikaner, Rajasthan, India",
      descBullets: [
        "Advanced studies in software architectures, distributed computing, and advanced systems design.",
        "Deepening technical expertise in full stack engineering and modern enterprise workflows."
      ]
    },
    {
      schoolName: "Maharaja Ganga Singh University",
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "March 2022 – March 2025",
      desc: "Bikaner, Rajasthan, India",
      descBullets: [
        "Graduated with foundational knowledge in software engineering, data structures, and database management.",
        "Engineered practical web applications and mastered object-oriented programming principles."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend (.NET Web API / C#)",
      progressPercentage: "92%"
    },
    {
      Stack: "Databases (SQL Server / PostgreSQL)",
      progressPercentage: "88%"
    },
    {
      Stack: "System Architecture & Automation (Clean Architecture, n8n)",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend (Angular / React / TypeScript)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Yashraj Software Pvt Ltd",
      companylogo: require("./assets/images/yashrajLogo.png"),
      date: "July 2026 – Present",
      desc: "Spearheading the modernization of enterprise Hospital Management Systems (HMS) deployed across multi-state hospital networks in India, migrating legacy monolithic architectures into high-performance, modular full-stack solutions.",
      descBullets: [
        "Architecting and executing full-scale legacy modernization: re-engineering monolithic .NET WebForms into high-speed .NET Web APIs and responsive Angular modules, dramatically improving application performance and clinical workflow efficiency.",
        "Designing clean multi-layer backend architectures (Controllers, Services, Data Access) paired with optimized SQL Server stored procedures and transactional query tuning to handle high-concurrency patient records.",
        "Built and deployed end-to-end event-driven automations using n8n (including real-time WhatsApp patient lead capture and direct DB synchronization), cutting out manual operational overhead.",
        "Entrusted with critical architectural and technical decision-making, unblocking challenging system roadblocks and rapidly shipping production-ready features across cross-functional teams."
      ]
    },
    {
      role: "Software Developer",
      company: "Pizone Infotech",
      companylogo: require("./assets/images/pizoneLogo.png"),
      date: "March 2025 – July 2026",
      desc: "Engineered scalable frontend modules and backend services supporting high-concurrency production platforms in India.",
      descBullets: [
        "Engineered 5+ Angular frontend modules integrated with .NET Web APIs, supporting 1,000+ daily user interactions.",
        "Developed and optimized 10+ RESTful APIs, improving response time by 20% through efficient query handling.",
        "Diagnosed and resolved 15+ production issues, reducing downtime by 30% and improving overall system stability.",
        "Collaborated with a cross-functional team of 4–6 developers to deliver key milestones ahead of schedule."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "FEATURED ENTERPRISE & FULL STACK PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/engramLogo.webp"),
      projectName: "Engram – Visual Knowledge & File System",
      projectDesc:
        "An infinite-canvas visual knowledge and file management platform with draggable nodes and relational edges. Engineered a smart auto-arrange and extraction engine that dynamically unpacks user ZIP folders, recursively maps parent-child directory structures, and algorithmically lays them out on an infinite spatial graph. Built across 13+ REST API controllers, Supabase Auth, Google OAuth, and Stripe billing.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://engram-zpuh.onrender.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/PRABH-0"
        }
      ]
    },
    {
      image: require("./assets/images/flexSchemaLogo.webp"),
      projectName:
        "Flex Schema (ONE Software) – Enterprise Resource Management",
      projectDesc:
        "A large-scale enterprise resource management platform serving US-based organizations to manage complex organizational data. Built and integrated 50+ RESTful APIs using Angular and .NET Core Web API with rigorous validation, robust multi-tenant data structures, and optimized SQL queries.",
      footerLink: [
        {
          name: "Live System",
          url: "https://one-software.com/"
        }
      ]
    },
    {
      image: require("./assets/images/cosmosDriftIcon.svg"),
      projectName: "Cosmos Drift – 3D Interactive WebGL Space Odyssey",
      projectDesc:
        "A fun project built to experiment with 3D space exploration, Three.js, and ambient audio synthesis in React. Scroll to drift through celestial bodies, glowing nebulae, and cosmic soundscapes.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://cosmos-drift-oyma.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/PRABH-0/cosmos-drift"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to high-impact opportunities where I can take full technical ownership, tackle challenging bottlenecks, and contribute my complete potential. Let's build something remarkable!",
  bio: "Full Stack Developer | Build Scalable Softwares",
  number: "+91 6375157148",
  email_address: "prabh.khalwania@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
