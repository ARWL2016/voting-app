import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';

import { Topic } from '../models/topic';
import { Result } from '../models/result';
import {AuthService} from 'app/services/auth.service';
import { pageTransition } from '../animations';
import {ToastrService} from 'app/services/toastr.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss'],
  animations: [ pageTransition ]
})
export class CreateTopicComponent implements OnInit {
  result = new Result('', 0);
  newTopic = new Topic('', '', '', [], []);
  options: string[] = [];
  option: '';
  error: string;

  constructor(
    private _data: DataService,
    private _router: Router,
    private _auth: AuthService,
    private _toastr: ToastrService
    ) { }

  ngOnInit() {
    console.log('INIT: ', this.result);
    console.log('INIT: ', this.newTopic);
    this.newTopic.username = this._auth.isValidated();
  }

  addOption(e): void {
    e.preventDefault();
    if (this.option) {
      const result = new Result(this.option, 0);
      this.newTopic.results.push(result);
      this.options.push(this.option);
      this.option = '';
      this.result = new Result('', 0);
    }
  }

  submitForm(): void {
    if (this.newTopic.topicQuestion && this.newTopic.topicTitle && this.newTopic.results.length > 1) {
      this._data.addNewTopic(this.newTopic).subscribe();
      // do we need to clean up?
      this.newTopic = new Topic('', '', '', [], []);
      this._toastr.success('New voting topic added');
      this._router.navigate(['/home']);
    } else {
      this.error = 'Please complete all fields and provide at least two options.';
    }

  }

  removeOption(e): void {
    e.preventDefault();
    this.newTopic.results.pop();
    this.options.pop();
  }

}
