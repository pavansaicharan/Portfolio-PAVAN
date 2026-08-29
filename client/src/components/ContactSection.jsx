import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Instagram, Github, Linkedin, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLang();
  const revealRef = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'Something went wrong. Please reach out directly via email.',
      });
    }
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-8">
      <div ref={revealRef} className="reveal max-w-5xl mx-auto space-y-16">
        {/* Massive Statement Heading */}
        <h2
          className="font-bold text-foreground text-center whitespace-nowrap leading-none select-none"
          style={{
            fontFamily: "'Arial Black', 'Impact', sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
            letterSpacing: '-0.02em',
          }}
        >
          {t('getInTouch')}
        </h2>

        {/* Quick Contact & Status Details */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="p-6 rounded-2xl bg-card border-gold space-y-2 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              {t('sayHi')}
            </p>
            <a
              href="mailto:pavansaicharan2004@gmail.com"
              className="text-foreground font-semibold text-sm hover:text-primary transition-colors inline-block break-all"
            >
              pavansaicharan2004@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-card border-gold space-y-2 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              Direct Phone
            </p>
            <a
              href="tel:+918500756091"
              className="text-foreground font-semibold text-base hover:text-primary transition-colors inline-block"
            >
              (+91) 8500756091
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-card border-gold space-y-2 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              {t('currently')}
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm font-medium">
              {t('currentlyDesc')}
            </p>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="max-w-2xl mx-auto bg-card border-gold-bright rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6 font-serif">
            {t('contact')}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t('namePlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t('emailPlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={t('messagePlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm resize-none"
              />
            </div>

            {status.success && (
              <div className="p-4 rounded-xl bg-green-950/50 border border-green-700 text-green-300 text-sm flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-green-400" />
                <span>{t('messageSuccess')}</span>
              </div>
            )}

            {status.error && (
              <div className="p-4 rounded-xl bg-red-950/50 border border-red-700 text-red-300 text-sm flex items-center gap-3">
                <AlertCircle size={20} className="shrink-0 text-red-400" />
                <span>{status.error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 btn-glow press-active disabled:opacity-50"
            >
              {status.loading ? (
                <span>{t('sendingMessage')}</span>
              ) : (
                <>
                  <span>{t('sendMessage')}</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social Links Footer */}
        <div className="flex justify-center items-center gap-8 pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors press-active"
          >
            <div className="p-3 rounded-full bg-secondary">
              <Github size={22} />
            </div>
            <span className="text-xs font-medium">GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-blue-400 transition-colors press-active"
          >
            <div className="p-3 rounded-full bg-secondary">
              <Linkedin size={22} />
            </div>
            <span className="text-xs font-medium">LinkedIn</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-pink-400 transition-colors press-active"
          >
            <div className="p-3 rounded-full bg-secondary">
              <Instagram size={22} />
            </div>
            <span className="text-xs font-medium">Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground pt-12 border-t border-border/40">
          <p>© {new Date().getFullYear()} Pavan Sai Charan Nayudu. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
