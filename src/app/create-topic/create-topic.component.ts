import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';
=======
>>>>>>> b55c54070b06667646259546f7c1bff78a285950

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
<<<<<<< HEAD
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
=======
  newTopic = {
    topicTitle: "",
    topicQuestion: "",
    options: []
  }

  constructor() { }
>>>>>>> b55c54070b06667646259546f7c1bff78a285950

  ngOnInit() {
  }

  addOption(e): void {
    e.preventDefault();
<<<<<<< HEAD
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


=======
    this.newTopic.options.push("");
    console.log(e);
  }

  removeOption(e): void {
    e.preventDefault();
    this.newTopic.options.pop();
  }

  submitForm():void {
    console.log(this.newTopic);
  }

  keyup(e) {
    e.preventDefault();
    console.log(e);
  }
>>>>>>> b55c54070b06667646259546f7c1bff78a285950

}
