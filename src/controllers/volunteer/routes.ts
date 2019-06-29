import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import volunteerValidation from './validation';
import volunteerController from './Controller';

const volunteerRouter = Router();

volunteerRouter
  .post(
    '/',
    validationHandler(volunteerValidation.create),
    volunteerController.create
  )
  .get('/', validationHandler(volunteerValidation.read), volunteerController.read);

export default volunteerRouter;
