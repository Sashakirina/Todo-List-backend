import createHttpError from 'http-errors';
import * as taskServices from '../services/tasks.js';

export const getAllTasksController = async (req, res) => {
  const tasks = await taskServices.getAllTasks();

  res.json({
    status: 200,
    message: 'All tasks successfully found',
    data: tasks,
  });
};

export const getTaskByIdController = async (req, res) => {
  const { taskId } = req.params;

  const task = await taskServices.getTaskById(taskId);
  if (!task) {
    throw createHttpError(404, 'Task not found');
  }

  res.json({
    status: 200,
    message: ` Task with id ${taskId} successfully found`,
    dtata: task,
  });
};

export const postTaskController = async (req, res) => {
  const task = await taskServices.createTask(req.body);

  res.status(201).json({
    status: 201,
    message: 'Task successfully created',
    data: task,
  });
};
