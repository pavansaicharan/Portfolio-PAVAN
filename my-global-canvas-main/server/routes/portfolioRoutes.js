import express from 'express';
import {
  getPortfolioData,
  getProjects,
  getExperience,
  getEducation,
  getAchievements,
} from '../controllers/portfolioController.js';

const router = express.Router();

// Portfolio overview
router.get('/', getPortfolioData);

// Individual resources
router.get('/projects', getProjects);
router.get('/experience', getExperience);
router.get('/education', getEducation);
router.get('/achievements', getAchievements);

export default router;
