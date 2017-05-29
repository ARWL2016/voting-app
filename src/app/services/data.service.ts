import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()

export class DataService {

  private _dataUrl = 'http://localhost:3000/api/data';

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


  constructor(private _http: Http) {}

  testHttp(): Observable<any> {
    return this._http.get(this._dataUrl)
      .map((res: Response) => res.json())
      .do(data => console.log('Observable response', data));
  }

  fetchTopics() {
    // console.log('fetch', this.exampleTopics);
    return this.exampleTopics;
  }

  fetchTopic(id: string) {
    console.log('data fetch', this.exampleTopics);

    return this.exampleTopics.filter(topic => topic.id === id);
  }

  getTotalVotesById(id: string): number {
    console.log('get total');

    let totalVotes = 0;
    this.fetchTopic(id)[0].results
      .forEach(result => totalVotes += result.votes);
    return totalVotes;
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

  castVote(id: string, option: string) {
    const topic = this.fetchTopic(id)[0];
    topic.results.forEach(result => {
      if (result.option === option) {
        result.votes += 1;
      }
    });
    console.log('cast vote', topic);
  }

}
