import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Topic } from '../models/topic';
import {AuthService} from 'app/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  topics: Topic[];
  username: string;

  constructor(private _data: DataService, private _auth: AuthService) { }

  ngOnInit() {
    this._data.fetchTopicIndex().then(response => {
        const topics = response.json();
        console.log(topics);
        this.topics = topics;
    });
    this.username = this._auth.isValidated();
  }

}



