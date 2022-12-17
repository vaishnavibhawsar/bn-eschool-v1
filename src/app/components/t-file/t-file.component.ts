import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { TfileMetaData } from 'src/app/model/tfile-meta-data';
import { TimefileService } from 'src/app/shared/timefile.service';
import { finalize } from 'rxjs/operators';
import { empty } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-t-file',
  templateUrl: './t-file.component.html',
  styleUrls: ['./t-file.component.css'],
})
export class TFileComponent implements OnInit {
  selectedFiles!: FileList;
  currentFileUpload!: TfileMetaData;
  percentage: number = 0;

  listOfFiles: TfileMetaData[] = [];

  constructor(
    private timefileService: TimefileService,
    private fireStorage: AngularFireStorage,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getAllFiles();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    this.currentFileUpload = new TfileMetaData(this.selectedFiles[0]);
    const path = 'Tuploads/' + this.currentFileUpload.file.name;

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

            this.timefileService.saveMetaDataOfFile(this.currentFileUpload);
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
    this.timefileService.getAllFiles().subscribe(
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

  deleteFile(file: TfileMetaData) {
    if (window.confirm('Are you sure you want to delete ' + file.name + '?')) {
      this.timefileService.deleteFile(file);
      this.ngOnInit();
    }
  }
}
