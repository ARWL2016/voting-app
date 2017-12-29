import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Topic } from '../models/topic';
import { HelperService } from './helper.service';

@Injectable()

export class DataService {

  private _dataUrl = '/api/data/';

  constructor(
    private _http: Http,
    private _helper: HelperService
    ) {}

  // TODO What is TS type for Promise error?
  public fetchTopicIndex(): Promise<Topic[]> {
    return this._http.get('/api/data/')
      .map(res => res.json())
      .toPromise()
        .catch(e => this.errorHandler(e));
  }

  public fetchTopicById(id: string): Promise<Topic> {
    return this._http.get(`/api/data/${id}`)
      .map(res => res.json())
      .toPromise()
        .catch(e => this.errorHandler(e));
  }

  public fetchTopicsByUser(): Promise<any> {
    const options = this._helper.addAuthTokenToHeader();
    return this._http.get('/api/data/current', options)
      .map(res => res.json())
      .toPromise()
        .catch(e => this.errorHandler(e));
  }

  addNewTopic(newTopic: Topic): Observable<Topic[]> {
    return this._http.post(this._dataUrl, newTopic)
      .map((res: Response) => res.json());
  }

  castVote(id: string, topic: Topic): Promise<any> {
    const options = this._helper.addAuthTokenToHeader();
    return this._http.put(`/api/data/vote/${id}`, topic, options)
      .toPromise();
  }

  deleteTopic(id: string): Promise<Response> {
    const options = this._helper.addAuthTokenToHeader();
    return this._http.delete(`/api/data/${id}`, options)
      .toPromise();
  }

  private errorHandler(e) {
    console.log(e);
    return Promise.reject(e);
  }



}
