import { Router } from 'express';

import {
  updateRouter,
  grievanceRouter,
  enrollmentRouter,
} from '../controllers';

const router = Router();

router
  .use('/update', updateRouter)
  .use('/grievance', grievanceRouter)
  .use('/enrollment', enrollmentRouter);

export default router;
