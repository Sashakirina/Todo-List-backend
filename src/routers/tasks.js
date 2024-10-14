import { Router } from 'express';
import * as tasksControllers from '../controllers/tasks.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(tasksControllers.getAllTasksController));

router.get('/:id', ctrlWrapper(tasksControllers.getTaskByIdController));

router.post('/', ctrlWrapper(tasksControllers.postTaskController));

export default router;
