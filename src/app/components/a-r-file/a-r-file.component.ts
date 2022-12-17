import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AssigResultfileService } from 'src/app/shared/assig-resultfile.service';
import { AssigResultfileMetaData } from 'src/app/model/assig-resultfile-meta-data';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-a-r-file',
  templateUrl: './a-r-file.component.html',
  styleUrls: ['./a-r-file.component.css'],
})
export class ARFileComponent implements OnInit {
  selectedFiles!: FileList;
  currentFileUpload!: AssigResultfileMetaData;
  percentage: number = 0;

  listOfFiles: AssigResultfileMetaData[] = [];

  constructor(
    private fileService: AssigResultfileService,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.getAllFiles();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    this.currentFileUpload = new AssigResultfileMetaData(this.selectedFiles[0]);
    const path = 'ARUploads/' + this.currentFileUpload.file.name;

    const storageRef = this.fireStorage.ref(path);
    const uploadTask = storageRef.put(this.selectedFiles[0]);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadLink) => {
            this.currentFileUpload.id = '';
            this.currentFileUpload.url = downloadLink;
            this.currentFileUpload.size = this.currentFileUpload.file.size;
            this.currentFileUpload.name = this.currentFileUpload.file.name;

            this.fileService.saveMetaDataOfFile(this.currentFileUpload);
          });
          this.ngOnInit();
        })
      )
      .subscribe(
        (res: any) => {
          this.percentage = (res.bytesTransferred * 100) / res.totalBytes;
        },
        (err) => {
          console.log('Error occured');
        }
      );
  }

  getAllFiles() {
    this.fileService.getAllFiles().subscribe(
      (res) => {
        this.listOfFiles = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          //console.log(data);
          return data;
        });
      },
      (err) => {
        console.log('Error occured while fetching file meta data');
      }
    );
  }

  deleteFile(file: AssigResultfileMetaData) {
    if (window.confirm('Are you sure you want to delete ' + file.name + '?')) {
      this.fileService.deleteFile(file);
      this.ngOnInit();
    }
  }
}
