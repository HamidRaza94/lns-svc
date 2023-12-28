import { Router } from 'express';

import config from '../../config';
import validationHandler from '../../libs/routes/validationHandler';
import imageValidation from './validation';
import imageController from './Controller';
import { authMiddleware } from '../../middlewares';
import { ROLES } from '../../libs/constants';

const { MULTER } = config;

const router = Router();

router
  .post('/', authMiddleware.authenticate, authMiddleware.authorize(ROLES.USER), MULTER.array('image'), imageController.create)
  .get('/:type', imageController.get)
  .delete('/:id', authMiddleware.authenticate, authMiddleware.authorize(ROLES.ADMIN), imageController.removeImage);

export default router;
