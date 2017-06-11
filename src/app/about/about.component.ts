import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ pageTransition ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
