import express, { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const usersRouter = express.Router();

usersRouter.get('/users', (request: Request, response: Response, next: NextFunction): void => {

  axios({
    method: 'GET',
    url: 'http://localhost:8082/api/users',
  }).then(( axiosResponse: AxiosResponse ) => {

    response.send(axiosResponse.data);

  });

});

export default usersRouter;