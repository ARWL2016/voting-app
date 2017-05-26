import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  exampleTopics = [
    {
      topicName: "Javascript Frameworks", 
      topicQuestion: "What is your preferred Javascript framework?",
      author: "Alistair Willis",
      id: 1, 
      options: {
        "Angular": 9, 
        "React": 5, 
        "Jquery": 12, 
        "Vue": 3
      }
    }, 
    {
      topicName: "Server Side Frameworks", 
      topicQuestion: "What is your preferred backend framework?",
      author: "Alistair Willis",
      id: 2, 
      options: {
        "CNET": 9, 
        "Ruby on Rails": 5, 
        "Node": 12, 
        "Python": 3,
        "PHP": 15, 
        "Java JSP": 6
      }
    }
  ]; 


  fetchTopics() {
    // console.log('fetch', this.exampleTopics); 
    return this.exampleTopics; 
  }
    
  

}
