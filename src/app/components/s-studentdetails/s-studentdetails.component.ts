import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-s-studentdetails',
  templateUrl: './s-studentdetails.component.html',
  styleUrls: ['./s-studentdetails.component.css'],
})
export class SStudentdetailsComponent implements OnInit {
  constructor(private data: DataService) {}
  usersList: User[] = [];
  email = '';
  fname = '';
  lname = '';
  mobile = '';
  mail = '';
  valid = false;
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.data.getAllUsers().subscribe(
      (res) => {
        this.usersList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (_err) => {
        alert('Error while fetching user data');
      }
    );
  }
  details() {
    let i;
    for (i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].email == this.email) {
        this.fname = this.usersList[i].first_name;
        this.lname = this.usersList[i].last_name;
        this.mobile = this.usersList[i].mobile;
        this.mail = this.usersList[i].email;
        this.valid = true;
      }
    }
    this.email = '';
  }
  isvalid() {
    return this.valid;
  }
}
