import { Router } from 'express';

import {
  teamRouter,
  memberRouter,
  contactRouter,
  updateRouter,
  grievanceRouter,
  enrollmentRouter,
  testRouter,
} from '../controllers';

const router = Router();

router
  .use('/team', teamRouter)
  .use('/member', memberRouter)
  .use('/contact', contactRouter)
  .use('/update', updateRouter)
  .use('/grievance', grievanceRouter)
  .use('/enrollment', enrollmentRouter)
  .use('/test', testRouter);

export default router;
