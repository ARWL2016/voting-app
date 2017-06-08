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
        let body = response.json();
        let { username } = body;
        let headers = response.headers.toJSON(); 
        let token = headers['x-auth'][0];
        this.currentUser = body;
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
      });
  }

  login(user: IUser): Promise<any> {
    const url = `${this._authUrl}login`;
    return this._http.post(url, user)
      .toPromise()
      .then(res => {
        this.currentUser = res.json();
        console.log('CURRENT USER: ', this.currentUser);
        return true;
      })
      .catch(err => {
        console.log('err in AUTH: ', err);
        throw err;
      });
  }

  logout() {
    let token = localStorage.getItem('token');
    let headers = new Headers({ 'x-auth': token }); 
    let options = new RequestOptions({ headers });
    const url = `${this._authUrl}logout`;

    return this._http.delete(url, options)
      .toPromise()
      .then(() => {
        this.currentUser = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('username');
      }) 

    // this.currentUser = undefined;
  }

  isValidated() {
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');

    if (token && username) {
      this.currentUser = {username}; 
      return username; 
    } else {
      return null;
    }
  }
}
