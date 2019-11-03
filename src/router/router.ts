import { Router } from 'express';

import {
  centerRouter,
  contactRouter,
  courseRouter,
  teamRouter,
  memberRouter,
  updateRouter,
  grievanceRouter,
  enrollmentRouter,
} from '../controllers';

const router = Router();

router
  .use('/center', centerRouter)
  .use('/contact', contactRouter)
  .use('/course', courseRouter)
  .use('/team', teamRouter)
  .use('/member', memberRouter)
  .use('/update', updateRouter)
  .use('/grievance', grievanceRouter)
  .use('/enrollment', enrollmentRouter);

export default router;
