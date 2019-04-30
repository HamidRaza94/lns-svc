import { Router } from 'express';
import { contactRouter, updateRouter } from '../controllers';

const router = Router();

router.use('/contact', contactRouter).use('/update', updateRouter);

export default router;
