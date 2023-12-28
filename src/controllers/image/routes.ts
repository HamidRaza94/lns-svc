import { Router } from 'express';

import config from '../../config';
import validationHandler from '../../libs/routes/validationHandler';
import imageValidation from './validation';
import imageController from './Controller';

const { MULTER } = config;

const router = Router();

router
  .post('/', MULTER.array('image'), imageController.create)
  .get('/:type', imageController.get)
  .delete('/:id', imageController.removeImage);

export default router;
