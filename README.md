
# Portfolio-PavanNayudu
My Portfolio [React, Express, Vercel for deployment]

---

## 📖 Overview
A clean, full‑stack portfolio web application built with **React (JavaScript / JSX)** on the frontend and **Express.js (Node.js)** on the backend.  
It showcases projects, experience, education, and achievements, with a modern responsive design and multilingual support.

---

## 📁 Project Architecture

```
my-global-canvas-main/
├── client/                     # Frontend (React 18, Vite, Tailwind CSS, Lucide Icons)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images (portraits, project screenshots, campus, certificates)
│   │   ├── components/         # Clean modular React components
│   │   │   ├── Navbar.jsx      # Sticky navbar with bilingual switcher (EN / DE)
│   │   │   ├── HeroSection.jsx # Intro, portrait, resume CTA, and social links
│   │   │   ├── AboutSection.jsx # Bio, skills grid (Python, SQL, React, Power BI, etc.)
│   │   │   ├── ProjectsSection.jsx # Featured projects with tags and links
│   │   │   ├── ExperienceSection.jsx # Professional timeline
│   │   │   ├── EducationSection.jsx # Academic milestones
│   │   │   ├── AchievementsSection.jsx # Awards and hackathons
│   │   │   └── ContactSection.jsx # Contact form connected to Express API
│   │   ├── context/
│   │   │   └── LanguageContext.jsx # Language state provider (English 🇮🇳 / German 🇩🇪)
│   │   ├── hooks/
│   │   │   └── useScrollReveal.js # IntersectionObserver for smooth fade-in animations
│   │   ├── App.jsx             # Main layout
│   │   ├── main.jsx            # React root mount
│   │   └── index.css           # Modern dark theme with gold/amber accents
│   ├── vite.config.js          # Vite config with API proxy to localhost:5000
│   └── package.json
│
├── server/                     # Backend (Node.js, Express.js, CORS, Morgan)
│   ├── controllers/
│   │   ├── portfolioController.js # Serves structured portfolio data
│   │   └── contactController.js   # Handles contact inquiries with validation
│   ├── routes/
│   │   ├── portfolioRoutes.js  # GET /api/portfolio, GET /api/portfolio/projects, etc.
│   │   └── contactRoutes.js    # POST /api/contact, GET /api/contact
│   ├── data/
│   │   └── portfolioData.js    # Centralized portfolio data and translations
│   ├── server.js               # Express application entry point
│   └── package.json
│
├── package.json                # Root coordinator
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
Run from the project root:
```bash
npm run install:all
```
*(Or install separately inside `client` and `server` folders using `npm install`)*

---

### 2. Run in Development Mode
To run both the **React Frontend** and **Express Backend** concurrently with a single command:
```bash
npm run dev
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

### 3. Run Separately (Optional)

**Run only the Frontend:**
```bash
npm run client
# or: cd client && npm run dev
```

**Run only the Backend Server:**
```bash
npm run server
# or: cd server && npm run dev
```

---

## 🛠️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Server status and uptime |
| `GET` | `/api/portfolio?lang=en` | Full portfolio payload in specified language |
| `GET` | `/api/portfolio/projects` | List of projects with categories and tags |
| `GET` | `/api/portfolio/experience`| Career experience timeline |
| `GET` | `/api/portfolio/education` | Academic background |
| `GET` | `/api/portfolio/achievements`| List of awards & hackathons |
| `POST`| `/api/contact` | Submit contact message with validation |
| `GET` | `/api/contact` | View received inquiries |

---

## 🌟 Key Features
- **Human-Crafted Codebase**: Clean JavaScript/JSX without unnecessary layers or AI boilerplate.
- **Multilingual Support**: Real-time toggle between **English (EN)** and **German (DE)**.
- **Full-Stack Integration**: Interactive contact form communicates directly with the Express REST API.
- **Modern Responsive Design**: Dark theme with gold accents, smooth scroll animations, and mobile-friendly navigation.
