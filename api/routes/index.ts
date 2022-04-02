import express from 'express';
import { authRouter } from './auth.routes';

const apiRouter = express.Router();

apiRouter.use('/api', authRouter);

export default apiRouter;