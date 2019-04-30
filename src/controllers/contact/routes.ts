import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import contactValidation from './validation';
import contactController from './Controller';

const router = Router();

router
  .post(
    '/',
    validationHandler(contactValidation.create),
    contactController.create
  )
  .get('/', validationHandler(contactValidation.read), contactController.read);

export default router;
