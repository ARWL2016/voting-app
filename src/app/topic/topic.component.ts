import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { Topic } from '../models/topic';
import { Result } from '../models/result';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  _id: string;
  topic: Topic;
  results: Result[];
  totalVotes: number;
  hasVoted = false;
  currentUser: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _data: DataService,
    private _auth: AuthService
    ) {
      console.log('snapshot' + this._route.snapshot.params['id']);
      this._id = this._route.snapshot.params['id'];

    }

  ngOnInit(): void {
    this._data.fetchTopicById(this._id)
      .subscribe(topic => {
        this.topic = topic;
        this.results = topic.results;
        this.totalVotes = this.getTotalVotes();
        this.currentUser = this._auth.isValidated();

        this.topic.voters.forEach(voter => {
          if (voter === this.currentUser) {
            this.hasVoted = true;
          }
        });
      });
  }

  getTotalVotes(): number {
    return this.topic.results.map(result => result.votes)
      .reduce((a, b) => a + b);
  }

  castVote(event) {
    if (!this.hasVoted) {
      this.topic.results.forEach(result => {
        if (result.option === event.target.value) {
          result.votes += 1;
        }
      });
      this.topic.voters.push(this.currentUser);
      this.hasVoted = true;
      this.totalVotes = this.getTotalVotes();
      this._data.castVote(this._id, this.topic);
    }
  }

  deleteTopic(id: string) {
    this._data.deleteTopic(id).subscribe();
    this._router.navigate(['/home']);
  }

}
