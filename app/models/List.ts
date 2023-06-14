import { Realm } from '@realm/react';

export class List extends Realm.Object<List> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  title!: string;
  createdAt: Date = new Date();

  static primaryKey = '_id';

  constructor(realm: Realm, title: string) {
    super(realm, { title });
  }
}
