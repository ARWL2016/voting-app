import { Result } from './result';

export class Topic {

  topicQuestion: string;
  topicTitle: string;
  author: string;
  results: Result[];

  constructor(author, topicTitle, topicQuestion, results) {
    this.author = author;
    this.topicTitle = topicTitle;
    this.topicQuestion = topicQuestion;
    this.results = results;
  }

}
