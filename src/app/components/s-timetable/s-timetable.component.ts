import { Component, OnInit } from '@angular/core';
import { TfileMetaData } from 'src/app/model/tfile-meta-data';
import { TimefileService } from 'src/app/shared/timefile.service';

@Component({
  selector: 'app-s-timetable',
  templateUrl: './s-timetable.component.html',
  styleUrls: ['./s-timetable.component.css'],
})
export class STimetableComponent implements OnInit {
  listOfFiles: TfileMetaData[] = [];

  constructor(private timefileService: TimefileService) {}

  ngOnInit(): void {
    this.getAllFiles();
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
}
