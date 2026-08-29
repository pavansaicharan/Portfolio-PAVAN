import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import achHackathon from '../assets/achievement-hackathon.jpg';
import achStudent from '../assets/achievement-student.jpg';
import achPitch from '../assets/achievement-pitch.jpg';
import { Award, CheckCircle2 } from 'lucide-react';

export default function AchievementsSection() {
  const { t } = useLang();
  const revealRef = useScrollReveal();

  const achievements = [
    {
      id: 1,
      image: achHackathon,
      badge: 'CLOUD SKILLS',
      title: t('ach1Title'),
      subtitle: t('ach1Sub'),
      description: t('ach1Desc'),
      org: t('ach1Org'),
      points: [
        'Hands-on skill badges from Google Cloud Skills Boost',
        'Practical labs in cloud infrastructure & deployment',
        'Real-world cloud environment configuration',
      ],
    },
    {
      id: 2,
      image: achStudent,
      badge: 'IBM CERTIFIED',
      title: t('ach2Title'),
      subtitle: t('ach2Sub'),
      description: t('ach2Desc'),
      org: t('ach2Org'),
      points: [
        'Python 101 for Data Science (Jul 2025)',
        'SQL and Relational Databases 101 (Aug 2025)',
        'Data analysis, querying, and schema design',
      ],
    },
    {
      id: 3,
      image: achPitch,
      badge: 'UDEMY CERTIFIED',
      title: t('ach3Title'),
      subtitle: t('ach3Sub'),
      description: t('ach3Desc'),
      org: t('ach3Org'),
      points: [
        'Web Developer Bootcamp with Flask & Python (Dec 2024)',
        'Complete Python Developer (Aug 2025)',
        'Full-stack web apps and REST API development',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-8 bg-secondary/15">
      <div ref={revealRef} className="reveal max-w-7xl mx-auto">
        <h2 className="section-heading mb-16">{t('achievementsTitle')}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`rounded-2xl overflow-hidden bg-card border-gold shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 stagger-${
                index + 1
              } flex flex-col justify-between`}
            >
              <div>
                {/* Event Image with Badge */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Award size={13} />
                    {achievement.badge}
                  </span>
                </div>

                {/* Achievement Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                    {achievement.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  <ul className="pt-2 space-y-1 text-xs text-muted-foreground">
                    {achievement.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-primary shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="pt-3 flex items-center justify-between text-xs text-muted-foreground border-t border-border/60">
                  <span className="font-semibold text-primary">{achievement.org}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
