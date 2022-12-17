import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  currentuser = [];

  id = '';
  fname = '';
  lname = '';
  email = '';
  mobile = '';
  category = '';
  password = '';

  usersList: User[] = [];

  userObj: User = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    category: '',
    isDisabled: false,
  };
  constructor(private auth: AuthService, private data: DataService) {}

  logout() {
    this.auth.logout();
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

  resetForm() {
    this.id = '';
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.mobile = '';
    this.category = '';
  }

  addUser() {
    if (
      this.fname == '' ||
      this.lname == '' ||
      this.mobile == '' ||
      this.email == ''
    ) {
      alert('Fill all input fields');
      return;
    }

    this.userObj.id = '';
    this.userObj.email = this.email;
    this.userObj.first_name = this.fname;
    this.userObj.last_name = this.lname;
    this.userObj.mobile = this.mobile;
    this.userObj.category = this.category;

    this.auth.register(this.userObj.email, this.userObj.category);
    this.data.addUser(this.userObj);
    this.resetForm();
  }

  updateUser() {}

  deleteUser(user: User) {
    if (
      window.confirm(
        'Are you sure you want to delete ' +
          user.first_name +
          ' ' +
          user.last_name +
          ' ?'
      )
    ) {
      this.data.deleteUser(user);
    }
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //disable

  disable(user: User) {
    if (
      window.confirm(
        'Are you sure you want to disable ' +
          user.first_name +
          ' ' +
          user.last_name +
          ' ?'
      )
    ) {
      user.isDisabled = true;
      this.data.updateUser(user);
    }
  }
  enable(user: User) {
    if (
      window.confirm(
        'Are you sure you want to enable ' +
          user.first_name +
          ' ' +
          user.last_name +
          ' ?'
      )
    ) {
      user.isDisabled = false;
      this.data.updateUser(user);
    }
  }
}
