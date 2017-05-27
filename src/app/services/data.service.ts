import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  exampleTopics = [
    {
      topicTitle: "Javascript Frameworks",
      topicQuestion: "What is your preferred Javascript framework?",
      author: "Alistair Willis",
      id: '1',
      results: [
        { option: "Angular", votes: 9 },
        { option: "React", votes: 5 },
        { option: "JQuery", votes: 12 },
        { option: "Vue", votes: 15 },
      ],
    },
    {
      topicTitle: "Server Side Frameworks",
      topicQuestion: "What is your preferred backend framework?",
      author: "Alistair Willis",
      id: '2',
      results: [
        { option: "C#/.NET", votes: 9 },
        { option: "Ruby on Rails", votes: 5 },
        { option: "Node", votes: 12 },
        { option: "Python", votes: 3 },
        { option: "PHP", votes: 15 },
        { option: "Java / JSP", votes: 6 }
      ]
    }
  ];


  fetchTopics() {
    // console.log('fetch', this.exampleTopics);
    return this.exampleTopics;
  }

  fetchTopic(id: string) {
    return this.exampleTopics.filter(topic => topic.id === id);
  }

  getTotalVotesById(id: string): number {
    let totalVotes = 0;
    this.fetchTopic(id)[0].results
      .forEach(result => totalVotes += result.votes);
    return totalVotes;
  }

  castVote(id: string, option: string) {
    let topic = this.fetchTopic(id)[0];
    topic.results.forEach(result => {
      if (result.option === option) {
        result.votes += 1;
      }
    })
    console.log("cast vote", topic);
  }



}
