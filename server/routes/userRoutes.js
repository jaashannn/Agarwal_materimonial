import express from 'express';
import { updateProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.put('/profile', authMiddleware, updateProfile);

export default router;