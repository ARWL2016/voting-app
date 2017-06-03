import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
// import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // providers: [ DataService ]
})
export class AppComponent implements OnInit, DoCheck {
  username: string;

  constructor(private _auth: AuthService) { }

  ngOnInit() {
    const identity = this._auth.isValidated();
    if (identity) {
      this.username = identity;
      console.log('APP COMPONENT INIT', this.username);
    }
  }

  ngDoCheck() {
    console.log('do check');
    this.username = this._auth.isValidated();
  }

}
