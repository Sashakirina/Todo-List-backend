import express from 'express';
import cors from 'cors';

import { logger } from './utils/logger.js';
import notFoundler from './middlewares/notFoundler.js';
import { env } from './utils/env.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express());
  app.use(cors());

  app.use(logger);

  app.use('*', notFoundler);

  app.listen(PORT, () => {
    console.log(`server is running on  port ${PORT}`);
  });
};
