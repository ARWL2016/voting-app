import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Topic } from '../models/topic'; 

@Injectable()

export class DataService {

  private _testUrl = 'http://localhost:3000/api/test';
  private _dataUrl = 'http://localhost:3000/api/data/';

  constructor(private _http: Http) {}

  fetchTopicIndex(): Observable<any> {
    return this._http.get(this._dataUrl)
      .map((res: Response) => res.json())
      .do(data => console.log('FETCH TOPIC INDEX: ', typeof data[0]._id));
    // return this.exampleTopics;
  }

  fetchTopicById(id: string) {
    return this._http.get(this._dataUrl + id)
      .map(res => res.json())
      .do(data => console.log(data));
  }

  addNewTopic(newTopic) {
    const topic = newTopic;
    topic.id = (this.exampleTopics.length + 1).toString();
    topic.author = 'get from username';
    const results = topic.options.map(option => {
      return {option: option, votes: 0};
    });
    topic.results = results;
    console.log('data', topic);
    this.exampleTopics.push(topic);
    console.log(this.exampleTopics);
  }

  castVote(id: string, topic: Topic): Observable<any> {
    console.log('CAST VOTE');
    let url = `http://localhost:3000/api/data/vote/${id}`; 
    // const url = this._dataUrl + 'vote/' + id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.put(url, topic, options)
      .map(res => res.json())
      .do(data => console.log(data));
  }

    exampleTopics = [
    {
      topicTitle: 'Javascript Frameworks',
      topicQuestion: 'What is your preferred Javascript framework?',
      author: 'Alistair Willis',
      id: '1',
      results: [
        { option: 'Angular', votes: 9 },
        { option: 'React', votes: 5 },
        { option: 'JQuery', votes: 12 },
        { option: 'Vue', votes: 15 },
      ],
    },
    {
      topicTitle: 'Server Side Frameworks',
      topicQuestion: 'What is your preferred backend framework?',
      author: 'Alistair Willis',
      id: '2',
      results: [
        { option: 'C#/.NET', votes: 9 },
        { option: 'Ruby on Rails', votes: 5 },
        { option: 'Node', votes: 12 },
        { option: 'Python', votes: 3 },
        { option: 'PHP', votes: 15 },
        { option: 'Java / JSP', votes: 0 }
      ]
    }
  ];

}
