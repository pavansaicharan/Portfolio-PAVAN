import express from 'express';
import cors from 'cors';
import portfolioRoutes from '../server/routes/portfolioRoutes.js';
import contactRoutes from '../server/routes/contactRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount API routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
  });
});

export default app;
