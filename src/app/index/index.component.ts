import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Topic } from '../models/topic';
import { AuthService } from 'app/services/auth.service';
import { pageTransition } from '../animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [ pageTransition ]
})
export class IndexComponent implements OnInit {
  topics: Topic[];
  username: string;
  isTopicListEmpty: boolean;
  listFilter: string;

  constructor(
    private _data: DataService,
    private _auth: AuthService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this._route.snapshot.params['id'];
    if (this.username) {
      this._data.fetchTopicsByUser()
        .then(topics => {
          this.topics = topics; 
          if (topics.length === 0) {
            this.isTopicListEmpty = true; 
          }
        })
        .catch(e => console.log(e));
    } else {
      this.username = this._auth.isValidated();
      this._data.fetchTopicIndex().then(topics => this.topics = topics);
    }
  }
}



