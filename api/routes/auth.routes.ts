import express, { NextFunction, Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

const authRouter = express.Router();

authRouter.get('/auth', (request: Request, response: Response): void => {

  axios({
    method: 'get',
    url: 'http://localhost:8081/api/auth',
  }).then((axiosResponse: AxiosResponse) => {

    console.log(axiosResponse.data);
    response.send(axiosResponse.data);

  }).catch(console.log);

});

authRouter.post('/register', (request: Request, response: Response, next: NextFunction): void => {

  const { type } = request.query;
  const { name, email, password } = request.body;

  try {

    axios({
      method: 'POST',
      url: 'http://localhost:8082/users/create',
      data: { name, email }
    }).then(({ data }: AxiosResponse) => {

      response.json(data);

    }).catch(postError => {

      const { status, data } = postError.response;

      response
        .status(status)
        .json(data);

    });

  } catch (error) {

    // console.error(error);
    next(error);

  }

});

export default authRouter;