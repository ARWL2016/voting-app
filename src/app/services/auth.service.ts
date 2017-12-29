import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { User } from 'app/models/user';
import { HelperService } from "./helper.service";
import { DataService } from "app/services/data.service";

@Injectable()

export class AuthService {
  currentUser: User;

  constructor(
    private _http: Http,
    private _helper: HelperService
    ) {}

  public register(user: User): Promise<any> {
    const url = `/api/auth/register`;
    return this._http.post(url, user)
      .do (response => {
        const token = this._helper.getAuthTokenFromHeader(response);
        window.localStorage.setItem('token', token);
      })
      .map(response => response.json())
      .do(json => this.updateCurrentUser(json))
      .toPromise()
      .catch(e => {
        this._helper.logError(e);
        return Promise.reject(e.status);
      });
  }

  public login(user: User): Promise<any> {
    const url = `/api/auth/login`;
    return this._http.post(url, user)
      .do(response => {
        const token = this._helper.getAuthTokenFromHeader(response);
        window.localStorage.setItem('token', token);
      })
      .map(response => response.json())
      .do(authorizedUser => this.updateCurrentUser(authorizedUser))
      .toPromise()
      .catch(e => {
        this._helper.logError(e);
        return Promise.reject(e.status);
      });
  }

  public logout(): Promise<any> {
    const options = this._helper.addAuthTokenToHeader();
    const url = `/api/auth/logout`;

    return this._http.delete(url, options)
      .toPromise()
      .then(() => {
        this.currentUser = undefined;
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
      })
      .catch(e => {
        this._helper.logError(e);
        return Promise.reject(e);
      });
  }

  public updateCurrentUser(user: User) {
    const { username } = user;
    this.currentUser = user;
    window.localStorage.setItem('username', username);
  }

  public isValidated(): string {
    const token = window.localStorage.getItem('token');
    const username = window.localStorage.getItem('username');

    if (token && username) {
      this.currentUser = {username};
      return username;
    }
    return null;
  }


}
