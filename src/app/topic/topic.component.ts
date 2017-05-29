import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  id: string;
  topic: object;
  totalVotes: number;
  hasVoted = false;

  constructor(
    private _route: ActivatedRoute,
    private _data: DataService
    ) {
      this.id = this._route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.topic = this._data.fetchTopic(this.id)[0];
    this.totalVotes = this._data.getTotalVotesById(this.id);

  }

  castVote(event: any) {
    if (!this.hasVoted) {
      this._data.castVote(this.id, event.target.value);
      this.hasVoted = true;
    }

  }

}
