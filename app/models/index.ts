import { createRealmContext } from '@realm/react';
import { Item } from './Item';
import { List } from './List';


export const ListRealmContext = createRealmContext({
  schema: [List, Item],
  deleteRealmIfMigrationNeeded: true
});
