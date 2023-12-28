import { Router } from 'express';

import config from '../../config';
import validationHandler from '../../libs/routes/validationHandler';
import userValidation from './validation';
import userController from './Controller';

const { MULTER } = config;

const router = Router();

router
  .post('/signup', MULTER.single('profile'), userController.signup)
  .post('/login', userController.login)
  .get('/', userController.getAllUsers)
  .get('/:username', userController.getUser)
  .delete('/:id', userController.removeUser);

export default router;
