import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import teamValidation from './validation';
import teamController from './Controller';

const teamRouter = Router();

teamRouter
  .post('/', validationHandler(teamValidation.create), teamController.create)
  .get('/', validationHandler(teamValidation.read), teamController.read)
  .get('/:id', validationHandler(teamValidation.read), teamController.read)
  .put('/', validationHandler(teamValidation.update), teamController.update)
  .delete('/:id', validationHandler(teamValidation.delete), teamController.delete);

export default teamRouter;
