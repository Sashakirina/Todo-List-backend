import express from 'express';
import cors from 'cors';

// import { logger } from './utils/logger.js';
import notFoundler from './middlewares/notFoundler.js';
import { env } from './utils/env.js';
import taskRouter from './routers/tasks.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express());
  app.use(cors());

  app.use(express.json());

  // app.use(logger);

  app.use('/tasks', taskRouter);

  app.use('*', notFoundler);

  app.listen(PORT, () => {
    console.log(`server is running on  port ${PORT}`);
  });
};
