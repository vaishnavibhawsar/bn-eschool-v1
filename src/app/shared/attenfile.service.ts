import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AttenfileMetaData } from '../model/attenfile-meta-data';

@Injectable({
  providedIn: 'root',
})
export class AttenfileService {
  constructor(
    private fireStore: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}

  // save meta data of file to firestore
  saveMetaDataOfFile(fileObj: AttenfileMetaData) {
    const fileMeta = {
      id: '',
      name: fileObj.name,
      url: fileObj.url,
      size: fileObj.size,
    };

    fileMeta.id = this.fireStore.createId();

    this.fireStore.collection('/AttendUploads').add(fileMeta);
  }

  // dislpay all files
  getAllFiles() {
    return this.fireStore.collection('/AttendUploads').snapshotChanges();
  }

  // delete file
  deleteFile(fileMeta: AttenfileMetaData) {
    this.fireStore.collection('/AttendUploads').doc(fileMeta.id).delete();
    this.fireStorage.ref('/AttendUploads/' + fileMeta.name).delete();
  }
}
