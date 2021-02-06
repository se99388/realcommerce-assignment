import { Router } from 'express';
import api from './api';
import auth from './auth';
import {protect} from './middlewares';

const router = Router();

router.use('/api', protect, api);
router.use('/auth', auth);

export default router;
