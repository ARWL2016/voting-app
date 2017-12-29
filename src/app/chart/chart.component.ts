import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Topic } from 'app/models/topic';
import { Result } from 'app/models/result';
import { pageTransition } from '../animations';
import { HelperService } from 'app/services/helper.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  animations: [ pageTransition ]
})
export class ChartComponent implements OnInit {
  @Input() _id;
  results: Result[];
  chartLabels: string[] = [];
  chartData: number[] = [];
  public chartType = 'doughnut';

  constructor (
    private _data: DataService,
    private _helper: HelperService
  ) {}

  ngOnInit(): void {
      this._data.fetchTopicById(this._id)
        .then(topic => {
          this.results = topic.results;
          this.results.forEach(result => {
            this.chartData.push(result.votes);
            this.chartLabels.push(result.option);
          });
        })
        .catch(e => this._helper.logError(e));

  }

}
