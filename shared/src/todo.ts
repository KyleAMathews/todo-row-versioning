// This file defines our Todo domain type in TypeScript, and a related helper
// function to get all Todos. You'd typically have one of these files for each
// domain object in your application.

import {z} from 'zod';
import {entitySchema, generate, Update} from '@rocicorp/rails';

export const todoSchema = entitySchema.extend({
  listID: z.string(),
  text: z.string(),
  completed: z.boolean(),
  sort: z.number(),
});

export type Todo = z.infer<typeof todoSchema>;
export type TodoUpdate = Update<Todo>;

export const {
  put: putTodo,
  get: getTodo,
  update: updateTodo,
  delete: deleteTodo,
  list: listTodos,
} = generate('todo', todoSchema);
