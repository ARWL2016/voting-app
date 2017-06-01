import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/services/data.service';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  _id: string;
  topic: object;
  totalVotes: number;
  hasVoted = false;
  results = []; 

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
        this.results = topic.results; 
        this.totalVotes = this.getTotalVotes(); 
      })
  }

  getTotalVotes(): number {
    return this.results.map((result) =>  +result.votes)
      .reduce((a, b) => a + b); 
  }
    
  castVote(event: any) {
    if (!this.hasVoted) {
      this._data.castVote(this._id, event.target.value);
      this.hasVoted = true;
    }

  }

}
