import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const { t } = useLang();
  const revealRef = useScrollReveal();

  const experiences = [
    {
      id: 1,
      type: t('exp1Type'),
      title: t('exp1Title'),
      company: t('exp1Company'),
      date: t('exp1Date'),
      description: t('exp1Desc'),
      highlights: [
        "Developed web applications using MERN stack (MongoDB, Express, React, Node.js)",
        "Designed and implemented backend APIs and database integration",
        "Built responsive user interfaces and handled client-server communication",
        "Gained hands-on experience in full-stack development workflows",
      ],
    },
    {
      id: 2,
      type: t('exp2Type'),
      title: t('exp2Title'),
      company: t('exp2Company'),
      date: t('exp2Date'),
      description: t('exp2Desc'),
      highlights: [
        "Learned fundamentals of Artificial Intelligence, Machine Learning, and Data Science",
        "Worked with datasets for data preprocessing, cleaning, and analysis",
        "Applied supervised and unsupervised learning techniques",
        "Gained understanding of model evaluation and performance metrics",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 bg-secondary/10">
      <div ref={revealRef} className="reveal max-w-5xl mx-auto">
        <h2 className="section-heading mb-16">{t('experienceTitle')}</h2>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`md:flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`md:w-[45%] ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="p-7 rounded-3xl bg-card/95 border border-gold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`inline-flex items-center gap-1.5 text-[11px] text-primary font-semibold uppercase tracking-[0.16em] mb-3 px-2.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 ${
                          isEven ? 'md:ml-auto' : ''
                        }`}
                      >
                        <Briefcase size={13} />
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium text-sm mt-1">{exp.company}</p>

                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        {exp.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            • {bullet}
                          </li>
                        ))}
                      </ul>

                      <p className="md:hidden flex items-center gap-1.5 text-xs text-muted-foreground mt-4 pt-3 border-t border-border">
                        <Calendar size={13} /> {exp.date}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex md:w-[10%] justify-center">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md shadow-primary/40 ring-2 ring-primary/20" />
                  </div>

                  <div
                    className={`hidden md:block md:w-[45%] ${
                      isEven ? 'md:pl-12 text-left' : 'md:pr-12 text-right'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground bg-card/80 px-4 py-2 rounded-full border border-border">
                      <Calendar size={14} className="text-primary" />
                      {exp.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
