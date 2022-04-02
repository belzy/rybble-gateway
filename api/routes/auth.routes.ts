import express, { Request, Response } from 'express';

const authRouter = express.Router();

authRouter.get('/auth', (req: Request, res: Response): void => {

  res.send('Gateway Auth Endpoint');

});

export {
  authRouter,
};