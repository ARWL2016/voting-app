import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Topic } from '../models/topic';

@Injectable()

export class DataService {

  private _dataUrl = 'http://localhost:3000/api/data/';

  constructor(private _http: Http) {}

  fetchTopicIndex(): Observable<any> {
    return this._http.get(this._dataUrl)
      .map((res: Response) => res.json())
      .do(data => console.log(data));
  }

  fetchTopicById(id: string) {
    return this._http.get(this._dataUrl + id)
      .map(res => res.json())
      .do(data => console.log(data));
  }

  addNewTopic(newTopic: Topic): Observable<Topic[]> {
    console.log(newTopic);
    return this._http.post(this._dataUrl, newTopic)
      .map((res: Response) => res.json())
      .do(data => console.log(data));
  }

  castVote(id: string, topic: Topic): Observable<any> {
    const url = `http://localhost:3000/api/data/vote/${id}`;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this._http.put(url, topic, options)
      .map(res => res.json())
      .do(data => console.log(data));
  }

  deleteTopic(id: string): Observable<any> {
    const url = `http://localhost:3000/api/data/${id}`;
    return this._http.delete(url); 
  }

}
