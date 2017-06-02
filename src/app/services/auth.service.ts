import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { User } from '../models/user';

@Injectable()

export class UserService {
  currentUser: User; 

  register(user: User, password: string) {
    // http.post 
  }
}