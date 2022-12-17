import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private afs: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}

  addUser(user: User) {
    user.id = this.afs.createId();
    return this.afs.collection('/User').add(user);
  }

  // get all users
  getAllUsers() {
    return this.afs.collection('/User').snapshotChanges();
  }

  // delete users
  deleteUser(user: User) {
    this.afs.doc('/User/' + user.id).delete();
  }

  //update users
  updateUser(user: User) {
    this.deleteUser(user);
    this.addUser(user);
  }
}
