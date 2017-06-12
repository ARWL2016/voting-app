import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { IUser } from 'app/models/user';

@Injectable()

export class AuthService {
  currentUser: IUser;
  private _authUrl = '/api/auth/';

  constructor(private _http: Http) {}

  register(user: IUser): Promise<void> {
    console.log('REGISTER CALL');
    const url = `${this._authUrl}register`;
    return this._http.post(url, user)
      .do((response) => console.log(response))
      .do ((response) => {
        this.processAuthToken(response);
      })
      .map(response => response.json())
      .do((json) => this.updateCurrentUser(json))
      .toPromise();
  }

  login(user: IUser): Promise<boolean> {
    const url = `${this._authUrl}login`;
    return this._http.post(url, user)
      .do(response => {
        this.processAuthToken(response);
        
      })
      .map(response => response.json())
      .do((json) => this.updateCurrentUser(json))
      .toPromise();

  }
  updateCurrentUser(json) {
    console.log('JSON', json);
    const { username } = json;
    this.currentUser = json;
    window.localStorage.setItem('username', username);
  }

  processAuthToken(response): void {
    console.log('PROCESS AUTH TOKEN', response);
    const headers = response.headers.toJSON();
    const token = headers['x-auth'][0];
    console.log('PROCESS AUTH TOKEN', headers);
    console.log('PROCESS AUTH TOKEN', token);
    window.localStorage.setItem('token', token);
  }

  

  logout(): Promise<void> {
    console.log('LOGOUT');
    const token = window.localStorage.getItem('token');
    const headers = new Headers({ 'x-auth': token });
    const options = new RequestOptions({ headers });

    const url = `${this._authUrl}logout`;

    return this._http.delete(url, options)
      .toPromise()
      .then(() => {
        this.currentUser = undefined;
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
      });
  }

  isValidated(): string {
    const token = window.localStorage.getItem('token');
    const username = window.localStorage.getItem('username');

    if (token && username) {
      this.currentUser = {username};
      return username;
    } else {
      return null;
    }
  }


}
