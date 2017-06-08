import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { IUser } from 'app/models/user';

@Injectable()

export class AuthService {
  currentUser: IUser;
  private _authUrl = 'http://localhost:3000/api/auth/';

  constructor(private _http: Http) {}

  register(user: IUser) {
    const url = `${this._authUrl}register`;
    return this._http.post(url, user)
      .toPromise()
      .then(response => {
        this.processAuthToken(response);
      });
  }

  processAuthToken(response) {
    const body = response.json();
    const { username } = body;
    const headers = response.headers.toJSON();
    const token = headers['x-auth'][0];

    this.currentUser = body;
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  login(user: IUser): Promise<any> {
    const url = `${this._authUrl}login`;
    return this._http.post(url, user)
      .toPromise()
      .then(response => {
        this.processAuthToken(response);
        return Promise.resolve(true);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  logout() {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'x-auth': token });
    const options = new RequestOptions({ headers });
    const url = `${this._authUrl}logout`;

    return this._http.delete(url, options)
      .toPromise()
      .then(() => {
        this.currentUser = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('username');
      });
  }

  isValidated() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token && username) {
      this.currentUser = {username};
      return username;
    } else {
      return null;
    }
  }
}
