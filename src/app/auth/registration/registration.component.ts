import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  username: string;
  password: string;
  passwordRepeat: string;
  error: string;
  user: IUser;

  constructor(private _auth: AuthService, private _router: Router ) {}

  ngOnInit() {

  }

  submitForm() {
    if (this.username && this.password === this.passwordRepeat) {
      this.user = {
        username: this.username,
        password: this.password
      };
      this._auth.register(this.user).subscribe(
        res => {
            console.log('user created');
            this._router.navigate(['/login']);
        },
        err => this.error = 'username already exists');

    }


  }
}
