import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  newTopic = {
    topicTitle: "",
    topicQuestion: "",
    options: []
  }

  constructor() { }

  ngOnInit() {
  }

  addOption(e): void {
    e.preventDefault();
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

}
