import express from 'express';
import morgan from 'morgan';

import apiRouter from './api/routes';

const server = express();
const PORT = process.env.PORT || 8080;

const middleware = [
  morgan('combined'),
  apiRouter,
];

server.use(middleware);

server.listen(PORT, () => {
  console.log(`[server] Server listening on port ${ PORT }...`);
});