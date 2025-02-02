import {z} from 'zod';
import {entitySchema, generate, Update} from '@rocicorp/rails';

export const listSchema = entitySchema.extend({
  name: z.string(),
  ownerID: z.string(),
});

export type List = z.infer<typeof listSchema>;
export type ListUpdate = Update<List>;

export const {
  init: createList,
  list: listLists,
  get: getList,
  delete: deleteList,
} = generate('list', listSchema);
