import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TfileMetaData } from '../model/tfile-meta-data';

@Injectable({
  providedIn: 'root',
})
export class TimefileService {
  constructor(
    private fireStore: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}

  //save metadata of file to fire store
  saveMetaDataOfFile(fileObj: TfileMetaData) {
    const fileMeta = {
      id: '',
      name: fileObj.name,
      url: fileObj.url,
      size: fileObj.size,
    };

    fileMeta.id = this.fireStore.createId();

    this.fireStore.collection('/Tuploads').add(fileMeta);
  }

  // dislpay all files
  getAllFiles() {
    return this.fireStore.collection('/Tuploads').snapshotChanges();
  }
  // delete file
  deleteFile(fileMeta: TfileMetaData) {
    this.fireStore.collection('/Tuploads').doc(fileMeta.id).delete();
    //delete file meta data
    this.fireStorage.ref('/Tuploads/' + fileMeta.name).delete();
    //delete file
  }
}
