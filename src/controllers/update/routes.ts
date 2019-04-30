import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import updateValidation from './validation';
import updateController from './Controller';

const router = Router();

router
  .post(
    '/',
    validationHandler(updateValidation.create),
    updateController.create
  )
  .get('/', validationHandler(updateValidation.read), updateController.read)
  .get(
    '/:type',
    validationHandler(updateValidation.read),
    updateController.read
  )
  .put('/', validationHandler(updateValidation.update), updateController.update)
  .delete(
    '/:id',
    validationHandler(updateValidation.delete),
    updateController.delete
  );

export default router;
