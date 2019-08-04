import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import enrollmentValidation from './validation';
import enrollmentController from './Controller';

const enrollmentRouter = Router();

enrollmentRouter
  .post(
    '/',
    validationHandler(enrollmentValidation.create),
    enrollmentController.create)
  .post(
    '/bulk',
    enrollmentController.bulkCreate,
  )
  .get(
    '/',
    validationHandler(enrollmentValidation.read),
    enrollmentController.read,
  )
  .get(
    '/:id',
    validationHandler(enrollmentValidation.read),
    enrollmentController.read,
  )
  .put(
    '/:id',
    validationHandler(enrollmentValidation.update),
    enrollmentController.update,
  )
  .delete(
    '/:id',
    validationHandler(enrollmentValidation.delete),
    enrollmentController.delete,
  );

export default enrollmentRouter;
