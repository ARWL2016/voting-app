import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { pageTransition } from '../../animations';
import { ToastrService } from 'app/services/toastr.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [ pageTransition ]
})
export class RegistrationComponent implements OnInit {
  username: string;
  password: string;
  passwordConfirmation: string;
  error: string;
  user: IUser;

  constructor(private _auth: AuthService, private _router: Router, private _toastr: ToastrService ) {}

  ngOnInit() {

  }

  submitForm() {
    if (this.password.length < 3) {
      this.error = 'Password must be at least 3 characters.';
      return;
    }
    if (this.password !== this.passwordConfirmation) {
      this.error = 'Passwords do not match. Please try again.';
      return;
    }
    if (this.username) {
      this.user = {
        username: this.username,
        password: this.password
      };
      this._auth.register(this.user)
        .then((res) => {
          console.log('user created', res);
          this._toastr.success('Thanks for signing up!');
          this._router.navigate(['/home']);
        })
        .catch(err => {
          console.log(err);
          this.error = 'Username already taken.';
        });
    }

  }
}
