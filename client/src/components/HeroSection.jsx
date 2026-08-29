import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImg from '../assets/hero-portrait.png';
import { Instagram, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLang();
  const revealRef = useScrollReveal();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div
        ref={revealRef}
        className="reveal max-w-7xl mx-auto px-4 sm:px-8 w-full grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Portrait Image Column */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-72 sm:w-80 aspect-[3/4] rounded-2xl overflow-hidden border-gold-bright shadow-2xl group">
            <img
              src={heroImg}
              alt="Pavan Sai Charan Nayudu portrait"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Text & Action Column */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary border border-gold text-xs font-semibold text-primary uppercase tracking-widest">
            AI / ML & Full Stack Web Development
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground leading-tight">
            {t('heroGreeting')}
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
            {t('heroDesc')}
          </p>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-1">
            <a
              href="tel:+918500756091"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border hover:text-primary hover:border-primary transition-colors"
            >
              <Phone size={13} className="text-primary" />
              <span>(+91) 8500756091</span>
            </a>
            <a
              href="mailto:pavansaicharan2004@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border hover:text-primary hover:border-primary transition-colors"
            >
              <Mail size={13} className="text-primary" />
              <span>pavansaicharan2004@gmail.com</span>
            </a>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://example.com/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-foreground text-foreground font-semibold text-sm tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 press-active btn-glow rounded-md"
            >
              {t('downloadCv')}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-foreground text-foreground font-semibold text-sm tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 press-active btn-glow rounded-md"
            >
              {t('contactInfo')}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Connect:</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors press-active"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors press-active"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors press-active"
              title="Instagram"
            >
              <Instagram size={18} />
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
