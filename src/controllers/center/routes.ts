import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import centerValidation from './validation';
import centerController from './Controller';

const centerRouter = Router();

centerRouter
  .post('/bulk', centerController.bulkCreate) // wrong (duplicate record can't be stored)
  .post('/', validationHandler(centerValidation.create), centerController.create)
  .get('/', validationHandler(centerValidation.list), centerController.list)
  .get('/:code', validationHandler(centerValidation.read), centerController.read)
  .put('/:code', validationHandler(centerValidation.update), centerController.update)
  .delete('/:code', validationHandler(centerValidation.delete), centerController.delete);

export default centerRouter;
