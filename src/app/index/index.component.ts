import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  exampleTopics = [];
  username: string;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.fetchTopicIndex()
      .subscribe(topics => this.exampleTopics = topics);
    }

  }

