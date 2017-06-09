import { Component, OnInit } from '@angular/core';
import {IUser} from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { pageTransition } from '../../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ pageTransition ]
})
export class LoginComponent implements OnInit {
  user: IUser;
  username: string;
  password: string;
  error: string;

  constructor(private _auth: AuthService, private _route: Router) { }

  ngOnInit() {
  }

  submitForm() {
    if (this.username && this.password) {
      this.user = { username: this.username, password: this.password };
      this._auth.login(this.user)
        .then(res => {
          if (res) {
            this._route.navigate(['/home']);
          }
      })
      .catch(e => {
        this.error = 'Your login details were incorrect. Please try again.';
      });
    }
  }

}
