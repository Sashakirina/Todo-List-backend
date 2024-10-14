import { TasksCollection } from '../db/models/Tasks.js';

export const getAllTasks = async () => await TasksCollection.find();

export const getTaskById = async (id) => await TasksCollection.findById(id);

export const createTask = async (payload) => {
  const task = await TasksCollection.create(payload);

  return task;
};
