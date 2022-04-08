import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import apiRouter from './api/routes';

const server = express();
const PORT = process.env.PORT || 8080;

const middleware = [
  morgan('combined'),
  bodyParser.urlencoded({ extended: true }),
  apiRouter,
];

server.use(middleware);

server.listen(PORT, () => {
  console.log(`[server] Server listening on port ${ PORT }...`);
});