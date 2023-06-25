import { createRealmContext } from '@realm/react';
import { Item } from './Item';
import { List } from './List';

//Criação do contexto e importando os schemas, banco de dados usado foi o RealmDB para fazer a persistencia dos dados
export const ListRealmContext = createRealmContext({
  schema: [List, Item],
  deleteRealmIfMigrationNeeded: true
});
