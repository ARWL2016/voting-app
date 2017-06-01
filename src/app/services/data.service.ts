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

  addNewTopic(newTopic) {
    console.log(newTopic);
    // const topic = newTopic;
    // topic.id = (this.exampleTopics.length + 1).toString();
    // topic.author = 'get from username';
    // const results = topic.options.map(option => {
    //   return {option: option, votes: 0};
    // });
    // topic.results = results;
    // console.log('data', topic);
    // this.exampleTopics.push(topic);
    // console.log(this.exampleTopics);
  }

  castVote(id: string, topic: Topic): Observable<any> {
    let url = `http://localhost:3000/api/data/vote/${id}`;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.put(url, topic, options)
      .map(res => res.json())
      .do(data => console.log(data));
  }

}
