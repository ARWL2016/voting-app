import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { IUser } from '../models/user';

@Injectable()

export class UserService {
  currentUser: IUser; 

  register(user: IUser, password: string) {
    // http.post 
  }
}