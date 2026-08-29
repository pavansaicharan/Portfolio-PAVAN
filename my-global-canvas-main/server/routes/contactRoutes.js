import express from 'express';
import {
  submitContactMessage,
  getContactMessages,
} from '../controllers/contactController.js';

const router = express.Router();

// Submit a new contact message
router.post('/', submitContactMessage);

// View contact messages
router.get('/', getContactMessages);

export default router;
