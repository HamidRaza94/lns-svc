import { Router } from 'express';
import { teamRouter, memberRouter, contactRouter, updateRouter, grievanceRouter } from '../controllers';

const router = Router();

router
  .use('/team', teamRouter)
  .use('/member', memberRouter)
  .use('/contact', contactRouter)
  .use('/update', updateRouter)
  .use('/grievance', grievanceRouter);

export default router;
