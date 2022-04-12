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

      const { user_id } = data;

      // response.json({ user_id, password, type });

      axios({
        method: 'POST',
        url: 'http://localhost:8081/auth/register/email',
        data: { user_id, username: email, password, type },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(({ data }) => {

        console.log(`[server] User registered.`);
        response.status(201).json(data);

      }).catch(postAuthError => {

        const { status, data } = postAuthError.response;

        console.error(`[server] Error: ${ data.Error }`);

        response
          .status(status)
          .json(data);

      });

    }).catch(postError => {

      const { status, data } = postError.response;

      console.error(`[server] Error: ${ data.Error }`);

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