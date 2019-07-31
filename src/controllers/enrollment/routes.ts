import { Router } from 'express';

// import validationHandler from '../../libs/routes/validationHandler';
// import enrollmentValidation from './validation';
import enrollmentController from './Controller';

const enrollmentRouter = Router();

enrollmentRouter
  .post(
    '/',
    // validationHandler(enrollmentValidation.create),
    enrollmentController.create)
  .get(
    '/',
    enrollmentController.read,
  )
  .get(
    '/:id',
    enrollmentController.read,
  )
  .put(
    '/:id',
    enrollmentController.update,
  )
  .delete(
    '/:id',
  )

export default enrollmentRouter;
