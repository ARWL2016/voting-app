import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  newOption: string;
  newTopic = {
    topicTitle: '',
    topicQuestion: '',
    options: []
  };

  constructor(
    private _data: DataService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  addOption(e): void {
    e.preventDefault();
    this.newTopic.options.push(this.newOption);
    this.newOption = '';
  }

  removeOption(): void {
    this.newTopic.options.pop();
  }

  submitForm(): void {
    this._data.addNewTopic(this.newTopic);
    this.newTopic = {
      topicTitle: '',
      topicQuestion: '',
      options: []
    };
    this._router.navigate(['/home']);
  }



}
