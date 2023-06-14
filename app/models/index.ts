import { createRealmContext } from '@realm/react';
import { Task } from './Task';
import { Item } from './Item';
import { List } from './List';

export const TaskRealmContext = createRealmContext({
  schema: [Task],
});

export const ListRealmContext = createRealmContext({
  schema: [List],
});
