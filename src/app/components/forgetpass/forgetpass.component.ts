import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css'],
})
export class ForgetpassComponent implements OnInit {
  constructor(private auth: AuthService) {}
  email: string = '';
  ngOnInit(): void {}
  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
