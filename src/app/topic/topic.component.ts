import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { Topic } from '../models/topic';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  _id: string;
  topic = new Topic();
  totalVotes: number;
  hasVoted = false;

  constructor(
    private _route: ActivatedRoute,
    private _data: DataService
    ) {
      console.log('snapshot' + this._route.snapshot.params['id']);
      this._id = this._route.snapshot.params['id'];

    }

  ngOnInit(): void {
    console.log(this._id); 
    this._data.fetchTopicById(this._id)
      .subscribe(topic => {
        this.topic = topic;
        this.totalVotes = this.getTotalVotes(); 
      })
  }

  getTotalVotes(): number {
    return this.topic.results.map(result => result.votes)
      .reduce((a, b) => a + b); 
  }
    
  castVote(event) {
    if (!this.hasVoted) {
     console.log(this.topic.results); 
      this.topic.results.forEach(result => {
        if (result.option === event.target.value) {
          result.votes += 1; 
        }
      })
      
      this.hasVoted = true;
      this.totalVotes = this.getTotalVotes(); 
      this._data.castVote(this._id, this.topic).subscribe(); 

    }

  }

}
