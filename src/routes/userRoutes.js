import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import authorizeRoles from '../middlewares/roleMiddleware.js';

const router = express.Router();

// only admin can access this route

router.get('/admin', authMiddleware,authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Admin route' });
});

// only manager can accesss this route
router.get('/manager', authMiddleware,authorizeRoles('admin','manager'), (req, res) => {
  res.json({ message: 'Manager route' });
});

// only user can access this route
router.get('/user', authMiddleware,authorizeRoles('admin','manager','user'), (req, res) => {
  res.json({ message: 'User route' });
});

export default router;