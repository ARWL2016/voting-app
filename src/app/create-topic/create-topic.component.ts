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
  newOption = new Result(); 
  newTopic = new Topic(); 
  
  constructor(
    private _data: DataService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  addOption(e): void {
    e.preventDefault();
    this.newTopic.results.push(this.newOption);
    this.newOption = new Result();
  }

  submitForm(): void {
    // this._data.addNewTopic(this.newTopic);
    this.newTopic = new Topic(); 
    this._router.navigate(['/home']);
  }

  removeOption(e): void {
    e.preventDefault();
    this.newTopic.results.pop();
  }

}
