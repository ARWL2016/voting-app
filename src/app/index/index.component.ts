/**
 *  This component renders a list of voting topics, displaying the title and question
 *  of each voting topic in a Bootstrap panel.
 *
 *  If the component is rendered on the path 'home', all voting topics will display.
 *  If the user is authenticated, this comp can also be accessed on the route
 *  'home/username'. In this case, only the user's own topics will be displayed.
 */

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
    this.username = this._route.snapshot.params['username'];
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



