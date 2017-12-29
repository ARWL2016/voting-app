import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { pageTransition } from '../../animations';
import { ToastrService } from 'app/services/toastr.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../auth-styles.scss'],
  animations: [ pageTransition ]
})
export class RegistrationComponent {
  username: string;
  password: string;
  passwordConfirmation: string;
  error: string;
  user: User;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) {}

  submitForm() {
    this.error = '';
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
          this._toastr.success('Thanks for signing up!');
          this._router.navigate(['/home']);
        })
        .catch(e => {
          if (e === 409) {
            this.error = 'Username already taken.';
          } else if (e === 500) {
            this.error = 'Could not register new user. Please try again later';
          }
        });
    }

  }
}
