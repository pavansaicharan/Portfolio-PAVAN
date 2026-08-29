import { portfolioData } from '../data/portfolioData.js';

// Helper to format localized fields
const formatLocalized = (item, lang = 'en') => {
  const selectedLang = lang === 'de' ? 'de' : 'en';
  const result = { ...item };

  for (const [key, value] of Object.entries(item)) {
    if (value && typeof value === 'object' && ('en' in value || 'de' in value)) {
      result[key] = value[selectedLang] || value.en;
    }
  }
  return result;
};

/**
 * @desc   Get complete portfolio data
 * @route  GET /api/portfolio
 */
export const getPortfolioData = (req, res) => {
  const lang = req.query.lang || 'en';
  
  const localizedProjects = portfolioData.projects.map((p) => formatLocalized(p, lang));
  const localizedExperience = portfolioData.experience.map((e) => formatLocalized(e, lang));
  const localizedEducation = portfolioData.education.map((e) => formatLocalized(e, lang));
  const localizedAchievements = portfolioData.achievements.map((a) => formatLocalized(a, lang));
  const translations = portfolioData.translations[lang] || portfolioData.translations.en;

  res.status(200).json({
    success: true,
    data: {
      profile: portfolioData.profile,
      projects: localizedProjects,
      experience: localizedExperience,
      education: localizedEducation,
      achievements: localizedAchievements,
      translations,
    },
  });
};

/**
 * @desc   Get projects list
 * @route  GET /api/portfolio/projects
 */
export const getProjects = (req, res) => {
  const lang = req.query.lang || 'en';
  const projects = portfolioData.projects.map((p) => formatLocalized(p, lang));
  res.status(200).json({ success: true, count: projects.length, data: projects });
};

/**
 * @desc   Get work experience
 * @route  GET /api/portfolio/experience
 */
export const getExperience = (req, res) => {
  const lang = req.query.lang || 'en';
  const experience = portfolioData.experience.map((e) => formatLocalized(e, lang));
  res.status(200).json({ success: true, count: experience.length, data: experience });
};

/**
 * @desc   Get education history
 * @route  GET /api/portfolio/education
 */
export const getEducation = (req, res) => {
  const lang = req.query.lang || 'en';
  const education = portfolioData.education.map((e) => formatLocalized(e, lang));
  res.status(200).json({ success: true, count: education.length, data: education });
};

/**
 * @desc   Get honors and achievements
 * @route  GET /api/portfolio/achievements
 */
export const getAchievements = (req, res) => {
  const lang = req.query.lang || 'en';
  const achievements = portfolioData.achievements.map((a) => formatLocalized(a, lang));
  res.status(200).json({ success: true, count: achievements.length, data: achievements });
};
