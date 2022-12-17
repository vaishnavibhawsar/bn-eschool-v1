import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private data: DataService) {}

  usersList: User[] = [];

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
  ngOnInit(): void {
    this.getAllUsers();
  }

  login() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }
    let i;
    for (i = 0; i < this.usersList.length; i++) {
      if (
        this.usersList[i].email == this.email &&
        this.usersList[i].isDisabled == true
      ) {
        alert('You are disabled contact to admin');
        return;
      }
    }

    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}
