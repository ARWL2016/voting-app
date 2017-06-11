import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Topic } from '../models/topic';

@Injectable()

export class DataService {

  private _dataUrl = 'http://localhost:3000/api/data/';

  constructor(private _http: Http) {}

  fetchTopicIndex(): Promise<any> {
    return this._http.get(this._dataUrl)
      .map(res => res.json())
      .toPromise();
  }

  fetchTopicById(id: string) {
    return this._http.get(this._dataUrl + id)
      .map(res => res.json());
  }

  fetchTopicsByUser() {
    const url = `http://localhost:3000/api/data/current`;
    const options = this.addAuthTokenToHeader();
    return this._http.get(url, options)
      .map(res => res.json())
      .toPromise();
  }

  addNewTopic(newTopic: Topic): Observable<Topic[]> {
    console.log(newTopic);
    return this._http.post(this._dataUrl, newTopic)
      .map((res: Response) => res.json())
      .do(data => console.log(data));
  }

  castVote(id: string, topic: Topic): Promise<any> {
    const url = `http://localhost:3000/api/data/vote/${id}`;
    const options = this.addAuthTokenToHeader();

    return this._http.put(url, topic, options)
      .toPromise();
  }

  deleteTopic(id: string): Promise<Response> {
    const url = `http://localhost:3000/api/data/${id}`;
    const options = this.addAuthTokenToHeader();
    return this._http.delete(url, options)
      .toPromise();
  }

  addAuthTokenToHeader() {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Content-Type': 'application/json', 'x-auth': token });
    const options = new RequestOptions({ headers });
    return options;
  }

}
