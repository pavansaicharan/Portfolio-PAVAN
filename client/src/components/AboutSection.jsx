import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
        className="reveal max-w-6xl mx-auto"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="section-heading text-left">{t('aboutTitle')}</h2>
            <h3 className="text-xl text-primary font-semibold flex items-center gap-2">
              <span>🏆</span> {t('aboutSubtitle')}
            </h3>
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <p>{t('aboutP1')}</p>
            <p>{t('aboutP2')}</p>
          </div>

          <div className="pt-2 space-y-4">
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

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Languages:</span>
              <span className="px-2.5 py-1 rounded bg-secondary border border-border">Telugu (Native)</span>
              <span className="px-2.5 py-1 rounded bg-secondary border border-border">English (Fluent)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}