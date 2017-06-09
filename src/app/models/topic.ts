import { Result } from './result';

export class Topic {

  topicQuestion: string;
  topicTitle: string;
  username: string;
  results: Result[];
  voters: string[];

  constructor(username, topicTitle, topicQuestion, results, voters) {
    this.username = username;
    this.topicTitle = topicTitle;
    this.topicQuestion = topicQuestion;
    this.results = results;
    this.voters = voters;
  }

}
