import { Router } from 'express';
import { updateRouter } from './controllers';

const router = Router();

router.use('/update', updateRouter);

export default router;
