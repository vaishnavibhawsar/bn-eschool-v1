import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  IdTokenResult,
  user,
} from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}
  //login method

  cemail!: string;

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');

        // if (res.user?.emailVerified == true) {
        //   this.router.navigate(['dashboard']);
        // } else {
        //   this.router.navigate(['/varify-email']);
        // }
        //debugger;
        if (password == 'adminn') {
          this.router.navigate(['/dashboard']);
        } else if (password == 'Student') {
          this.cemail = email;
          this.router.navigate(['/studentpage']);
        } else if (password == 'Teacher') {
          this.router.navigate(['/teacherpage']);
        }
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  // register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Registration Successful');
        // this.sendEmailForVarification(res.user);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  //sign out method
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('tokeen');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  //forgotpass
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(
      () => {
        this.router.navigate(['/email-varify']);
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
  // email varification
  sendEmailForVarification(user: any) {
    console.log(user);
    user.sendEmailVerification().then(
      (res: any) => {
        this.router.navigate(['/email-varify']);
      },
      (err: any) => {
        alert('Something went wrong. Not able to send mail to your email.');
      }
    );
  }
}
