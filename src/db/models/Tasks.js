import { Schema, model } from 'mongoose';

import { priorityList, statusList } from '../../constants/tasks.js';

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      required: true,
      enum: priorityList,
    },
    status: {
      type: String,
      required: true,
      enum: statusList,
    },
    // userId: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true, versionKey: false },
);

export const TasksCollection = model('tasks', taskSchema);
