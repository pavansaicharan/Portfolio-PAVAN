import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import projectMovie from '../assets/project-movie.jpg';
import projectFlight from '../assets/project-flight.jpg';
import projectPowerBI from '../assets/project-powerbi.jpg';

export default function ProjectsSection() {
  const { t } = useLang();
  const revealRef = useScrollReveal();

  const projects = [
    {
      id: 1,
      image: projectMovie,
      title: t('proj1Title'),
      date: t('proj1Date'),
      description: t('proj1Desc'),
      tags: ['Python', 'OCR (Tesseract)', 'Streamlit', 'Data Processing'],
    },
    {
      id: 2,
      image: projectFlight,
      title: t('proj2Title'),
      date: t('proj2Date'),
      description: t('proj2Desc'),
      tags: ['Machine Learning', 'Random Forest', 'Flask', '5G Security'],
    },
    {
      id: 3,
      image: projectPowerBI,
      title: t('proj3Title'),
      date: t('proj3Date'),
      description: t('proj3Desc'),
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'],
    },
    {
      id: 4,
      image: projectFlight,
      title: t('proj4Title'),
      date: t('proj4Date'),
      description: t('proj4Desc'),
      tags: ['Flask', 'Playwright', 'SQLite', 'Automation'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-8">
      <div ref={revealRef} className="reveal max-w-6xl mx-auto">
        <h2 className="section-heading mb-16">{t('projectsTitle')}</h2>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-3xl overflow-hidden bg-card/95 border border-gold shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 stagger-${
                (index % 4) + 1
              } flex flex-col justify-between`}
            >
              <div>
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/60 text-primary border border-primary/30 backdrop-blur-sm">
                    {project.date}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
