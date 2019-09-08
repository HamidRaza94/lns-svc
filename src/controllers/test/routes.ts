import { Router } from 'express';

import testController from './Controller';

const testRouter = Router();

testRouter.post('/', testController.create);

export default testRouter;
