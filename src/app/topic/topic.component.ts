import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { DataService } from 'app/services/data.service';
=======
import { DataService } from "app/services/data.service";
>>>>>>> b55c54070b06667646259546f7c1bff78a285950

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  id: string;
  topic: object;
  totalVotes: number;
<<<<<<< HEAD
  hasVoted = false;
=======
  hasVoted: boolean = false;
>>>>>>> b55c54070b06667646259546f7c1bff78a285950

  constructor(
    private _route: ActivatedRoute,
    private _data: DataService
    ) {
      this.id = this._route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.topic = this._data.fetchTopic(this.id)[0];
    this.totalVotes = this._data.getTotalVotesById(this.id);
<<<<<<< HEAD

  }

  castVote(event: any) {
    if (!this.hasVoted) {
      this._data.castVote(this.id, event.target.value);
      this.hasVoted = true;
    }

  }

=======
  }

  castVote(event: any) {
    if (!this.hasVoted) {
      this._data.castVote(this.id, event.target.value);
      this.hasVoted = true;
    }

  }

>>>>>>> b55c54070b06667646259546f7c1bff78a285950
}
