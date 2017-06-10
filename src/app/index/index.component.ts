import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../services/data.service';
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
  options = [];
  username: string;

  constructor(private _data: DataService, private _auth: AuthService) { }

  ngOnInit() {
    this.username = this._auth.isValidated();
    this._data.fetchTopicIndex().then(response => {
        const topics = response.json();
        console.log(topics);
        this.topics = topics;
    });

  }



}



