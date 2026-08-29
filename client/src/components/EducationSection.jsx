import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import eduMasters from '../assets/edu-masters.jpg';
import eduBachelors from '../assets/edu-bachelors.jpg';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  const { t } = useLang();
  const revealRef = useScrollReveal();

  const education = [
    {
      id: 1,
      image: eduMasters,
      degree: t('edu1Degree'),
      school: t('edu1School'),
      date: t('edu1Date'),
      gradeBadge: "CGPA: 8.02 / 10.0",
      description: t('edu1Desc'),
    },
    {
      id: 2,
      image: eduBachelors,
      degree: t('edu2Degree'),
      school: t('edu2School'),
      date: t('edu2Date'),
      gradeBadge: "Marks: 954 / 1000",
      description: t('edu2Desc'),
    },
    {
      id: 3,
      image: eduBachelors,
      degree: t('edu3Degree'),
      school: t('edu3School'),
      date: t('edu3Date'),
      gradeBadge: "Marks: 530 / 600",
      description: t('edu3Desc'),
    },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-8">
      <div ref={revealRef} className="reveal max-w-6xl mx-auto">
        <h2 className="section-heading mb-16">{t('educationTitle')}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl overflow-hidden bg-card border-gold shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Campus Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded bg-black/70 text-primary border border-primary/40 backdrop-blur-sm flex items-center gap-1.5">
                    <GraduationCap size={14} />
                    {edu.school}
                  </span>
                </div>

                {/* Education Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                    <Award size={13} />
                    <span>{edu.gradeBadge}</span>
                  </div>

                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium pt-1">
                    <Calendar size={13} className="text-primary" /> {edu.date}
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
