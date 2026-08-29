// Portfolio data store with full multilingual (EN / DE) support for Pavan Sai Charan Nayudu

export const portfolioData = {
  profile: {
    name: "Pavan Sai Charan Nayudu",
    initials: "P",
    shortName: "PAVAN",
    role: "Full Stack Web Developer & AI / ML Enthusiast",
    email: "pavansaicharan2004@gmail.com",
    phone: "(+91) 8500756091",
    location: "Bhimavaram / Hyderabad, India",
    currentStatus: {
      college: "Sagi Rama Krishnam Raju Engineering College (SRKREC)",
      degree: "Information Technology (IT) - B.Tech (CGPA: 8.02 / 10.0)",
      internship: "Full Stack Web Development Intern at Blackbuck Engineers Pvt. Ltd",
    },
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:pavansaicharan2004@gmail.com",
      cv: "https://example.com/cv",
    },
    skills: [
      "Python",
      "C",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "SQLite",
      "Flask",
      "Streamlit",
      "Playwright",
      "HTML, CSS",
      "Machine Learning",
      "Data Processing",
      "OCR (Tesseract)",
    ],
    languages: [
      { name: "Telugu", level: "Mother Tongue" },
      { name: "English", level: "Professional Working Proficiency" },
    ],
  },

  projects: [
    {
      id: 1,
      key: "proj1",
      title: {
        en: "AI-Based Medical Document Processing System",
        de: "KI-basiertes System zur Verarbeitung medizinischer Dokumente",
      },
      category: "Artificial Intelligence & OCR",
      period: "2024",
      description: {
        en: "Developed a system for processing medical documents using OCR (Tesseract) to extract and analyze text data. Implemented preprocessing techniques and built an interactive interface using Streamlit for efficient document handling.",
        de: "Entwicklung eines Systems zur Verarbeitung medizinischer Dokumente mit OCR (Tesseract) zur Textextraktion. Implementierung von Vorverarbeitungstechniken und interaktiver Streamlit-Benutzeroberfläche.",
      },
      image: "project-movie.jpg",
      tags: ["Python", "OCR (Tesseract)", "Streamlit", "Data Processing", "NLP"],
    },
    {
      id: 2,
      key: "proj2",
      title: {
        en: "Intrusion Detection System for 5G Networks",
        de: "Intrusion-Detection-System für 5G-Netzwerke",
      },
      category: "Machine Learning & Security",
      period: "2024 – 2025",
      description: {
        en: "Developed a machine learning-based intrusion detection system to identify malicious network traffic. Applied Random Forest and Decision Tree algorithms with feature selection techniques. Built a Flask-based web application for real-time traffic classification.",
        de: "Entwicklung eines ML-basierten Systems zur Erkennung von bösartigem Netzwerkverkehr in 5G-Netzen mit Random Forest und Entscheidungsbäumen sowie Flask-Webanwendung zur Echtzeit-Klassifizierung.",
      },
      image: "project-flight.jpg",
      tags: ["Python", "Machine Learning", "Flask", "Random Forest", "5G Security"],
    },
    {
      id: 3,
      key: "proj3",
      title: {
        en: "FreelanceNex Web Application",
        de: "FreelanceNex Web-Plattform",
      },
      category: "Full Stack Web Development",
      period: "2024 – 2025",
      description: {
        en: "Developed a full-stack freelance platform connecting clients and freelancers. Implemented role-based authentication, project management, and real-time communication features. Designed REST APIs and integrated MongoDB for efficient data handling.",
        de: "Entwicklung einer Full-Stack-Freelancer-Plattform mit rollenbasierter Authentifizierung, Projektmanagement und Echtzeit-Kommunikation mit MERN-Stack (MongoDB, Express, React, Node.js).",
      },
      image: "project-powerbi.jpg",
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      id: 4,
      key: "proj4",
      title: {
        en: "Automated Attendance Tracker",
        de: "Automatisierter Anwesenheitstracker",
      },
      category: "Browser Automation & Web App",
      period: "2024",
      description: {
        en: "Designed an automated attendance tracking system using Flask and browser automation with Playwright. Implemented data extraction and SQLite storage mechanisms for efficient record management.",
        de: "Entwicklung eines automatisierten Anwesenheitstrackers mit Flask und Playwright Browser-Automatisierung sowie SQLite-Datenspeicherung.",
      },
      image: "project-flight.jpg",
      tags: ["Flask", "Playwright", "SQLite", "Python", "Automation"],
    },
  ],

  experience: [
    {
      id: 1,
      type: {
        en: "Internship",
        de: "Praktikum",
      },
      title: "Full Stack Web Development Intern",
      company: "Blackbuck Engineers Pvt. Ltd",
      location: "Hyderabad, India",
      period: {
        en: "May 2025 – Jul 2025",
        de: "Mai 2025 – Jul 2025",
      },
      description: {
        en: "Developed web applications using MERN stack (MongoDB, Express, React, Node.js). Designed and implemented backend APIs and database integration. Built responsive user interfaces and handled client-server communication.",
        de: "Entwicklung von Webanwendungen mit dem MERN-Stack (MongoDB, Express, React, Node.js), Design von Backend-APIs und Erstellung responsiver UIs.",
      },
    },
    {
      id: 2,
      type: {
        en: "Internship",
        de: "Praktikum",
      },
      title: "Artificial Intelligence, ML & Data Science Intern",
      company: "International Institute of Digital Technologies (IIDT)",
      location: "India",
      period: {
        en: "Apr 2024 – May 2024",
        de: "Apr 2024 – Mai 2024",
      },
      description: {
        en: "Learned fundamentals of Artificial Intelligence, Machine Learning, and Data Science. Worked with datasets for data preprocessing, cleaning, and analysis. Applied supervised and unsupervised learning techniques and evaluated model performance.",
        de: "Grundlagen der Künstlichen Intelligenz, des Maschinellen Lernens und Data Science. Datenvorverarbeitung, Bereinigung und Anwendung von Lernalgorithmen.",
      },
    },
  ],

  education: [
    {
      id: 1,
      degree: {
        en: "B.Tech in Information Technology (IT)",
        de: "B.Tech in Informationstechnologie (IT)",
      },
      school: "Sagi Rama Krishnam Raju Engineering College (SRKREC)",
      location: "Bhimavaram, India",
      grade: "CGPA: 8.02 / 10.0",
      period: {
        en: "Jul 2022 – Present",
        de: "Jul 2022 – Heute",
      },
      description: {
        en: "Focus on Artificial Intelligence, Machine Learning, Web Development, Data Structures, Algorithms, and Database Management Systems.",
        de: "Schwerpunkt auf Künstliche Intelligenz, Maschinelles Lernen, Webentwicklung, Datenstrukturen und Datenbanken.",
      },
      image: "edu-masters.jpg",
    },
    {
      id: 2,
      degree: {
        en: "Intermediate Education (MPC)",
        de: "Höhere Sekundarschulbildung (MPC)",
      },
      school: "Sasi Junior College",
      location: "Eluru, India",
      grade: "Grade: 954 / 1000",
      period: {
        en: "Jun 2020 – Apr 2022",
        de: "Jun 2020 – Apr 2022",
      },
      description: {
        en: "Completed higher secondary education specializing in Mathematics, Physics, and Chemistry with distinction (95.4%).",
        de: "Abschluss der höheren Sekundarstufe mit Auszeichnung (95,4%) in Mathematik, Physik und Chemie.",
      },
      image: "edu-bachelors.jpg",
    },
    {
      id: 3,
      degree: {
        en: "Secondary School Certificate (SSC)",
        de: "Sekundarschulabschluss (SSC)",
      },
      school: "Sasi E.M High School",
      location: "Eluru, India",
      grade: "Grade: 530 / 600",
      period: {
        en: "Jun 2019 – Apr 2020",
        de: "Jun 2019 – Apr 2020",
      },
      description: {
        en: "Completed secondary school education with strong foundations in science and mathematics.",
        de: "Erfolgreicher Sekundarschulabschluss mit starkem Fundament in Naturwissenschaften und Mathematik.",
      },
      image: "edu-bachelors.jpg",
    },
  ],

  achievements: [
    {
      id: 1,
      badge: "CLOUD SKILLS",
      title: {
        en: "Google Cloud Skill Badges",
        de: "Google Cloud Skill Badges",
      },
      subtitle: {
        en: "Cloud Infrastructure & Deployment",
        de: "Cloud-Infrastruktur & Bereitstellung",
      },
      organization: "Google Cloud Skills Boost",
      description: {
        en: "Earned hands-on skill badges demonstrating practical experience in cloud technologies, real-world lab environments, cloud infrastructure, deployment, and data-related tasks.",
        de: "Erwerb von praxisorientierten Google Cloud Skill Badges für Cloud-Infrastruktur, Anwendungsbereitstellung und datenbezogene Aufgaben.",
      },
      image: "achievement-hackathon.jpg",
    },
    {
      id: 2,
      badge: "DATA & SQL",
      title: {
        en: "Python for Data Science & Relational Databases",
        de: "Python für Data Science & Relationale Datenbanken",
      },
      subtitle: {
        en: "IBM Certified (Jul & Aug 2025)",
        de: "IBM Zertifiziert (Jul & Aug 2025)",
      },
      organization: "IBM Skills Network",
      description: {
        en: "Completed Python 101 for Data Science and SQL & Relational Databases 101, mastering data analysis workflows, query optimization, and schema design.",
        de: "Erfolgreich zertifiziert in Python 101 für Data Science und SQL & Relationale Datenbanken 101 von IBM Skills Network.",
      },
      image: "achievement-student.jpg",
    },
    {
      id: 3,
      badge: "FULL STACK",
      title: {
        en: "Web Developer Bootcamp & Python Developer",
        de: "Web-Entwickler Bootcamp & Python Entwickler",
      },
      subtitle: {
        en: "Udemy Certified (Dec 2024 / Aug 2025)",
        de: "Udemy Zertifiziert (Dez 2024 / Aug 2025)",
      },
      organization: "Udemy",
      description: {
        en: "Completed comprehensive training in Python programming, Flask web applications, modern full-stack development, and backend API engineering.",
        de: "Umfassende Zertifizierung in Python-Programmierung, Flask-Webframework, modernen Webarchitekturen und REST-APIs.",
      },
      image: "achievement-pitch.jpg",
    },
  ],

  translations: {
    en: {
      home: "Home",
      aboutMe: "About Me",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      achievements: "Certifications",
      contact: "Contact",
      downloadCv: "DOWNLOAD CV",
      contactInfo: "CONTACT INFO",
      heroGreeting: "HELLO, I AM PAVAN SAI CHARAN NAYUDU",
      heroDesc:
        "Information Technology undergraduate with a focus on Artificial Intelligence and Machine Learning. Skilled in Python programming, web development, and data processing, with hands-on experience in building practical applications and working with real-world datasets.",
      aboutTitle: "About Me",
      aboutSubtitle: "AI/ML Enthusiast & Full Stack Web Developer",
      aboutP1:
        "Hello! I am Pavan Sai Charan Nayudu, an Information Technology undergraduate at SRKREC with a passion for building intelligent software and full-stack web applications. I specialize in Python, MERN Stack (React, Node.js, Express, MongoDB), Flask, and machine learning workflows.",
      aboutP2:
        "I have completed internships in Full Stack Web Development at Blackbuck Engineers and AI/Data Science at IIDT. My goal is to build scalable, high-performance solutions combining modern web architectures with data-driven AI capabilities.",
      skillsTitle: "Technical Skills & Technologies",
      projectsTitle: "FEATURED PROJECTS",
      experienceTitle: "WORK EXPERIENCE",
      educationTitle: "EDUCATION & TRAINING",
      achievementsTitle: "CERTIFICATIONS & BADGES",
      getInTouch: "GET IN TOUCH",
      sayHi: "[SAY HI / EMAIL]",
      currently: "[CURRENT ROLE & EDUCATION]",
      currentlyDesc:
        "B.Tech (IT) @ SRKREC & Full Stack Web Development Intern @ Blackbuck Engineers",
      readMore: "View Project",
      sendMessage: "Send Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email Address",
      messagePlaceholder: "Write your message here...",
      messageSent: "Message sent successfully! I will get back to you soon.",
    },
    de: {
      home: "Startseite",
      aboutMe: "Über Mich",
      projects: "Projekte",
      experience: "Erfahrung",
      education: "Bildung",
      achievements: "Zertifikate",
      contact: "Kontakt",
      downloadCv: "LEBENSLAUF",
      contactInfo: "KONTAKT INFO",
      heroGreeting: "HALLO, ICH BIN PAVAN SAI CHARAN NAYUDU",
      heroDesc:
        "Student der Informationstechnologie mit Schwerpunkt Künstliche Intelligenz und Maschinelles Lernen. Erfahren in Python-Programmierung, Webentwicklung und Datenverarbeitung mit praktischer Erfahrung in realen Projekten.",
      aboutTitle: "Über Mich",
      aboutSubtitle: "KI/ML-Enthusiast & Full-Stack-Webentwickler",
      aboutP1:
        "Guten Tag! Ich bin Pavan Sai Charan Nayudu, Student der Informationstechnologie am SRKREC mit Leidenschaft für intelligente Software und moderne Full-Stack-Webentwicklung (React, Node.js, Express, MongoDB, Python, Flask).",
      aboutP2:
        "Ich habe Praktika in Full-Stack-Webentwicklung bei Blackbuck Engineers und KI/Data Science am IIDT absolviert. Mein Fokus liegt auf skalierbaren, datengetriebenen Weblösungen.",
      skillsTitle: "Technische Fähigkeiten & Technologien",
      projectsTitle: "AUSGEWÄHLTE PROJEKTE",
      experienceTitle: "BERUFSERFAHRUNG",
      educationTitle: "AUSBILDUNG & STUDIUM",
      achievementsTitle: "ZERTIFIKATE & SKILL BADGES",
      getInTouch: "KONTAKT AUFNEHMEN",
      sayHi: "[E-MAIL SENDEN]",
      currently: "[AKTUELLER STATUS]",
      currentlyDesc:
        "B.Tech (IT) @ SRKREC & Full-Stack-Entwickler-Praktikant @ Blackbuck Engineers",
      readMore: "Projekt ansehen",
      sendMessage: "Nachricht senden",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      messagePlaceholder: "Schreiben Sie Ihre Nachricht hier...",
      messageSent: "Nachricht erfolgreich gesendet! Ich melde mich in Kürze bei Ihnen.",
    },
  },
};
