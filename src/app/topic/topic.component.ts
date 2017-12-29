/**
 *  This component displays the results of a single voting topic,
 *  either as a table or a pie chart. The chart is rendered as a
 *  child component.
 *  For authenticated users, a voting widget is displayed.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { Topic } from '../models/topic';
import { AuthService } from 'app/services/auth.service';
import { pageTransition } from '../animations';
import { ToastrService } from 'app/services/toastr.service';
import { HelperService } from 'app/services/helper.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  animations: [ pageTransition ]
})
export class TopicComponent implements OnInit {
  _id: string;
  topic: Topic;
  // totalVotes: number;
  hasVoted = false;
  currentUser: string;
  toggleButton = 'View Chart';
  view = 'data';

  // computed values
  get totalVotes() {
    if (this.topic) {
      return this.topic.results.map(result => result.votes)
        .reduce((a, b) => a + b);
    }
    return 0;
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _data: DataService,
    private _auth: AuthService,
    private _helper: HelperService,
    private _toastr: ToastrService
    ) {
      this._id = this._route.snapshot.params['id'];

    }

  ngOnInit(): void {
    this._data.fetchTopicById(this._id)
      .then(topic => {

        this.topic = topic;
        this.currentUser = this._auth.isValidated();
        this.topic.voters.forEach(voter => {
          if (voter === this.currentUser) {
            this.hasVoted = true;
          }
        });
      })
      .catch(e => this._helper.logError(e));
  }

  // getTotalVotes(): number {
  //   return this.topic.results.map(result => result.votes)
  //     .reduce((a, b) => a + b);
  // }

  castVote(res): void {
    if (!this.hasVoted) {
      this.topic.results.forEach(result => {
        if (result.option === res.option) {
          result.votes += 1;
        }
      });
      // This code accepts vote client side before writing to the server - questionable
      // TODO - refactor UI feedback into Promise return
      this.topic.voters.push(this.currentUser);
      this.hasVoted = true;
      // this.totalVotes = this.getTotalVotes();
      this._data.castVote(this._id, this.topic);
      this._toastr.success('Thanks for your vote');
    }
  }

  deleteTopic(id: string): void {
    if (window.confirm('Are you sure you want to permanently delete this topic and its data?')) {
      this._data.deleteTopic(id).then(() => {
        this._toastr.warning('Topic deleted!');
        this._router.navigate(['/home']);
      });
    }
  }

  toggleDisplay(): void {
    this.view = (this.view === 'data') ? 'chart' : 'data';
    this.toggleButton = (this.toggleButton === 'View Chart') ? 'View Data' : 'View Chart';
  }

}
