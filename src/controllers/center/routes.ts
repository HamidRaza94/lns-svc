import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import centerValidation from './validation';
import centerController from './Controller';

const centerRouter = Router();

centerRouter
  .post('/bulk', centerController.bulkCreate)
  .post('/', validationHandler(centerValidation.create), centerController.create)
  .get('/', validationHandler(centerValidation.read), centerController.read)
  .get('/code/:code', validationHandler(centerValidation.readByCode), centerController.readByCode)
  .put('/:id', validationHandler(centerValidation.update), centerController.update)
  .put('/code/:code', validationHandler(centerValidation.updateByCode), centerController.updateByCode)
  .delete('/:id', validationHandler(centerValidation.delete), centerController.delete)
  .delete('/code/:code', validationHandler(centerValidation.deleteByCode), centerController.deleteByCode);

export default centerRouter;
