import { Component, OnInit } from '@angular/core';
import {IUser} from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser;
  username: string;
  password: string;
  loginValid: boolean;
  error: string;

  constructor(private _auth: AuthService, private _route: Router) { }

  ngOnInit() {
  }

  submitForm() {
    if (this.username && this.password) {
      this.user = { username: this.username, password: this.password };
      console.log(this.user);
     this._auth.login(this.user)
      .then(data => {
        console.log('return value:', data);
        this.loginValid = true;
        this._route.navigate(['/home']);

      })
      .catch(err => {
        console.log('err in comp', err);
        this.loginValid = false;
        this.error = 'Your login details were incorrect. Please try again.';
      });
    }

  }

}
