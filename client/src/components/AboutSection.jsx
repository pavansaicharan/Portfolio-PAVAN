import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import aboutImg from '../assets/about-portrait.png';

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "C", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Web",
    skills: ["React", "Node.js", "Express.js", "Flask", "Streamlit", "MERN Stack"],
  },
  {
    category: "Databases & Tools",
    skills: ["MongoDB", "SQL", "SQLite", "Playwright", "REST APIs"],
  },
  {
    category: "AI, ML & Core",
    skills: ["Machine Learning", "OCR (Tesseract)", "Data Preprocessing", "Model Evaluation"],
  },
];

export default function AboutSection() {
  const { t } = useLang();
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-secondary/20">
      <div
        ref={revealRef}
        className="reveal max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center"
      >
        {/* Bio & Skills Column */}
        <div className="md:col-span-3 space-y-6">
          <div className="space-y-2">
            <h2 className="section-heading text-left">{t('aboutTitle')}</h2>
            <h3 className="text-xl text-primary font-semibold flex items-center gap-2">
              <span>🏆</span> {t('aboutSubtitle')}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            {t('aboutP1')}
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            {t('aboutP2')}
          </p>

          {/* Skill Tag Categories */}
          <div className="pt-4 space-y-4">
            <h4 className="text-lg text-primary font-semibold flex items-center gap-2">
              <span>🎯</span> {t('skillsTitle')}
            </h4>

            <div className="space-y-3">
              {skillCategories.map((group) => (
                <div key={group.category} className="space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-card border-gold text-xs sm:text-sm font-medium text-foreground hover:bg-primary/20 hover:border-primary transition-all duration-200 press-active shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Language proficiency badge */}
            <div className="pt-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Languages:</span>
              <span className="px-2.5 py-1 rounded bg-secondary border border-border">Telugu (Native)</span>
              <span className="px-2.5 py-1 rounded bg-secondary border border-border">English (Fluent)</span>
            </div>
          </div>
        </div>

        {/* Portrait Image Column */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-64 sm:w-72 aspect-[3/5] rounded-3xl overflow-hidden border-gold-bright shadow-2xl group">
            <img
                src={aboutImg}
                alt="Pavan Sai Charan Nayudu"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
{/*className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"*/}