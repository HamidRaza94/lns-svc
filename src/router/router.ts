import { Router } from 'express';

import {
  updateRouter,
  grievanceRouter,
  enrollmentRouter,
  userRouter,
} from '../controllers';

const router = Router();

router
  .use('/update', updateRouter)
  .use('/grievance', grievanceRouter)
  .use('/enrollment', enrollmentRouter)
  .use('/user', userRouter);

export default router;
