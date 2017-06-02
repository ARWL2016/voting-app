import { Result } from './result';

export class Topic {

  topicQuestion: string;
  topicTitle: string;
  username: string;
  results: Result[];

  constructor(username, topicTitle, topicQuestion, results) {
    this.username = username;
    this.topicTitle = topicTitle;
    this.topicQuestion = topicQuestion;
    this.results = results;
  }

}
