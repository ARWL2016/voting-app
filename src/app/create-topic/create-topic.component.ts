import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';

import { Topic } from '../models/topic';
import { Result } from '../models/result';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  result = new Result('', 0);
  newTopic = new Topic('', '', '', []);
  options: string[] = [];
  option: '';

  constructor(
    private _data: DataService,
    private _router: Router
    ) { }

  ngOnInit() {
    console.log('INIT: ', this.result);
    console.log('INIT: ', this.newTopic);
  }

  addOption(e): void {
    e.preventDefault();
    if (this.option) {
      const result = new Result(this.option, 0);
      this.options.push(this.option);
      this.newTopic.results.push(result);
      this.option = '';
      this.result = new Result('', 0);
    }
  }

  submitForm(): void {
    console.log(this.newTopic);
    // this._data.addNewTopic(this.newTopic);
    // this.newTopic = new Topic();
    // this._router.navigate(['/home']);
  }

  removeOption(e): void {
    e.preventDefault();
    this.newTopic.results.pop();
    this.options.pop();
  }

}
