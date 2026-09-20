import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLang();
  const revealRef = useScrollReveal();

  const cvUrl = 'https://drive.google.com/file/d/18y9HKQGQuzEAxddlNTScSfgceaZdi5C3/view?usp=sharing';

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div
        ref={revealRef}
        className="reveal w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="space-y-8 lg:space-y-10">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary border border-gold text-xs font-semibold text-primary uppercase tracking-widest">
            Full Stack Developer • AI & ML Enthusiast
          </div>

          <h1
            className="text-[clamp(3.2rem,7vw,9rem)] font-bold tracking-[-0.06em] text-foreground leading-[0.9] max-w-[1500px]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {t('heroGreeting')}
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg md:text-2xl leading-relaxed max-w-[1400px]">
            {t('heroDesc')}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground pt-1">
            <a
              href="tel:+918500756091"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border border-border hover:text-primary hover:border-primary transition-colors"
            >
              <Phone size={15} className="text-primary" />
              <span>(+91) 8500756091</span>
            </a>
            <a
              href="mailto:pavansaicharan2004@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border border-border hover:text-primary hover:border-primary transition-colors"
            >
              <Mail size={15} className="text-primary" />
              <span>pavansaicharan2004@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 border border-foreground text-foreground font-semibold text-sm tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 press-active btn-glow rounded-md"
            >
              {t('downloadCv')}
            </a>
            <a
              href="#contact"
              className="px-7 py-4 border border-foreground text-foreground font-semibold text-sm tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 press-active btn-glow rounded-md"
            >
              {t('contactInfo')}
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border/50 max-w-[1200px]">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Connect:</span>
            <a
              href="https://github.com/pavansaicharan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors press-active"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-sai-charan-nayudu-001713370/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors press-active"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:pavansaicharan2004@gmail.com"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors press-active"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
