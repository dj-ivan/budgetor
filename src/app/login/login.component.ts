import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);
  public hide = true;
  public showLogIn = true;
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {

  }

  public getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  public logIn() {
    if (this.firebaseAuth.auth.currentUser) {
      this.firebaseAuth.auth.signOut();
    }
    this.firebaseAuth.auth.onAuthStateChanged((user) => {
      debugger;
      if (user) {
        this.router.navigate(['/budget-setup']);
      }
    });

    this.firebaseAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });

  }

  public signUp() {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
  }

}
