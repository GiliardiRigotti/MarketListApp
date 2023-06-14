import { Realm } from '@realm/react';

export class Item extends Realm.Object<Item> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  name!: string;
  inCart: boolean = false;
  createdAt: Date = new Date();
  listId!: string;

  static primaryKey = '_id';

  constructor(realm: Realm, name: string, listId?: string) {
    super(realm, { name, listId });
  }
}
