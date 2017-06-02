import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { IUser } from 'app/models/user';

@Injectable()

export class AuthService {
  currentUser: IUser;
  private _authUrl = 'http://localhost:3000/api/auth/';

  constructor(private _http: Http) {}

  register(user: IUser) {
    const url = `${this._authUrl}register`;
    return this._http.post(url, user);
      // .map((response: Response) => response.json())
      // .do(data => console.log('new registration: ', data));
  }
}
