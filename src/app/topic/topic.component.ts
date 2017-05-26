import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
import { DataService } from "app/services/data.service";

@Component({
  selector: 'app-topic', 
  templateUrl: './topic.component.html'
})
export class TopicComponent implements OnInit {
  id: string; 
  topic: object; 
  totalVotes: number; 

  constructor(
    private _route: ActivatedRoute, 
    private _data: DataService
    ) {
      console.log('id', this._route.snapshot.params['id']); 
      this.id = this._route.snapshot.params['id']; 
    }

  ngOnInit(): void {
    this.topic = this._data.fetchTopic(this.id)[0]; 
    console.log('topic', this.topic);
    this.totalVotes = this._data.getTotalVotesById(this.id);  
    console.log(this.totalVotes); 
  }

}