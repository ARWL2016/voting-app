import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { pageTransition } from '../../animations';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth-styles.scss'],
  animations: [ pageTransition ]
})
export class LoginComponent implements OnInit {
  user: User;
  username: string;
  password: string;
  error: string;

  constructor(
    private _auth: AuthService,
    private _route: Router,
    private _toastr: ToastrService
    ) { }

  ngOnInit() {
  }

  submitForm() {
    this.error = '';
    if (this.username && this.password) {
      this.user = { username: this.username, password: this.password };
      this._auth.login(this.user)
        .then((res) => {
          console.log(res);
            this._toastr.success('You have been logged in.');
            this._route.navigate(['/home']);
        })
        .catch(e => {
          if (e === 401) {
            this.error = 'Your login details were incorrect. Please try again.';
          } else {
            this.error = 'There was a problem logging in. Pleas try again later.'
          }

        });
    }
  }

}
