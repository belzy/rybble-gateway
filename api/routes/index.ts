import express from 'express';

import authRouter  from './auth.routes';
import usersRouter from './users.routes';

const apiRouter = express.Router();

apiRouter.use('/api', authRouter);
apiRouter.use('/api', usersRouter);

export default apiRouter;