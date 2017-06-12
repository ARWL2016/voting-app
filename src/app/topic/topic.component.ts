import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { Topic } from '../models/topic';
import { Result } from '../models/result';
import { AuthService } from 'app/services/auth.service';
import { pageTransition } from '../animations';
import { ToastrService } from 'app/services/toastr.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  animations: [ pageTransition ]
})
export class TopicComponent implements OnInit {
  _id: string;
  topic: Topic;
  results: Result[];
  totalVotes: number;
  hasVoted = false;
  currentUser: string;
  toggleButton = 'View Chart';
  view = 'data';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _data: DataService,
    private _auth: AuthService,
    private _toastr: ToastrService
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
      this._toastr.success('Thanks for your vote');
    }
  }

  deleteTopic(id: string) {
    this._data.deleteTopic(id).then(() => {
      this._toastr.warning('Topic deleted!');
      this._router.navigate(['/home']);
    });

  }

  toggleDisplay() {
    this.view = (this.view === 'data') ? 'chart' : 'data';
    this.toggleButton = (this.toggleButton === 'View Chart') ? 'View Data' : 'View Chart';
  }

}
