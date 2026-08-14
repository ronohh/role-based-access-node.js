import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// only admin can access this route

router.get('/admin', authMiddleware, (req, res) => {
  res.json({ message: 'Admin route' });
});

// only manager can accesss this route
router.get('/manager', authMiddleware, (req, res) => {
  res.json({ message: 'Manager route' });
});

// only user can access this route
router.get('/user', authMiddleware, (req, res) => {
  res.json({ message: 'User route' });
});

export default router;