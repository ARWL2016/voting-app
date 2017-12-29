/**
 *  This component renders a template-based form for logged in users to create a new voting topic.
 *
 *  @property newTopic - top level object that is sent to the server
 *  @property result - an object containing a vote option and the number of votes cast - initialized here to 0
 *  @property options - an array of strings; each string represents an vote answer
 */

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';

import { Topic } from '../models/topic';
import { Result } from '../models/result';
import {AuthService} from 'app/services/auth.service';
import { pageTransition } from '../animations';
import {ToastrService} from 'app/services/toastr.service';
import { HelperService } from 'app/services/helper.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss'],
  animations: [ pageTransition ]
})
export class CreateTopicComponent implements OnInit {
  result: Result;
  newTopic: Topic;
  options: string[] = [];
  option: string;
  error: string;

  constructor(
    private _data: DataService,
    private _router: Router,
    private _auth: AuthService,
    private _toastr: ToastrService,
    private _helper: HelperService
    ) { }

  ngOnInit() {
    this.newTopic = new Topic('','','', [], []);
    this.newTopic.username = this._auth.isValidated();
  }

  addOption(e): void {
    e.preventDefault();
    if (this.options && this.options.find(opt => opt === this.option)) {
      return;
    } else {
      const result = new Result(this.option, 0);
      this.newTopic.results.push(result);
      this.options.push(this.option);
      this.option = '';
      this.result = new Result('', 0);
    }
  }

  submitForm(): void {
    if (this.newTopic.topicQuestion && this.newTopic.topicTitle && this.newTopic.results.length > 1) {
      this._data.addNewTopic(this.newTopic)
        .then(topic => {
            this._toastr.success('New voting topic added');
            this._router.navigate(['/home']);
        })
        .catch(e => {
          this._helper.logError(e);
          this._toastr.error('Sorry. Topic could not be added');
          this._router.navigate(['/home']);
        })
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
