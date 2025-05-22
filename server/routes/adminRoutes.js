import express from 'express';
import { createAdmin, getAllUsers } from '../controllers/adminController.js';
import authMiddleware from '../middleware/auth.js';
import adminMiddleware from '../middleware/admin.js';

const router = express.Router();

router.post('/create', authMiddleware, adminMiddleware, createAdmin);
router.get('/users', authMiddleware, adminMiddleware, getAllUsers);

export default router;