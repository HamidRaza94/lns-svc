import { Router } from 'express';
import { teamRouter, contactRouter, updateRouter } from '../controllers';

const router = Router();

router
  .use('/team', teamRouter)
  .use('/contact', contactRouter)
  .use('/update', updateRouter);

export default router;
