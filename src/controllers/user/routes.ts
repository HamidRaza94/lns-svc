import { Router } from 'express';

import config from '../../config';
import validationHandler from '../../libs/routes/validationHandler';
import userValidation from './validation';
import userController from './Controller';
import { authMiddleware } from '../../middlewares';
import { ROLES } from '../../libs/constants';

const { MULTER } = config;

const router = Router();

router
  .post('/signup', authMiddleware.authenticate, authMiddleware.authorize(ROLES.ADMIN), MULTER.single('profile'), userController.signup)
  .post('/login', userController.login)
  .get('/:username', userController.getUser)
  .get('/', userController.getAllUsers)
  .delete('/:id', authMiddleware.authenticate, authMiddleware.authorize(ROLES.ADMIN), userController.removeUser);

export default router;
