import express, { Request, Response } from 'express';
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

export default authRouter;