import { Component, OnInit } from '@angular/core';
import { AssigResultfileMetaData } from 'src/app/model/assig-resultfile-meta-data';
import { AssigResultfileService } from 'src/app/shared/assig-resultfile.service';

@Component({
  selector: 'app-s-assigresult',
  templateUrl: './s-assigresult.component.html',
  styleUrls: ['./s-assigresult.component.css'],
})
export class SAssigresultComponent implements OnInit {
  listOfFiles: AssigResultfileMetaData[] = [];

  constructor(private fileService: AssigResultfileService) {}

  ngOnInit(): void {
    this.getAllFiles();
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
}
