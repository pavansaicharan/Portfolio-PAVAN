import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import projectMovie from '../assets/project-movie.jpg';
import projectFlight from '../assets/project-flight.jpg';
import projectPowerBI from '../assets/project-powerbi.jpg';
import { ExternalLink } from 'lucide-react';

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
      <div ref={revealRef} className="reveal max-w-7xl mx-auto">
        <h2 className="section-heading mb-16">{t('projectsTitle')}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden bg-card border-gold shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 stagger-${
                (index % 4) + 1
              } flex flex-col justify-between`}
            >
              <div>
                {/* Project Image Header */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded bg-black/70 text-primary border border-primary/40 backdrop-blur-sm">
                    {project.date}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Tags & Action */}
              <div className="px-6 pb-6 pt-2 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2.5 rounded-xl bg-primary/10 border border-primary/40 text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center gap-2 press-active">
                  <span>{t('readMore')}</span>
                  <ExternalLink size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
