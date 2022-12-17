import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AssigResultfileMetaData } from '../model/assig-resultfile-meta-data';

@Injectable({
  providedIn: 'root',
})
export class AssigResultfileService {
  constructor(
    private fireStore: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}

  // save meta data of file to firestore
  saveMetaDataOfFile(fileObj: AssigResultfileMetaData) {
    const fileMeta = {
      id: '',
      name: fileObj.name,
      url: fileObj.url,
      size: fileObj.size,
    };

    fileMeta.id = this.fireStore.createId();

    this.fireStore.collection('/ARUploads').add(fileMeta);
  }

  // dislpay all files
  getAllFiles() {
    return this.fireStore.collection('/ARUploads').snapshotChanges();
  }

  // delete file
  deleteFile(fileMeta: AssigResultfileMetaData) {
    this.fireStore.collection('/ARUploads').doc(fileMeta.id).delete();
    this.fireStorage.ref('/ARUploads/' + fileMeta.name).delete();
  }
}
