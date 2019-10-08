import { Router } from 'express';

import { config } from '../../config';
// import validationHandler from '../../libs/routes/validationHandler';
// import contactValidation from './validation';
import contactController from './Controller';

const contactRouter = Router();

contactRouter
  .post(
    '/:enrollmentId',
    config.MULTER.single('attachment'),
    contactController.create
  )
  .post(
    '/',
    config.MULTER.single('attachment'),
    contactController.create
  )

export default contactRouter;
