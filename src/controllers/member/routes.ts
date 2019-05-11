import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import memberValidation from './validation';
import memberController from './Controller';

const memberRouter = Router();

memberRouter
  .post('/', validationHandler(memberValidation.create), memberController.create)
  .get('/', validationHandler(memberValidation.read), memberController.read)
  .get('/:id', validationHandler(memberValidation.read), memberController.read)
  .put('/', validationHandler(memberValidation.update), memberController.update)
  .delete(
    '/:id',
    validationHandler(memberValidation.delete),
    memberController.delete
  );

export default memberRouter;
