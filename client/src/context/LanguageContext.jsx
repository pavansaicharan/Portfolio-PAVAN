import React, { createContext, useContext, useState } from 'react';

// Local translation dictionary for Pavan Sai Charan Nayudu
export const translations = {
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
    sendingMessage: "Sending...",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email Address",
    messagePlaceholder: "Write your message here...",
    messageSuccess: "Thank you for reaching out! Your message has been received.",

    // Projects
    proj1Title: "AI-Based Medical Document Processing System",
    proj1Date: "2024 | Python, OCR, Streamlit",
    proj1Desc: "Developed a system for processing medical documents using OCR (Tesseract) to extract and analyze text data. Implemented preprocessing techniques and built an interactive Streamlit interface for efficient document handling.",

    proj2Title: "Intrusion Detection System for 5G Networks",
    proj2Date: "2024 – 2025 | Machine Learning, Flask",
    proj2Desc: "Developed a machine learning-based intrusion detection system to identify malicious network traffic using Random Forest and Decision Trees. Built a Flask web app for real-time traffic classification.",

    proj3Title: "FreelanceNex Web Application",
    proj3Date: "2024 – 2025 | MERN Stack, MongoDB",
    proj3Desc: "Developed a full-stack freelance platform connecting clients and freelancers. Implemented role-based authentication, project management, and real-time communication with REST APIs.",

    proj4Title: "Automated Attendance Tracker",
    proj4Date: "2024 | Flask, Playwright, SQLite",
    proj4Desc: "Designed an automated attendance tracking system using Flask and browser automation with Playwright. Implemented data extraction and SQLite storage mechanisms for efficient record management.",

    // Experience
    exp1Type: "Internship",
    exp1Title: "Full Stack Web Development Intern",
    exp1Company: "Blackbuck Engineers Pvt. Ltd",
    exp1Date: "01/05/2025 – 15/07/2025 | Hyderabad, India",
    exp1Desc: "Developed web applications using MERN stack (MongoDB, Express, React, Node.js). Designed and implemented backend APIs and database integration. Built responsive user interfaces and handled client-server communication.",

    exp2Type: "Internship",
    exp2Title: "AI, Machine Learning & Data Science Intern",
    exp2Company: "International Institute of Digital Technologies (IIDT)",
    exp2Date: "01/04/2024 – 30/05/2024 | India",
    exp2Desc: "Learned fundamentals of Artificial Intelligence, Machine Learning, and Data Science. Preprocessed, cleaned, and analyzed datasets. Applied supervised and unsupervised learning techniques and evaluated model metrics.",

    // Education
    edu1Degree: "Information Technology (IT) - B.Tech",
    edu1School: "Sagi Rama Krishnam Raju Engineering College (SRKREC)",
    edu1Date: "12/07/2022 – CURRENT | Bhimavaram, India",
    edu1Desc: "Final Grade: 8.02 / 10.0 CGPA. Core focus on Artificial Intelligence, Machine Learning, Data Structures, Algorithms, and Full Stack Web Development.",

    edu2Degree: "Intermediate (MPC)",
    edu2School: "Sasi Junior College",
    edu2Date: "12/06/2020 – 12/04/2022 | Eluru, India",
    edu2Desc: "Final Grade: 954 / 1000 (95.4%). Higher secondary coursework in Mathematics, Physics, and Chemistry.",

    edu3Degree: "Secondary School Certificate (SSC)",
    edu3School: "Sasi E.M High School",
    edu3Date: "12/06/2019 – 24/04/2020 | Eluru, India",
    edu3Desc: "Final Grade: 530 / 600. Secondary education with strong distinction in science, mathematics, and computers.",

    // Achievements / Certifications
    ach1Title: "Google Cloud Skill Badges",
    ach1Sub: "Cloud Infrastructure & Deployment",
    ach1Desc: "Earned hands-on skill badges from Google Cloud Skills Boost demonstrating practical experience in cloud technologies, real-world lab environments, and data tasks.",
    ach1Org: "Google Cloud Skills Boost",

    ach2Title: "Python for Data Science & Relational Databases",
    ach2Sub: "IBM Certified (Jul & Aug 2025)",
    ach2Desc: "Completed Python 101 for Data Science and SQL & Relational Databases 101, mastering data analysis workflows, query optimization, and schema design.",
    ach2Org: "IBM Skills Network",

    ach3Title: "Web Developer Bootcamp & Python Developer",
    ach3Sub: "Udemy Certified (Dec 2024 / Aug 2025)",
    ach3Desc: "Completed comprehensive bootcamps in Python development, Flask web applications, full-stack architectures, and REST API development.",
    ach3Org: "Udemy",
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
    sendingMessage: "Wird gesendet...",
    namePlaceholder: "Ihr Name",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    messagePlaceholder: "Schreiben Sie Ihre Nachricht hier...",
    messageSuccess: "Nachricht erfolgreich gesendet! Ich melde mich in Kürze bei Ihnen.",

    // Projects
    proj1Title: "KI-basiertes System zur Verarbeitung medizinischer Dokumente",
    proj1Date: "2024 | Python, OCR, Streamlit",
    proj1Desc: "Entwicklung eines Systems zur Verarbeitung medizinischer Dokumente mit OCR (Tesseract) zur Textextraktion und interaktiver Streamlit-Benutzeroberfläche.",

    proj2Title: "Intrusion-Detection-System für 5G-Netzwerke",
    proj2Date: "2024 – 2025 | Maschinelles Lernen, Flask",
    proj2Desc: "Entwicklung eines ML-basierten Systems zur Erkennung von bösartigem Netzwerkverkehr in 5G-Netzen mit Random Forest und Flask-Webanwendung.",

    proj3Title: "FreelanceNex Web-Plattform",
    proj3Date: "2024 – 2025 | MERN Stack, MongoDB",
    proj3Desc: "Entwicklung einer Full-Stack-Freelancer-Plattform mit rollenbasierter Authentifizierung, Projektmanagement und Echtzeit-Kommunikation.",

    proj4Title: "Automatisierter Anwesenheitstracker",
    proj4Date: "2024 | Flask, Playwright, SQLite",
    proj4Desc: "Entwicklung eines automatisierten Anwesenheitstrackers mit Flask, Playwright Browser-Automatisierung und SQLite.",

    // Experience
    exp1Type: "Praktikum",
    exp1Title: "Full-Stack-Webentwickler Praktikant",
    exp1Company: "Blackbuck Engineers Pvt. Ltd",
    exp1Date: "01/05/2025 – 15/07/2025 | Hyderabad, Indien",
    exp1Desc: "Entwicklung von Webanwendungen mit MERN-Stack (MongoDB, Express, React, Node.js), API-Design und responsive UIs.",

    exp2Type: "Praktikum",
    exp2Title: "KI, Machine Learning & Data Science Praktikant",
    exp2Company: "International Institute of Digital Technologies (IIDT)",
    exp2Date: "01/04/2024 – 30/05/2024 | Indien",
    exp2Desc: "Grundlagen der Künstlichen Intelligenz, des Maschinellen Lernens und Data Science. Datenvorverarbeitung und Analyse.",

    // Education
    edu1Degree: "Informationstechnologie (IT) - B.Tech",
    edu1School: "Sagi Rama Krishnam Raju Engineering College (SRKREC)",
    edu1Date: "12/07/2022 – Heute | Bhimavaram, Indien",
    edu1Desc: "Abschlussnote: 8.02 / 10.0 CGPA. Schwerpunkte auf Künstliche Intelligenz, Maschinelles Lernen und Webentwicklung.",

    edu2Degree: "Höhere Sekundarschulbildung (MPC)",
    edu2School: "Sasi Junior College",
    edu2Date: "12/06/2020 – 12/04/2022 | Eluru, Indien",
    edu2Desc: "Abschlussnote: 954 / 1000 (95,4%) in Mathematik, Physik und Chemie.",

    edu3Degree: "Sekundarschulabschluss (SSC)",
    edu3School: "Sasi E.M High School",
    edu3Date: "12/06/2019 – 24/04/2020 | Eluru, Indien",
    edu3Desc: "Abschlussnote: 530 / 600 mit Fokus auf Mathematik und Naturwissenschaften.",

    // Achievements
    ach1Title: "Google Cloud Skill Badges",
    ach1Sub: "Cloud-Infrastruktur & Bereitstellung",
    ach1Desc: "Erwerb von praxisorientierten Google Cloud Skill Badges für Cloud-Infrastruktur und Datenaufgaben.",
    ach1Org: "Google Cloud Skills Boost",

    ach2Title: "Python für Data Science & Relationale Datenbanken",
    ach2Sub: "IBM Zertifiziert (Jul & Aug 2025)",
    ach2Desc: "Zertifiziert in Python 101 für Data Science und SQL & Relationale Datenbanken 101 von IBM.",
    ach2Org: "IBM Skills Network",

    ach3Title: "Web-Entwickler Bootcamp & Python Entwickler",
    ach3Sub: "Udemy Zertifiziert (Dez 2024 / Aug 2025)",
    ach3Desc: "Umfassende Zertifizierung in Python-Programmierung, Flask-Webframework und REST-APIs.",
    ach3Org: "Udemy",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
}
