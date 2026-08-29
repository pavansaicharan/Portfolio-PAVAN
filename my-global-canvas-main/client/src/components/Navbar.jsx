import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'aboutMe', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'achievements', href: '#achievements' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-md bg-primary flex items-center justify-center font-bold text-primary-foreground text-lg press-active transition-transform group-hover:scale-105">
            P
          </span>
          <span className="text-foreground font-semibold text-lg tracking-wider hidden sm:block">
            PAVAN
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 press-active"
            >
              {t(item.key)}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 ml-2 pl-2 border-l border-border">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded text-base transition-all duration-150 ${
                lang === 'en'
                  ? 'bg-secondary text-foreground font-semibold ring-1 ring-primary'
                  : 'opacity-60 hover:opacity-100'
              }`}
              title="Switch to English"
            >
              🇮🇳 EN
            </button>
            <button
              onClick={() => setLang('de')}
              className={`px-2 py-1 rounded text-base transition-all duration-150 ${
                lang === 'de'
                  ? 'bg-secondary text-foreground font-semibold ring-1 ring-primary'
                  : 'opacity-60 hover:opacity-100'
              }`}
              title="Auf Deutsch wechseln"
            >
              🇩🇪 DE
            </button>
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold btn-glow press-active"
          >
            {t('contact')}
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={closeMobileMenu}
              className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t(item.key)}
            </a>
          ))}

          <div className="pt-3 border-t border-border flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setLang('en');
                  closeMobileMenu();
                }}
                className={`px-3 py-1.5 rounded text-sm ${
                  lang === 'en' ? 'bg-secondary font-semibold ring-1 ring-primary' : 'opacity-60'
                }`}
              >
                🇮🇳 English
              </button>
              <button
                onClick={() => {
                  setLang('de');
                  closeMobileMenu();
                }}
                className={`px-3 py-1.5 rounded text-sm ${
                  lang === 'de' ? 'bg-secondary font-semibold ring-1 ring-primary' : 'opacity-60'
                }`}
              >
                🇩🇪 Deutsch
              </button>
            </div>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
            >
              {t('contact')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
