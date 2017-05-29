import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  exampleTopics = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.exampleTopics = this._data.fetchTopics();
    console.log('index', this.exampleTopics);
  }

  testHttp() {
    console.log('test Http');
    this._data.testHttp()
    .subscribe(data => console.log('subscribe', data));
  }

}
