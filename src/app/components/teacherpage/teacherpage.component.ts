import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-teacherpage',
  templateUrl: './teacherpage.component.html',
  styleUrls: ['./teacherpage.component.css'],
})
export class TeacherpageComponent implements OnInit {
  usersList: User[] = [];
  search = '';
  constructor(private data: DataService, private auth: AuthService) {}

  getAllUsers() {
    this.data.getAllUsers().subscribe(
      (res) => {
        this.usersList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching user data');
      }
    );
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  logout() {
    this.auth.logout();
  }
}
