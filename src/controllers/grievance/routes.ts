import { Router } from 'express';

// import validationHandler from '../../libs/routes/validationHandler';
// import contactValidation from './validation';
import contactController from './Controller';

const contactRouter = Router();

contactRouter
  .post(
    '/',
    // validationHandler(contactValidation.create),
    contactController.create
  )

export default contactRouter;
