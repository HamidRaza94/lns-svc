import { Router } from 'express';

import validationHandler from '../../libs/routes/validationHandler';
import courseValidation from './validation';
import courseController from './Controller';

const courseRouter = Router();

courseRouter
  .post('/bulk', courseController.bulkCreate) // done
  .post('/', validationHandler(courseValidation.create), courseController.create) // wrong
  .get('/', validationHandler(courseValidation.read), courseController.read) // done
  .get('/code/:code', validationHandler(courseValidation.readByCode), courseController.readByCode)
  .put('/:id', validationHandler(courseValidation.update), courseController.update)
  .put('/code/:code', validationHandler(courseValidation.updateByCode), courseController.updateByCode)
  .delete('/:id', validationHandler(courseValidation.delete), courseController.delete)
  .delete('/code/:code', validationHandler(courseValidation.deleteByCode), courseController.deleteByCode);

export default courseRouter;
