import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import {ToastrService} from 'app/services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit, DoCheck {
  username: string;
  showDropdown = false;

  constructor(private _auth: AuthService, private _router: Router, private _toastr: ToastrService) { }

  ngOnInit() {
    const username = this._auth.isValidated();
    if (username) {
      this.username = username;
    }
  }

  ngDoCheck() {
    this.username = this._auth.isValidated();
  }

  logout() {
    // needs error handling
    this._auth.logout();
    this._toastr.success('You have been logged out.');
    this._router.navigate(['/login']);
  }

  toggleDropdown() {
    this.showDropdown = this.showDropdown === true ? false : true;
  }

  hideDropdown(e) {

    if (e.target.id !== 'toggleBtn') {
      this.showDropdown = false;
    }
  }

}
